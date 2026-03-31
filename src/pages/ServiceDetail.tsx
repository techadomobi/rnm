import {
  ArrowRight,
  CheckCircle,
  Shield,
  Landmark,
  Scale,
  LineChart,
  Briefcase,
  PieChart,
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';

const serviceDetails = {
  'audit-business-advisory': {
    title: 'Audit & Business Advisory Services',
    icon: Shield,
    heroGradient: 'from-blue-900 via-blue-700 to-cyan-700',
    iconBg: 'bg-blue-500/30',
    summary:
      'Independent assurance and practical advisory support to strengthen controls, improve governance, and support confident decision making.',
    offerings: [
      'Statutory, internal, and management audits',
      'Internal control and risk framework reviews',
      'Process diagnostics and compliance checks',
      'Business restructuring and advisory support',
      'Fraud prevention and forensic-oriented reviews',
    ],
  },
  'taxation-services': {
    title: 'Taxation Services',
    icon: Landmark,
    heroGradient: 'from-slate-900 via-blue-900 to-indigo-700',
    iconBg: 'bg-indigo-500/30',
    summary:
      'Strategic tax planning and end-to-end compliance services designed to optimize liabilities while staying aligned with changing regulations.',
    offerings: [
      'Direct and indirect tax planning',
      'GST advisory, review, and return support',
      'Transfer pricing and international tax support',
      'Tax litigation and representation assistance',
      'Transaction-level tax due diligence',
    ],
  },
  'transaction-regulatory-advisory': {
    title: 'Transaction & Regulatory Advisory Services',
    icon: Scale,
    heroGradient: 'from-cyan-900 via-blue-800 to-sky-700',
    iconBg: 'bg-sky-500/30',
    summary:
      'Dedicated advisory for high-stakes transactions and regulatory obligations, helping organizations execute with clarity and compliance.',
    offerings: [
      'M&A transaction support and due diligence',
      'Business valuation and financial review',
      'Regulatory reporting and compliance support',
      'Corporate restructuring and deal strategy',
      'Post-transaction integration guidance',
    ],
  },
  'financial-consulting': {
    title: 'Financial Consulting',
    icon: LineChart,
    heroGradient: 'from-blue-950 via-violet-900 to-blue-700',
    iconBg: 'bg-violet-500/30',
    summary:
      'Performance-focused financial consulting to improve planning quality, visibility, and execution across your finance function.',
    offerings: [
      'Strategic financial planning and analysis',
      'Budgeting, forecasting, and scenario planning',
      'Working capital and cash flow optimization',
      'Cost management and margin improvement',
      'Management reporting and KPI frameworks',
    ],
  },
  'corporate-finance': {
    title: 'Corporate Finance Services',
    icon: Briefcase,
    heroGradient: 'from-gray-900 via-slate-800 to-blue-700',
    iconBg: 'bg-slate-500/30',
    summary:
      'Capital and transaction advisory solutions to support business expansion, restructuring, and long-term value creation.',
    offerings: [
      'Capital raise and funding strategy',
      'Debt advisory and refinancing support',
      'Valuation and modeling for strategic decisions',
      'Private equity and investor readiness support',
      'Restructuring and strategic alternatives review',
    ],
  },
  'asset-management': {
    title: 'Asset Management',
    icon: PieChart,
    heroGradient: 'from-teal-900 via-blue-800 to-cyan-700',
    iconBg: 'bg-teal-500/30',
    summary:
      'Goal-based asset and portfolio advisory services focused on disciplined risk management and sustainable performance.',
    offerings: [
      'Portfolio construction and rebalancing',
      'Risk-based asset allocation strategy',
      'Investment monitoring and performance analytics',
      'Diversification planning across sectors',
      'Periodic review and optimization support',
    ],
  },
} as const;

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const details = serviceSlug ? serviceDetails[serviceSlug as keyof typeof serviceDetails] : undefined;

  if (!details) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = details.icon;

  return (
    <div className="min-h-screen bg-white">
      <section
        className={`relative py-20 bg-gradient-to-br ${details.heroGradient} text-white overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{details.title}</h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl">{details.summary}</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className={`w-40 h-40 rounded-3xl ${details.iconBg} backdrop-blur-sm border border-white/25 flex items-center justify-center`}>
                <ServiceIcon className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Deliver</h2>
            <ul className="space-y-4">
              {details.offerings.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3 border-2 border-blue-700 text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
