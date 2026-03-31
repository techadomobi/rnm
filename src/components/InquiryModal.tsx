import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { type FormEvent } from 'react';

type InquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/55 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="relative w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close inquiry modal"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-center text-3xl font-bold text-slate-900">Let&apos;s Discuss Your Requirements</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-lg font-semibold text-slate-900" htmlFor="modal-name">
                    Name
                  </label>
                  <input
                    id="modal-name"
                    required
                    placeholder="Enter your name"
                    className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-lg font-semibold text-slate-900" htmlFor="modal-phone">
                    Phone
                  </label>
                  <input
                    id="modal-phone"
                    placeholder="Enter your phone number"
                    className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-lg font-semibold text-slate-900" htmlFor="modal-email">
                    Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-lg font-semibold text-slate-900" htmlFor="modal-location">
                    Location
                  </label>
                  <input
                    id="modal-location"
                    placeholder="Enter your location"
                    className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-300 bg-slate-50 p-4 text-slate-600">
                I&apos;m not a robot
              </div>

              <div>
                <label className="mb-2 block text-lg font-semibold text-slate-900" htmlFor="modal-message">
                  Type Your Message Here
                </label>
                <textarea
                  id="modal-message"
                  rows={4}
                  placeholder="Share your enquiry"
                  className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
