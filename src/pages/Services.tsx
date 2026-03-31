import { motion } from 'framer-motion';
import {
  Shield,
  TrendingUp,
  Target,
  Award,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  BarChart,
  FileText,
  Briefcase,
  DollarSign,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Audit & Business Advisory',
      path: '/services/audit-business-advisory',
      description:
        'Comprehensive audit services ensuring compliance, risk management, and strategic insights for sustainable business growth.',
      features: [
        'Statutory & Internal Audits',
        'Risk Assessment & Management',
        'Compliance Reviews',
        'Business Process Optimization',
        'Internal Control Systems',
        'Forensic Audits',
      ],
    },
    {
      icon: Target,
      title: 'Taxation Services',
      path: '/services/taxation-services',
      description:
        'Expert tax planning, compliance, and advisory services to optimize your tax position while ensuring full regulatory compliance.',
      features: [
        'Direct & Indirect Tax Planning',
        'GST Compliance & Advisory',
        'International Taxation',
        'Transfer Pricing Services',
        'Tax Litigation Support',
        'Tax Due Diligence',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Transaction & Regulatory Advisory',
      path: '/services/transaction-regulatory-advisory',
      description:
        'Strategic guidance for mergers, acquisitions, and regulatory compliance to navigate complex business transactions successfully.',
      features: [
        'Mergers & Acquisitions',
        'Due Diligence Services',
        'Valuation Services',
        'Regulatory Compliance',
        'Corporate Restructuring',
        'Exit Strategy Planning',
      ],
    },
    {
      icon: Award,
      title: 'Financial Consulting',
      path: '/services/financial-consulting',
      description:
        'Tailored financial strategies and consulting services to drive growth, improve efficiency, and enhance profitability.',
      features: [
        'Financial Planning & Analysis',
        'Budgeting & Forecasting',
        'Cash Flow Management',
        'Cost Optimization',
        'Performance Measurement',
        'Strategic Financial Planning',
      ],
    },
    {
      icon: Users,
      title: 'Corporate Finance',
      path: '/services/corporate-finance',
      description:
        'Capital raising, restructuring, and financial modeling expertise to support your strategic business objectives.',
      features: [
        'Capital Raising & Funding',
        'Financial Restructuring',
        'IPO Advisory',
        'Debt Advisory Services',
        'Private Equity Services',
        'Financial Modeling',
      ],
    },
    {
      icon: Star,
      title: 'Asset Management',
      path: '/services/asset-management',
      description:
        'Professional portfolio management and investment advisory services to maximize returns while managing risk effectively.',
      features: [
        'Portfolio Management',
        'Investment Advisory',
        'Wealth Management',
        'Risk Management',
        'Asset Allocation',
        'Performance Monitoring',
      ],
    },
  ];

  const industries = [
    { icon: Briefcase, name: 'Manufacturing' },
    { icon: DollarSign, name: 'Financial Services' },
    { icon: BarChart, name: 'Technology' },
    { icon: FileText, name: 'Healthcare' },
    { icon: TrendingUp, name: 'Real Estate' },
    { icon: Users, name: 'Retail & E-commerce' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding gradient-soft overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              Our Services
            </h1>
            <p className="text-base md:text-xl text-muted max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    className="btn-primary group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 w-full"
                >
                  <div className="surface-card gradient-soft">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="section-subtitle">
              Expertise across diverse sectors and industries
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="surface-card surface-card-hover p-6 text-center"
              >
                <industry.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="text-slate-900 font-semibold">{industry.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-blue-100">Expert Professionals</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Happy Clients</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted mb-8">
            Get in touch with our experts to discuss your specific needs
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}