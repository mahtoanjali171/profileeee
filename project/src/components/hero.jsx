export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h2 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I'm <span className="text-teal-400">Your Name</span></h2>
      <p className="max-w-xl text-gray-400 mb-8">
        I'm a front-end developer passionate about building beautiful, responsive websites.
      </p>
      <a href="#projects" className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-md font-semibold transition">
        View My Work
      </a>
    </section>
  );
}
