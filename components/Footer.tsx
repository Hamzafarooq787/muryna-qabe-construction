"use client";

import Link from "next/link";
import { Mail, MapPin, Briefcase, Home, Info, Phone, Wrench } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-elementor">
      <div className="e-con-inner">
        <div className="footer-columns">
          
        {/* Column 1: Logo + Description */}
<div className="footer-col">
  <div className="footer-logo">
    <Link href="/">
      <Image
        src="/logo2.png"
        alt="MURYNA QABE LTD Logo"
        width={200}
        height={60}
        className="h-auto w-auto max-h-16 object-contain"
        priority
      />
    </Link>
  </div>
  <div className="footer-description">
    <p>
      At <strong>MURYNA QABE LTD</strong>, we are dedicated to providing
      high‑quality construction services, building materials, and expert
      solutions that empower contractors, builders, and homeowners to
      complete their projects with confidence.
    </p>
  </div>
</div>

          {/* Column 2: Useful Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Useful Links</h3>
            <ul className="footer-list">
              <li><Link href="/"><Home size={14} /> Home</Link></li>
              <li><Link href="/about"><Info size={14} /> About</Link></li>
              <li><Link href="/services"><Wrench size={14} /> Services</Link></li>
              <li><Link href="/contact"><Mail size={14} /> Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-list">
              <li><Link href="/services"><Briefcase size={14} /> Building Materials</Link></li>
              <li><Link href="/services"><Wrench size={14} /> Construction Tools</Link></li>
              <li><Link href="/services"><Briefcase size={14} /> Project Management</Link></li>
              <li><Link href="/services"><Briefcase size={14} /> Civil Engineering</Link></li>
              <li><Link href="/services"><Wrench size={14} /> Renovation & Remodeling</Link></li>
            </ul>
          </div>

          {/* Column 4: More Info (Contact & Address) */}
          <div className="footer-col">
            <h3 className="footer-heading">More Info</h3>
            <div className="footer-contact">
              <p>
                <Mail className="contact-icon" />
                <span>
                  <strong>Email:</strong><br />
                  <a href="mailto:sales@murynaqabe.com">sales@murynaqabe.com</a>
                </span>
              </p>
              <p>
                <Mail className="contact-icon" />
                <span>
                  <strong>Additional Email:</strong><br />
                  <a href="mailto:nicolae.turcitu@murynaqabe.com">nicolae.turcitu@murynaqabe.com</a>
                </span>
              </p>
              <p>
                <MapPin className="contact-icon" />
                <span>
                  <strong>Address:</strong><br />
                  66 MACHIN STREET<br />
                  STOKE-ON-TRENT<br />
                  ST6 6BT
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} MURYNA QABE LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}