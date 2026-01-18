export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-white">
      <h3 className="text-center text-3xl font-bold text-gray-900 mb-12">
        Our Tech Stack
      </h3>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {["Portal Frame Structures", "Multi-Layer Steel Frame Structures", "Steel Truss Structures", "Steel Grid Structures", "Space Frame Structures", "Arch and Shell Structures", "Structural Steel Sections"].map(
          (tech) => (
            <div
              key={tech}
              className="w-36 py-4 text-center rounded-lg border border-gray-200 shadow-sm"
            >
              {tech}
            </div>
          )
        )}
      </div>
    </section>
  );
}
