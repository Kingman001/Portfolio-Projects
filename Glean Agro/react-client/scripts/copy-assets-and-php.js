const fs = require('fs')
const path = require('path')

// Script copies the project's assets/ folder and all .php files (and their folder structure)
// from the parent project folder into react-client/public so the React app can serve them.
// If RENDER_PHP_URL environment variable is set (e.g. http://localhost:8000), the script will
// attempt to fetch rendered HTML for each PHP path and save the rendered result into public/original/

async function ensureDir(dir) {
    await fs.promises.mkdir(dir, { recursive: true })
}

async function copyFile(src, dest) {
    await ensureDir(path.dirname(dest))
    return fs.promises.copyFile(src, dest)
}

async function copyDir(src, dest) {
    await ensureDir(dest)
    const entries = await fs.promises.readdir(src, { withFileTypes: true })
    for (const e of entries) {
        const srcPath = path.join(src, e.name)
        const destPath = path.join(dest, e.name)
        if (e.isDirectory()) await copyDir(srcPath, destPath)
        else if (e.isFile()) await copyFile(srcPath, destPath)
    }
}

const RENDER_URL = process.env.RENDER_PHP_URL || process.env.PHP_RENDER_URL || null

async function fetchRendered(url) {
    const fetchFn = globalThis.fetch || (typeof fetch !== 'undefined' ? fetch : null)
    if (!fetchFn) return null
    try {
        const res = await fetchFn(url)
        if (!res.ok) return null
        return await res.text()
    } catch (e) {
        return null
    }
}

async function main() {
    try {
        const scriptDir = __dirname
        // projectRoot is the folder that contains this react-client folder
        const projectRoot = path.resolve(scriptDir, '..')
        // parent of react-client is the original Glean Agro root (one level up)
        const gleanRoot = path.resolve(projectRoot, '..')

        const publicDir = path.join(projectRoot, 'public')
        const publicAssets = path.join(publicDir, 'assets')
        const publicOriginal = path.join(publicDir, 'original')

        console.log('Glean root:', gleanRoot)
        if (RENDER_URL) console.log('Will attempt to fetch rendered PHP from', RENDER_URL)

        // copy assets/ -> public/assets
        const assetsSrc = path.join(gleanRoot, 'assets')
        if (fs.existsSync(assetsSrc)) {
            console.log('Copying assets to', publicAssets)
            await copyDir(assetsSrc, publicAssets)
        } else {
            console.warn('No assets folder found at', assetsSrc)
        }

        // copy all .php files and related folders (includes, admin.gleanagrong.com, etc.)
        async function walkAndCopy(dir) {
            const entries = await fs.promises.readdir(dir, { withFileTypes: true })
            for (const e of entries) {
                const srcPath = path.join(dir, e.name)
                const rel = path.relative(gleanRoot, srcPath)
                const destPath = path.join(publicOriginal, rel)
                if (e.isDirectory()) {
                    // skip node_modules and react-client in case
                    if (e.name === 'node_modules' || e.name === 'react-client') continue
                    await walkAndCopy(srcPath)
                } else if (e.isFile()) {
                    const ext = path.extname(e.name).toLowerCase()
                    if (ext === '.php' || e.name === 'robots.txt' || e.name === 'sitemap.xml') {
                        await ensureDir(path.dirname(destPath))
                        // If RENDER_URL is set and file is php, attempt to fetch rendered html
                        if (RENDER_URL && ext === '.php') {
                            const relUrlPath = rel.split(path.sep).join('/')
                            const url = `${RENDER_URL.replace(/\/$/, '')}/${relUrlPath}`
                            console.log('Attempting to fetch rendered HTML for', relUrlPath)
                            const html = await fetchRendered(url)
                            if (html) {
                                await fs.promises.writeFile(destPath, html, 'utf8')
                                continue
                            } else {
                                console.warn('Failed to fetch rendered HTML for', relUrlPath, '- falling back to copying source')
                            }
                        }
                        await copyFile(srcPath, destPath)
                    }
                }
            }
        }

        console.log('Copying .php files to', publicOriginal)
        await walkAndCopy(gleanRoot)

        console.log('Copy finished.')
    } catch (err) {
        console.error('Error copying assets/php:', err)
        process.exit(1)
    }
}

if (require.main === module) main()
