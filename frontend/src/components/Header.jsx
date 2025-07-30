import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Droplets } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Quench</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Features
            </a>
            <a href="#products" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Products
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Contact
            </a>
            <Button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors font-medium px-4">
                Features
              </a>
              <a href="#products" className="text-gray-700 hover:text-teal-600 transition-colors font-medium px-4">
                Products
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors font-medium px-4">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium px-4">
                Contact
              </a>
              <div className="px-4">
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full transition-all duration-300">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;