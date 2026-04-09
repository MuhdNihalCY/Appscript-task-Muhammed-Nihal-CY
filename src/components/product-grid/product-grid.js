"use client";

import { useState, useEffect, useMemo } from "react";
import ProductCard from "@/components/product-card/product-card";
import FilterSidebar from "@/components/filter-sidebar/filter-sidebar";
import styles from "./product-grid.module.css";
import Image from "next/image";

const arrowDown = "/assets/arrow-down-bl.svg";

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowFilter(false);
            } else {
                setShowFilter(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sorted = useMemo(() => {
        return [...products].sort((a, b) => {
            if (sortBy === "PRICE: HIGH TO LOW") return b.price - a.price;
            if (sortBy === "PRICE: LOW TO HIGH") return a.price - b.price;
            return 0;
        });
    }, [products, sortBy]);

    function handleSortSelect(opt) {
        setSortBy(opt);
        setShowSortMenu(false);
    }

    function handleSortKeyDown(e, opt) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSortSelect(opt);
        }
    }

    return (
        <section className={styles.wrapper}>
            {/* Toolbar */}
            <div className={styles.toolbar}>
                <div className={styles.toolbarLeft}>
                    <span className={styles.count}>{products.length} ITEMS</span>
                    {/* Desktop only */}
                    <button
                        className={styles.filterToggleDesktop}
                        onClick={() => setShowFilter(prev => !prev)}
                    >
                        {showFilter
                            ? <><span className={styles.filterSymbol}>{"<"}</span><span className={styles.filterText}>HIDE FILTER</span></>
                            : <><span className={styles.filterSymbol}>{">"}</span><span className={styles.filterText}>SHOW FILTER</span></>
                        }
                    </button>

                    {/* Mobile only */}
                    <button
                        className={styles.filterToggleMobile}
                        onClick={() => setShowMobileFilter(prev => !prev)}
                    >
                        FILTER
                    </button>
                </div>

                <div className={styles.toolbarRight}>
                    <div className={styles.sortWrapper}>
                        <button
                            className={styles.sortBtn}
                            onClick={() => setShowSortMenu(!showSortMenu)}
                            aria-label="Sort products"
                            aria-expanded={showSortMenu}
                            aria-haspopup="listbox"
                        >
                            {sortBy}  <span className={styles.toggle}> <Image src={arrowDown} alt="Arrow up" width={12} height={12} className={ showSortMenu ? styles.arrowUp : styles.arrowDown } /></span>

                        </button>
                        <ul
                            className={`${styles.sortMenu} ${showSortMenu ? styles.sortMenuVisible : ""}`}
                            role="listbox"
                            aria-label="Sort options"
                        >
                            {SORT_OPTIONS.map((opt) => (
                                <li
                                    key={opt}
                                    role="option"
                                    aria-selected={opt === sortBy}
                                    tabIndex={showSortMenu ? 0 : -1}
                                    className={opt === sortBy ? styles.active : ""}
                                    onClick={() => handleSortSelect(opt)}
                                    onKeyDown={(e) => handleSortKeyDown(e, opt)}
                                >
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className={styles.content}>
                {/* Desktop filter */}
                <div className={`${styles.desktopFilter} ${showFilter ? styles.desktopFilterOpen : ""}`}>
                    <FilterSidebar isMobile={false} />
                </div>

                {/* Mobile filter drawer */}
                <div
                    className={`${styles.mobileDrawer} ${showMobileFilter ? styles.mobileDrawerOpen : ""}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="filter-drawer-title"
                >
                    <div className={styles.drawerHeader}>
                        <span id="filter-drawer-title">FILTER</span>
                        <button
                            onClick={() => setShowMobileFilter(false)}
                            aria-label="Close filter drawer"
                        >
                            ✕
                        </button>
                    </div>
                    <FilterSidebar isMobile={true} />
                </div>

                <div className={`${styles.grid} ${!showFilter ? styles.gridExpanded : ""}`}>
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
