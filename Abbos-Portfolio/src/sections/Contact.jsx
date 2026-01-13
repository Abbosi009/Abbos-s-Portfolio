import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { socialLinks } from "../config/socialLinks";

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
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialItems = [
    {
      icon: Mail,
      label: "Email",
      value: socialLinks.email,
      link: socialLinks.emailLink,
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-600 hover:to-pink-600",
    },
    {
      icon: Send,
      label: "Telegram",
      value: socialLinks.telegram,
      link: socialLinks.telegramLink,
      color: "from-sky-500 to-blue-500",
      hoverColor: "hover:from-sky-600 hover:to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: socialLinks.github,
      link: socialLinks.githubLink,
      color: "from-gray-600 to-gray-700",
      hoverColor: "hover:from-gray-700 hover:to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abbos Ismoilov",
      link: socialLinks.linkedinLink,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-secondary-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing. Reach out to me via any of these channels:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">
              Connect With Me
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="group relative h-48 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:translate-y-[-6px]"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} ${item.hoverColor} transition-all duration-300`}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-white relative z-10">
                      <Icon className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                      <div className="text-center">
                        <p className="font-bold text-base">{item.label}</p>
                        <p className="text-xs opacity-90 truncate max-w-full mt-1">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 bg-secondary-50 dark:bg-secondary-800 border-2 border-secondary-300 dark:border-secondary-600 rounded-xl text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-3"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 bg-secondary-50 dark:bg-secondary-800 border-2 border-secondary-300 dark:border-secondary-600 rounded-xl text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full px-5 py-3.5 bg-secondary-50 dark:bg-secondary-800 border-2 border-secondary-300 dark:border-secondary-600 rounded-xl text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 resize-none font-medium"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
