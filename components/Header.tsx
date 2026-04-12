"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-[#0f172a]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MURYNA QABE LTD"
              width={280}
              height={84}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-amber-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:sales@murynaqabe.co.uk"
              className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Get a Quote
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0f172a] border-t border-white/[0.06]">
          <div className="container mx-auto py-3 flex flex-col">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-2 py-3.5 text-sm font-medium tracking-widest uppercase border-b border-white/[0.04] transition-colors duration-200 ${
                    isActive
                      ? "text-amber-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 pb-2">
              <a
                href="mailto:sales@murynaqabe.co.uk"
                className="block text-center bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-full transition-all duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
