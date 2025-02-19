"use client";

import { motion } from "framer-motion";
import styles from "./Privacy.module.scss";

export const Privacy = () => {
  return (
    <motion.div 
      className={styles.privacy}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.privacy__container}>
        <h1 className={styles.privacy__title}>Privacy Policy</h1>
        <p className={styles.privacy__updated}>Last Updated: January 8th, 2025</p>

        <section className={styles.privacy__section}>
          <h2>1. Introduction</h2>
          <p>NEURA AI Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
        </section>

        <section className={styles.privacy__section}>
          <h2>2. Data Controller</h2>
          <p>NEURA AI Technologies acts as the data controller for personal data collected through our services. You can contact us regarding data protection matters at:</p>
          <ul>
            <li>Email: info@meetneura.ai</li>
            <li>Address: R. Pedro Nunes, Alto de São João, 3030-199 Coimbra, Portugal</li>
          </ul>
        </section>

        <section className={styles.privacy__section}>
          <h2>3. Information We Collect</h2>
          <h3>3.1 Personal Data</h3>
          <p>We may collect:</p>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Business information (company name, role)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (interaction with our services)</li>
            <li>Communication data (chat logs, support tickets)</li>
          </ul>

          <h3>3.2 Cookies and Tracking</h3>
          <p>We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.</p>
        </section>

        <section className={styles.privacy__section}>
          <h2>4. Legal Basis for Processing</h2>
          <p>We process your personal data under the following legal bases:</p>
          <ul>
            <li>Contract performance</li>
            <li>Legal obligations</li>
            <li>Legitimate interests</li>
            <li>Consent</li>
          </ul>
        </section>

        <section className={styles.privacy__section}>
          <h2>5. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve and personalize user experience</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal obligations</li>
            <li>Detect and prevent fraud</li>
          </ul>
        </section>

        <section className={styles.privacy__section}>
          <h2>6. Data Sharing and Transfers</h2>
          <p>We may share your data with:</p>
          <ul>
            <li>Service providers and business partners</li>
            <li>Legal authorities when required</li>
            <li>Third parties with your consent</li>
          </ul>
          <p>Data transfers outside the EU/EEA are protected by appropriate safeguards (Standard Contractual Clauses).</p>
        </section>

        <section className={styles.privacy__section}>
          <h2>7. Your Rights Under GDPR</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className={styles.privacy__section}>
          <h2>8. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section className={styles.privacy__section}>
          <h2>9. Data Retention</h2>
          <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.</p>
        </section>

        <section className={styles.privacy__section}>
          <h2>10. Children&apos;s Privacy</h2>
          <p>Our services are not intended for children under 16. We do not knowingly collect personal data from children under 16.</p>
        </section>

        <section className={styles.privacy__section}>
          <h2>11. Updates to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of any material changes through our website or via email.</p>
        </section>

        <section className={styles.privacy__section}>
          <h2>12. Contact Us</h2>
          <p>For any questions about this Privacy Policy or our data practices, please contact us at info@meetneura.ai</p>
          <p>You have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) if you believe we have violated your privacy rights.</p>
        </section>
      </div>
    </motion.div>
  );
};