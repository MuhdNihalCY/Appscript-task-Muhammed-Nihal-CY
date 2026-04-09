"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const usFlag = "/assets/United States of America (US).png";
const paymentCards = "/assets/payment-cards.png";
const instaIcon = "/assets/Insta.png";
const linkedinIcon = "/assets/linkedin.png";

const METTA_LINKS = [
    "About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs",
];

const QUICK_LINKS = [
    "Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing",
    "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions",
];

function Accordion({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.section}>
            <button
                className={styles.sectionHeader}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span>{title}</span>
                <span className={styles.toggle}>{open ? "∧" : "∨"}</span>
            </button>
            <div className={`${styles.accordionBody} ${open ? styles.open : ""}`}>
                {children}
            </div>
        </div>
    );
}

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        setEmail("");
    };

    return (
        <footer className={styles.footer}>
            <div className="container">

                {/* Top: Newsletter + Contact */}
                <div className={styles.top}>
                    <div className={styles.newsletter}>
                        <h2 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h2>
                        <p className={styles.newsletterText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
                        </p>
                        <form className={styles.form} onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your e-mail..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.input}
                                aria-label="Email address"
                                required
                            />
                            <button type="submit" className={styles.subscribeBtn}>
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>

                    <div className={styles.contact}>
                        <h2 className={styles.sectionTitle}>CALL US</h2>
                        <div className={styles.contactRow}>
                            <span className={styles.contactDetail}>+44 221 133 5360</span>
                            <span className={styles.contactBullet}>•</span>
                            <span className={styles.contactDetail}>customercare@mettamuse.com</span>
                        </div>

                        <div className={styles.currency}>
                            <h3 className={styles.currencyTitle}>CURRENCY</h3>
                            <div className={styles.currencyRow}>
                                <Image
                                    src={usFlag}
                                    alt="United States Dollar"
                                    width={20}
                                    height={20}
                                    className={styles.flagIcon}
                                />
                                <span className={styles.currencyLabel}>· USD</span>
                            </div>
                            <p className={styles.currencyNote}>
                                Transactions will be completed in Euros and a currency reference is available on hover.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Bottom: 3 columns on desktop, accordions on mobile */}
                <div className={styles.bottom}>
                    <Accordion title="mettā muse">
                        <ul className={styles.linkList}>
                            {METTA_LINKS.map((link) => (
                                <li key={`metta-${link}`}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </Accordion>

                    <Accordion title="QUICK LINKS">
                        <ul className={styles.linkList}>
                            {QUICK_LINKS.map((link) => (
                                <li key={`quick-${link}`}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </Accordion>

                    <Accordion title="FOLLOW US">
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Instagram">
                                <Image src={instaIcon} alt="Instagram" width={32} height={32} />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <Image src={linkedinIcon} alt="LinkedIn" width={32} height={32} />
                            </a>
                        </div>
                    </Accordion>
                </div>

                {/* Accepts — full width, below grid on both mobile and desktop */}
                <div className={styles.accepts}>
                    <p className={styles.acceptsTitle}>mettā muse ACCEPTS</p>
                    <Image
                        src={paymentCards}
                        alt="Accepted payment methods: Google Pay, Mastercard, PayPal, Amex, Apple Pay, Shop Pay"
                        width={240}
                        height={32}
                        className={styles.paymentImage}
                    />
                </div>

                <div className={styles.copyright}>
                    <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}
