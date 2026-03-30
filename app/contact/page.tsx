"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  // Gallery images (same style as Services page)
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
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNr2fwwJwTNPNzkdtWgG6rVN13BVQc_K-eVqPfPdboY-3vIjKhIN2U1RXgWJ1iI4ZblvsBC-N-9mmiFZg-g-_Z9Z1XWBm2CJkoSCvLd--2LVhceQb-arcJ6-Pg5e00QZOZVNh37TDeg84HjYpIpbXhuISbI2-Pjtk9upz8-0CPtBU1BCM4q8wJ6v-PZ2JJs0fj8kl0LjWxsJIUG-fZAQTw4i9uJZmjlcW3DYIwt_Y6KrJ7sMx1jEjj_p5kDBhMV7svOFXYNpZDtddV",
      title: "Landscaping",
    },
  ];

  return (
    <main className="relative min-h-screen font-sans overflow-x-hidden">
      {/* FIXED BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjDjGkS4MHBFsV66wNEA82X3V9X8oI5u-CJMy0SSOp3PPscHNHGXU7sawntY7ZLEcKqgI8G28DZQxHhXqHFi8qmhp-FmS93GAYlQUh2gzR-O-VPsOJFkmYFWwBz7OYA5vyoS8Wd8pI7QrA51gC5FxK_WfO3b1mcP0DhBX6A5pmi0qX7yZSWlNCMJ8tWuJzbDm3COXNKN3JiLyg4Inl0d6iFQsW2RfoA8RcmeBcj1kzFCLc9nSvNyBi_DB4BRGz-xFIokBJh441fWNd')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/95 backdrop-blur-sm py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-600 mb-4 block">
                Let's Build Together
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
                Architecting Your <br />
                <span className="bg-black text-yellow-400 px-2 inline-block">
                  Vision.
                </span>
              </h1>
              <p className="text-gray-700 max-w-md text-base sm:text-lg">
                Precision, authority, and structural integrity. Reach out to the team for your next high-end construction project.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfz54WirfUCZMpbka5Q3Ii-rn_2KBHE0qJ2GTwDxA3jXlps7orcRrBqDWVFeOIImmQ10mCpgPOaHV9M-yws98D1WKxqQjutauWYwv_FcOamWz8B_xGZTEqEQF5PbUhBEkcOlDZi1yNWiUXOicMNgj_ImMKCD12cnbpAcHcv1mg5CM-Bl-KaAKCnz1lu5XRZuBQvHrg2-poU3j5_29ZhxLV2IThs2j2Ts8ohui75x3wvS7j4SkMz_vzRR3BjDFAFE59wDOqKjHqGf8o"
                alt="Office"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* GALLERY SECTION - like Services page */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Work in Action
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Browse through some of our recent projects and materials.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-black">{img.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">High quality materials</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FORM + INFO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* FORM */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-black">Inquiry Form</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-3 font-bold uppercase tracking-wide hover:scale-105 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* INFO CARDS */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">
                  Headquarters
                </h3>
                <p className="text-gray-300 text-sm">
                  66 Machin Street <br />
                  Stoke-on-Trent <br />
                  ST6 6BT, UK
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold mb-4 text-black">Contact Channels</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-black">Sales:</strong>{" "}
                    <a href="mailto:sales@murynaqabe.co.uk" className="text-gray-700 hover:text-yellow-600">
                      sales@murynaqabe.co.uk
                    </a>
                  </p>
                  <p>
                    <strong className="text-black">Director:</strong>{" "}
                    <a href="mailto:nicolae.turcitu@murynaqabe.co.uk" className="text-gray-700 hover:text-yellow-600">
                      nicolae.turcitu@murynaqabe.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* GOOGLE MAP */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[400px]"
      >
        <iframe
          src="https://www.google.com/maps?q=66+Machin+Street+Stoke-on-Trent+ST6+6BT&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </motion.section>

      {/* EXTRA SECTION with image */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="h-[250px] sm:h-[300px] relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwdidPSnjiP0CN14Or9U_C_FVMByc6HW_Mec7sNHkMpZ_Yl5zf-e_M_V2Vt8QquO9Ptv45AtDH-O8NZSKHvaSNq02bHrKJE4eYfjKTmiesVWxge0VA7Kdm46V_Z9g2Sx7T8Fr2-sRedq_gSTE-hmPHu5CdvsuXKPN2tZq7_vGh7fFmr8xzABpz2zhbq19hDtAiekhrQwJD8PzoFkLcYEgzWpXGtdK7yWXrDzfogEBOvjkNVyPMrcMC2UJcRwIPjXJz5_zDFrZZi9HZ"
                alt="Blueprint"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
            <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
                Built on Integrity.
              </h2>
              <p className="text-gray-700 mb-6 text-base sm:text-lg">
                Every communication and project is handled with precision and trust.
              </p>
              <div className="border-l-4 border-yellow-400 pl-4 text-gray-600 italic">
                "We don't just build structures, we build trust."
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}