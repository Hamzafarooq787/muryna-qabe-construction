"use client";

import { usePathname } from "next/navigation";

export default function FixedBackground() {
  const pathname = usePathname();
  
  // Only these routes get the fixed background
  const routesWithBg = ["/about", "/contact", "/services", "/projects"];
  
  if (!routesWithBg.includes(pathname)) return null;

  return (
    <>
      {/* Fixed background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-construction.jpg')", // change to your image path
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />
      {/* Semi‑transparent overlay for readability */}
      <div className="fixed inset-0 -z-5 bg-white/85 backdrop-blur-[1px]" />
    </>
  );
}