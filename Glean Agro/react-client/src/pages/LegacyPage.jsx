import React, { useEffect, useState } from 'react'

export default function LegacyPage({ phpPath }) {
    const [html, setHtml] = useState('<p>Loading…</p>')

    useEffect(() => {
        let mounted = true
        async function load() {
            try {
                // First try the API proxy if available
                let resp = await fetch(`/api/${phpPath}`)
                if (!resp.ok) {
                    // fallback to static copied originals
                    resp = await fetch(`/original/${phpPath}`)
                }
                if (!resp.ok) {
                    setHtml(`<p>Failed to load ${phpPath}: ${resp.status}</p>`)
                    return
                }
                const text = await resp.text()
                if (mounted) setHtml(text)
            } catch (e) {
                try {
                    const resp = await fetch(`/original/${phpPath}`)
                    const text = resp.ok ? await resp.text() : `<p>Error loading ${phpPath}</p>`
                    if (mounted) setHtml(text)
                } catch (err) {
                    if (mounted) setHtml(`<p>Error loading ${phpPath}</p>`)
                }
            }
        }
        load()
        return () => { mounted = false }
    }, [phpPath])

    return (
        <section className="legacy container" dangerouslySetInnerHTML={{ __html: html }} />
    )
}
