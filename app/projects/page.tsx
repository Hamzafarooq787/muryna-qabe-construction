'use client'

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Counter Component
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

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-bold text-amber-400">
      {count}{suffix}
    </span>
  );
}

export default function ProjectsPage() {
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

  const filterButtons = ["All Projects", "Residential", "Commercial", "Interior Joinery"];
  const statsData = [
    { target: 150, suffix: "+", label: "Projects Completed" },
    { target: 12, suffix: "", label: "Awards Won" },
    { target: 100, suffix: "%", label: "Safety Record" },
    { target: 24, suffix: "/7", label: "Project Support" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0f172a] text-white font-sans overflow-x-hidden">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjDjGkS4MHBFsV66wNEA82X3V9X8oI5u-CJMy0SSOp3PPscHNHGXU7sawntY7ZLEcKqgI8G28DZQxHhXqHFi8qmhp-FmS93GAYlQUh2gzR-O-VPsOJFkmYFWwBz7OYA5vyoS8Wd8pI7QrA51gC5FxK_WfO3b1mcP0DhBX6A5pmi0qX7yZSWlNCMJ8tWuJzbDm3COXNKN3JiLyg4Inl0d6iFQsW2RfoA8RcmeBcj1kzFCLc9nSvNyBi_DB4BRGz-xFIokBJh441fWNd')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]/90"></div>

      {/* Hero Centered */}
      <section className="relative z-10 min-h-[50vh] flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30 mb-6">
              <span className="material-symbols-outlined text-amber-400 text-base">folder</span>
              <span className="text-amber-400 text-sm font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Constructing <span className="text-amber-400">Excellence</span> Across The UK.
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto my-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From bespoke residential joinery to large-scale commercial structures,
              our work stands as a testament to technical precision and architectural integrity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="relative z-10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-nowrap md:flex-wrap gap-3 items-center overflow-x-auto pb-2 md:pb-0 justify-center">
            {filterButtons.map((item, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all whitespace-nowrap
                  ${i === 0
                    ? "bg-amber-500 text-black font-bold"
                    : "bg-slate-800 text-gray-300 hover:bg-amber-500/20 hover:text-amber-400"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid with Fixed Row Height (200px) - like before */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[200px]">
            
            {/* The Glass Pavilion - tall */}
            <ProjectCard
              className="lg:col-span-8 lg:row-span-3"
              title="The Glass Pavilion"
              category="Residential"
              location="Oxfordshire, UK"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFOd-8VXpHhJuMMTqbakuOZFq2sRtKLBV6O6TXSikE6mZIghgNmSzVB2uwg_-wBFZi25jZWjbXrDulEcggYhhpEDOFn0dJi-k02NSNAGmBV0PA3xf--RZY3QTNtMrFc0OHpBbTKhQ6AqA4n7kl9gKUR-8yoQUujrEIR7kXzpp_3LfiruweTGJmfXzqDhCNk8d7I8uSwMxk1uv8a2exsJ_AbFYrUFqUoGc-xEtFbOKeDdyFbKypgZhWYc_Fj1EiHYCbBsSS6trPg15"
            />

            {/* Brick Lane Suites - very tall */}
            <ProjectCard
              className="lg:col-span-4 lg:row-span-4"
              title="Brick Lane Suites"
              category="Urban Living"
              location="London, UK"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAwazjIRVHyFIMMxL1JtNzMWvCGmBmaNZzehh_nBRij7v-oo31je8B2rFGVwPEVMFLCltpUOc3z7j-Vs7zjC-Xjo20ilsMFRcbPdyO4t2PFIP35-IPp_VBXCaiYvJI8oZGr1Pcbt93wcRCCsjK5T93i6Biml1Es4z99tviQr06K83hH9TzWpl-EQP815qNcgusFd5n5WAiqSQlbTUOkYPy-7fyMAo455vjS87LVL70IxVhKf3YpG69LITCNnHiY6gNP39fp8iPBfN5a"
            />

            {/* Nexus Tech Hub */}
            <ProjectCard
              className="lg:col-span-4 lg:row-span-3"
              title="Nexus Tech Hub"
              category="Commercial"
              location="Manchester, UK"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBEg6O1U7I6ZfacoCzq7Ln4GPVPhpBVjrrle9gY6yfArmU56Gb9y1eEiEhP_08aOdHxSlmIfXsq44W_XJpQ7cVP2t7_zqgFRdWLyuEIkYFpb3798gG6hdDledkH32JMFgXht9qvbkgMFgHD5i_YmdmL6KRgoz3ZOAcVkyLCeluQ6oAFmqb-irsJYUxTCmCG4WeOB5WTbQat4h_UYyGc2AyxMdKfDd62P1sXPY0kW-yMZkyuqQ6vdos7SSpRh2mySgB2zGDk5wJ3e1nr"
            />

            {/* The Oak Library */}
            <ProjectCard
              className="lg:col-span-4 lg:row-span-2"
              title="The Oak Library"
              category="Joinery"
              location="Stoke-on-Trent, UK"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBwZXSo-TKKqtL1J0Pj5rwegY9o3QANg71Nj8_Uzae9TrG9kxJpInBlQ6jF52y-kxo0KqM_ornwB5UzBNHjDQn_tbRypG1HuZ14MinHjfIMMRL_g4e7JX3hsdeiNSKWfq_TqGv7RXgjHnIRboKWTZ5A7jkjAAA7HuKVKhxxsXD9kTy9zRXXGBMrQLEdBQ8tOXweVb5S5V05KVNaTicT4OoainQzbDHZw39qdpVHRzvXpSWfUWmO_EL4LwTVXF3KaIHKTdSgE8DF-Q0h"
            />

            {/* Sentinel Tower - very tall */}
            <ProjectCard
              className="lg:col-span-4 lg:row-span-4"
              title="Sentinel Tower"
              category="Infrastructure"
              location="Birmingham, UK"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCqxd3VAQ1kp5phdwNqjFe8_R54xz3FffFgGD8t55JT9XSTJegrgyOTQb9M1vQpslAPzuYqjz0Ugkrbp3n9lq53uRA6Kuap8-FfqA1ez8FyOlKgP1mYRzBdcbfSxZpffvXvNfk7CNMvS8XwE15pnE9n9f_gVJS_yvGgv20tEANPmfueFzpywwSwUO9e7r3P3SXbmewmYL56ZrbpwwhX80tEJBurYHyLCWBxjitZA_z_RUNJgZ6yfhn2fqiPZRUzL4S9G6ETMXIXV2Hg"
            />

            {/* The Marble Residence - wide */}
            <ProjectCard
              className="lg:col-span-8 lg:row-span-3"
              title="The Marble Residence"
              category="Residential Interior"
              location="Cheshire, UK"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDmaXo3hSv6kNTbelX19gfUAuEM_I8SfKTQWnj73ZKpsE0ctkRsaXMZ0ClnmsWSmSuXBWIF1hO1yejGwnCJtbRnzOqk_BqiFwLRfukc2JwQN1-MT9JhSKIYn-T9w9OzhI3A7Qq3qUBUDDpr6r38AA0ZMHaLheZAm0ic5hlVh1iy80BuqExuJyy1urep8mUGyHTEUPMbgB436HqqCD_kPriOBl5CxU1aBhnhLbBMRw28ynnBQqaqxtGlx8RQIPG6KI4WAQTiawm9kZlq"
            />
          </div>
        </div>
      </section>

      {/* Stats with Counters */}
      <section className="relative z-10 py-16 bg-slate-800/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, i) => (
              <div key={i} className="scroll-reveal" data-animation="fade-up">
                <Counter target={stat.target} suffix={stat.suffix} />
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Project Card - fills entire grid cell (h-full)
function ProjectCard({ className, title, category, location, img }: any) {
  return (
    <div className={`group relative overflow-hidden rounded-xl h-full ${className} scroll-reveal`} data-animation="zoom-in">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 md:p-6">
        <span className="text-amber-400 text-xs font-bold uppercase mb-1">{category}</span>
        <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">{title}</h3>
        <p className="text-gray-200 text-xs md:text-sm mt-1">{location}</p>
      </div>
    </div>
  );
}