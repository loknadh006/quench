import React from 'react';
import { mockCompanyStats } from '../mock';

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {mockCompanyStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-teal-100 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;