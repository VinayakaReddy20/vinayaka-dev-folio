import { useEffect, useRef, useState } from 'react';
import profilePhoto from '../assets/vinay.jpg';
const About = () => {
  const highlights = [
    "Python",
    "Full-Stack",
    "Database - MySQL",
    "Automation",
    "Clean UI/UX"
    
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              I am a dedicated Python Developer with hands-on experience in full-stack web development, 
              server automation, and database management. I enjoy turning complex problems into simple, 
              elegant solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              I specialize in Python and MySQL, with strong foundations in HTML, CSS, and JavaScript. 
              I love learning, collaborating, and building tools that make a difference.
            </p>

            {/* Highlights */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                What I Bring
              </h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <span
                    key={highlight}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Visual */}
          <div className="grid grid-cols-2 gap-6 animate-fade-up">
            <div className="card-portfolio text-center animate-tilt">
              <div className="text-3xl font-bold text-gradient-primary mb-2 font-poppins">
                2+
              </div>
              <p className="text-muted-foreground font-inter">Years Learning</p>
            </div>
            
            <div className="card-portfolio text-center animate-tilt">
              <div className="text-3xl font-bold text-gradient-secondary mb-2 font-poppins">
                7+
              </div>
              <p className="text-muted-foreground font-inter">Projects Built</p>
            </div>
            
            <div className="card-portfolio text-center animate-tilt">
              <div className="text-3xl font-bold text-gradient-primary mb-2 font-poppins">
                4+
              </div>
              <p className="text-muted-foreground font-inter">Technologies</p>
            </div>
            
            <div className="card-portfolio text-center animate-tilt">
              <div className="text-3xl font-bold text-gradient-secondary mb-2 font-poppins">
                100%
              </div>
              <p className="text-muted-foreground font-inter">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
