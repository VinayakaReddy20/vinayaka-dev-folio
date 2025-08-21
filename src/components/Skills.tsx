import { Code, Database, FileSpreadsheet, Users, Globe, MessageCircle, Clock, Eye, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Web",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      color: "from-royal-blue to-royal-blue-dark"
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "DBMS"],
      color: "from-gold to-gold-dark"
    },
    {
      title: "Tools",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      skills: ["MS Excel"],
      color: "from-royal-blue to-gold"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: ["Problem-Solving", "Communication", "Time Management", "Adaptability", "Attention to Detail"],
      color: "from-gold to-royal-blue"
    },
    {
      title: "Languages",
      icon: <Globe className="w-8 h-8" />,
      skills: ["English", "Kannada", "Telugu", "Hindi"],
      color: "from-royal-blue-dark to-gold-dark"
    }
  ];

  const getSkillIcon = (skill: string) => {
    switch (skill.toLowerCase()) {
      case 'communication':
        return <MessageCircle className="w-4 h-4" />;
      case 'time management':
        return <Clock className="w-4 h-4" />;
      case 'attention to detail':
        return <Eye className="w-4 h-4" />;
      case 'problem-solving':
        return <Lightbulb className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-gold mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            A comprehensive toolkit for building modern, efficient solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-portfolio animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-smooth mx-auto`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-4 font-poppins text-foreground">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-accent rounded-lg text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {getSkillIcon(skill)}
                    <span className="font-medium font-inter">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;