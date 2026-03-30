"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[200] bg-slate-900 text-gray-300 text-sm py-2 border-b border-slate-700">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400 text-base">construction</span>
            <span>Ready to start your project?</span>
            <span className="font-bold text-amber-400">Contact MURYNA QABE LTD Today!</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-amber-400 transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-amber-400 transition"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-amber-400 transition"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <header className="fixed top-9 left-0 right-0 z-[200] bg-slate-900 border-b border-slate-700 shadow-md">
  <div className="container mx-auto px-6">
    <div className="flex justify-between items-center py-3 md:py-4">
      
      {/* Logo Text */}
      <Link href="/" className="flex-shrink-0">
        <span className="text-2xl md:text-3xl font-bold text-amber-400 tracking-wide">
          MURYNA QABE LTD
        </span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        {[
          { name: "HOME", path: "/" },
          { name: "SERVICES", path: "/services" },
          { name: "ABOUT", path: "/about" },
          { name: "CONTACT", path: "/contact" },
          { name: "PROJECTS", path: "/projects" },
        ].map((item) => (
          <li key={item.path} className="relative">
            <Link
              href={item.path}
              className={`text-sm font-bold tracking-wide transition ${
                pathname === item.path ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
              }`}
            >
              {item.name}
            </Link>
            {pathname === item.path && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400 rounded-full"></span>
            )}
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a
          href="mailto:sales@murynaqabe.co.uk"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-5 py-2 rounded-full transition shadow-md"
        >
          <Mail size={16} />
          GET A QUOTE
        </a>
        <button onClick={() => setOpen(!open)} className="text-gray-200 focus:outline-none md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {open && (
      <div className="md:hidden bg-slate-800 rounded-xl p-5 mt-2 mb-3 flex flex-col gap-3 border border-slate-700">
        <Link href="/" onClick={() => setOpen(false)} className="text-gray-200 hover:text-amber-400 py-2 border-b border-slate-700">HOME</Link>
        <Link href="/services" onClick={() => setOpen(false)} className="text-gray-200 hover:text-amber-400 py-2 border-b border-slate-700">SERVICES</Link>
        <Link href="/about" onClick={() => setOpen(false)} className="text-gray-200 hover:text-amber-400 py-2 border-b border-slate-700">ABOUT</Link>
        <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-200 hover:text-amber-400 py-2 border-b border-slate-700">CONTACT</Link>
        <Link href="/projects" onClick={() => setOpen(false)} className="text-gray-200 hover:text-amber-400 py-2 border-b border-slate-700">CONTACT</Link>
        <a href="mailto:sales@murynaqabe.co.uk" onClick={() => setOpen(false)} className="bg-amber-500 text-black font-bold text-center py-2 rounded-full mt-2">GET A QUOTE</a>
      </div>
    )}
  </div>
</header>
    </>
  );
}