import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronDown,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { icon: Award, value: '75+', label: 'Years of Experience', status: 'Legacy Excellence' },
    { icon: Users, value: '200+', label: 'Professionals', status: 'Growing Team' },
    { icon: TrendingUp, value: '1000+', label: 'Happy Clients', status: 'High Trust' },
    { icon: CheckCircle, value: '1000+', label: 'Projects Completed', status: 'On-Time Delivery' },
  ];

  const services = [
    {
      title: 'Audit & Business Advisory',
      description:
        'Comprehensive audit services ensuring compliance and strategic business insights.',
      icon: Shield,
    },
    {
      title: 'Taxation Services',
      description:
        'Expert tax planning and compliance services for optimal tax efficiency.',
      icon: Target,
    },
    {
      title: 'Transaction Advisory',
      description:
        'Strategic guidance for mergers, acquisitions, and corporate transactions.',
      icon: TrendingUp,
    },
    {
      title: 'Financial Consulting',
      description:
        'Tailored financial strategies to drive growth and sustainability.',
      icon: Award,
    },
    {
      title: 'Corporate Finance',
      description:
        'Capital raising, restructuring, and financial modeling expertise.',
      icon: Users,
    },
    {
      title: 'Asset Management',
      description:
        'Professional portfolio management and investment advisory services.',
      icon: Star,
    },
  ];

  const benefits = [
    { title: 'Qualified Team', description: 'Expert professionals with industry credentials' },
    { title: 'Client-Centric Approach', description: 'Your success is our priority' },
    { title: 'Innovative Strategies', description: 'Forward-thinking solutions' },
    { title: '100% Success', description: 'Proven track record of excellence' },
    { title: '100% Satisfaction', description: 'Dedicated to exceeding expectations' },
    { title: 'Confidentiality', description: 'Complete security and discretion' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CFO',
      company: 'Tech Innovations Ltd',
      content:
        'RNM India has been instrumental in streamlining our financial operations. Their expertise and professionalism are unmatched.',
    },
    {
      name: 'Priya Sharma',
      position: 'CEO',
      company: 'Global Enterprises',
      content:
        'The team at RNM provided exceptional guidance during our expansion. Their strategic insights were invaluable.',
    },
    {
      name: 'Amit Patel',
      position: 'Managing Director',
      company: 'Investment Holdings',
      content:
        'Outstanding service and attention to detail. RNM has been our trusted partner for over a decade.',
    },
  ];

  const faqs = [
    {
      question: 'What services does RNM India specialize in?',
      answer:
        'RNM India specializes in Audit & Business Advisory, Taxation Services, Transaction Advisory, Financial Consulting, Corporate Finance, and Asset Management services.',
    },
    {
      question: 'How long has RNM India been in business?',
      answer:
        'Founded in 1946 by R.N. Marwah, RNM India has over 75 years of experience in providing financial services and solutions.',
    },
    {
      question: 'Do you serve international clients?',
      answer:
        'Yes, we have offices in New Delhi, Mumbai, Bangalore, and London, serving clients across India and internationally.',
    },
    {
      question: 'What makes RNM India different from other firms?',
      answer:
        'Our client-centric approach, qualified team of 200+ professionals, innovative strategies, and proven track record of 1000+ successful projects set us apart.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden gradient-hero section-padding">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-12 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="badge-info mb-5">Future-ready Finance for Ambitious Teams</span>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Forward-Thinking Financial Solutions
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                for Future-Ready Businesses
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">
              We help growth-oriented businesses overcome financial challenges with
              future-proof roadmaps and integrated advisory services.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start Your Financial Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                whileHover={{ y: -4 }}
                className="stat-card"
              >
                <stat.icon className="mx-auto mb-3 h-9 w-9 text-primary" />
                <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
                <span className="badge-ok mt-4">{stat.status}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Solutions That Work Together</h2>
            <p className="section-subtitle">
              Let our audit, legal, financial, and advisory offerings work as one
              integrated ecosystem while you focus on growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="surface-card surface-card-hover"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-md">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title text-white">Why Choose RNM</h2>
            <p className="mx-auto max-w-3xl text-slate-300">
              Trusted by leading businesses for over seven decades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-md"
              >
                <CheckCircle className="mb-3 h-9 w-9 text-emerald-400" />
                <h3 className="mb-1 text-xl font-bold text-white">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Client Reviews: Reliability Meets Trust</h2>
            <p className="section-subtitle">What our clients say about us</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                className="surface-card"
              >
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-5 text-muted">&quot;{testimonial.content}&quot;</p>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-muted">
                  {testimonial.position}, {testimonial.company}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="surface-card p-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left md:px-8"
                >
                  <span className="pr-6 text-lg font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-muted md:px-8">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-5xl"
          >
            Stay Ahead with RNM Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-slate-300"
          >
            Read RNM&apos;s executive newsletter for curated analysis on tax, finance,
            and business policy built for leaders who think ahead.
          </motion.p>
          <Link to="/insights" className="btn-primary mt-8">
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
