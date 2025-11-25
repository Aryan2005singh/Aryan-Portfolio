import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, Instagram, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null); // ✅ only one form ref
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contactInfoRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // ✅ GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contactInfoRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast({
        title: 'All fields are required!',
        description: 'Please fill out every field before submitting.',
      });
      return;
    }

    if (!isValidEmail(formData.from_email)) {
      toast({
        title: 'Invalid Email Address',
        description: 'Please enter a valid email before sending.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_6kv4g9n',   // your service ID
        'template_m9ixghg',  // your template ID
        formRef.current!,
        'pmsw0QRY0SbRVUlJ_'  // your public key
      );

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="glass-card p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always excited to discuss new opportunities, collaborations, and innovative projects.
                Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-lg flex items-center justify-center glow-pulse">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm sm:text-base">Email</div>
                    <a
                      href="mailto:aryankum70912@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                    >
                      aryankum70912@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-lg flex items-center justify-center glow-pulse">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm sm:text-base">Phone</div>
                    <a
                      href="tel:+919546995527"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      +91 9546995527
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-lg flex items-center justify-center glow-pulse">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm sm:text-base">Location</div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Delhi, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <div className="text-sm font-semibold mb-3 sm:mb-4">Follow me on</div>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href="https://linkedin.com/in/aryan-kumar-5183a4257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-10 h-9 sm:h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </a>
                  <a
                    href="https://github.com/Aryan2005singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-10 h-9 sm:h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Github className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/aryan_singh_rajput709/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-10 h-9 sm:h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="glass-card p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-3 sm:px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                    className="w-full px-3 sm:px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none text-sm sm:text-base"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
