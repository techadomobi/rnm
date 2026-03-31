import {
  ArrowUpRight,
  Building2,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/insights', label: 'Insights' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="mt-8 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">RNM India</h3>
              <p className="text-sm text-slate-400">Forward-thinking financial solutions</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            We partner with ambitious businesses to build resilient finance operations,
            improve governance, and unlock strategic growth.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Linkedin, Twitter, Facebook].map((SocialIcon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:scale-105 hover:border-slate-500 hover:text-white"
              >
                <SocialIcon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="group inline-flex items-center gap-1.5 text-slate-300 transition hover:text-white">
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 text-emerald-400" />
              4/80, Janpath, New Delhi - 110001
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-emerald-400" /> +91-11-43192000
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-emerald-400" /> rnm@rnm.in
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} RNM India. All rights reserved.</p>
          <p>Built for clarity, trust, and long-term business value.</p>
        </div>
      </div>
    </footer>
  );
}
