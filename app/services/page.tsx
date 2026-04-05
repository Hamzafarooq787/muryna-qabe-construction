"use client";

import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// Stats data
const statsData = [
  { icon: "schedule", value: 15, label: "Years Experience", suffix: "+" },
  { icon: "business_center", value: 200, label: "Projects Completed", suffix: "+" },
  { icon: "groups", value: 50, label: "Expert Workers", suffix: "+" },
  { icon: "verified", value: 100, label: "Client Satisfaction", suffix: "%" },
];

// Counter Component
type CounterProps = { target: number; suffix?: string; duration?: number };

function Counter({ target, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-5xl font-bold text-amber-400">
      {count}
      {suffix}
    </div>
  );

}

export default function ServicesPage() {
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

  const services = [
    {
      title: "Premium Timber",
      icon: "forest",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZVA9WKHLMgOquilgi8V1Bh7nx7P7PHIfv8aoh6B78oxknGjsNbVkETIxKLXWLbWbDoZN2XzbilVUWOPZ88joO0sri_OEuRuIbgHHKhQfFykIcDl5ZEelBb4pRit0OZB5HbF5qr3-nT1wm_VktYmPmsQZCzLtsX5RqHfF28Qwuoq6iKQ65ZHUFyRiXJ9e0wLQ15P4sNYf_HCc7c2vfXh-twGvyyC0z4Ep2hDsimTKUwTyzXqzy392oklEeHSnWIG2010Xd6P_Lkuy",
      desc: "High-grade timber for structural and decorative applications.",
    },
    {
      title: "Building Materials",
      icon: "apartment",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7DyZiYEU7K2-XQao1Znxs3yDvuMteTM353sYUezNMI8SSuM5kDk1ImC0egFUn6T9D_NF8GfNKZb5NYOFZlO6CCu2UF10oW4Jk1SXRcfQvQ9oQVg4QZ2s2EmhFTIKuilpHsDEVUtz7qeNB2Ez8xnHmUBBvMt4MIkhx_3NQQrkO1kiw-NYT5PaOZan4ZTAeV3ET0BBAd7hvceVl5dq3s7JKHTWJXfGBqsDGzez-heqeRWNQ04vFlSP7bhN_WyA7OX86PJu_ij4c30aw",
      desc: "Complete range of quality building supplies for any project scale.",
    },
    {
      title: "Garden & Landscaping",
      icon: "grass",
      img: '/images/s3.jpg',
      desc: "Landscaping solutions for beautiful and durable outdoor spaces.",
    },
    {
      title: "Doors & Windows",
      icon: "door_front",
      img: '/images/s4.webp',
      desc: "Custom doors and windows combining security, style, and insulation.",
    },
    {
      title: "Tools & Workwear",
      icon: "handyman",
      img: '/images/s5.jpg',
      desc: "Professional tools and certified safety wear for maximum protection.",
    },
    {
      title: "Plant Hire",
      icon: "construction",
      img: '/images/s6.jpg',
      desc: "Flexible plant and equipment hire for projects of any size.",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | MURYNA QABE LTD - Construction Materials & Hire</title>
        <meta name="description" content="Premium timber, building materials, landscaping, doors, windows, tools, workwear, and plant hire in Stoke-on-Trent." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0,1" />
      </Head>

      <main className="relative min-h-screen bg-[#0f172a] font-sans overflow-x-hidden">
        {/* Fixed Background Image - z-index fixed to -z-10 */}
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

        {/* Hero Section - Centered with badge */}
        <section className="relative z-10 min-h-[60vh] flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 py-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30 mb-6">
                <span className="material-symbols-outlined text-amber-400 text-base">handshake</span>
                <span className="text-amber-400 text-sm font-medium">Premium Distribution</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                STRUCTURAL <span className="text-amber-400">PRECISION.</span>
              </h1>
              <div className="w-24 h-1 bg-amber-400 mx-auto my-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Delivering the foundations of industry with uncompromising quality.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Stats Section - Counters */}
        <section className="relative z-10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="scroll-reveal bg-[#1e293b]/60 backdrop-blur-md rounded-2xl p-6 text-center border border-gray-700 hover:border-amber-400 transition-all hover:-translate-y-2"
                  data-animation={idx % 2 === 0 ? "fade-up" : "zoom-in"}
                >
                  <div className="w-14 h-14 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-amber-400 text-2xl">{stat.icon}</span>
                  </div>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-300 text-sm uppercase tracking-wide mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 scroll-reveal" data-animation="fade-up">
              <span className="material-symbols-outlined text-amber-400 text-4xl mx-auto mb-2">apps</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Core Specializations</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto mt-4"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Full-spectrum supply chain for construction professionals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="scroll-reveal group bg-[#1e293b]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-400 transition-all hover:-translate-y-3 shadow-xl"
                  data-animation={idx === 0 ? "fade-left" : idx === 1 ? "zoom-in" : idx === 2 ? "fade-right" : idx % 2 === 0 ? "fade-up" : "drop-down"}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-amber-400 text-2xl">{service.icon}</span>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <span className="text-amber-400 text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra Value Section - Why Choose Us */}
        <section className="relative z-10 py-20 bg-[#1e293b]/40 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal space-y-6" data-animation="fade-left">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30">
                  <span className="material-symbols-outlined text-amber-400 text-base">star</span>
                  <span className="text-amber-400 text-sm font-medium">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Unmatched Quality & Reliability</h2>
                <div className="w-20 h-1 bg-amber-400"></div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="material-symbols-outlined text-amber-400">check_circle</span>
                    Industry-leading materials sourcing
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="material-symbols-outlined text-amber-400">check_circle</span>
                    Competitive pricing with bulk discounts
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="material-symbols-outlined text-amber-400">check_circle</span>
                    Nationwide delivery and on-time guarantee
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="material-symbols-outlined text-amber-400">check_circle</span>
                    24/7 expert support for your projects
                  </li>
                </ul>
              </div>
              <div className="scroll-reveal relative h-80 rounded-2xl overflow-hidden shadow-2xl" data-animation="fade-right">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwdidPSnjiP0CN14Or9U_C_FVMByc6HW_Mec7sNHkMpZ_Yl5zf-e_M_V2Vt8QquO9Ptv45AtDH-O8NZSKHvaSNq02bHrKJE4eYfjKTmiesVWxge0VA7Kdm46V_Z9g2Sx7T8Fr2-sRedq_gSTE-hmPHu5CdvsuXKPN2tZq7_vGh7fFmr8xzABpz2zhbq19hDtAiekhrQwJD8PzoFkLcYEgzWpXGtdK7yWXrDzfogEBOvjkNVyPMrcMC2UJcRwIPjXJz5_zDFrZZi9HZ"
                  alt="Quality assurance"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Gradient with icons */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="scroll-reveal bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center text-black shadow-2xl" data-animation="zoom-in">
              <span className="material-symbols-outlined text-5xl mb-3 text-black/70">construction</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to start your next build?</h2>
              <p className="text-black/80 text-lg mb-6 max-w-xl mx-auto">Our team is ready to assist with materials, planning, and equipment hire.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition shadow-lg">
                  Contact Sales
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <button className="inline-flex items-center gap-2 border border-black/30 px-8 py-3 rounded-full hover:bg-black/10 transition">
                  Download Catalog
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Quick Contact */}
        <div className="fixed bottom-6 right-6 z-20">
          <a
            href="mailto:sales@murynaqabe.co.uk"
            className="flex items-center gap-2 bg-amber-500 text-black font-bold px-5 py-3 rounded-full shadow-lg hover:bg-amber-400 transition-all hover:scale-105"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Quick Quote</span>
          </a>
        </div>
      </main>

      <style jsx global>{`
        .scroll-reveal {
          opacity: 0;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-left { animation: fadeLeft 0.7s ease forwards; }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-right { animation: fadeRight 0.7s ease forwards; }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in { animation: zoomIn 0.6s ease forwards; }
        @keyframes dropDown {
          0% { opacity: 0; transform: translateY(-80px) rotateX(-30deg); }
          60% { opacity: 0.8; transform: translateY(10px) rotateX(0deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        .animate-drop-down { animation: dropDown 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      `}</style>
    </>
  );
}
