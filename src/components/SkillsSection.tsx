import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "🟨" },
      { name: "Java", icon: "☕" },
      { name: "HTML/CSS", icon: "🌐" },
      { name: "C++", icon: "💻" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Express.js", icon: "🚀" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Android Studio", icon: "📱" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🗄️" },
      { name: "Oracle", icon: "🏛️" }
    ]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillsRef.current.forEach((skillCard, index) => {
        gsap.fromTo(
          skillCard,
          {
            opacity: 0,
            y: 40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillCard,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => {
                if (el) skillsRef.current[categoryIndex] = el;
              }}
              className="glass-card p-5 sm:p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-5 text-center gradient-text">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-all duration-300"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            Additional <span className="gradient-text">Expertise</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            {[
              "Canva",
              "OpenAI API",
              "REST APIs",
              "Prompt Engineering",
              "Figma",
              "Git"
            ].map((tool, index) => (
              <div
                key={index}
                className="glass-card px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300 glow-pulse"
              >
                <span className="text-xs sm:text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;