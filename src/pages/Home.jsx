import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen scroll-smooth transition-colors duration-300">

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b ${
          isDark
            ? "bg-[#0b0f1a]/95 border-white/10 text-gray-200"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Steelworks</h1>

          <div className="flex items-center gap-6">
            <nav className="space-x-6 text-sm">
              <a href="#products" className="hover:underline">Products</a>
              <a href="#services" className="hover:underline">Services</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>

            {/* THEME SWITCH */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`px-3 py-1 rounded border text-sm ${
                isDark
                  ? "border-white/20 hover:bg-white/10"
                  : "border-gray-300 hover:bg-gray-200"
              }`}
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        className={`pt-32 pb-24 text-center ${
          isDark ? "bg-[#0b0f1a] text-gray-200" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Steelworks
          </h2>

          <p
            className={`mt-6 text-xl ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Software & Product Engineering for modern startups.
            We design, build, and scale reliable digital platforms.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className={`scroll-mt-28 py-20 ${
          isDark ? "bg-[#111827] text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Products</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup MVP Platforms",
                desc: "Rapid development of scalable MVPs using modern technologies.",
              },
              {
                title: "Internal Dashboards",
                desc: "Operational dashboards for analytics, monitoring, and reporting.",
              },
              {
                title: "Automation Tools",
                desc: "Custom automation solutions to improve efficiency.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-xl p-6 border ${
                  isDark
                    ? "bg-[#0b0f1a] border-white/10"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className={`scroll-mt-28 py-20 ${
          isDark ? "bg-[#020617] text-gray-200" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Services</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Frontend Development (React, UI/UX)",
              "Backend & API Development",
              "Cloud Deployment & DevOps",
              "Automation & Tooling",
              "System Design & Architecture",
              "Technical Consulting",
            ].map((service) => (
              <div
                key={service}
                className={`rounded-lg p-5 border ${
                  isDark
                    ? "bg-[#0b0f1a] border-white/10"
                    : "bg-white border-gray-200"
                }`}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className={`scroll-mt-28 py-20 ${
          isDark ? "bg-[#111827] text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Get In Touch</h3>

          <div className="grid grid-cols-2 gap-12 items-start">

            {/* LEFT: CONTACT INFO */}
            <div>
              <p className="text-lg mb-6">
                Let’s discuss how Steelworks can help you build and scale your product.
              </p>

              <div className="space-y-3">
                <p>📧 raguecebec@gmail.com</p>
                <p>📞 +91 7022888907</p>

                {/* WHATSAPP MOVED HERE */}
                <p>
                  <a
                    href="https://wa.me/917022888907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center underline hover:text-green-500"
                    aria-label="Chat on WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2 text-green-500"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.373 0 .033 4.997.03 11.5a11.6 11.6 0 001.64 5.78L0 24l6.92-1.82A11.5 11.5 0 0012 23c6.627 0 12-4.997 12-11.5 0-3.08-1.02-5.94-3.48-8.02zM12 21c-1.3 0-2.57-.28-3.73-.82l-.27-.12-4.11 1.08 1.1-3.99-.17-.26A8.87 8.87 0 013.1 11.5c0-4.88 4.06-8.83 8.9-8.83 2.38 0 4.62.93 6.31 2.62A8.64 8.64 0 0120.9 11.5 8.87 8.87 0 0112 21z" />
                      <path d="M17.6 14.2c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38 0-.53-.05-.15-.68-1.6-.93-2.18-.25-.57-.5-.5-.68-.51-.17-.01-.36-.01-.55-.01-.18 0-.47.07-.72.34-.25.28-.97.94-.97 2.29 0 1.35 1 2.66 1.14 2.84.14.18 1.96 3 4.75 4.2 3.32 1.4 3.32.93 3.92.87.6-.07 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.12-.28-.2-.58-.35z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </p>

                <p>📍 Oppathavadi, Tamil Nadu, India</p>
              </div>
            </div>

            {/* RIGHT: GOOGLE MAP */}
            <div className="w-full h-[350px] rounded-xl overflow-hidden border">
              <iframe
                title="Steelworks Location"
                src="https://www.google.com/maps?q=Oppathavadi,Tamil%20Nadu&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className={`py-8 text-center border-t ${
          isDark
            ? "border-white/10 text-gray-400 bg-[#0b0f1a]"
            : "border-gray-200 text-gray-600 bg-gray-100"
        }`}
      >
        © {new Date().getFullYear()} Steelworks. All rights reserved.
      </footer>

    </div>
  );
}
