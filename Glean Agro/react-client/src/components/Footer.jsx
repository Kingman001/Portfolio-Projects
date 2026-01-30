import React from 'react'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Glean Agro. All rights reserved.</p>
            </div>
        </footer>
    )
}
