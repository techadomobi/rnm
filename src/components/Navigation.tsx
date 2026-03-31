import { Menu, X, Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Page = 'home' | 'about' | 'services' | 'team' | 'insights' | 'contact';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { path: string; page: Page; label: string }[] = [
    { path: '/', page: 'home', label: 'Home' },
    { path: '/about', page: 'about', label: 'About' },
    { path: '/services', page: 'services', label: 'Services' },
    { path: '/team', page: 'team', label: 'Team' },
    { path: '/insights', page: 'insights', label: 'Insights' },
    { path: '/contact', page: 'contact', label: 'Contact' },
  ];

  const getCurrentPage = (): Page => {
    const path = location.pathname;
    const item = navItems.find(item => item.path === path);
    return item ? item.page : 'home';
  };

  const currentPage = getCurrentPage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="rnm-topbar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 hidden md:flex items-center justify-between text-xs lg:text-sm">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 opacity-95">
              <Mail className="w-4 h-4" /> rnm@rnm.in
            </span>
            <span className="inline-flex items-center gap-2 opacity-95">
              <Phone className="w-4 h-4" /> +91-11-43192000
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-amber-300 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-amber-300 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-amber-300 transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center cursor-pointer group"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent tracking-wide">
              RNM
            </div>
            <div className="ml-2 text-sm text-slate-600 group-hover:text-blue-700 transition-colors">
              India
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, page, label }) => (
              <Link
                key={page}
                to={path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'text-blue-700'
                    : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                {label}
                {currentPage === page && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-600" />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-white border-t border-gray-100">
          {navItems.map(({ path, page, label }) => (
            <Link
              key={page}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === page
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}