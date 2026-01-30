import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LegacyPage from './LegacyPage'

export default function GenericLegacy() {
    const loc = useLocation()
    const [phpPath, setPhpPath] = useState(null)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        async function probe() {
            const pathname = loc.pathname.replace(/^\//, '')
            const candidates = []
            if (pathname === '') candidates.push('index.php')
            else {
                candidates.push(`${pathname}.php`)
                candidates.push(`${pathname}/index.php`)
                candidates.push(pathname) // in case already a php path provided
            }

            for (const c of candidates) {
                try {
                    const resp = await fetch(`/original/${c}`)
                    if (resp.ok) { setPhpPath(c); return }
                } catch (e) {/*ignore*/ }
            }
            setNotFound(true)
        }
        probe()
    }, [loc.pathname])

    if (notFound) return <section className="container"><h2>Page not found</h2><p>No copied PHP page matches <code>{loc.pathname}</code></p></section>
    if (!phpPath) return <section className="container"><p>Looking up page…</p></section>
    return <LegacyPage phpPath={phpPath} />
}
