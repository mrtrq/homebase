import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react'; // FileText for Medium icon

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-50 to-red-50">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">Let's Connect</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            I'm open for opportunities and collaborations
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6">
          <a
              href="mailto:tarreq.maulana@gmail.com"
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            <a href="https://medium.com/@tarreq.maulana"
               target="_blank"
               rel="noopener noreferrer" 
               className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                <path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 11 13 L 11 13.5 L 12.857422 16 C 12.949422 16.109 13 16.246672 13 16.388672 L 13 31.5 C 13 31.721 12.923203 31.935422 12.783203 32.107422 L 10 35.546875 L 10 36 L 18 36 L 18 35.546875 L 15.214844 32.087891 C 15.075844 31.916891 15 31.701422 15 31.482422 L 15 18.375 L 23.304688 36 L 24.847656 36 L 24.853516 35.980469 L 32 17.878906 L 32 32.75 C 32 32.91 31.935312 33.063734 31.820312 33.177734 L 29 35.546875 L 29 36 L 40 36 L 40 35.546875 L 38.179688 33.177734 C 38.064687 33.063734 38 32.91 38 32.75 L 38 16.125 C 38 15.965 38.064687 15.811266 38.179688 15.697266 L 40 13.5 L 40 13 L 31.775391 13 L 25.996094 27.642578 L 19.097656 13 L 11 13 z M 15.621094 15 L 17.828125 15 L 24.988281 30.195312 L 23.982422 32.744141 L 23.980469 32.744141 L 15.621094 15 z M 34 15 L 36.257812 15 C 36.090813 15.348 36 15.735 36 16.125 L 36 32.75 C 36 33.188 36.113266 33.619 36.322266 34 L 33.677734 34 C 33.886734 33.619 34 33.188 34 32.75 L 34 17.878906 L 34 15 z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white/50">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Tarreq Maulana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;