"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const usFlag = "/assets/United States of America (US).png";
const paymentCards = "/assets/payment-cards.png";
const instaIcon = "/assets/Insta.png";
const linkedinIcon = "/assets/linkedin.png";
const star = "/assets/star.svg";
const arrowDown = "/assets/arrow-down.svg";

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
                <span className={styles.toggle}> <Image src={arrowDown} alt="Arrow up" width={12} height={12} className={ open ? styles.arrowUp : styles.arrowDown } /></span>
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
                        <p className={styles.newsletterText}>Sign up for updates from mettā muse.</p>
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
                            <Image
                                src={star}
                                alt="star icon"
                                width={8}
                                height={8}
                                className={`${styles.starIcon} ${styles.starIconMobile}`}
                            />
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
                                <Image
                                    src={star}
                                    alt="star icon"
                                    width={8}
                                    height={8}
                                    className={styles.starIcon}
                                />
                                <span className={styles.currencyLabel}> USD</span>
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
                                <li key={`metta-${link}`}><Link href="#">{link}</Link></li>
                            ))}
                        </ul>
                    </Accordion>

                    <Accordion title="QUICK LINKS">
                        <ul className={styles.linkList}>
                            {QUICK_LINKS.map((link) => (
                                <li key={`quick-${link}`}><Link href="#">{link}</Link></li>
                            ))}
                        </ul>
                    </Accordion>

                    <Accordion title="FOLLOW US">
                        <div className={styles.socialIcons}>
                            <Link href="#" aria-label="Instagram">
                                <Image src={instaIcon} alt="Instagram" width={32} height={32} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <Image src={linkedinIcon} alt="LinkedIn" width={32} height={32} />
                            </Link>
                        </div>
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
                    </Accordion>

                </div>

                <div className={styles.copyright}>
                    <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}
