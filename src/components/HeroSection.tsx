import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.5 });

    // Animate headline with blur effect
    timeline
      .set(headlineRef.current, { opacity: 0, y: 50, filter: "blur(10px)" })
      .set(subtitleRef.current, { opacity: 0, y: 30 })
      .set(buttonsRef.current, { opacity: 0, y: 20 })
      .set(splineRef.current, { opacity: 0, x: 100 })

      .to(headlineRef.current, {
        duration: 1.2,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "power3.out",
      })
      .to(
        subtitleRef.current,
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        buttonsRef.current,
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        splineRef.current,
        {
          duration: 1,
          opacity: 1,
          x: 0,
          ease: "power2.out",
        },
        "-=0.8"
      );

    // Floating glow particles animation
    const particles = document.querySelectorAll(".glow-particle");
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        duration: 3 + index * 0.5,
        y: -20,
        rotation: 360,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Spline Embed */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-XPfshI8Uxhqjvjz0bZesUHeY/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Floating Glow Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="glow-particle absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full blur-sm"></div>
        <div className="glow-particle absolute top-3/4 right-1/4 w-6 h-6 bg-secondary/30 rounded-full blur-sm"></div>
        <div className="glow-particle absolute top-1/2 left-3/4 w-3 h-3 bg-primary/40 rounded-full blur-sm"></div>
        <div className="glow-particle absolute bottom-1/4 left-1/2 w-5 h-5 bg-secondary/20 rounded-full blur-sm"></div>
      </div>

      {/* Content Overlay */}
      <div
        ref={heroRef}
        className="relative z-20 container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-20"
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="gradient-text">Aryan Kumar</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Software Developer | MERN Stack | Data Visualization Enthusiast
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Button
              variant="neon"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group w-full sm:w-auto"
            >
              <Download className="mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right Side - Additional Content Space */}
        <div
          ref={splineRef}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="glass-card p-6 lg:p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                2026
              </div>
              <div className="text-muted-foreground text-sm lg:text-base">
                B.E. Graduate
              </div>
              <div className="mt-4 text-xs lg:text-sm text-muted-foreground">
                Computer Science Engineering
                <br />
                Dronacharya College of Engineering
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
