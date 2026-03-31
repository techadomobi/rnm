import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Shield,
  Target,
  CheckCircle,
  Star,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { icon: Award, value: '75+', label: 'Years of Experience' },
    { icon: Users, value: '200+', label: 'Professionals' },
    { icon: TrendingUp, value: '1000+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '1000+', label: 'Projects Completed' },
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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center rnm-hero pt-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Forward-Thinking Financial Solutions
              <span className="block bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                for Future-Ready Businesses
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              We help growth-oriented businesses overcome financial challenges with
              future-proof roadmaps and integrated advisory services.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Financial Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white rnm-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Solutions That Work Together.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Let our audit, legal, financial, and advisory offerings work as one
              integrated ecosystem while you focus on growth.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              Partner with Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 rnm-dark-section text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose RNM</h2>
            <p className="text-xl text-blue-100">
              Trusted by leading businesses for over seven decades
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-blue-200 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Client Reviews: Reliability Meets Trust
            </h2>
            <p className="text-xl text-slate-600">What our clients say about us</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Find answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
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
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-5"
          >
            Stay Ahead with RNM Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-200 max-w-3xl mx-auto mb-8"
          >
            Read RNM&apos;s executive newsletter for curated analysis on tax, finance,
            and business policy built for leaders who think ahead.
          </motion.p>
          <Link
            to="/insights"
            className="inline-flex items-center px-8 py-3 bg-amber-400 text-slate-900 rounded-full font-semibold hover:bg-amber-300 transition-colors"
          >
            Read More
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help your business achieve its financial goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}