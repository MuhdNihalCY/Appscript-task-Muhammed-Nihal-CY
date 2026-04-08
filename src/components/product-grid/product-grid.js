'use client';

import { useState } from 'react';
import ProductCard from '@/components/product-card/product-card';
import FilterSidebar from '@/components/filter-sidebar/filter-sidebar';
import styles from './product-grid.module.css';

const SORT_OPTIONS = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH'];

export default function ProductGrid({ products }) {
  const [showFilter, setShowFilter] = useState(true);
  const [sortBy, setSortBy] = useState('RECOMMENDED');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'PRICE: HIGH TO LOW') return b.price - a.price;
    if (sortBy === 'PRICE: LOW TO HIGH') return a.price - b.price;
    return 0;
  });

  return (
    <section className={styles.wrapper}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <span className={styles.count}>{products.length} ITEMS</span>

        <div className={styles.toolbarRight}>
          <button
            className={styles.filterToggle}
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? '< HIDE FILTER' : '> SHOW FILTER'}
          </button>

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
                    className={opt === sortBy ? styles.active : ''}
                    onClick={() => { setSortBy(opt); setShowSortMenu(false); }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {showFilter && <FilterSidebar />}
        <div className={styles.grid}>
          {sorted.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}