"use client";

import { useState } from "react";
import ProductCard from "@/components/product-card/product-card";
import FilterSidebar from "@/components/filter-sidebar/filter-sidebar";
import styles from "./product-grid.module.css";

const SORT_OPTIONS = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
];

export default function ProductGrid({ products }) {
    const [showFilter, setShowFilter] = useState(true);
    const [sortBy, setSortBy] = useState("RECOMMENDED");
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    const sorted = [...products].sort((a, b) => {
        if (sortBy === "PRICE: HIGH TO LOW") return b.price - a.price;
        if (sortBy === "PRICE: LOW TO HIGH") return a.price - b.price;
        return 0;
    });

    return (
        <section className={styles.wrapper}>
            {/* Toolbar */}
            <div className={styles.toolbar}>
                <div className={styles.toolbarLeft}>
                    <span className={styles.count}>{products.length} ITEMS</span>
                    <button
                        className={styles.filterToggle}
                        onClick={() => {
                            setShowFilter(!showFilter);
                            setShowMobileFilter(!showMobileFilter);
                        }}
                    >
                        {showFilter
                            ? <><span className={styles.filterSymbol}>{"< "}</span><span className={styles.filterText}>HIDE FILTER</span></>
                            : <><span className={styles.filterSymbol}>{"> "}</span><span className={styles.filterText}>SHOW FILTER</span></>
                        }
                    </button>
                </div>

                <div className={styles.toolbarRight}>

                    <div className={styles.sortWrapper}>
                        <button
                            className={styles.sortBtn}
                            onClick={() => setShowSortMenu(!showSortMenu)}
                        >
                            {sortBy} ▾
                        </button>
                        {showSortMenu && (
                            <ul className={styles.sortMenu}>
                                {SORT_OPTIONS.map((opt) => (
                                    <li
                                        key={opt}
                                        className={
                                            opt === sortBy ? styles.active : ""
                                        }
                                        onClick={() => {
                                            setSortBy(opt);
                                            setShowSortMenu(false);
                                        }}
                                    >
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.mobileFilterBtn}>
                <button onClick={() => setShowMobileFilter(!showMobileFilter)}>
                    ☰ FILTER
                </button>
            </div>

            {/* Content */}
            <div className={styles.content}>
                {/* Desktop filter */}
                {showFilter && (
                    <div className={styles.desktopFilter}>
                        <FilterSidebar />
                    </div>
                )}

                {/* Mobile filter drawer */}
                {showMobileFilter && (
                    <div className={styles.mobileDrawer}>
                        <div className={styles.drawerHeader}>
                            <span>FILTER</span>
                            <button onClick={() => setShowMobileFilter(false)}>
                                ✕
                            </button>
                        </div>
                        <FilterSidebar />
                    </div>
                )}

                <div className={styles.grid}>
                    {sorted.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            priority={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
