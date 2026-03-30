"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* TOP BAR */}
      <div style={{ backgroundColor: "#1a2a3a", color: "white", fontSize: "14px", padding: "10px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <i className="fas fa-hard-hat"></i>
            Ready to start your project? <span style={{ fontWeight: "bold", color: "#ffd700" }}>Contact MURYNA QABE LTD Today!</span>
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ color: "white" }}><i className="fab fa-facebook-f"></i></a>
            <a href="#" style={{ color: "white" }}><i className="fab fa-twitter"></i></a>
            <a href="#" style={{ color: "white" }}><i className="fab fa-linkedin-in"></i></a>
            <a href="#" style={{ color: "white" }}><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "#111827", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0" }}>
            {/* LOGO - fixed for fill */}
            <Link href="/" style={{ flexShrink: 0 }}>
              <div style={{ position: "relative", width: "120px", height: "40px" }} className="md:w-[140px] md:h-[45px]">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <ul style={{ display: "none", gap: "32px", margin: 0, padding: 0, listStyle: "none" }} className="md:flex">
              {[
                { name: "HOME", path: "/" },
                { name: "SERVICES", path: "/services" },
                { name: "ABOUT", path: "/about" },
                { name: "CONTACT", path: "/contact" },
              ].map((item) => (
                <li key={item.path} style={{ position: "relative" }}>
                  <Link
                    href={item.path}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: pathname === item.path ? "#ffd700" : "white",
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== item.path) e.currentTarget.style.color = "#ffd700";
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== item.path) e.currentTarget.style.color = "white";
                    }}
                  >
                    {item.name}
                  </Link>
                  {pathname === item.path && (
                    <span style={{ position: "absolute", left: 0, bottom: "-4px", width: "100%", height: "2px", backgroundColor: "#ffd700" }}></span>
                  )}
                </li>
              ))}
            </ul>

            {/* RIGHT BUTTON */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a
                href="mailto:sales@murynaqabe.co.uk"
                style={{ display: "none", backgroundColor: "#ffd700", color: "black", fontWeight: "bold", padding: "8px 20px", borderRadius: "9999px", fontSize: "14px", textDecoration: "none" }}
                className="md:inline-block"
              >
                GET A QUOTE
              </a>
              <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div style={{ backgroundColor: "#111827", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px", borderRadius: "8px" }}>
              <Link href="/" onClick={() => setOpen(false)} style={{ color: "white", padding: "8px 0", borderBottom: "1px solid #374151", textDecoration: "none" }}>HOME</Link>
              <Link href="/services" onClick={() => setOpen(false)} style={{ color: "white", padding: "8px 0", borderBottom: "1px solid #374151", textDecoration: "none" }}>SERVICES</Link>
              <Link href="/about" onClick={() => setOpen(false)} style={{ color: "white", padding: "8px 0", borderBottom: "1px solid #374151", textDecoration: "none" }}>ABOUT</Link>
              <Link href="/contact" onClick={() => setOpen(false)} style={{ color: "white", padding: "8px 0", borderBottom: "1px solid #374151", textDecoration: "none" }}>CONTACT</Link>
              <a href="mailto:sales@murynaqabe.co.uk" onClick={() => setOpen(false)} style={{ backgroundColor: "#ffd700", textAlign: "center", color: "black", fontWeight: "bold", padding: "10px", borderRadius: "9999px", textDecoration: "none" }}>GET A QUOTE</a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}