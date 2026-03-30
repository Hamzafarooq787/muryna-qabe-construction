'use client'

import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 bg-[#fbf9f8] text-[#1b1c1c] font-sans">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #d0c6ab 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#705d00] mb-4 block">
            Our Portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
            Constructing{" "}
            <span className="text-[#e9c400]">Excellence</span> Across The UK.
          </h1>

          <p className="text-[#5f5e5e] text-lg max-w-xl">
            From bespoke residential joinery to large-scale commercial structures,
            our work stands as a testament to technical precision and architectural integrity.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#7e775f] mr-4">
            Classification:
          </span>

          {["All Projects", "Residential", "Commercial", "Interior Joinery"].map((item, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all
              ${i === 0
                  ? "bg-[#e4e2e1] font-bold"
                  : "bg-[#f6f3f2] text-[#5f5e5e] hover:bg-[#ffd700] hover:text-black"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">

          {/* ITEM */}
          <ProjectCard
            className="md:col-span-8 md:row-span-3"
            title="The Glass Pavilion"
            category="Residential"
            location="Oxfordshire, UK"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFOd-8VXpHhJuMMTqbakuOZFq2sRtKLBV6O6TXSikE6mZIghgNmSzVB2uwg_-wBFZi25jZWjbXrDulEcggYhhpEDOFn0dJi-k02NSNAGmBV0PA3xf--RZY3QTNtMrFc0OHpBbTKhQ6AqA4n7kl9gKUR-8yoQUujrEIR7kXzpp_3LfiruweTGJmfXzqDhCNk8d7I8uSwMxk1uv8a2exsJ_AbFYrUFqUoGc-xEtFbOKeDdyFbKypgZhWYc_Fj1EiHYCbBsSS6trPg15"
          />

          <ProjectCard
            className="md:col-span-4 md:row-span-4"
            title="Brick Lane Suites"
            category="Urban Living"
            location="London, UK"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAwazjIRVHyFIMMxL1JtNzMWvCGmBmaNZzehh_nBRij7v-oo31je8B2rFGVwPEVMFLCltpUOc3z7j-Vs7zjC-Xjo20ilsMFRcbPdyO4t2PFIP35-IPp_VBXCaiYvJI8oZGr1Pcbt93wcRCCsjK5T93i6Biml1Es4z99tviQr06K83hH9TzWpl-EQP815qNcgusFd5n5WAiqSQlbTUOkYPy-7fyMAo455vjS87LVL70IxVhKf3YpG69LITCNnHiY6gNP39fp8iPBfN5a"
          />

          <ProjectCard
            className="md:col-span-4 md:row-span-3"
            title="Nexus Tech Hub"
            category="Commercial"
            location="Manchester, UK"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBEg6O1U7I6ZfacoCzq7Ln4GPVPhpBVjrrle9gY6yfArmU56Gb9y1eEiEhP_08aOdHxSlmIfXsq44W_XJpQ7cVP2t7_zqgFRdWLyuEIkYFpb3798gG6hdDledkH32JMFgXht9qvbkgMFgHD5i_YmdmL6KRgoz3ZOAcVkyLCeluQ6oAFmqb-irsJYUxTCmCG4WeOB5WTbQat4h_UYyGc2AyxMdKfDd62P1sXPY0kW-yMZkyuqQ6vdos7SSpRh2mySgB2zGDk5wJ3e1nr"
          />

          <ProjectCard
            className="md:col-span-4 md:row-span-2"
            title="The Oak Library"
            category="Joinery"
            location="Stoke-on-Trent, UK"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBwZXSo-TKKqtL1J0Pj5rwegY9o3QANg71Nj8_Uzae9TrG9kxJpInBlQ6jF52y-kxo0KqM_ornwB5UzBNHjDQn_tbRypG1HuZ14MinHjfIMMRL_g4e7JX3hsdeiNSKWfq_TqGv7RXgjHnIRboKWTZ5A7jkjAAA7HuKVKhxxsXD9kTy9zRXXGBMrQLEdBQ8tOXweVb5S5V05KVNaTicT4OoainQzbDHZw39qdpVHRzvXpSWfUWmO_EL4LwTVXF3KaIHKTdSgE8DF-Q0h"
          />

          <ProjectCard
            className="md:col-span-4 md:row-span-4"
            title="Sentinel Tower"
            category="Infrastructure"
            location="Birmingham, UK"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCqxd3VAQ1kp5phdwNqjFe8_R54xz3FffFgGD8t55JT9XSTJegrgyOTQb9M1vQpslAPzuYqjz0Ugkrbp3n9lq53uRA6Kuap8-FfqA1ez8FyOlKgP1mYRzBdcbfSxZpffvXvNfk7CNMvS8XwE15pnE9n9f_gVJS_yvGgv20tEANPmfueFzpywwSwUO9e7r3P3SXbmewmYL56ZrbpwwhX80tEJBurYHyLCWBxjitZA_z_RUNJgZ6yfhn2fqiPZRUzL4S9G6ETMXIXV2Hg"
          />

          <ProjectCard
            className="md:col-span-8 md:row-span-3"
            title="The Marble Residence"
            category="Residential Interior"
            location="Cheshire, UK"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDmaXo3hSv6kNTbelX19gfUAuEM_I8SfKTQWnj73ZKpsE0ctkRsaXMZ0ClnmsWSmSuXBWIF1hO1yejGwnCJtbRnzOqk_BqiFwLRfukc2JwQN1-MT9JhSKIYn-T9w9OzhI3A7Qq3qUBUDDpr6r38AA0ZMHaLheZAm0ic5hlVh1iy80BuqExuJyy1urep8mUGyHTEUPMbgB436HqqCD_kPriOBl5CxU1aBhnhLbBMRw28ynnBQqaqxtGlx8RQIPG6KI4WAQTiawm9kZlq"
          />

        </div>
      </section>

      {/* STATS */}
      <section className="mt-24 bg-[#f6f3f2] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["150+", "Projects Completed"],
            ["12", "Awards Won"],
            ["100%", "Safety Record"],
            ["24/7", "Project Support"]
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-black text-[#705d00] mb-2">
                {item[0]}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#5f5e5e] font-bold">
                {item[1]}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}


// COMPONENT
function ProjectCard({
  className,
  title,
  category,
  location,
  img,
}: any) {
  return (
    <div className={`group relative overflow-hidden rounded-xl ${className}`}>
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
        <span className="text-[#ffd700] text-xs font-bold uppercase mb-2">
          {category}
        </span>
        <h3 className="text-white text-xl md:text-2xl font-bold">
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{location}</p>
      </div>
    </div>
  );
}