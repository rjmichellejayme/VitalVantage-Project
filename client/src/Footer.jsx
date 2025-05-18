import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./scss/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h2>Clinics</h2>
            <ul>
              <li><Link to="#">OB-Gyne</Link></li>
              <li><Link to="#">Pediatrics</Link></li>
              <li><Link to="#">Cardiology</Link></li>
              <li><Link to="#">Dentistry</Link></li>
              <li><Link to="#">Mental</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Laboratories</h2>
            <ul>
              <li><Link to="#">Lab Services</Link></li>
              <li><Link to="#">Imaging</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Company</h2>
            <ul>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Management Team</Link></li>
              <li><Link to="#">Board of Directors</Link></li>
              <li><Link to="#">Investor Relations</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Customers</h2>
            <ul>
              <li><Link to="#">Customer Support</Link></li>
              <li><Link to="#">Join a Local User Group</Link></li>
            </ul>
          </div>

          {/* Partners Section */}
          <div className={styles.section}>
            <h2>Partners</h2>
            <ul>
              <li><Link to="#">All Partner Programs</Link></li>
              <li><Link to="#">Solutions Partner Program</Link></li>
              <li><Link to="#">App Partner Program</Link></li>
              <li><Link to="#">Vital Vantage for Startups</Link></li>
              <li><Link to="#">Affiliate Program</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className={styles.social}>
          <a href="#"><Facebook size={24} aria-label="Facebook" /></a>
          <a href="#"><Instagram size={24} aria-label="Instagram" /></a>
          <a href="#"><Youtube size={24} aria-label="YouTube" /></a>
          <a href="#"><Twitter size={24} aria-label="Twitter" /></a>
          <a href="#"><Linkedin size={24} aria-label="LinkedIn" /></a>
        </div>

        {/* Legal Section */}
        <div className={styles.legal}>
          <p>Copyright © {new Date().getFullYear()} Vital Vantage</p>
          <div className={styles.legalLinks}>
            <Link to="#">Legal Stuff</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Security</Link>
            <Link to="#">Website Accessibility</Link>
            <Link to="#">Manage Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
