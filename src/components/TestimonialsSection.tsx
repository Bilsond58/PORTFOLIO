import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      avatar: "SJ",
      rating: 5,
      content: "Bilson's design work exceeded our expectations. His attention to detail and user-centered approach made our app incredibly intuitive and engaging."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder at InnovateLab",
      avatar: "MC",
      rating: 5,
      content: "Working with Bilson was a game-changer for our startup. He transformed our complex ideas into a beautiful, user-friendly interface that our customers love."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director at DigitalFlow",
      avatar: "ER",
      rating: 5,
      content: "Bilson's creative vision and technical skills are impressive. He delivered a stunning website that perfectly captures our brand identity and converts visitors effectively."
    }
  ];

  const avatarColors = [
    "bg-purple-500",
    "bg-pink-500", 
    "bg-indigo-500"
  ];

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-background border border-border rounded-2xl p-8 group hover:border-primary transition-all duration-300 hover:shadow-purple transform hover:scale-105"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${avatarColors[index]} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;