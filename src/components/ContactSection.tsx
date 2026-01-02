import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xaqnoeyb");

  if (state.succeeded) {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  }

  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* header content removed for brevity */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-background border border-border shadow-card">

            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <Input id="name" type="text" name="name" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="email">Email Address</label>
              <Input id="email" type="email" name="email" required />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <label htmlFor="message">Your Message</label>
              <Textarea id="message" name="message" rows={5} required />
              <ValidationError field="message" prefix="Message" errors={state.errors} />
            </div>

            <Button type="submit" size="lg" disabled={state.submitting} className="w-full">
              {state.submitting ? "Sending..." : <><Send className="mr-2" size={18}/>Send Message</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
