import avatarImage from "/lovable-uploads/b5ea5af8-311e-46a6-906f-7a5d39d8b4de.png";

const AboutSection = () => {
  const skills = [
    "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Prototyping",
    "Wireframing", "User Research", "HTML/CSS", "JavaScript", "React"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border border-border bg-card shadow-purple">
                <img 
                  src={avatarImage} 
                  alt="Bilson Digal Profile Photo" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm a passionate UI/UX Designer and Computer Science Engineering student at 
                Trident Academy of Technology, Bhubaneswar. With a keen eye for detail and a 
                love for creating intuitive digital experiences, I specialize in transforming 
                complex problems into simple, elegant solutions.
              </p>
              <p>
                My journey in design started with a curiosity about how technology can be made 
                more human-centered. I believe that great design is not just about making 
                things look beautiful, but about creating meaningful connections between users 
                and the digital world. Through my studies and hands-on projects, I've developed 
                expertise in user research, wireframing, prototyping, and visual design.
              </p>
              <p className="text-muted-foreground">
                When I'm not designing, you can find me exploring new design trends, learning 
                about emerging technologies, or collaborating with fellow designers and 
                developers to bring innovative ideas to life.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg px-4 py-3 text-center text-sm font-medium hover:border-primary transition-colors duration-300 hover:shadow-purple"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;