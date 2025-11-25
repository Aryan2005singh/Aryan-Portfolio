import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative section-padding bg-background-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Aryan Kumar</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Software Developer passionate about creating innovative solutions and beautiful user experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a
              href="https://github.com/Aryan2005singh"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glow-pulse">
                <Github className="w-5 sm:w-6 h-5 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/aryan-kumar-5183a4257/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glow-pulse">
                <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
            
            <a
              href="https://www.instagram.com/aryan_singh_rajput709/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glow-pulse">
                <Instagram className="w-5 sm:w-6 h-5 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm px-4">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-border/30 space-y-4 md:space-y-0">
          <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Aryan Kumar. All Rights Reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="text-xs sm:text-sm text-muted-foreground text-center">
              Built with React, TypeScript & GSAP
            </div>
            
            <Button
              onClick={scrollToTop}
              className="group p-2"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute bottom-0 right-1/4">
          <div className="w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;