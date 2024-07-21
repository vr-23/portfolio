import React from 'react';
import { certifications } from '../../Static/static';

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-700 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 mb-2">{cert.date}</p>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
