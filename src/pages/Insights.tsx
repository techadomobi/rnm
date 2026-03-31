import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  TrendingUp,
  BarChart,
  Globe,
  Lightbulb,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const insights = [
    {
      id: 1,
      title: 'Navigating GST Compliance in 2024: Key Updates and Best Practices',
      excerpt:
        'Stay ahead of the curve with our comprehensive guide to the latest GST regulations and how they impact your business operations.',
      category: 'Taxation',
      date: 'March 15, 2024',
      readTime: '8 min read',
      icon: FileText,
    },
    {
      id: 2,
      title: 'Strategic M&A Planning: A Guide for Mid-Sized Enterprises',
      excerpt:
        'Learn the essential steps for successful mergers and acquisitions, from due diligence to post-merger integration.',
      category: 'Corporate Finance',
      date: 'March 10, 2024',
      readTime: '12 min read',
      icon: TrendingUp,
    },
    {
      id: 3,
      title: 'Digital Transformation in Financial Services: Trends and Opportunities',
      excerpt:
        'Explore how technology is reshaping the financial landscape and what it means for your business strategy.',
      category: 'Technology',
      date: 'March 5, 2024',
      readTime: '10 min read',
      icon: Globe,
    },
    {
      id: 4,
      title: 'Risk Management Frameworks for Modern Enterprises',
      excerpt:
        'Discover effective risk management strategies that protect your business while enabling growth and innovation.',
      category: 'Risk Advisory',
      date: 'February 28, 2024',
      readTime: '9 min read',
      icon: BarChart,
    },
    {
      id: 5,
      title: 'Investment Opportunities in Emerging Markets',
      excerpt:
        'An in-depth analysis of investment trends and opportunities in India\'s rapidly growing sectors.',
      category: 'Asset Management',
      date: 'February 20, 2024',
      readTime: '11 min read',
      icon: Lightbulb,
    },
    {
      id: 6,
      title: 'ESG Reporting: Preparing for the New Regulatory Landscape',
      excerpt:
        'Understand the evolving ESG requirements and how to build robust sustainability reporting frameworks.',
      category: 'Compliance',
      date: 'February 15, 2024',
      readTime: '7 min read',
      icon: FileText,
    },
  ];

  const categoryNames = Array.from(new Set(insights.map((insight) => insight.category)));
  const categories = [
    { name: 'All', count: insights.length },
    ...categoryNames.map((name) => ({
      name,
      count: insights.filter((insight) => insight.category === name).length,
    })),
  ];

  const filteredInsights =
    selectedCategory === 'All'
      ? insights
      : insights.filter((insight) => insight.category === selectedCategory);

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
              Insights & Resources
            </h1>
            <p className="text-base md:text-xl text-muted max-w-3xl mx-auto">
              Stay informed with the latest industry trends, regulatory updates, and expert analysis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'gradient-brand text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-600'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section-padding bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInsights.length > 0 ? (
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredInsights.map((insight) => (
                <motion.article
                  key={insight.id}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="surface-card surface-card-hover overflow-hidden p-0"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <insight.icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                        {insight.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {insight.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {insight.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {insight.readTime}
                      </span>
                      <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto text-center bg-white rounded-2xl border border-blue-100 shadow-sm p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No insights found</h3>
              <p className="text-gray-600">
                There are no articles in the <span className="font-semibold">{selectedCategory}</span> category yet.
                Please choose another category or check back later.
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredInsights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <button className="btn-secondary">
                Load More Insights
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-slate-900 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and receive the latest insights, updates, and industry news directly in your inbox.
          </p>
          <form className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="focus-ring flex-1 rounded-xl border border-slate-200 px-6 py-4 text-slate-900"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>

      {/* Resources Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resource Library
            </h2>
            <p className="text-xl text-gray-600">
              Download comprehensive guides, reports, and templates
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: 'GST Compliance Guide 2024', type: 'PDF Guide', pages: '45 pages' },
              { title: 'Annual Tax Planning Checklist', type: 'Checklist', pages: '12 pages' },
              { title: 'M&A Due Diligence Framework', type: 'Template', pages: '28 pages' },
              { title: 'Financial Health Assessment', type: 'Tool', pages: 'Interactive' },
            ].map((resource, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="surface-card surface-card-hover gradient-soft p-6"
              >
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.type}</span>
                  <span>{resource.pages}</span>
                </div>
                <button className="btn-primary mt-4 w-full py-2.5">
                  Download
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white/70">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts is ready to help you navigate complex financial challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}