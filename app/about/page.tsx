"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Stats data
const statsData = [
  { icon: "history", value: "15+", label: "Years Experience" },
  { icon: "apartment", value: "200+", label: "Projects Completed" },
  { icon: "engineering", value: "50+", label: "Expert Workers" },
  { icon: "verified", value: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* FIXED BACKGROUND IMAGE - covers entire page */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjDjGkS4MHBFsV66wNEA82X3V9X8oI5u-CJMy0SSOp3PPscHNHGXU7sawntY7ZLEcKqgI8G28DZQxHhXqHFi8qmhp-FmS93GAYlQUh2gzR-O-VPsOJFkmYFWwBz7OYA5vyoS8Wd8pI7QrA51gC5FxK_WfO3b1mcP0DhBX6A5pmi0qX7yZSWlNCMJ8tWuJzbDm3COXNKN3JiLyg4Inl0d6iFQsW2RfoA8RcmeBcj1kzFCLc9nSvNyBi_DB4BRGz-xFIokBJh441fWNd')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hero Banner Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden bg-zinc-900/90">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto px-6 sm:px-8 pb-16 w-full text-center sm:text-left"
        >
         <p className="font-label text-yellow-400 tracking-wider uppercase mb-4 text-sm font-bold">
  The Structural Authority
</p>
<h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
  CONSTRUCTING WITH <span className="text-yellow-400">PRECISION.</span>
</h1>
        </motion.div>
      </section>

      {/* Company Intro Section */}
      <section className="py-16 md:py-20 px-6 sm:px-8 max-w-7xl mx-auto relative bg-white/95 backdrop-blur-sm rounded-2xl my-8 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-black">
              OUR FOUNDATION
            </h2>
            <div className="w-20 h-1 bg-primary-container rounded"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg"
          >
            <p>
              Established with a vision to redefine the architectural landscape of Stoke-on-Trent and beyond, MURYNA QABE LTD. stands as a beacon of structural integrity and modern engineering. Every structure is a legacy in the making.
            </p>
            <p>
              With decades of combined experience, our leadership team has navigated the complexities of commercial, industrial, and residential development. We treat every blueprint as a masterwork, ensuring excellence at every stage.
            </p>
            <button className="text-black font-bold inline-flex items-center group mt-4">
              <span className="border-b-2 border-primary-container pb-1">
                Learn about our heritage
              </span>
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto shadow-md">
                <span className="material-symbols-outlined text-primary-container text-2xl sm:text-3xl">
                  {stat.icon}
                </span>
              </div>
              <div>
                <div className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-black">
                  {stat.value}
                </div>
                <p className="font-label text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission, Vision, Aim Section - with actual images */}
      <section className="py-16 md:py-20 space-y-16 md:space-y-20 px-6 sm:px-8">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <div className="order-2 lg:order-1 space-y-4">
            <div className="flex items-center space-x-3">
              <span
                className="material-symbols-outlined text-primary-container text-3xl sm:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                target
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To provide unparalleled construction services by combining innovative engineering with traditional craftsmanship, ensuring every project is delivered with safety, efficiency, and uncompromising quality.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/a1.jpg"
              alt="Our Mission"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/a2.jpg"
              alt="Our Vision"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span
                className="material-symbols-outlined text-primary-container text-3xl sm:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                visibility
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To be the most trusted structural authority in the region, recognized for our ability to tackle complex building challenges while fostering sustainable development.
            </p>
          </div>
        </motion.div>

        {/* Aim */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <div className="order-2 lg:order-1 space-y-4">
            <div className="flex items-center space-x-3">
              <span
                className="material-symbols-outlined text-primary-container text-3xl sm:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                flag
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Our Aim
              </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We aim to bridge the gap between architectural imagination and physical reality, maintaining a 100% incident-free safety record and creating inspiring spaces.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/a3.png"
              alt="Our Aim"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}