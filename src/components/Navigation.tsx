import {
  Briefcase,
  Compass,
  Home,
  Info,
  Lightbulb,
  Mail,
  Menu,
  Users,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { type ElementType, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Page = 'home' | 'about' | 'services' | 'team' | 'insights' | 'contact';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { path: string; page: Page; label: string; icon: ElementType }[] = [
    { path: '/', page: 'home', label: 'Home', icon: Home },
    { path: '/about', page: 'about', label: 'About', icon: Info },
    { path: '/services', page: 'services', label: 'Services', icon: Briefcase },
    { path: '/team', page: 'team', label: 'Team', icon: Users },
    { path: '/insights', page: 'insights', label: 'Insights', icon: Lightbulb },
    { path: '/contact', page: 'contact', label: 'Contact', icon: Mail },
  ];

  const currentPath = location.pathname;

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/70 bg-white/95 shadow-md backdrop-blur-xl'
          : 'border-transparent bg-white/85 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white shadow-md">
            <Compass className="h-5 w-5" />
          </span>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-900">RNM India</p>
            <p className="text-xs text-slate-500">Financial Advisory Partners</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(({ path, label, icon: NavIcon }) => {
            const active = currentPath === path;

            return (
              <Link
                key={path}
                to={path}
                className={`group relative inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  active ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
              >
                <NavIcon className="h-4 w-4" />
                {label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}

          <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:scale-105 md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden border-t border-slate-200/80 bg-white md:hidden"
      >
        <div className="space-y-2 px-4 py-4 sm:px-6">
          {navItems.map(({ path, label, icon: NavIcon }) => {
            const active = currentPath === path;

            return (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? 'gradient-brand text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <NavIcon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
