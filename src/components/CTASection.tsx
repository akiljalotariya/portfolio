import { Button } from "./ui/button";
import { MessageCircle, FileText } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Let's discuss how we can work together to bring your ideas to life. 
            I'm always excited to collaborate on new projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90"
              asChild
            >
              <a href="#contact">
                <MessageCircle className="mr-2" size={18} />
                Get in Touch
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <FileText className="mr-2" size={18} />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;