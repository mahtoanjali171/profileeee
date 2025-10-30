const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind.",
    link: "#"
  },
  {
    title: "E-commerce App",
    description: "A sleek online store built using Next.js and Stripe.",
    link: "#"
  },
  {
    title: "Chat Application",
    description: "A real-time chat app built with Firebase and React.",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-10 text-teal-400">Projects</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-teal-500/20 transition">
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <a href={p.link} className="text-teal-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
