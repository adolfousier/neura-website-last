"use client";

import { motion } from "framer-motion";
import styles from "./Terms.module.scss";

export const Terms = () => {
  return (
    <motion.div 
      className={styles.terms}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.terms__container}>
        <h1 className={styles.terms__title}>Terms of Service</h1>
        <p className={styles.terms__updated}>Last Updated: January 8th, 2025</p>

        <section className={styles.terms__section}>
          <h2>1. Introduction</h2>
          <p>Welcome to NEURA AI Technologies (&quot;NEURA AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of NEURA AI&apos;s website, products, and services (collectively, the &quot;Services&quot;).</p>
          <p>By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our Services.</p>
        </section>

        <section className={styles.terms__section}>
          <h2>2. Services Description</h2>
          <p>NEURA AI provides AI-powered support, sales, and task management solutions, including but not limited to:</p>
          <ul>
            <li>AI-powered customer support agents</li>
            <li>AI-powered Sales agents</li>
            <li>AI-powered Task management agents</li>
            <li>AI-powered Multi-platform automation solutions</li>
          </ul>
        </section>

        <section className={styles.terms__section}>
          <h2>3. User Obligations</h2>
          <p>When using our Services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not interfere with or disrupt the Services</li>
            <li>Not attempt to gain unauthorized access to the Services</li>
          </ul>
        </section>

        <section className={styles.terms__section}>
          <h2>4. Data Protection and GDPR Compliance</h2>
          <p>We comply with the General Data Protection Regulation (GDPR) and Portuguese data protection laws. Our data processing activities are conducted in accordance with:</p>
          <ul>
            <li>Regulation (EU) 2016/679 (GDPR)</li>
            <li>Lei n.º 58/2019 (Portuguese Data Protection Law)</li>
          </ul>
          <p>For detailed information about our data practices, please refer to our Privacy Policy.</p>
        </section>

        <section className={styles.terms__section}>
          <h2>5. Intellectual Property</h2>
          <p>All content, features, and functionality of the Services, including but not limited to text, graphics, logos, and software, are owned by NEURA AI and are protected by Portuguese and international intellectual property laws.</p>
        </section>

        <section className={styles.terms__section}>
          <h2>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, NEURA AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Services.</p>
        </section>

        <section className={styles.terms__section}>
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Services.</p>
        </section>

        <section className={styles.terms__section}>
          <h2>8. Contact Information</h2>
          <p>For any questions about these Terms, please contact us at:</p>
          <p>Email: info@meetneura.ai</p>
        </section>
      </div>
    </motion.div>
  );
};