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
    { name: "PROJECTS", path: "/projects" },

  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* TOP BAR: visible only on md+ */}
      <div className="hidden md:block bg-black text-sm border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">⚒</span>
            <span>Ready to start your project?</span>
            <span className="text-amber-400 font-bold">
              Contact MURYNA QABE LTD Today!
            </span>
          </div>
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
        <div className="container mx-auto py-4 flex items-center">
          {/* LOGO */}
          <div className="flex-1">
            <Link
              href="/"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 whitespace-nowrap"
            >
              MURYNA QABE LTD
            </Link>
          </div>

          {/* CENTER NAV LINKS: md+ */}
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

          {/* MOBILE MENU TOGGLE */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white z-50"
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU: only as tall as content, scrollable if needed */}
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 flex flex-col pt-4 pb-6 px-4 gap-2 z-40 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-gray-700 text-center text-lg font-semibold hover:text-amber-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
