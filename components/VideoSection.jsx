import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-6">Watch Our Story</h2>
        <p className="text-center text-gray-600 mb-12">3-minute journey of how we help Kenyans own land</p>
        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
            title="Destiny Connector - Land Your Future"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}