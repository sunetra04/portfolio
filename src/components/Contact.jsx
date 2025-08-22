import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Me</h3>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info & Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center md:text-left">
            I'm open to discussing new projects and opportunities. Feel free to send a message or connect with me on social media.
          </p>
          <div className="flex space-x-6 text-3xl">
            <a href="https://github.com/sunetra04" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"><Github /></a>
            <a href="https://www.linkedin.com/in/sunetra-karmakar-9013b3302/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"><Linkedin /></a>
            <a href="mailto:sunetrakarmakar6@gmail.com" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"><Mail/></a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input type="text" id="name" name="name" required className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white border border-transparent focus:border-indigo-500 transition" />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white border border-transparent focus:border-indigo-500 transition" />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white border border-transparent focus:border-indigo-500 transition"></textarea>
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition disabled:opacity-50">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
