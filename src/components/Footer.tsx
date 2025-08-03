import { Instagram, Linkedin, Github, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/bilsonn_____?igsh=d2M5ZDR6Z280ZmN6",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bilson-digal-099853368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Bilsond58",
      label: "GitHub"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/918917606856",
      label: "WhatsApp"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Bilson<span className="text-primary">Digal</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              UI/UX Designer passionate about creating meaningful 
              digital experiences through innovative design solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Location: Bhubaneswar, Odisha</p>
              <p>Phone: +91 8917606856</p>
              <p>Email: bilsondigal117@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Bilson Digal. Made with <Heart className="w-4 h-4 text-red-500" /> and passion for design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
