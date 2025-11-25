import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "Java", level: 70, icon: "☕" },
      { name: "HTML/CSS", level: 90, icon: "🌐" },
      { name: "R", level: 90, icon: "📊" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Material-UI", level: 80, icon: "🎨" },
      { name: "FastAPI", level: 75, icon: "⚡" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85, icon: "🔧" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 80, icon: "🎨" }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "GCP", level: 70, icon: "☁️" },
      { name: "WordPress", level: 75, icon: "📝" },
      { name: "JUnit", level: 80, icon: "🧪" }
    ]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillsRef.current.forEach((skillCard, index) => {
        gsap.fromTo(skillCard,
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

        // Animate skill bars
        const skillBars = skillCard.querySelectorAll('.skill-bar');
        skillBars.forEach((bar, barIndex) => {
          const level = bar.getAttribute('data-level');
          gsap.fromTo(bar,
            { width: "0%" },
            {
              width: `${level}%`,
              duration: 1.5,
              delay: index * 0.1 + barIndex * 0.1 + 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skillCard,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => {
                if (el) skillsRef.current[categoryIndex] = el;
              }}
              className="glass-card p-4 sm:p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-base sm:text-lg">{skill.icon}</span>
                        <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted/30 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            Additional <span className="gradient-text">Libraries & Tools</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            {["pandas", "NumPy", "Matplotlib", "GSAP", "Tailwind CSS", "TypeScript"].map((tool, index) => (
              <div
                key={index}
                className="glass-card px-3 sm:px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300 glow-pulse"
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