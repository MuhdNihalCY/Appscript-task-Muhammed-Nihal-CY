"use client";

import styles from "./error.module.css";

export default function Error({ reset }) {
    return (
        <main className="container">
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Something went wrong</h1>
                <p className={styles.message}>
                    We couldn&apos;t load the products. Please try again.
                </p>
                <button className={styles.retryBtn} onClick={reset}>
                    Try again
                </button>
            </div>
        </main>
    );
}
