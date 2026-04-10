"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
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

  const carouselImages = [
    "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/4ad35cf5b547ea461f23ea388b0dc848.jpg",
    "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/1144dffd41c7a3e1ddadc8a3e6730433.jpg",
    "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/d77f1739b36a67eff56f3069188d397d.jpg",
    "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/11db2e4cb18e14c50b1533697c500ae6.jpg",
    "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/db4f1016f78d5c8c5c7cce73c24352d6.jpg",
  ];

  const services = [
    { title: "Premium Timber & Sheet Materials", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/f59ad80427cca5b0a77ac0682a21bf90.jpg", desc: "High-grade timber and precision sheet materials for all types of construction and renovation work." },
    { title: "Quality Building Supplies", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/8665e3f597b33fb849b08ed9ee9ecce4.jpg", desc: "We supply only the best building materials to ensure long-lasting strength and reliability." },
    { title: "Landscaping & Garden Solutions", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/91281dce4c088893dd93d2fb95bd6f54.jpg", desc: "Complete landscaping products to create beautiful and durable outdoor environments." },
    { title: "Bespoke Doors, Windows & Joinery", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/1144dffd41c7a3e1ddadc8a3e6730433.jpg", desc: "Custom-made doors, windows, and joinery that blend security, style, and craftsmanship." },
    { title: "Professional Tools & Safety Wear", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/77921d888a8f7e18220272fe1f242ea4.jpg", desc: "Top-tier tools and certified workwear for maximum performance and protection." },
    { title: "Flexible Plant & Equipment Hire", img: "https://mileengineersltd.co.uk/wp-content/uploads/2025/08/1a76265a0a44fc6fe30c74de6b2f5d57.jpg", desc: "Affordable plant hire with well-maintained machinery for any project size." },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Happy Clients" },
    { value: "6", label: "Service Categories" },
  ];

  const features = [
    "Qualified and experienced team",
    "Punctual and tidy service",
    "Domestic and commercial expertise",
    "Highly recommended across the region",
    "Competitive prices & fast delivery",
    "Full project support from start to finish",
  ];

  return (
    <>
      <div className="bg-[#0f172a] text-slate-100 font-sans">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative h-[calc(100vh-72px)] md:h-[calc(100vh-108px)] min-h-[560px] flex items-center justify-center overflow-hidden text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/a3.png"
              alt="Construction site"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/70" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="inline-block text-amber-400 font-semibold tracking-widest uppercase text-xs bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full mb-6">
                UK&apos;s Trusted Construction Partner
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] font-[family-name:var(--font-work-sans)] mb-6 text-balance">
                TOP-QUALITY{" "}
                <span className="text-amber-400">BUILDING</span>
                <br />
                MATERIALS &amp; SERVICES
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
                At MURYNA QABE LTD, we offer a complete range of construction essentials — from timber to tools, all under one roof in Stoke-on-Trent.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 text-base"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300 text-base"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          {/* bottom fade into next section */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1e293b] to-transparent" />
        </section>

        {/* ── STATS BAR ────────────────────────────────────────── */}
        <section className="bg-[#1e293b] border-y border-slate-700/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-700/50">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:px-8 scroll-reveal" data-animation="fade-up">
                  <p className="text-4xl lg:text-5xl font-extrabold text-amber-400 font-[family-name:var(--font-work-sans)]">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm mt-1 tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────── */}
        <section id="services" className="py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6 scroll-reveal" data-animation="fade-up">
              <div>
                <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full">
                  What We Offer
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-work-sans)] mt-4 text-slate-100 text-balance">
                  Complete Construction Solutions
                </h2>
              </div>
              <p className="text-slate-400 text-lg max-w-sm lg:text-right leading-relaxed">
                Quality materials and expert services — everything you need for any project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:-translate-y-2 scroll-reveal border border-slate-700/50"
                  data-animation={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-semibold mt-5 group-hover:gap-2 transition-all">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ────────────────────────────────────── */}
        <section className="py-28 bg-[#1e293b]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image side */}
              <div className="relative scroll-reveal order-2 lg:order-1" data-animation="fade-left">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://mileengineersltd.co.uk/wp-content/uploads/2025/08/51b7b2bba322883e1b04caa41eb35660.jpg"
                    alt="Team working on a construction project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-amber-500 text-slate-900 rounded-2xl p-5 shadow-xl hidden lg:block">
                  <p className="text-3xl font-extrabold font-[family-name:var(--font-work-sans)]">15+</p>
                  <p className="text-sm font-semibold">Years of Excellence</p>
                </div>
              </div>

              {/* Text side */}
              <div className="scroll-reveal order-1 lg:order-2" data-animation="fade-right">
                <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-work-sans)] mt-5 mb-6 text-slate-100 text-balance">
                  Built on Trust, Delivered with Precision
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  We combine decades of on-the-ground experience with a commitment to quality that shows in every project we support.
                </p>
                <ul className="space-y-4">
                  {features.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center mt-0.5">
                        <i className="fas fa-check text-amber-400 text-xs" />
                      </span>
                      <span className="text-slate-300 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 mt-10 text-amber-400 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Learn more about us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY CAROUSEL ─────────────────────────────────── */}
        <section className="py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14 scroll-reveal" data-animation="fade-up">
              <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full">
                Our Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-work-sans)] mt-4 text-slate-100">
                Project Gallery
              </h2>
              <p className="text-slate-400 mt-3 text-lg">A snapshot of our work across the region</p>
            </div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.2 },
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
            >
              {carouselImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden rounded-2xl shadow-lg group aspect-[4/3]">
                    <img
                      src={src}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ── FEATURE SPLIT ROWS ───────────────────────────────── */}
        <section className="py-28 bg-[#1e293b]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">

            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-reveal" data-animation="fade-left">
                <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full">
                  Doors, Windows & Joinery
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-5 mb-5 font-[family-name:var(--font-work-sans)] text-slate-100 text-balance">
                  Elevate Your Property with Premium Joinery
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                  At MURYNA QABE LTD, we know that doors, windows, and joinery define a building&apos;s character. Our products merge practicality with beauty, fitting both contemporary and classic homes. Every piece is made to last, offering security, insulation, and visual charm.
                </p>
                <a href="/services" className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-amber-400 transition-all duration-300 text-sm">
                  View Products <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="scroll-reveal" data-animation="fade-right">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://mileengineersltd.co.uk/wp-content/uploads/elementor/thumbs/7291b5bc905ce2ce23d5825ec3f132f8-racnnelasdtzommr14e9sxw9vgn7ur6stc9mlz1xg4.jpg"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Bespoke joinery and windows"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-reveal order-2 lg:order-1" data-animation="fade-left">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://mileengineersltd.co.uk/wp-content/uploads/elementor/thumbs/f9628f4b6490b05318f37b6473b24e6d-racn3cp8zmdepbhjt07p2drrejhlbdsodbo4q1jjt6.jpg"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Construction partnership"
                  />
                </div>
              </div>
              <div className="scroll-reveal order-1 lg:order-2" data-animation="fade-right">
                <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full">
                  Partnership
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-5 mb-5 font-[family-name:var(--font-work-sans)] text-slate-100 text-balance">
                  Collaborate with Us on Your Next Build
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                  Choosing the right partner makes all the difference. At MURYNA QABE LTD, we don&apos;t just sell materials — we offer end-to-end support. From planning to completion, our team ensures you get the right products, tools, and machinery for the job.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-amber-400 transition-all duration-300 text-sm">
                  Get in Touch <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section id="contact" className="py-28 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 scroll-reveal" data-animation="fade-up">
              <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-work-sans)] mt-4 text-slate-100">
                Contact Us
              </h2>
              <p className="text-slate-400 mt-3 text-lg">We&apos;d love to hear about your project</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Location */}
              <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-2xl text-center hover:border-amber-400/40 transition-all duration-300 scroll-reveal" data-animation="fade-left">
                <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className="fas fa-map-marker-alt text-amber-400 text-2xl" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-100">Our Location</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  66 Machin Street<br />Stoke-on-Trent<br />ST6 6BT, United Kingdom
                </p>
              </div>

              {/* Email */}
              <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-2xl text-center hover:border-amber-400/40 transition-all duration-300 scroll-reveal" data-animation="fade-up">
                <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className="fas fa-envelope text-amber-400 text-2xl" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-100">Email Us</h3>
                <a
                  href="mailto:sales@murynaqabe.co.uk"
                  className="text-slate-400 text-sm hover:text-amber-400 transition-colors"
                >
                  sales@murynaqabe.co.uk
                </a>
              </div>

              {/* Hours */}
              <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-2xl text-center hover:border-amber-400/40 transition-all duration-300 scroll-reveal" data-animation="fade-right">
                <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className="fas fa-clock text-amber-400 text-2xl" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-100">Working Hours</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Mon – Fri: 8am – 6pm<br />Saturday: 9am – 4pm<br />Sunday: Closed
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 border border-slate-700/50 scroll-reveal" data-animation="fade-up">
              <iframe
                src="https://maps.google.com/maps?q=66+MACHIN+STREET+STOKE-ON-TRENT+ST6+6BT&t=m&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Our location on Google Maps"
              />
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────────── */}
        <section className="bg-amber-500 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-[family-name:var(--font-work-sans)] text-balance">
                  Ready to Build Something Great?
                </h3>
                <p className="text-slate-800 text-lg mt-2">
                  Contact us today for a free quote and expert consultation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a
                  href="mailto:sales@murynaqabe.co.uk"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition shadow-lg text-base"
                >
                  <i className="fas fa-envelope" />
                  Email Us Now
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-900 hover:text-white transition text-base"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style jsx global>{`
        .scroll-reveal { opacity: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }

        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-left { animation: fadeLeft 0.7s ease-out forwards; }

        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-right { animation: fadeRight 0.7s ease-out forwards; }

        @keyframes dropDown {
          0%   { opacity: 0; transform: translateY(-80px) rotateX(-30deg); }
          60%  { opacity: 0.8; transform: translateY(10px) rotateX(0deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        .animate-drop-down { animation: dropDown 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in { animation: zoomIn 0.6s ease-out forwards; }
      `}</style>

      <FloatingButton />
    </>
  );
}
