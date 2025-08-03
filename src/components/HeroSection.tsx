import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github, MessageCircle } from "lucide-react";
import avatar3D from "@/assets/avatar-3d.png";

const HeroSection = () => {
  const downloadCV = () => {
    // Create a link to download the actual CV
    const link = document.createElement('a');
    link.href = '/lovable-uploads/26dc2ee2-0376-40ab-832c-27823b328873.png';
    link.download = 'Bilson_Digal_CV.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      href: "https://wa.me/8917606856",
      label: "WhatsApp"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Hello! I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                BILSON <span className="text-primary">DIGAL</span>
              </h1>
              <h2 className="text-2xl text-muted-foreground font-medium">UI/UX Designer</h2>
            </div>

            <div className="space-y-2">
              <p className="text-lg">
                <span className="text-primary font-semibold">B.Tech (CSE)</span> student at{" "}
                <a 
                  href="https://tat.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Trident Academy of Technology
                </a>
                , Bhubaneswar.
              </p>
              <p className="text-muted-foreground">
                Creating intuitive digital experiences through innovative design solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-purple"
              >
                My Projects
              </Button>
              <Button 
                onClick={downloadCV}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img 
                  src={avatar3D} 
                  alt="Bilson Digal 3D Avatar" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;