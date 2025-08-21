import { Trophy, Users, Clock, MapPin } from "lucide-react";

const Achievements = () => {
  const achievement = {
    title: "State-Level Hackathon Participation",
    event: "24-Hour Programming Challenge",
    location: "GM University, Davanagere",
    description: "Successfully participated in an intensive 24-hour State-Level Hackathon, demonstrating problem-solving skills, teamwork, and the ability to deliver solutions under pressure.",
    highlights: [
      "24-hour continuous coding challenge",
      "State-level competition",
      "Team collaboration and leadership",
      "Innovative solution development"
    ],
    icon: <Trophy className="w-8 h-8" />,
    stats: [
      { label: "Duration", value: "24", unit: "Hours", icon: <Clock className="w-5 h-5" /> },
      { label: "Level", value: "State", unit: "Wide", icon: <MapPin className="w-5 h-5" /> },
      { label: "Focus", value: "Team", unit: "Work", icon: <Users className="w-5 h-5" /> }
    ]
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
            My <span className="text-gradient-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-gold mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Recognition for dedication, teamwork, and technical excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Achievement Card */}
          <div className="card-portfolio animate-fade-up group">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side - Icon and Stats */}
              <div className="lg:w-1/3">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-royal-blue to-gold flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-smooth mx-auto lg:mx-0">
                  {achievement.icon}
                </div>
                
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                  {achievement.stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center lg:text-left p-4 bg-accent rounded-xl animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                        <div className="text-primary">
                          {stat.icon}
                        </div>
                        <span className="text-sm text-muted-foreground font-inter">{stat.label}</span>
                      </div>
                      <div className="font-bold text-foreground font-poppins">
                        <span className="text-xl text-gradient-primary">{stat.value}</span>
                        <span className="text-sm ml-1">{stat.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins group-hover:text-primary transition-smooth">
                  {achievement.title}
                </h3>
                
                <p className="text-lg text-primary font-semibold mb-2 font-inter">
                  {achievement.event}
                </p>
                
                <p className="text-muted-foreground mb-2 font-inter flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {achievement.location}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6 font-inter">
                  {achievement.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 font-poppins">
                    Key Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {achievement.highlights.map((highlight, index) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 p-3 bg-muted rounded-lg animate-fade-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-royal-blue to-gold"></div>
                        <span className="text-sm text-muted-foreground font-inter">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Impact */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="card-portfolio text-center animate-fade-up animate-tilt">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue to-royal-blue-dark flex items-center justify-center text-white mx-auto mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 font-poppins">Recognition</h4>
              <p className="text-sm text-muted-foreground font-inter">State-level acknowledgment for technical skills and innovation</p>
            </div>

            <div className="card-portfolio text-center animate-fade-up animate-tilt">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 font-poppins">Teamwork</h4>
              <p className="text-sm text-muted-foreground font-inter">Demonstrated leadership and collaboration in high-pressure environment</p>
            </div>

            <div className="card-portfolio text-center animate-fade-up animate-tilt">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue to-gold flex items-center justify-center text-white mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 font-poppins">Endurance</h4>
              <p className="text-sm text-muted-foreground font-inter">24-hour continuous focus and problem-solving dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;