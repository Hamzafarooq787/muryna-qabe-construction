"use client";

import { useEffect } from "react";
import Head from "next/head";
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
            // Add animation class based on data-animation attribute
            const animation = entry.target.getAttribute("data-animation") || "fade-up";
            entry.target.classList.add(`animate-${animation}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" } // slight offset for smoother trigger
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

  // Helper to get random animation (you can also manually set per element)
  const getRandomAnimation = () => {
    const animations = ["fade-up", "fade-left", "fade-right", "drop-down", "zoom-in"];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <>
      <Head>
        <title>MURYNA QABE LTD | Construction Specialists</title>
        <meta name="description" content="Top-quality building materials, timber, joinery, tools, and plant hire in Stoke-on-Trent." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

        <div className="bg-[#0f172a] text-slate-100 font-sans">
        {/* Hero Section - Centered Text */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/a3.png"
              alt="Construction site at sunset"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-slate-900/65"></div>
          </div>

          <div className="container mx-auto px-6 py-20 md:py-28 relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-[family-name:var(--font-work-sans)]">
                TOP-QUALITY <br />
                <span className="text-amber-400 relative inline-block">
                  BUILDING MATERIALS
                  <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5 Q150,10 200,5" stroke="#f59e0b" fill="none" strokeWidth="2" />
                  </svg>
                </span>
                <br /> FOR EVERY PROJECT
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                At MURYNA QABE LTD, we offer a complete range of construction essentials – from timber to tools, all under one roof.
              </p>
              <div className="flex flex-wrap gap-5 justify-center pt-4">
                <a href="#contact" className="group relative bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full overflow-hidden transition-all hover:shadow-2xl hover:bg-amber-400">
                  Get a Quote →
                </a>
                <a href="#services" className="border-2 border-amber-500 text-amber-400 font-bold px-8 py-4 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20">
              <path d="M0,0 L0,120 L1200,120 L1200,0 C1100,40 1000,60 900,50 C800,40 700,20 600,30 C500,40 400,60 300,50 C200,40 100,20 0,0 Z" fill="#1e293b" />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-[#1e293b]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 scroll-reveal" data-animation="drop-down">
              <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm bg-slate-800 px-4 py-1 rounded-full">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-work-sans)] mt-4 mb-4 text-[--color-text]">Complete Construction Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                We deliver quality timber, building supplies, landscaping products, doors, windows, joinery, tools, safety wear, and plant hire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group bg-slate-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 scroll-reveal"
                  data-animation={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={service.img} alt={service.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 scroll-reveal" data-animation="fade-left">
                <div className="bg-slate-700 p-8 rounded-3xl shadow-lg">
                  <h3 className="text-3xl font-bold mb-6 font-[family-name:var(--font-work-sans)] text-[--color-text]">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Qualified and experienced team",
                      "Punctual and tidy service",
                      "Domestic and commercial expertise",
                      "Highly recommended across the region",
                      "Competitive prices & fast delivery"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg text-slate-400">
                        <i className="fas fa-check-circle text-amber-400 text-2xl"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 scroll-reveal" data-animation="fade-right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="https://mileengineersltd.co.uk/wp-content/uploads/2025/08/51b7b2bba322883e1b04caa41eb35660.jpg" alt="Team working" width={600} height={450} className="w-full h-auto object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-20 bg-[#1e293b]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 scroll-reveal" data-animation="zoom-in">
              <h2 className="text-4xl font-bold font-[family-name:var(--font-work-sans)] text-[--color-text]">Project Gallery</h2>
              <p className="text-slate-400 mt-2">See our work in action</p>
            </div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={25}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="rounded-2xl"
            >
              {carouselImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden rounded-2xl shadow-lg group">
                    <img src={src} alt={`Project ${idx + 1}`} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Double Content Section */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-6 space-y-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 scroll-reveal" data-animation="fade-left">
                <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                  <h3 className="text-3xl font-bold mb-5 font-[family-name:var(--font-work-sans)] text-[--color-text]">Elevate Your Property with Premium Doors, Windows & Joinery</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">At MURYNA QABE LTD, we know that doors, windows, and joinery define a building&apos;s character. Our products merge practicality with beauty, fitting both contemporary and classic homes. Every piece is made to last, offering security, insulation, and visual charm.</p>
                </div>
              </div>
              <div className="flex-1 scroll-reveal" data-animation="fade-right">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                  <Image src="https://mileengineersltd.co.uk/wp-content/uploads/elementor/thumbs/7291b5bc905ce2ce23d5825ec3f132f8-racnnelasdtzommr14e9sxw9vgn7ur6stc9mlz1xg4.jpg" width={550} height={400} className="w-full object-cover" alt="Joinery" unoptimized />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1 scroll-reveal" data-animation="fade-right">
                <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                  <h3 className="text-3xl font-bold mb-5 font-[family-name:var(--font-work-sans)] text-[--color-text]">Collaborate with Us on Your Next Construction or Renovation</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">Choosing the right partner makes all the difference. At MURYNA QABE LTD, we don&apos;t just sell materials &ndash; we offer end-to-end support. From planning to completion, our team ensures you get the right products, tools, and machinery.</p>
                </div>
              </div>
              <div className="flex-1 scroll-reveal" data-animation="fade-left">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                  <Image src="https://mileengineersltd.co.uk/wp-content/uploads/elementor/thumbs/f9628f4b6490b05318f37b6473b24e6d-racn3cp8zmdepbhjt07p2drrejhlbdsodbo4q1jjt6.jpg" width={550} height={400} className="w-full object-cover" alt="Partnership" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white relative">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 scroll-reveal" data-animation="drop-down">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-work-sans)] inline-block pb-2 border-b-4 border-amber-400">Contact Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/80 backdrop-blur-lg p-8 rounded-2xl text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105 scroll-reveal" data-animation="fade-left">
                <i className="fas fa-map-marker-alt text-amber-400 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold mb-2">OUR LOCATION</h3>
                <p className="text-slate-300">66 MACHIN STREET<br />STOKE-ON-TRENT<br />ST6 6BT, United Kingdom</p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-lg p-8 rounded-2xl text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105 scroll-reveal" data-animation="zoom-in">
                <i className="fas fa-envelope text-amber-400 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold mb-2">EMAIL US</h3>
                <p><a href="mailto:sales@murynaqabe.co.uk" className="hover:text-amber-400 transition">sales@murynaqabe.co.uk</a></p>
              </div>
            </div>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl h-96 scroll-reveal" data-animation="zoom-in">
              <iframe src="https://maps.google.com/maps?q=66+MACHIN+STREET+STOKE-ON-TRENT+ST6+6BT&t=m&z=15&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-amber-500 py-16 text-center scroll-reveal" data-animation="drop-down">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Build Something Great?</h3>
            <p className="text-slate-800 text-lg mb-6">Contact us today for a free quote and consultation.</p>
            <a href="mailto:sales@murynaqabe.co.uk" className="inline-block bg-slate-900 text-white font-bold px-8 py-3 rounded-full hover:bg-slate-800 transition shadow-lg hover:shadow-xl">
              Request Free Quote
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Base animation styles */
        .scroll-reveal {
          opacity: 0;
        }

        /* Fade Up */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }

        /* Fade Left */
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-left {
          animation: fadeLeft 0.7s ease-out forwards;
        }

        /* Fade Right */
        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-right {
          animation: fadeRight 0.7s ease-out forwards;
        }

        /* Drop Down (Rain effect) */
        @keyframes dropDown {
          0% {
            opacity: 0;
            transform: translateY(-80px) rotateX(-30deg);
          }
          60% {
            opacity: 0.8;
            transform: translateY(10px) rotateX(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
        .animate-drop-down {
          animation: dropDown 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Zoom In */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-zoom-in {
          animation: zoomIn 0.6s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
<FloatingButton />    </>
  );
}
