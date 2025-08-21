import { Award, Code, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "C Programming Certification",
      issuer: "KEONICS",
      description: "Comprehensive certification covering fundamental programming concepts, data structures, and algorithmic thinking in C programming language.",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-royal-blue to-royal-blue-dark",
      skills: ["C Programming", "Data Structures", "Algorithms", "Memory Management"],
      type: "Programming"
    },
    {
      title: "Python Programming Certification",
      issuer: "EZ Technologies",
      description: "Advanced Python programming certification covering object-oriented programming, web development, database integration, and automation scripting.",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-gold to-gold-dark",
      skills: ["Python", "OOP", "Web Development", "Automation"],
      type: "Programming"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
            My <span className="text-gradient-primary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-gold mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Validated expertise through professional certifications and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="card-portfolio animate-fade-up group animate-tilt"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-smooth`}>
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 font-poppins group-hover:text-primary transition-smooth">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-semibold font-inter">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium font-inter">
                      {cert.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 font-inter">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 font-poppins flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Skills Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium font-inter"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2"
                  onClick={() => window.open("#contact", "_self")}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="card-portfolio text-center animate-fade-up animate-tilt">
            <div className="text-3xl font-bold text-gradient-primary mb-2 font-poppins">2</div>
            <p className="text-muted-foreground font-inter">Certifications</p>
          </div>
          
          <div className="card-portfolio text-center animate-fade-up animate-tilt">
            <div className="text-3xl font-bold text-gradient-secondary mb-2 font-poppins">2</div>
            <p className="text-muted-foreground font-inter">Languages</p>
          </div>
          
          <div className="card-portfolio text-center animate-fade-up animate-tilt">
            <div className="text-3xl font-bold text-gradient-primary mb-2 font-poppins">8+</div>
            <p className="text-muted-foreground font-inter">Skills</p>
          </div>
          
          <div className="card-portfolio text-center animate-fade-up animate-tilt">
            <div className="text-3xl font-bold text-gradient-secondary mb-2 font-poppins">100%</div>
            <p className="text-muted-foreground font-inter">Verified</p>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16">
          <div className="card-portfolio max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal-blue to-gold flex items-center justify-center text-white mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 font-inter leading-relaxed">
              These certifications represent my commitment to staying current with industry standards 
              and continuously expanding my technical expertise. I believe in validating skills through 
              practical application and recognized credentials.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium font-inter">
                Industry Standards
              </span>
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium font-inter">
                Practical Skills
              </span>
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium font-inter">
                Verified Knowledge
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;