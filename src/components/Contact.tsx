import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "4bccb6f2-6c07-4066-9bcf-2b1376e01ced",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} - Portfolio Contact`,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message Sent! ✨",
          description: "Thanks, your message is on its way! I'll get back to you soon.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "vinaysdr02@gmail.com",
      href="mailto:vinaysdr02@gmail.com"

    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9380111579",
      href: "tel:+919380111579"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Ballari, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vinayaka-r-626707325/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/VinayakaReddy20",
      color: "hover:text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-gold mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Let's Connect Card */}
            <div className="card-portfolio shimmer text-center text-white animate-fade-up">
              <h3 className="text-2xl font-bold mb-4 font-poppins">
                Ready to Build Something Amazing?
              </h3>
              <p className="mb-6 font-inter opacity-90">
                Let's discuss your project and create innovative solutions together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => window.open("mailto:vinaysdr02@gmail.com", "_blank")}
                  className="gap-2 bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://www.linkedin.com/in/vinayaka-r-626707325/", "_blank")}
                  className="gap-2 bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={contact.label}
                  className="card-portfolio group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue to-gold flex items-center justify-center text-white group-hover:scale-110 transition-smooth">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-poppins">{contact.label}</p>
                      {contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-smooth font-inter"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground font-inter">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="card-portfolio animate-fade-up">
              <h4 className="font-semibold text-foreground mb-4 font-poppins">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-accent rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth group ${social.color}`}
                    title={social.label}
                  >
                    <div className="group-hover:scale-110 transition-smooth">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-portfolio animate-fade-up">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-inter">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="transition-smooth focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-inter">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="transition-smooth focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-inter">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                variant="hero"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
