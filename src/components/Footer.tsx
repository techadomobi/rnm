import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="rnm-dark-section text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">RNM India</h3>
            <p className="text-sm leading-relaxed mb-4">
              Forward-thinking financial solutions for future-ready businesses with
              over 75 years of trusted advisory excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-blue-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-blue-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/audit-business-advisory" className="hover:text-blue-300 transition-colors">Audit & Business Advisory Services</Link></li>
              <li><Link to="/services/taxation-services" className="hover:text-blue-300 transition-colors">Taxation Services</Link></li>
              <li><Link to="/services/transaction-regulatory-advisory" className="hover:text-blue-300 transition-colors">Transaction & Regulatory Advisory</Link></li>
              <li><Link to="/services/financial-consulting" className="hover:text-blue-300 transition-colors">Financial Consulting</Link></li>
              <li><Link to="/services/corporate-finance" className="hover:text-blue-300 transition-colors">Corporate Finance</Link></li>
              <li><Link to="/services/asset-management" className="hover:text-blue-300 transition-colors">Asset Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-cyan-300" />
                <span>4/80, Janpath, New Delhi - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-cyan-300" />
                <span>+91-11-43192000</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-cyan-300" />
                <span>rnm@rnm.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} RNM India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}