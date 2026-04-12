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
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    { title: "Premium Timber & Sheet Materials", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/f59ad80427cca5b0a77ac0682a21bf90.jpg", desc: "High-grade timber and precision sheet materials for all types of construction and renovation work." },
    { title: "Quality Building Supplies", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/8665e3f597b33fb849b08ed9ee9ecce4.jpg", desc: "We supply only the best building materials to ensure long-lasting strength and reliability." },
    { title: "Landscaping & Garden Solutions", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/91281dce4c088893dd93d2fb95bd6f54.jpg", desc: "Complete landscaping products to create beautiful and durable outdoor environments." },
    { title: "Bespoke Doors, Windows & Joinery", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/1144dffd41c7a3e1ddadc8a3e6730433.jpg", desc: "Custom-made doors, windows, and joinery that blend security, style, and craftsmanship." },
    { title: "Professional Tools & Safety Wear", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/77921d888a8f7e18220272fe1f242ea4.jpg", desc: "Top-tier tools and certified workwear for maximum performance and protection." },
    { title: "Flexible Plant & Equipment Hire", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/1a76265a0a44fc6fe30c74de6b2f5d57.jpg", desc: "Affordable plant hire with well-maintained machinery for any project size." },
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
        {/* Fixed Background */}
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
        <section className="relative z-10 min-h-[50vh] flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto py-20"
          >
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30 mb-6">
                <span className="material-symbols-outlined text-amber-400 text-base">handshake</span>
                <span className="text-amber-400 text-sm font-medium">Premium Distribution</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-white">
                STRUCTURAL <span className="text-amber-400">PRECISION.</span>
              </h1>
              <div className="w-24 h-1 bg-amber-400 mx-auto my-5 md:my-6"></div>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Delivering the foundations of industry with uncompromising quality.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 py-10 md:py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="scroll-reveal bg-[#1e293b]/60 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-gray-700 hover:border-amber-400 transition-all hover:-translate-y-2"
                  data-animation={idx % 2 === 0 ? "fade-up" : "zoom-in"}
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-amber-400 text-xl md:text-2xl">{stat.icon}</span>
                  </div>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-300 text-xs uppercase tracking-wide mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="relative z-10 py-14 md:py-24 bg-[#1e293b]">
          <div className="container mx-auto">
            <div className="text-center mb-10 md:mb-16 scroll-reveal" data-animation="drop-down">
              <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm bg-slate-800 px-4 py-1 rounded-full">What We Offer</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 mb-4 text-white">Complete Construction Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg">
                We deliver quality timber, building supplies, landscaping products, doors, windows, joinery, tools, safety wear, and plant hire.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 scroll-reveal flex flex-col"
                  data-animation={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-48 md:h-64 overflow-hidden flex-shrink-0">
                    <Image src={service.img} alt={service.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative z-10 py-14 md:py-20 bg-[#1e293b]/40 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="scroll-reveal space-y-5 md:space-y-6" data-animation="fade-left">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30">
                  <span className="material-symbols-outlined text-amber-400 text-base">star</span>
                  <span className="text-amber-400 text-sm font-medium">Why Choose Us</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Unmatched Quality & Reliability</h2>
                <div className="w-20 h-1 bg-amber-400"></div>
                <ul className="space-y-3">
                  {[
                    "Industry-leading materials sourcing",
                    "Competitive pricing with bulk discounts",
                    "Nationwide delivery and on-time guarantee",
                    "24/7 expert support for your projects",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                      <span className="material-symbols-outlined text-amber-400 flex-shrink-0">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="scroll-reveal relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl" data-animation="fade-right">
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

        {/* CTA Section */}
        <section className="relative z-10 py-14 md:py-20">
          <div className="container mx-auto">
            <div className="scroll-reveal bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-7 md:p-12 text-center text-black shadow-2xl" data-animation="zoom-in">
              <span className="material-symbols-outlined text-4xl md:text-5xl mb-3 text-black/70">construction</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Ready to start your next build?</h2>
              <p className="text-black/80 text-sm md:text-lg mb-6 max-w-xl mx-auto">Our team is ready to assist with materials, planning, and equipment hire.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-7 py-3 rounded-full hover:bg-gray-900 transition shadow-lg">
                  Contact Sales
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <button className="inline-flex items-center justify-center gap-2 border border-black/30 px-7 py-3 rounded-full hover:bg-black/10 transition">
                  Download Catalog
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>
          </div>
        </section>


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
