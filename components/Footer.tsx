"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Briefcase, Home, Info, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="MURYNA QABE LTD"
                width={260}
                height={78}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              At <strong className="text-amber-400">MURYNA QABE LTD</strong>, we provide high-quality construction services, building materials, and expert solutions.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-amber-400 font-bold uppercase tracking-wider text-sm mb-4 border-l-3 border-amber-400 pl-3">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Home size={14} /> Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Info size={14} /> About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Wrench size={14} /> Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Mail size={14} /> Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-amber-400 font-bold uppercase tracking-wider text-sm mb-4 border-l-3 border-amber-400 pl-3">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Briefcase size={14} /> Building Materials</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Wrench size={14} /> Construction Tools</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Briefcase size={14} /> Project Management</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2"><Briefcase size={14} /> Civil Engineering</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-amber-400 font-bold uppercase tracking-wider text-sm mb-4 border-l-3 border-amber-400 pl-3">More Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="text-amber-400 w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm font-semibold">Email:</p>
                  <a href="mailto:sales@murynaqabe.com" className="text-gray-400 hover:text-amber-400 text-sm">sales@murynaqabe.com</a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="text-amber-400 w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm font-semibold">Address:</p>
                  <p className="text-gray-400 text-sm">66 MACHIN STREET, STOKE-ON-TRENT, ST6 6BT, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} MURYNA QABE LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
