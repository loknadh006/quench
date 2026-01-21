import React from 'react';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Quench</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium hydration solutions designed for your active lifestyle. 
                Pure water, premium bottles, exceptional experience.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-400 hover:bg-teal-900/20 p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-400 hover:bg-teal-900/20 p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-400 hover:bg-teal-900/20 p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-400 hover:bg-teal-900/20 p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-teal-400 transition-colors">Features</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-teal-400 transition-colors">Products</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-teal-400 transition-colors">Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Customer Service</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Track Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Stay Hydrated</h3>
              <p className="text-gray-400 text-sm">
                Subscribe to get special offers, free giveaways, and hydration tips.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300">
                  Subscribe
                </Button>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@quench.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">1-800-QUENCH-1</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Quench. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;