import { skills } from "../config/skills";

export function Skills() {
  // Group skills by category
  const frontendSkills = skills.slice(0, 6);
  const toolsSkills = skills.slice(6);

  return (
    <section
      id="skills"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-secondary-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-4">
            My Skills & Expertise
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            I've developed a strong skill set across modern web technologies. Here's what I excel at:
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            Frontend Development
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-800 dark:to-secondary-700 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-secondary-200 dark:border-secondary-600"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-secondary-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-1.5 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-secondary-300 dark:bg-secondary-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-primary-500/50"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 text-right">Proficiency</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Others */}
        <div>
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-accent-500 to-primary-500 rounded-full"></div>
            Tools & Others
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-800 dark:to-secondary-700 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-secondary-200 dark:border-secondary-600"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-secondary-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-white bg-gradient-to-r from-accent-600 to-primary-600 px-3 py-1.5 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-secondary-300 dark:bg-secondary-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-accent-500/50"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 text-right">Proficiency</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
