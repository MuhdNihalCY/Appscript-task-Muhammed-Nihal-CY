'use client';

import { useState } from 'react';
import styles from './footer.module.css';

const FOOTER_LINKS = {
  'mettā muse': ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'],
  'QUICK LINKS': ['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions'],
  'FOLLOW US': ['Instagram', 'LinkedIn'],
};

const PAYMENT_ICONS = ['G Pay', 'Mastercard', 'PayPal', 'Amex', 'Apple Pay', 'OPay'];

function FooterSection({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.section}>
      <button
        className={styles.sectionHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={styles.toggle}>{open ? '∧' : '∨'}</span>
      </button>
      <ul className={`${styles.linkList} ${open ? styles.open : ''}`}>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
          <p className={styles.newsletterText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <form className={styles.form} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              aria-label="Email address"
              required
            />
            <button type="submit" className={styles.subscribeBtn}>
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h2 className={styles.contactTitle}>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <div className={styles.currency}>
            <h3>CURRENCY</h3>
            <p>🇺🇸 · USD</p>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Bottom links */}
      <div className={styles.bottom}>
        <div className={styles.brand}>
          <span className={styles.brandName}>mettā muse</span>
        </div>

        <div className={styles.sections}>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <FooterSection key={title} title={title} links={links} />
          ))}
        </div>
      </div>

      {/* Payments */}
      <div className={styles.payments}>
        <p>mettā muse ACCEPTS</p>
        <div className={styles.paymentIcons}>
          {PAYMENT_ICONS.map((icon) => (
            <span key={icon} className={styles.paymentIcon}>{icon}</span>
          ))}
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}