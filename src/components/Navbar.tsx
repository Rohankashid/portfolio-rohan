import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">
            Rohan Kashid
          </Link>
          <div className="hidden md:flex flex-grow justify-center gap-8">
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#projects" className="nav-link">Projects</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </div>
          <Link 
            href="#contact" 
            className="hidden md:block px-6 py-2 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
          >
            Connect Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 