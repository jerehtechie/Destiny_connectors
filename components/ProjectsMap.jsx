import React from 'react';

export default function ProjectsMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-4">Our Projects Across Kenya</h2>
        <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
          Interactive map showing all active developments
        </p>
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010000!2d36.5!3d-1.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172b6f2c7a7%3A0x4c9c8b8e8b8e8b8e!2sKenya!5e0!3m2!1sen!2ske!4v1700000000000"
            width="100%"
            height="520"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Destiny Connector Projects Map"
          />
        </div>
        <p className="text-xs text-center text-gray-400 mt-6">
          Zoom & click markers for project details • Updated March 2026
        </p>
      </div>
    </section>
  );
}