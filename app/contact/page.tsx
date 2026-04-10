"use client";

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZVA9WKHLMgOquilgi8V1Bh7nx7P7PHIfv8aoh6B78oxknGjsNbVkETIxKLXWLbWbDoZN2XzbilVUWOPZ88joO0sri_OEuRuIbgHHKhQfFykIcDl5ZEelBb4pRit0OZB5HbF5qr3-nT1wm_VktYmPmsQZCzLtsX5RqHfF28Qwuoq6iKQ65ZHUFyRiXJ9e0wLQ15P4sNYf_HCc7c2vfXh-twGvyyC0z4Ep2hDsimTKUwTyzXqzy392oklEeHSnWIG2010Xd6P_Lkuy",
    title: "Premium Timber",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7DyZiYEU7K2-XQao1Znxs3yDvuMteTM353sYUezNMI8SSuM5kDk1ImC0egFUn6T9D_NF8GfNKZb5NYOFZlO6CCu2UF10oW4Jk1SXRcfQvQ9oQVg4QZ2s2EmhFTIKuilpHsDEVUtz7qeNB2Ez8xnHmUBBvMt4MIkhx_3NQQrkO1kiw-NYT5PaOZan4ZTAeV3ET0BBAd7hvceVl5dq3s7JKHTWJXfGBqsDGzez-heqeRWNQ04vFlSP7bhN_WyA7OX86PJu_ij4c30aw",
    title: "Building Materials",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfz54WirfUCZMpbka5Q3Ii-rn_2KBHE0qJ2GTwDxA3jXlps7orcRrBqDWVFeOIImmQ10mCpgPOaHV9M-yws98D1WKxqQjutauWYwv_FcOamWz8B_xGZTEqEQF5PbUhBEkcOlDZi1yNWiUXOicMNgj_ImMKCD12cnbpAcHcv1mg5CM-Bl-KaAKCnz1lu5XRZuBQvHrg2-poU3j5_29ZhxLV2IThs2j2Ts8ohui75x3wvS7j4SkMz_vzRR3BjDFAFE59wDOqKjHqGf8o",
    title: "Our Office & Team",
  },
];

export default function ContactPage() {
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
        <title>Contact Us | MURYNA QABE LTD</title>
        <meta
          name="description"
          content="Get in touch with MURYNA QABE LTD for construction inquiries, quotes, and support."
        />
      </Head>
      <main className="relative min-h-screen bg-[#0f172a]">
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
        <section className="relative z-10 min-h-[60vh] flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto py-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30 mb-6">
                <span className="material-symbols-outlined text-amber-400 text-base">
                  call
                </span>
                <span className="text-amber-400 text-sm font-medium">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Let's Build <span className="text-amber-400">Together</span>
              </h1>
              <div className="w-24 h-1 bg-amber-400 mx-auto my-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Precision, authority, and structural integrity. Reach out to the
                team for your next high-end construction project.
              </p>
              <div className="flex justify-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400">
                    schedule
                  </span>
                  <span className="text-gray-300">Mon-Fri: 8am-5pm</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400">
                    verified
                  </span>
                  <span className="text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section - with sizes prop */}
        <section className="relative z-10 py-16 md:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="scroll-reveal group relative rounded-2xl overflow-hidden shadow-xl"
                  data-animation={
                    idx === 0 ? "fade-left" : idx === 1 ? "zoom-in" : "fade-right"
                  }
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition duration-500 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white text-xl font-bold">{img.title}</h3>
                    <p className="text-amber-400 text-sm">Premium Quality</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Info Section */}
        <section className="relative z-10 py-16 md:py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
              <div
                className="lg:col-span-7 scroll-reveal bg-[#1e293b]/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-xl"
                data-animation="fade-left"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-amber-400 text-3xl">
                    edit_note
                  </span>
                  <h2 className="text-2xl font-bold text-white">Inquiry Form</h2>
                </div>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 bg-[#0f172a]/80 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 bg-[#0f172a]/80 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 bg-[#0f172a]/80 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full p-3 bg-[#0f172a]/80 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  ></textarea>
                  <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-base">
                      send
                    </span>
                  </button>
                </form>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div
                  className="scroll-reveal bg-[#1e293b]/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-xl"
                  data-animation="fade-right"
                >
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-amber-400 text-3xl">
                      location_on
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Headquarters
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        66 Machin Street<br />
                        Stoke-on-Trent<br />
                        ST6 6BT, UK
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="scroll-reveal bg-[#1e293b]/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-xl"
                  data-animation="fade-right"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-amber-400 text-3xl">
                      mail
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Contact Channels
                      </h3>
                      <div className="space-y-2">
                        <p>
                          <span className="text-gray-400 text-sm">Sales:</span>
                          <br />
                          <a
                            href="mailto:sales@murynaqabe.co.uk"
                            className="text-amber-400 hover:text-amber-300 transition text-sm"
                          >
                            sales@murynaqabe.co.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <div className="relative z-10 w-full h-[450px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a] pointer-events-none z-10"></div>
          <iframe
            src="https://www.google.com/maps?q=66+Machin+Street+Stoke-on-Trent+ST6+6BT&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* CTA */}
        <div className="bg-amber-500 py-14 md:py-16 text-center scroll-reveal" data-animation="zoom-in">
          <div className="container mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Build Something Great?
            </h3>
            <p className="text-slate-800 text-lg mb-6">
              Contact us today for a free quote and consultation.
            </p>
            <a
              href="mailto:sales@murynaqabe.co.uk"
              className="inline-block bg-slate-900 text-white font-bold px-8 py-3 rounded-full hover:bg-slate-800 transition shadow-lg"
            >
              Request Free Quote
            </a>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .scroll-reveal {
          opacity: 0;
        }
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
          animation: fadeUp 0.8s ease forwards;
        }
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
          animation: fadeLeft 0.7s ease forwards;
        }
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
          animation: fadeRight 0.7s ease forwards;
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-zoom-in {
          animation: zoomIn 0.6s ease forwards;
        }
      `}</style>
    </>
  );
}
