import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-background-secondary/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div
            ref={imageRef}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-full glass-card p-2 glow-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img
                    src="pics.jpeg"
                    alt="Aryan Kumar"
                    className="w-full h-full object-cover rounded-full bg-black transition duration-500"
                  />
                </div>
              </div>
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 glass-card rounded-full flex items-center justify-center floating">
                <span className="text-2xl">⚡</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 glass-card rounded-full flex items-center justify-center floating"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground text-center lg:text-left">
              <p>
                I'm a passionate Computer Science Engineering student at
                Dronacharya College of Engineering, graduating in 2026. My
                journey in technology is driven by an insatiable curiosity for
                creating scalable, interactive applications that make a real
                difference.
              </p>

              <p>
                With hands-on experience in full-stack development and data
                visualization, I specialize in building user-friendly solutions
                using the MERN stack. I believe in the power of clean code,
                beautiful design, and meaningful user experiences.
              </p>

              <p>
                My passion lies in transforming complex data into visually
                appealing, interactive dashboards and developing applications
                that not only function flawlessly but also delight users with
                their intuitive design and smooth performance.
              </p>
            </div>

            {/* Resume Button */}
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <a href="/resume.pdf" download>
                <Button variant="neon" size="lg" className="px-6 sm:px-8 py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Internships
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  2026
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Graduate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
