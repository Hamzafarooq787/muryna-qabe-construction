"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
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

  return (
    <>
      <Head>
        <title>MURYNA QABE LTD | Construction Specialists</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <div className="bg-surface text-on-surface font-sans">


        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a4a4f] to-[#2a6a6f] text-white py-16 md:py-24 animate-on-scroll">

          {/* CONTENT */}
          <div className="container relative z-10 mx-auto px-5 flex flex-col md:flex-row items-center gap-10">

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                TOP-QUALITY <span className="text-yellow-300">BUILDING MATERIALS</span> FOR EVERY PROJECT
              </h2>

              <p className="text-lg opacity-90 mt-5">
                At MURYNA QABE LTD, we offer a complete range of construction essentials.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
                <a className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                  Get a Quote
                </a>
                <a className="border-2 border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={330}
                height={140}
                className="opacity-90"
                unoptimized
              />
            </div>
          </div>

          {/* OSCILLATING YELLOW WAVE - full width, goes up and down */}
          <div className="absolute bottom-0 left-0 w-full z-0">
            <svg
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
              className="w-full h-auto"
            >
              <path
                d="M0,80 
           C100,60 150,20 250,40 
           C350,60 400,80 500,60 
           C600,40 650,10 750,30 
           C850,50 900,70 1000,50 
           C1100,30 1150,10 1200,25 
           L1200,80 L0,80 Z"
                fill="#fbed00"
                opacity="0.85"
              />
            </svg>
          </div>
        </section>

        {/* Services Section - slightly altered */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-5">
            <div className="text-center mb-12 animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-bold inline-block relative after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary-container pb-4">What We Offer</h3>
            </div>
            <p className="text-center max-w-3xl mx-auto text-secondary mb-12 animate-on-scroll">
              We deliver a full spectrum of construction solutions: quality timber, building supplies, landscaping products, doors, windows, joinery, professional tools, safety wear, and plant hire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <Image src={s.img} alt={s.title} width={600} height={400} className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105" unoptimized />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                    <p className="text-secondary">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features - changed text */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-on-scroll">
              <ul className="space-y-6">
                {["Qualified and experienced team", "Punctual and tidy service", "Domestic and commercial expertise", "Highly recommended across the region"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <i className="fas fa-check-circle text-primary-container text-2xl"></i> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 animate-on-scroll">
              <Image src="https://mileengineersltd.co.uk/wp-content/uploads/2025/08/51b7b2bba322883e1b04caa41eb35660.jpg" alt="Team working" width={500} height={350} className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300" unoptimized />
            </div>
          </div>
        </section>

        {/* Carousel */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-5">
            <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} autoplay={{ delay: 4000, disableOnInteraction: false }} loop>
              {carouselImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img src={src} alt={`gallery ${idx}`} className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Double Content - reworded */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-5 space-y-20">
            <div className="flex flex-col md:flex-row gap-12 items-center animate-on-scroll">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-5">Elevate Your Property with Premium Doors, Windows & Joinery</h3>
                <p className="text-gray-700">At MURYNA QABE LTD, we know that doors, windows, and joinery define a building's character. Our products merge practicality with beauty, fitting both contemporary and classic homes. Every piece is made to last, offering security, insulation, and visual charm. Whether you need a single door or a complete window set, we tailor solutions to your exact needs.</p>
              </div>
              <div className="flex-1">
                <Image src="https://mileengineersltd.co.uk/wp-content/uploads/elementor/thumbs/7291b5bc905ce2ce23d5825ec3f132f8-racnnelasdtzommr14e9sxw9vgn7ur6stc9mlz1xg4.jpg" width={500} height={400} className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" alt="joinery" unoptimized />
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center animate-on-scroll">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-5">Collaborate with Us on Your Next Construction or Renovation</h3>
                <p className="text-gray-700">Choosing the right partner makes all the difference. At MURYNA QABE LTD, we don't just sell materials – we offer end-to-end support. From planning to completion, our team ensures you get the right products, tools, and machinery. We are known for dependability, speed, and industry insight. Partner with us and experience a smoother, more successful project journey.</p>
              </div>
              <div className="flex-1">
                <Image src="https://mileengineersltd.co.uk/wp-content/uploads/elementor/thumbs/f9628f4b6490b05318f37b6473b24e6d-racn3cp8zmdepbhjt07p2drrejhlbdsodbo4q1jjt6.jpg" width={500} height={400} className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" alt="partnership" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info - updated emails and address as before */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold inline-block after:bg-primary-container pb-4">Contact Us</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
                <i className="fas fa-map-marker-alt text-primary-container text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">OUR LOCATION</h4>
                <p>66 MACHIN STREET<br />STOKE-ON-TRENT<br />ST6 6BT, United Kingdom</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
                <i className="fas fa-envelope text-primary-container text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">EMAIL US</h4>
                <p>sales@murynaqabe.co.uk</p>
                <p>nicolae.turcitu@murynaqabe.co.uk</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
                <i className="fas fa-phone-alt text-primary-container text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">CALL US</h4>
                <p>+44 (0) 1782 123 456</p>
                <p className="text-sm opacity-80">Mon-Fri 8am-5pm</p>
              </div>
            </div>
            <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
              <iframe src="https://maps.google.com/maps?q=66+MACHIN+STREET+STOKE-ON-TRENT+ST6+6BT&t=m&z=15&output=embed" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-container text-on-surface py-20 text-center">
          <div className="container mx-auto px-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">Quality and reliability – the foundation of every successful build.</p>
            <a href="mailto:sales@murynaqabe.co.uk" className="inline-block bg-gray-900 text-white font-bold px-8 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg">Request Free Quote</a>
          </div>
        </section>


      </div>

      <style jsx global>{`
        .fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-on-scroll {
          opacity: 0;
        }
      `}</style>
    </>
  );
}