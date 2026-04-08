import styles from "./loading.module.css";

export default function Loading() {
    return (
        <main className="container">
            <div className={styles.header}>
                <div className={styles.skeletonTitle} />
                <div className={styles.skeletonText} />
            </div>
            <div className={styles.grid}>
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.skeletonImage} />
                        <div className={styles.skeletonLine} />
                        <div className={styles.skeletonLineShort} />
                    </div>
                ))}
            </div>
        </main>
    );
}
