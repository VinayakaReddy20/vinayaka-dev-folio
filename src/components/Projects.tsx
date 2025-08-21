import { ExternalLink, Github, MapPin, Server, Layers, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Instant Dress Tracker",
      subtitle: "Location-Based Fashion Discovery Web Application",
      description: "Built a full-stack web app to explore nearby clothing stores and fashion trends. Integrated Google Maps API for location-based search and real-time updates. Designed a responsive, user-friendly interface with smooth navigation.",
      icon: <MapPin className="w-6 h-6" />,
      tags: ["Full-Stack", "Maps", "UX"],
      gradient: "from-royal-blue to-royal-blue-dark",
      features: [
        "Google Maps API Integration",
        "Real-time Location Search",
        "Responsive Design",
        "Smooth Navigation"
      ],
      github: "https://github.com/VinayakaReddy20/Instant-Dress-Tracker"
    },
    {
      title: "Server Configuration Management",
      subtitle: "Automation Tool",
      description: "Developed a Python + Shell script tool for server setup, user management, software installation, backups, and monitoring. Implemented security best practices and service hardening. Improved reliability and automation across environments.",
      icon: <Server className="w-6 h-6" />,
      tags: ["Python", "Automation", "DevOps"],
      gradient: "from-gold to-gold-dark",
      features: [
        "Automated Server Setup",
        "User Management",
        "Security Hardening",
        "Backup & Monitoring"
      ],
       github: "https://github.com/VinayakaReddy20/Server-Configuration-Management"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-gold mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Showcasing practical solutions and innovative approaches to real-world challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-portfolio group animate-fade-up animate-tilt"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-smooth`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1 font-poppins group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 font-inter">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 font-poppins flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground font-inter">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Actions */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2"
                  onClick={() => window.open("https://github.com/VinayakaReddy20/Instant-Dress-Tracker", "_blank")}
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 gap-2"
                  onClick={() => window.open("#contact", "_self")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-portfolio max-w-2xl mx-auto animate-fade-up">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-royal-blue to-gold mx-auto mb-6">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6 font-inter">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button
              variant="hero"
              onClick={() => window.open("https://github.com/VinayakaReddy20/Server-Configuration-Management", "_blank")}
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
