import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-primary">
            Pensionable.ai
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary">Home</a>
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
