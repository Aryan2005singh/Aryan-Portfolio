import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card backdrop-blur-md border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold gradient-text">
            Aryan Kumar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-foreground/80 hover:text-primary transition-colors capitalize text-sm font-medium">
                {item}
              </button>)}
          </div>          

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-lg glass-card hover:scale-110 transition-transform duration-300" aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="glass-card rounded-xl p-6 backdrop-blur-md border border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-left text-foreground/80 hover:text-primary transition-colors capitalize py-2 px-3 rounded-lg hover:bg-accent/10 font-medium">
                  {item}
                </button>)}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-border/30">
                <Button onClick={() => scrollToSection('contact')} className="w-full">
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;