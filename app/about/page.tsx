"use client";

import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const statsData = [
  { icon: "schedule", value: 15, label: "Years Experience", suffix: "+" },
  { icon: "business_center", value: 200, label: "Projects Completed", suffix: "+" },
  { icon: "groups", value: 50, label: "Expert Workers", suffix: "+" },
  { icon: "verified", value: 100, label: "Client Satisfaction", suffix: "%" },
];

function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);
  return <span ref={ref} className="text-3xl md:text-5xl font-bold text-amber-400">{count}{suffix}</span>;
}

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute("data-animation") || "fade-up";
            entry.target.classList.add(`animate-${animation}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>About Us | MURYNA QABE LTD - Construction Specialists</title>
        <meta name="description" content="Learn about MURYNA QABE LTD - our mission, vision, and commitment to quality construction in Stoke-on-Trent." />
      </Head>
      <main className="relative min-h-screen bg-[#0f172a]">
        {/* Fixed Background - with -z-10 */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjDjGkS4MHBFsV66wNEA82X3V9X8oI5u-CJMy0SSOp3PPscHNHGXU7sawntY7ZLEcKqgI8G28DZQxHhXqHFi8qmhp-FmS93GAYlQUh2gzR-O-VPsOJFkmYFWwBz7OYA5vyoS8Wd8pI7QrA51gC5FxK_WfO3b1mcP0DhBX6A5pmi0qX7yZSWlNCMJ8tWuJzbDm3COXNKN3JiLyg4Inl0d6iFQsW2RfoA8RcmeBcj1kzFCLc9nSvNyBi_DB4BRGz-xFIokBJh441fWNd')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]/90"></div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30 mb-6">
                  <span className="material-symbols-outlined text-amber-400 text-base">apartment</span>
                  <span className="text-amber-400 text-sm font-medium">The Structural Authority</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                  CONSTRUCTING WITH <span className="text-amber-400">PRECISION.</span>
                </h1>
                <div className="w-24 h-1 bg-amber-400 my-6"></div>
                <p className="text-gray-300 text-lg max-w-lg">MURYNA QABE LTD stands for integrity, safety, and excellence in every brick we lay.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <div className="bg-[#1e293b]/60 backdrop-blur-md p-8 rounded-2xl border-l-4 border-amber-400 shadow-2xl">
                  <span className="material-symbols-outlined text-amber-400 text-4xl mb-3">format_quote</span>
                  <p className="text-xl text-gray-200 italic">"Quality is never an accident; it is always the result of intelligent effort."</p>
                  <p className="mt-4 text-amber-400 font-bold">— Our Commitment</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Intro */}
        <section className="relative z-10 py-16">
          <div className="container mx-auto px-6">
            <div className="bg-[#1e293b]/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-700 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="scroll-reveal" data-animation="fade-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Foundation</h2>
                  <div className="w-20 h-1 bg-amber-400 mt-4 mb-6"></div>
                  <p className="text-gray-200 leading-relaxed text-lg">Established to redefine Stoke-on-Trent's architectural landscape, MURYNA QABE LTD stands as a beacon of structural integrity and modern engineering.</p>
                  <p className="text-gray-200 leading-relaxed text-lg mt-4">With decades of combined experience, our leadership team navigates complex commercial, industrial, and residential developments. We treat every blueprint as a masterwork.</p>
                </div>
                <div className="scroll-reveal grid grid-cols-2 gap-4" data-animation="fade-right">
                  <div className="bg-[#0f172a]/60 rounded-xl p-4 text-center"><span className="material-symbols-outlined text-amber-400 text-3xl">security</span><p className="text-white font-bold mt-2">100% Safety</p></div>
                  <div className="bg-[#0f172a]/60 rounded-xl p-4 text-center"><span className="material-symbols-outlined text-amber-400 text-3xl">schedule</span><p className="text-white font-bold mt-2">On-Time Delivery</p></div>
                  <div className="bg-[#0f172a]/60 rounded-xl p-4 text-center"><span className="material-symbols-outlined text-amber-400 text-3xl">handshake</span><p className="text-white font-bold mt-2">Trusted Partner</p></div>
                  <div className="bg-[#0f172a]/60 rounded-xl p-4 text-center"><span className="material-symbols-outlined text-amber-400 text-3xl">verified</span><p className="text-white font-bold mt-2">Certified Quality</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, idx) => (
                <div key={idx} className="scroll-reveal bg-[#1e293b]/60 backdrop-blur-md rounded-2xl p-6 text-center border border-gray-700 hover:border-amber-400 transition-all hover:-translate-y-2" data-animation={idx % 2 === 0 ? "fade-up" : "zoom-in"}>
                  <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined text-amber-400 text-2xl">{stat.icon}</span></div>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-300 text-sm uppercase tracking-wide mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Aim */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="scroll-reveal bg-[#1e293b]/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-400 transition group" data-animation="fade-left">
                <div className="h-2 bg-amber-400"></div><div className="p-8"><div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5"><span className="material-symbols-outlined text-amber-400 text-3xl">target</span></div><h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3><p className="text-gray-300 leading-relaxed">To provide unparalleled construction services by combining innovative engineering with traditional craftsmanship, ensuring every project is delivered with safety, efficiency, and uncompromising quality.</p></div>
              </div>
              <div className="scroll-reveal bg-[#1e293b]/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-400 transition group transform md:-translate-y-4" data-animation="zoom-in">
                <div className="h-2 bg-amber-400"></div><div className="p-8"><div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5"><span className="material-symbols-outlined text-amber-400 text-3xl">visibility</span></div><h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3><p className="text-gray-300 leading-relaxed">To be the most trusted structural authority in the region, recognized for our ability to tackle complex building challenges while fostering sustainable development.</p></div>
              </div>
              <div className="scroll-reveal bg-[#1e293b]/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-400 transition group" data-animation="fade-right">
                <div className="h-2 bg-amber-400"></div><div className="p-8"><div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5"><span className="material-symbols-outlined text-amber-400 text-3xl">flag</span></div><h3 className="text-2xl font-bold text-white mb-3">Our Aim</h3><p className="text-gray-300 leading-relaxed">We aim to bridge the gap between architectural imagination and physical reality, maintaining a 100% incident-free safety record and creating inspiring spaces.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-amber-500 py-16 text-center scroll-reveal" data-animation="zoom-in">
          <div className="container mx-auto px-6"><h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Build Something Great?</h3><p className="text-slate-800 text-lg mb-6">Contact us today for a free quote and consultation.</p><a href="mailto:sales@murynaqabe.co.uk" className="inline-block bg-slate-900 text-white font-bold px-8 py-3 rounded-full hover:bg-slate-800 transition shadow-lg">Request Free Quote</a></div>
        </div>
      </main>
      <style jsx global>{`
        .scroll-reveal { opacity: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
        @keyframes fadeLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-left { animation: fadeLeft 0.7s ease forwards; }
        @keyframes fadeRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-right { animation: fadeRight 0.7s ease forwards; }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-zoom-in { animation: zoomIn 0.6s ease forwards; }
      `}</style>
    </>
  );
}