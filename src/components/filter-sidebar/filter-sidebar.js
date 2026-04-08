'use client';

import { useState } from 'react';
import styles from './filter-sidebar.module.css';

const FILTERS = [
  { label: 'CUSTOMIZABLE', options: [] },
  { label: 'IDEAL FOR', options: ['All', 'Men', 'Women', 'Kids'] },
  { label: 'OCCASION', options: ['All', 'Casual', 'Formal', 'Work'] },
  { label: 'WORK', options: ['All', 'Office', 'Remote'] },
  { label: 'FABRIC', options: ['All', 'Cotton', 'Leather', 'Recycled'] },
  { label: 'SEGMENT', options: ['All', 'Premium', 'Budget'] },
  { label: 'SUITABLE FOR', options: ['All', 'Travel', 'Daily Use'] },
  { label: 'RAW MATERIALS', options: ['All', 'Organic', 'Synthetic'] },
  { label: 'PATTERN', options: ['All', 'Solid', 'Striped', 'Printed'] },
];

function FilterGroup({ label, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('All');

  if (options.length === 0) {
    return (
      <div className={styles.group}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" />
          <span>{label}</span>
        </label>
      </div>
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
        <span>{open ? '∧' : '∨'}</span>
      </button>
      {open && (
        <ul className={styles.options}>
          {options.map((opt) => (
            <li
              key={opt}
              className={opt === selected ? styles.selected : ''}
              onClick={() => setSelected(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      {FILTERS.map((f) => (
        <FilterGroup key={f.label} label={f.label} options={f.options} />
      ))}
    </aside>
  );
}