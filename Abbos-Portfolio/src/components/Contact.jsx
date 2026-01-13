import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Get In Touch
        </h2>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:abbosixan@gmail.com"
            aria-label="Email"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Mail className="w-8 h-8 text-gray-700 dark:text-gray-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-red-500 transition-colors text-center">
              Email
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-500 text-center">
              abbosixan@gmail.com
            </span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/Ismoilov_dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-sky-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Send className="w-8 h-8 text-gray-700 dark:text-gray-400 group-hover:text-sky-500 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-sky-500 transition-colors text-center">
              Telegram
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-500 text-center">
              @Ismoilov_dev
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Abbosi009"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Github className="w-8 h-8 text-gray-700 dark:text-gray-400 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-purple-500 transition-colors text-center">
              GitHub
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-500 text-center">
              Abbosi009
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/abbos-ismoilov-27a7bb362"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Linkedin className="w-8 h-8 text-gray-700 dark:text-gray-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-blue-600 transition-colors text-center">
              LinkedIn
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-500 text-center">
              Abbos Ismoilov
            </span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto p-8 bg-gray-50 dark:bg-gray-800 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
