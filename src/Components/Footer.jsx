import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">WarmPaws</h2>
          <p>Email: info@warmpaws.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Winter St, Cozy City, USA</p>
        </div>

        {/* Quick Links / Privacy */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/profile" className="hover:text-white transition-colors">My Profile</a></li>
            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
