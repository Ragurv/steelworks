import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-5xl font-extrabold text-gray-900">
            Building the Future of Technology
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Innovative software & product engineering for startups and enterprises.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 rounded-lg
                       bg-blue-600 text-white hover:bg-blue-700"
          >
            Contact Steelworks
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={hero}
            alt="Steelworks Hero"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
}
