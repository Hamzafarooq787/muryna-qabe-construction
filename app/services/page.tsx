"use client";

import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-[#fbf9f8] text-[#1b1c1c]">

      {/* HERO SECTION with fixed background image */}
      <section className="relative h-[500px] md:h-[614px] flex items-center overflow-hidden">
        {/* Fixed background image (does not scroll) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjDjGkS4MHBFsV66wNEA82X3V9X8oI5u-CJMy0SSOp3PPscHNHGXU7sawntY7ZLEcKqgI8G28DZQxHhXqHFi8qmhp-FmS93GAYlQUh2gzR-O-VPsOJFkmYFWwBz7OYA5vyoS8Wd8pI7QrA51gC5FxK_WfO3b1mcP0DhBX6A5pmi0qX7yZSWlNCMJ8tWuJzbDm3COXNKN3JiLyg4Inl0d6iFQsW2RfoA8RcmeBcj1kzFCLc9nSvNyBi_DB4BRGz-xFIokBJh441fWNd')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Black overlay (kept exactly as before) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="bg-yellow-400 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest inline-block">
            Premium Distribution
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mt-6 leading-tight">
            STRUCTURAL <br />
            <span className="text-yellow-400">PRECISION.</span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-lg text-base sm:text-lg">
            Delivering the foundations of industry with uncompromising quality.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Core Specializations
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mb-4"></div>
          <p className="text-gray-600 max-w-xl text-sm sm:text-base">
            Full-spectrum supply chain for construction professionals.
          </p>
        </div>

        {/* GRID - responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Timbers",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZVA9WKHLMgOquilgi8V1Bh7nx7P7PHIfv8aoh6B78oxknGjsNbVkETIxKLXWLbWbDoZN2XzbilVUWOPZ88joO0sri_OEuRuIbgHHKhQfFykIcDl5ZEelBb4pRit0OZB5HbF5qr3-nT1wm_VktYmPmsQZCzLtsX5RqHfF28Qwuoq6iKQ65ZHUFyRiXJ9e0wLQ15P4sNYf_HCc7c2vfXh-twGvyyC0z4Ep2hDsimTKUwTyzXqzy392oklEeHSnWIG2010Xd6P_Lkuy",
            },
            {
              title: "Building Materials",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7DyZiYEU7K2-XQao1Znxs3yDvuMteTM353sYUezNMI8SSuM5kDk1ImC0egFUn6T9D_NF8GfNKZb5NYOFZlO6CCu2UF10oW4Jk1SXRcfQvQ9oQVg4QZ2s2EmhFTIKuilpHsDEVUtz7qeNB2Ez8xnHmUBBvMt4MIkhx_3NQQrkO1kiw-NYT5PaOZan4ZTAeV3ET0BBAd7hvceVl5dq3s7JKHTWJXfGBqsDGzez-heqeRWNQ04vFlSP7bhN_WyA7OX86PJu_ij4c30aw",
            },
            {
              title: "Garden & Landscaping",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNr2fwwJwTNPNzkdtWgG6rVN13BVQc_K-eVqPfPdboY-3vIjKhIN2U1RXgWJ1iI4ZblvsBC-N-9mmiFZg-g-_Z9Z1XWBm2CJkoSCvLd--2LVhceQb-arcJ6-Pg5e00QZOZVNh37TDeg84HjYpIpbXhuISbI2-Pjtk9upz8-0CPtBU1BCM4q8wJ6v-PZ2JJs0fj8kl0LjWxsJIUG-fZAQTw4i9uJZmjlcW3DYIwt_Y6KrJ7sMx1jEjj_p5kDBhMV7svOFXYNpZDtddV",
            },
            {
              title: "Doors & Windows",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXMwUbim9OIf50WY_Myz_Vs5rlY1eJwy4_zxD7hatuwB9PpeRXqInphpH3girdY0gUff640pXBs4sjlWwRET_7AuVyRKQnJEwNWvjFSdgd3sqvZT1-_b7ozZuAyLQzN7dQfGT_xs-W3KAZb1ExKkazZ-JwM0sx_P8XLZi_KrBNiw71bcnEPUKgwNZAIvHcliIzzED8YYz8vTf6A9tmLOLmwJaaqSBIguKvAMSxOJb6_bgm9Yz02dKrt9ZztyUaxiDfx1zamvp0DojC",
            },
            {
              title: "Tools & Workwear",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClo_NG0kllQlY-nNUx4OC_Y4nImxkpW0ZvT8t0reSbekrvTM01Mhd2uuojscm8JgDSrOSTtfgTEOxj-1Jo5AE-sRGbxFJgdHgrjjeAJKV1ax3AJbJJp-AWXSKTVD7g7ikZ5MUsQzqMfT0pOdwGz5OBECk_wGy-nIuoUnmcqWk4H40OBdHDFYxmvKrvyRM-dC36EhizXNWW578NMQXGzr9EfoM8IfwtsP4JmZt_pj6wWezzgAueDaaAvZZHEACweyMAbob-A6uhU_mT",
            },
            {
              title: "Plant Hire",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRs0WhLiO67vNqe3FMtOnqICpV47NUcCbv7NsdXYaVmbZ34tr7ssaSMyuLYwMvfP395kWe4vTBUJ9VV4nNYAuGg2c_8FPXNee1YTMganO8e0kYGs5RIKb6CAjXAOj3sqAyAh1CAGQh40FN3YOMdwEbqQnEYltWwN_fJeEN9vBg86fK3n9yyVcmKfmMz-Hj6ShkDGeAfzE3aYDmyvR_u2DhGJa6RPQNVkGTc07Appr2BGB-cObHXLv08E2JtaN7vWffXvXoBW-tnkNw",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl overflow-hidden shadow hover:-translate-y-2 transition duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  High quality materials and solutions for professional construction.
                </p>
                <span className="text-yellow-500 text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to start your next build?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
            Our team is ready to assist with materials and planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 text-black px-8 py-3 font-bold rounded-md hover:scale-105 hover:bg-yellow-500 transition-all duration-200">
              Contact Sales
            </button>
            <button className="border border-white/30 px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-200">
              Download Catalog
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}