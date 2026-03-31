import { motion } from 'framer-motion';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import {
  Building,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      city: 'Head Office',
      address: '4/80, Janpath, New Delhi - 110001',
      phone: '+91-11-43192000',
      email: 'rnm@rnm.in',
    },
    {
      city: 'Bangalore Office',
      address: '813 Oxford Towers, 139 Airport Road, Bangalore, Karnataka - 560008',
      phone: '+91-80-43192000',
      email: 'banglore@rnm.in',
    },
    {
      city: 'Gurugram Office',
      address: '613, Suncity Business Tower, Golf Course Road, Gurugram, Haryana - 122002',
      phone: '+91-124-4372956',
      email: 'gurgaon@rnm.in',
    },
    {
      city: 'Raipur Office',
      address: 'D-362, Near MLA Rest House, Tagore Nagar, Raipur, Chhattisgarh - 492001',
      phone: '+91-771-4319200',
      email: 'rnm@rnm.in',
    },
    {
      city: 'Mumbai Office',
      address: 'Awfis, 5th Floor, Raheja Titanium, Goregaon, Mumbai, Maharashtra 400063',
      phone: '+91-22-43192000',
      email: 'mumbai@rnm.in',
    },
    {
      city: 'London Office',
      address: '213 Kingsbury Road, Suite 15, 1st Floor, NW9 8AQ',
      phone: '+44 20 7946 0958',
      email: 'london@rnm.in',
    },
  ];

  const services = [
    'Audit & Business Advisory',
    'Taxation Services',
    'Transaction Advisory',
    'Financial Consulting',
    'Corporate Finance',
    'Asset Management',
  ];

  const fieldClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 transition focus-ring';

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-semibold">
              Let&apos;s Build Something Great
            </span>
            <h1 className="mt-5 text-4xl font-extrabold text-white md:text-6xl">Contact Us</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-blue-100 md:text-xl">
              Reach us for any query and our team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="surface-card"
          >
            <h2 className="text-3xl font-bold">Send Us a Message</h2>
            <p className="mt-3 text-muted">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {isSubmitted && (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                Your request has been submitted successfully. We&apos;ll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`${fieldClass} appearance-none`}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder="Tell us about your requirements..."
                />
                <p className="mt-2 text-xs text-slate-500">
                  Please share your goals, timelines, and priorities.
                </p>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitted}
                whileHover={{ scale: isSubmitted ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                className={`w-full rounded-xl py-3.5 font-semibold text-white shadow-md transition ${
                  isSubmitted
                    ? 'bg-emerald-500'
                    : 'bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-lg'
                }`}
              >
                <span className="inline-flex items-center justify-center">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="surface-card">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <div className="mt-6 space-y-5">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    lines: ['info@rnm.in', 'support@rnm.in'],
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    lines: ['+91 11 4567 8900', 'Mon-Fri: 9:00 AM - 6:00 PM IST'],
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    lines: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-muted">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card gradient-soft">
              <h3 className="text-2xl font-bold">Schedule a Consultation</h3>
              <p className="mt-3 text-muted">
                Book a free 30-minute consultation with our experts to discuss your
                business needs.
              </p>
              <button type="button" className="btn-primary mt-6 w-full">
                Book Appointment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title">Our Offices</h2>
            <p className="section-subtitle">Reach us for any query across our office network</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, index) => (
              <motion.article
                key={office.city}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="surface-card"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white">
                  <Building className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{office.city}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <p className="flex items-start gap-2 text-muted">
                    <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2 text-muted">
                    <Phone className="h-4 w-4 text-primary" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2 text-muted">
                    <Mail className="h-4 w-4 text-primary" />
                    {office.email}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
