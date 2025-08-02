import { Palette, Monitor, Smartphone, Layers } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with a focus on user experience and visual appeal."
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Designing responsive and modern websites that work seamlessly across all devices and platforms."
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Crafting mobile application interfaces that are both beautiful and functional for iOS and Android."
    },
    {
      icon: Layers,
      title: "Wireframing & Prototyping",
      description: "Building detailed wireframes and interactive prototypes to validate design concepts and user flows."
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-8 text-center group hover:border-primary transition-all duration-300 hover:shadow-purple transform hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;