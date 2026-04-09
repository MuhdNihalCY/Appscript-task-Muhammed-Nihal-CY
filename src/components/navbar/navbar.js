"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const logo = "/assets/logo.png";
const profile = "/assets/profile.png";
const search = "/assets/search.png";
const cart = "/assets/cart.png";
const heart = "/assets/heart.png";
const squares = "/assets/squares.png";
const hamburger = "/assets/hamburger.svg";


const LANGUAGES = ["ENG", "DEU", "FRA", "ESP"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState("ENG");
    const [langOpen, setLangOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.announcement}>
                <span className={styles.announcementLabel} ><Image src={squares} width={18} height={18} alt="Squares" />Lorem ipsum dolor</span>
                <span className={styles.announcementLabel} ><Image src={squares} width={18} height={18} alt="Squares" />Lorem ipsum dolor</span>
                <span className={styles.announcementLabel} ><Image src={squares} width={18} height={18} alt="Squares" />Lorem ipsum dolor</span>
            </div>
            <nav className={`${styles.nav}  container`}>
                {/* Mobile: hamburger + logo + icons */}
                <div className={styles.topBar}>
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Image src={hamburger} width={24} height={24} alt="Hamburger" />
                    </button>
                    <div className={styles.logoContainer}>
                        <Link href="/" className={styles.logo}>
                            <Image src={logo} alt="Metta Muse" width={30} height={30} />
                        </Link>
                    </div>
                    <Link href="/" className={`${styles.logo} ${styles.logoText}`}>
                        LOGO
                    </Link>
                    <div className={styles.icons}>
                        <button aria-label="Search">
                            <Image src={search} width={20} height={20} alt="Search" />
                        </button>
                        <button aria-label="Wishlist">
                            <Image src={heart} width={20} height={20} alt="Wishlist" />
                        </button>
                        <button aria-label="Cart">
                            <Image src={cart} width={20} height={20} alt="Cart" />
                        </button>
                        <button aria-label="Account">
                            <Image src={profile} width={20} height={20} alt="Account" />
                        </button>
                        <div className={styles.langSwitcher}>
                            <button
                                className={styles.langBtn}
                                onClick={() => setLangOpen(!langOpen)}
                                aria-label="Select language"
                                aria-expanded={langOpen}
                            >
                                {lang} <span className={styles.langChevron}>∨</span>
                            </button>
                            {langOpen && (
                                <ul className={styles.langMenu} role="listbox" aria-label="Language options">
                                    {LANGUAGES.map((l) => (
                                        <li
                                            key={l}
                                            role="option"
                                            aria-selected={l === lang}
                                            className={l === lang ? styles.langActive : ""}
                                            onClick={() => { setLang(l); setLangOpen(false); }}
                                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { setLang(l); setLangOpen(false); } }}
                                            tabIndex={0}
                                        >
                                            {l}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* Desktop nav links */}
                <ul
                    className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
                >
                    <li>
                        <Link href="#">SHOP</Link>
                    </li>
                    <li>
                        <Link href="#">SKILLS</Link>
                    </li>
                    <li>
                        <Link href="#">STORIES</Link>
                    </li>
                    <li>
                        <Link href="#">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="#">CONTACT US</Link>
                    </li>
                </ul>
            </nav>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className={`${styles.breadcrumb} container`}>
                <ol className={styles.breadcrumbList}>
                    <li><Link href="/" className={styles.breadcrumbItemMuted}>HOME</Link></li>
                    <li aria-hidden="true" className={styles.breadcrumbItemMuted}> | </li>
                    <li><span className={styles.breadcrumbItem} aria-current="page">SHOP</span></li>
                </ol>
            </nav>
        </header>
    );
}
