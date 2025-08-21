import { Button } from "@/components/ui/button";
import { ArrowUp, Heart, Download, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <div className="font-bold text-2xl text-gradient-primary mb-2"></div>
            <p className="text-muted-foreground font-inter flex items-center justify-center md:justify-start gap-1">
  
            </p>
          </div>

          {/* Center - Quick Actions */}
          <div className="text-center space-y-4">
            <Button
              variant="outline"
              onClick={() => window.open("/assets/VinayakaR11.pdf", "_blank")}
              className="gap-2 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <p className="text-sm text-muted-foreground font-inter">
              © 2025 Vinayaka Reddy D. All rights reserved.
            </p>
          </div>

          {/* Right - Social & Back to Top */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            {/* Social Links */}
            <a
              href="https://www.linkedin.com/in/vinayaka-r-626707325/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth group"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-smooth" />
            </a>
            
            <a
              href="https://github.com/VinayakaReddy20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth group"
              title="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-smooth" />
            </a>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:scale-110 transition-smooth"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom - Additional Info */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-inter">
            Built with React, TypeScript, Tailwind CSS, and passion for clean code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
