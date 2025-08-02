import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectCollegeApp from "@/assets/project-college-app.png";
import projectMusicPlayer from "@/assets/project-music-player.png";
import projectPortfolio from "@/assets/project-portfolio.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Redesign College App",
      type: "App Design",
      description: "A modern redesign of the college application with improved user experience and intuitive navigation.",
      image: projectCollegeApp,
      link: "https://www.figma.com/proto/3qQnrOBlWScTBHPPRSBxkd/Untitled?page-id=0%3A1&node-id=1-2&viewport=86%2C121%2C0.6&t=NvsFWommtcl3RNSg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2"
    },
    {
      id: 2,
      title: "Music Player",
      type: "App Design",
      description: "Sleek and modern music player interface with intuitive controls and beautiful visual elements.",
      image: projectMusicPlayer,
      link: "https://www.figma.com/proto/bjc3M6PAHtMglem9VULQ6h/Untitled?node-id=0-1&t=R9zpKIpoSJTVsWd8-1"
    },
    {
      id: 3,
      title: "Portfolio",
      type: "Web Design",
      description: "Personal portfolio website showcasing design skills with modern aesthetics and smooth interactions.",
      image: projectPortfolio,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent design work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-purple transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold"
          >
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;