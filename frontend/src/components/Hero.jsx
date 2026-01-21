import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-teal-600">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">Trusted by 50,000+ customers</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Pure Hydration
                <span className="block text-teal-600">Made Simple</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover premium water bottles and convenient water packets designed for your active lifestyle. 
                Stay hydrated wherever life takes you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group">
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Bottles Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1571741140674-5201f86b95fe?w=600&h=700&fit=crop&crop=center" 
                alt="Quench Water Bottles"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-coral-400 to-orange-500 rounded-full opacity-20 blur-2xl"></div>
            
            {/* Floating Cards */}
            <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-teal-600 fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Premium Quality</div>
                  <div className="text-sm text-gray-600">BPA-Free Materials</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-12 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-coral-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fast Shipping</div>
                  <div className="text-sm text-gray-600">2-Day Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;