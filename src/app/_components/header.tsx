import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-6 top-0 left-0 w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-medium tracking-tight text-black hover:text-gray-700 transition-colors">
          Home
        </Link>
        <div className="flex space-x-8 items-center">
          <a 
            href="https://github.com/imbjdd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/salim-boujaddi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <Link 
            href="/articles" 
            className="text-gray-500 hover:text-black transition-colors"
          >
            Articles
          </Link>
          <Link 
            href="/resume.pdf" 
            className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-all duration-300"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
