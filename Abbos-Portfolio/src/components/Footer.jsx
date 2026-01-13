export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-secondary-200 dark:border-secondary-700 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary-50 dark:from-secondary-900 dark:to-secondary-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white">
                Abbos Ismoilov
              </h3>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400">
              Frontend Developer • React Enthusiast • Web Designer
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-2 text-right">
            <p className="text-secondary-600 dark:text-secondary-400">
              © {currentYear} Abbos Ismoilov
            </p>
            <p className="text-sm text-secondary-500 dark:text-secondary-500">
              Built with React, Tailwind CSS & Vite
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-200 dark:border-secondary-700 pt-8">
          <p className="text-center text-sm text-secondary-600 dark:text-secondary-400">
            Designed with ❤️ | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
