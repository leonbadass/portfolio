

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white fixed w-full shadow-lg">
      <h1 className="text-1xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#documentation" className="bg-gray-200 text-blue-900 font-bold px-2 py-2 rounded-lg hover:bg-gray-700 hover:text-gray-200 hover:text-lg">Technical Writing</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#about" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
