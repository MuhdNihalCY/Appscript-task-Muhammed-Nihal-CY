"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

const logo = "/assets/logo.png";
const profile = "/assets/profile.png";
const search = "/assets/search.png";
const cart = "/assets/cart.png";
const heart = "/assets/heart.png";
const squares = "/assets/squares.png";
const hamburger = "/assets/hamburger.svg";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <a href="/" className={styles.logo}>
                            <Image src={logo} alt="Logo" width={30} height={30} />
                        </a>
                    </div>
                    <a href="/" className={`${styles.logo} ${styles.logoText}`}>
                        LOGO
                    </a>
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
                    </div>
                </div>

                {/* Desktop nav links */}
                <ul
                    className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
                >
                    <li>
                        <a href="#">SHOP</a>
                    </li>
                    <li>
                        <a href="#">SKILLS</a>
                    </li>
                    <li>
                        <a href="#">STORIES</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">CONTACT US</a>
                    </li>
                </ul>
            </nav>

            {/* Breadcrumb */}
            <div className={`${styles.breadcrumb} container`}>
                <span className={styles.breadcrumbItemMuted}>HOME</span>
                <span className={styles.breadcrumbItemMuted}> | </span>
                <span className={styles.breadcrumbItem}>SHOP</span>
            </div>
        </header>
    );
}
