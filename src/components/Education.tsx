import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Artificial Intelligence & Machine Learning",
      institution: "Ballari Institute of Technology and Management",
      gpa: "GPA: 8.34 (till 6th semester)",
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-royal-blue to-royal-blue-dark",
      status: "In Progress"
    },
    {
      degree: "Pre-University College",
      field: "Science",
      institution: "B.K.G Pre-University College",
      gpa: "Completed with Excellence",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-gold to-gold-dark",
      status: "Completed"
    },
    {
      degree: "Secondary School Education",
      field: "General Studies",
      institution: "Shri Shaileshwara Vidya Kendra",
      gpa: "Strong Foundation",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-royal-blue to-gold",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
            My <span className="text-gradient-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-gold mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Building a strong foundation in technology and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div
              key={education.degree}
              className="card-portfolio animate-fade-up group hover:scale-[1.02] transition-smooth"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and Status */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${education.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-smooth`}>
                    {education.icon}
                  </div>
                  <div className="mt-3 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      education.status === 'In Progress' 
                        ? 'bg-gold text-white' 
                        : 'bg-royal-blue text-white'
                    }`}>
                      {education.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 font-poppins group-hover:text-primary transition-smooth">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium font-inter">
                        {education.field}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary font-inter">
                        {education.gpa}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mt-2 font-inter">
                    {education.institution}
                  </p>

                  {/* Additional Info for Current Degree */}
                  {education.status === 'In Progress' && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-gradient-primary font-poppins">AI/ML</div>
                          <div className="text-xs text-muted-foreground font-inter">Specialization</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gradient-secondary font-poppins">8.34</div>
                          <div className="text-xs text-muted-foreground font-inter">Current GPA</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gradient-primary font-poppins">6th</div>
                          <div className="text-xs text-muted-foreground font-inter">Semester</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gradient-secondary font-poppins">2026</div>
                          <div className="text-xs text-muted-foreground font-inter">Graduation</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="card-portfolio text-center animate-fade-up animate-tilt">
            <div className="text-3xl font-bold text-gradient-primary mb-2 font-poppins">8.34</div>
            <p className="text-muted-foreground font-inter">Current GPA</p>
          </div>
          
          <div className="card-portfolio text-center animate-fade-up animate-tilt">
            <div className="text-3xl font-bold text-gradient-secondary mb-2 font-poppins">AI/ML</div>
            <p className="text-muted-foreground font-inter">Specialization</p>
          </div>
          
          <div className="card-portfolio text-center animate-fade-up animate-tilt">
            <div className="text-3xl font-bold text-gradient-primary mb-2 font-poppins">Strong</div>
            <p className="text-muted-foreground font-inter">Foundation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
