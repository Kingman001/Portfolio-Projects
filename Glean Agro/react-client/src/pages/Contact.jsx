import React from 'react'

export default function Contact() {
    return (
        <section className="contact container">
            <h2>Contact Us</h2>
            <p>You can keep using the existing PHP mail endpoint. The form below will POST to the legacy `send-mail.php` script so existing server behavior is retained.</p>
            <form method="post" action="/send-mail.php">
                <label>
                    Name
                    <input name="name" required />
                </label>
                <label>
                    Email
                    <input name="email" type="email" required />
                </label>
                <label>
                    Message
                    <textarea name="message" required />
                </label>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}
