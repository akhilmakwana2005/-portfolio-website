import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass-effect mt-20 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Akhil Makwana. All rights reserved.
        </p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a 
            href="https://github.com/akhilmakwana2005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/akhil-makwana-700772305" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="mailto:akhilmakwana745@gmail.com" 
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

