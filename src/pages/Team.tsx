import { motion } from 'framer-motion';
import {
  Users,
  Award,
  TrendingUp,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Team() {
  const leadership = [
    {
      name: 'Vikram Malhotra',
      position: 'Managing Partner',
      expertise: 'Audit & Assurance',
      bio: 'Over 30 years of experience in audit and assurance services. Leading RNM India\'s growth strategy and client relationships.',
      email: 'vikram.malhotra@rnm.in',
    },
    {
      name: 'Anita Desai',
      position: 'Senior Partner',
      expertise: 'Taxation & Compliance',
      bio: 'Expert in direct and indirect taxation with 25+ years of experience. Specializes in complex tax structuring and compliance.',
      email: 'anita.desai@rnm.in',
    },
    {
      name: 'Rahul Kapoor',
      position: 'Partner',
      expertise: 'Corporate Finance',
      bio: 'Leads corporate finance initiatives with focus on M&A, fundraising, and strategic advisory. 20+ years in investment banking.',
      email: 'rahul.kapoor@rnm.in',
    },
    {
      name: 'Neha Singh',
      position: 'Partner',
      expertise: 'Transaction Advisory',
      bio: 'Specializes in due diligence, valuation, and transaction support. Has advised on over 100+ transactions across various sectors.',
      email: 'neha.singh@rnm.in',
    },
    {
      name: 'Suresh Kumar',
      position: 'Partner',
      expertise: 'Risk Advisory',
      bio: 'Expert in enterprise risk management and internal controls. Helps organizations build robust risk frameworks.',
      email: 'suresh.kumar@rnm.in',
    },
    {
      name: 'Priya Sharma',
      position: 'Partner',
      expertise: 'Financial Consulting',
      bio: 'Leads financial planning and analysis services. Expertise in business transformation and performance improvement.',
      email: 'priya.sharma@rnm.in',
    },
    {
      name: 'Amit Patel',
      position: 'Director',
      expertise: 'Technology Advisory',
      bio: 'Bridges finance and technology with expertise in digital transformation and fintech solutions.',
      email: 'amit.patel@rnm.in',
    },
    {
      name: 'Kavita Reddy',
      position: 'Director',
      expertise: 'Regulatory Compliance',
      bio: 'Ensures clients stay compliant with evolving regulations. Expert in RBI, SEBI, and corporate law matters.',
      email: 'kavita.reddy@rnm.in',
    },
  ];

  const stats = [
    { icon: Award, value: '75+', label: 'Years Combined Experience' },
    { icon: Users, value: '200+', label: 'Qualified Professionals' },
    { icon: TrendingUp, value: '500+', label: 'Transactions Advised' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Meet the experts who drive our success and deliver exceptional value to our clients
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Seasoned professionals with decades of combined experience
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leadership.map((member, index) => (
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
                <p className="text-gray-600 text-sm text-center mb-4">
                  {member.expertise}
                </p>
                <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented professionals to join our growing team.
            Explore career opportunities at RNM India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Contact HR
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Openings
            </a>
          </div>
        </motion.div>
      </section>

      {/* Our Culture Section */}
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
              Our Culture
            </h2>
            <p className="text-xl text-gray-600">
              What makes RNM India a great place to work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Continuous Learning',
                description: 'We invest in our people through ongoing training, certifications, and professional development programs.',
              },
              {
                title: 'Collaborative Environment',
                description: 'Our team works together across disciplines to deliver comprehensive solutions for our clients.',
              },
              {
                title: 'Work-Life Balance',
                description: 'We believe in sustainable success and support our team in maintaining a healthy work-life balance.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}