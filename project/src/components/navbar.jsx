export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800">
      <h1 className="text-xl font-bold text-teal-400">MyPortfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-teal-400">Home</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>
    </nav>
  );
}
