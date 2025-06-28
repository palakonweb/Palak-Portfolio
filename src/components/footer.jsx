import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
       
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © {new Date().getFullYear()} Palak Sharma
        </div>

        
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/palakonweb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/palak-sharma-63716930b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Palakonweb?t=fHFlBRJFhvPA9FSjFLbOCQ&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaTwitter />
          </a>
        </div>

        
        <div className="text-sm mt-4 md:mt-0">
          Made with ❤️ using React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
