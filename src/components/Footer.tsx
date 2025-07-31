const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', url: '#about' },
    { name: 'How It Works', url: '#' },
    { name: 'Impact Stories', url: '#' },
    { name: 'Transparency', url: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Security', url: '#' },
    { name: 'Contact Us', url: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-neon-primary">Change</span>
              <span className="text-neon-secondary">Makers</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Empowering global change through innovative technology and community-driven initiatives. 
              Join us in building a better tomorrow, one donation at a time.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">support@changemakers.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <span className="text-muted-foreground">24/7 Community Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-neon-accent">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-neon-secondary">Legal & Support</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links and stats */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex items-center space-x-8 text-center">
              <div>
                <div className="text-sm font-semibold text-neon-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Donors</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-neon-secondary">$2.5M</div>
                <div className="text-xs text-muted-foreground">Raised</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-neon-accent">100+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ChangeMakers. All rights reserved. Built with ❤️ for positive change.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;