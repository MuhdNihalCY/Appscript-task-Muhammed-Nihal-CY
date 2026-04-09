"use client";

import { useState } from "react";
import styles from "./filter-sidebar.module.css";
import Image from "next/image";

const arrowDown = "/assets/arrow-down-bl.svg";

const FILTERS = [
    { label: "CUSTOMIZABLE", options: [] },
    { label: "IDEAL FOR", options: ["Men", "Women", "Kids"] },
    { label: "OCCASION", options: ["Casual", "Formal", "Work"] },
    { label: "WORK", options: ["Office", "Remote"] },
    { label: "FABRIC", options: ["Cotton", "Leather", "Recycled"] },
    { label: "SEGMENT", options: ["Premium", "Budget"] },
    { label: "SUITABLE FOR", options: ["Travel", "Daily Use"] },
    { label: "RAW MATERIALS", options: ["Organic", "Synthetic"] },
    { label: "PATTERN", options: ["Solid", "Striped", "Printed"] },
];

function FilterGroup({ label, options }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([...options]);

    if (options.length === 0) {
        return (
            <div className={styles.group}>
                <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>{label}</span>
                </label>
            </div>
        );
    }

    const allSelected = selected.length === options.length;

    function toggleAll() {
        setSelected(allSelected ? [] : [...options]);
    }

    function toggleOption(opt) {
        setSelected((prev) =>
            prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
        );
    }

    return (
        <div className={styles.group}>
            <button
                className={styles.groupHeader}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span>{label}</span>
                <span className={styles.chevron}><span className={styles.toggle}> <Image src={arrowDown} alt="Arrow up" width={12} height={12} className={ open ? styles.arrowUp : styles.arrowDown } /></span></span>
            </button>
            {!open && selected.length > 0 && (
                <p className={styles.collapsedSummary}>
                    {allSelected ? "All" : selected.join(", ")}
                </p>
            )}
            <div className={`${styles.optionsWrapper} ${open ? styles.optionsOpen : ""}`}>
                <ul className={styles.options}>
                    <li>
                        <button
                            className={`${styles.allBtn} ${allSelected ? styles.optionSelected : styles.optionMuted}`}
                            onClick={toggleAll}
                        >
                            All
                        </button>
                    </li>

                    {selected.length > 0 && (
                        <li>
                            <button
                                className={styles.unselectAll}
                                onClick={() => setSelected([])}
                            >
                                Unselect all
                            </button>
                        </li>
                    )}

                    {options.map((opt) => (
                        <li key={opt}>
                            <label className={styles.optionLabel}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={selected.includes(opt)}
                                    onChange={() => toggleOption(opt)}
                                />
                                <span className={selected.includes(opt) ? styles.optionSelected : styles.optionMuted}>
                                    {opt}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function FilterSidebar({ isMobile = false }) {
    return (
        <aside
            className={`${styles.sidebar} ${isMobile ? styles.sidebarMobile : styles.sidebarDesktop}`}
            aria-label="Product filters"
        >
            {FILTERS.map((f) => (
                <FilterGroup
                    key={f.label}
                    label={f.label}
                    options={f.options}
                />
            ))}
        </aside>
    );
}
