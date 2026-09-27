'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'submitting'

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setResult('Sending your message...');

    const formData = new FormData(event.target);
    
    // REPLACE WITH YOUR ACTUAL WEB3FORMS ACCESS KEY
    formData.append('access_key', '84b25a64-98b8-465a-90e4-b0f59f9b3e4f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult('Message sent successfully! I will get back to you soon.');
        event.target.reset();
      } else {
        setStatus('error');
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setResult('Error submitting form. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-slate-100">
        Get In Touch
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        Have an OJT opportunity or a question? Send me a message!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-5 text-left"
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Hi, we'd like to discuss an OJT opening with you..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3.5 px-6 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
          <Send className="w-4 h-4" />
        </button>

        {/* Feedback Message */}
        {status && (
          <div
            className={`flex items-center gap-2 p-4 rounded-xl text-sm font-medium ${
              status === 'success'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                : status === 'error'
                ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
            }`}
          >
            {status === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
            {status === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <span>{result}</span>
          </div>
        )}
      </form>
    </section>
  );
}