import { motion } from 'framer-motion';
import {
  Users,
  Award,
  Target,
  TrendingUp,
  Globe,
  Briefcase,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '1946', event: 'Founded by R.N. Marwah in New Delhi' },
    { year: '1975', event: 'Expanded services to include tax advisory' },
    { year: '1990', event: 'Opened Mumbai office, serving Western India' },
    { year: '2000', event: 'International expansion with London office' },
    { year: '2010', event: 'Launched corporate finance division' },
    { year: '2020', event: 'Digital transformation and technology integration' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description:
        'We uphold the highest standards of professional ethics and transparency in all our dealings.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We embrace new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with our clients as partners in their success journey.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description:
        'We strive for perfection in every engagement, consistently exceeding expectations.',
    },
  ];

  const teamMembers = [
    {
      name: 'Vikram Malhotra',
      position: 'Managing Partner',
      expertise: 'Audit & Assurance',
    },
    {
      name: 'Anita Desai',
      position: 'Senior Partner',
      expertise: 'Taxation & Compliance',
    },
    {
      name: 'Rahul Kapoor',
      position: 'Partner',
      expertise: 'Corporate Finance',
    },
    {
      name: 'Neha Singh',
      position: 'Partner',
      expertise: 'Transaction Advisory',
    },
  ];

  const highlights = [
    { icon: Award, value: '75+', label: 'Years of Excellence' },
    { icon: Users, value: '200+', label: 'Expert Professionals' },
    { icon: Globe, value: '4', label: 'Global Offices' },
    { icon: Briefcase, value: '1000+', label: 'Successful Projects' },
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
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About RNM India</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building trust and delivering excellence since 1946
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <highlight.icon className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <div className="text-3xl font-bold mb-1">{highlight.value}</div>
                <div className="text-sm text-blue-100">{highlight.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1946 by R.N. Marwah, RNM India has grown from a small
                  accounting practice in New Delhi to one of India's most respected
                  financial services firms. Our journey spans over seven decades of
                  dedication to excellence and innovation.
                </p>
                <p>
                  Today, with over 200 qualified professionals across offices in New
                  Delhi, Mumbai, Bangalore, and London, we serve a diverse clientele
                  ranging from startups to multinational corporations. Our commitment to
                  delivering forward-thinking solutions has remained unchanged since our
                  inception.
                </p>
                <p>
                  We pride ourselves on combining traditional values of integrity and
                  professionalism with modern technology and innovative approaches. This
                  unique blend enables us to provide our clients with solutions that are
                  both time-tested and future-ready.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-20 text-blue-600 font-bold text-lg">
                      {milestone.year}
                    </div>
                    <div className="flex-1 border-l-2 border-blue-300 pl-6 pb-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-125 transition-transform" />
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving our success
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold text-center mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm text-center">{member.expertise}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <div>
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              To be the most trusted and innovative financial services partner, empowering
              businesses to achieve sustainable growth and success in an ever-evolving
              global marketplace.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}