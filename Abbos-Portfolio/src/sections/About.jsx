import { BookOpen } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
              alt="Coding workspace"
              className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative z-10"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              <span className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Welcome!</span> I'm Abbos Ismoilov, a passionate Frontend Developer from Tajikistan. I'm currently studying web development at Najot Ta'lim, one of the leading tech education centers in Central Asia.
            </p>

            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              My journey in web development started with HTML and CSS, and I've since expanded my skills to include JavaScript, React, and modern web technologies. I'm passionate about creating beautiful, functional, and user-friendly websites.
            </p>

            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, and helping others in the developer community.
            </p>

            {/* Education Card */}
            <div className="mt-8 p-6 bg-white dark:bg-secondary-700 rounded-xl border-2 border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-secondary-900 dark:text-white mb-1">
                    Frontend Development
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Najot Ta'lim Academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
