import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 102, 194, 0.9), rgba(201, 162, 39, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-xl sm:text-2xl text-white/90 font-inter mb-2">
              Hi, I'm Vinayaka Reddy D 👋
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 font-poppins">
              Software Developer
            </h1>
          </div>

          {/* Pitch */}
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed font-inter">
            I build efficient, scalable, and user-friendly solutions with Python, MySQL, and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="connect"
              size="lg"
              onClick={scrollToContact}
              className="gap-3 text-lg px-8 py-4 h-auto"
            >
              <Mail className="w-5 h-5" />
              Let's Connect
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("/assets/VinayakaR11.pdf", "_blank")}
              className="gap-3 text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/vinayaka-r-626707325/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-smooth group"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-smooth" />
            </a>
            <a
              href="https://github.com/VinayakaReddy20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-smooth group"
            >
              <Github className="w-6 h-6 text-white group-hover:scale-110 transition-smooth" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;