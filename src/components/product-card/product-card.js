"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./product-card.module.css";

const heart = "/assets/heart.png";
const heartFilled = "/assets/heart-filled.png";

export default function ProductCard({ product, priority = false }) {
    const [wishlisted, setWishlisted] = useState(false);

    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    priority={priority}
                />
            </div>

            <div className={styles.info}>
                <div className={styles.titleRow}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <button
                        className={styles.wishlistInline}
                        onClick={() => setWishlisted(!wishlisted)}
                        aria-label="Wishlist"
                    >
                        <Image
                            src={wishlisted ? heartFilled : heart}
                            alt={
                                wishlisted
                                    ? "Remove from wishlist"
                                    : "Add to wishlist"
                            }
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
                <p className={styles.pricing}>
                    <Link href="/login">Sign in</Link> or{" "}
                    <Link href="/register">Create an account</Link> to see pricing
                </p>
            </div>
        </article>
    );
}
