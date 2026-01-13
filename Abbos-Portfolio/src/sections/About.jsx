import { BookOpen } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
              alt="Coding workspace"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Welcome!</span> I'm Abbos Ismoilov, a
              passionate Frontend Developer from Tajikistan. I'm currently studying
              web development at Najot Ta'lim, one of the leading tech education
              centers in Central Asia.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              My journey in web development started with HTML and CSS, and I've
              since expanded my skills to include JavaScript, React, and modern
              web technologies. I'm passionate about creating beautiful, functional,
              and user-friendly websites.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I enjoy learning new technologies, contributing
              to open-source projects, and helping others in the developer community.
            </p>

            {/* Education Card */}
            <div className="mt-8 p-6 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Frontend Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
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
