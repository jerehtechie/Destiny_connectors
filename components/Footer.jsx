// src/components/DestinyConnector/Footer.jsx
import React from 'react';

export default function Footer({ setCurrentPage }) {
  // ↑ We now accept setCurrentPage as a prop

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Diaspora', page: 'diaspora' },
    { label: 'Projects', page: 'listings' }, // assuming "Projects" goes to listings page
    // { label: 'Blog', page: 'blog' },     // add if you want it in footer too
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/company_logo.png"
              alt="Destiny Connector Logo"
              className="w-20 object-contain"
            />
            <span className="text-2xl font-bold tracking-tighter">Destiny Connector</span>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Licensed Land Seller • PPRA Member<br />
            Connecting Kenyans to their future since 2018
          </p>
        </div>

        {/* Quick Links – now clickable */}
        <div className="text-sm">
          <div className="font-semibold mb-4">Quick Links</div>
          <div className="grid grid-cols-2 gap-y-3">
            {quickLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => setCurrentPage(link.page)}
                className="text-left text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact & Copyright */}
        <div>
          <div className="text-sm">
            Nairobi • Thika Road, Opposite Garden City
          </div>
          <div className="mt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} Destiny Connector Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}