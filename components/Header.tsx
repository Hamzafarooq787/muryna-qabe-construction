"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      
      {/* TOP BAR */}
      <div className="bg-black text-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center py-2">
          
          {/* LEFT TEXT */}
          <div className="flex items-center gap-2">
            <span className="text-amber-400">⚒</span>
            <span>Ready to start your project?</span>
            <span className="text-amber-400 font-bold hidden sm:inline">
              Contact MURYNA QABE LTD Today!
            </span>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex gap-4">
            <i className="fa-brands fa-facebook-f hover:text-amber-400 cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-amber-400 cursor-pointer"></i>
            <i className="fa-brands fa-linkedin-in hover:text-amber-400 cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-amber-400 cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center">
          
          {/* LEFT (LOGO) */}
          <div className="flex-1">
            <Link
              href="/"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 whitespace-nowrap"
            >
              MURYNA QABE LTD
            </Link>
          </div>

          {/* CENTER (NAV) */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-amber-400 transition ${
                      pathname === item.path ? "text-amber-400" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT (BUTTON + MENU) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            
            <a
              href="mailto:sales@murynaqabe.co.uk"
              className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded-full font-bold transition"
            >
              <i className="fa-solid fa-envelope"></i>
              GET A QUOTE
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-slate-800 px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="py-2 border-b border-gray-700 hover:text-amber-400"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="mailto:sales@murynaqabe.co.uk"
              className="bg-amber-500 text-black font-bold text-center py-2 rounded-full mt-2"
            >
              GET A QUOTE
            </a>
          </div>
        )}
      </div>
    </header>
  );
}