import { useState, useEffect } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mwvpqwpq");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // clear inputs after submit
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* CONTACT FORM SECTION */}
      <section id="contact" className="section-container bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can collaborate to
              bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* CONTACT INFO */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {/* EMAIL */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">
                      <a
                        href="mailto:akiljalotariya34@email.com"
                        className="text-primary hover:underline"
                      >
                        akiljalotariya34@email.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Contact</p>
                    <p className="font-medium">
                      <a
                        href="tel:+919054593051"
                        className="text-primary hover:underline"
                      >
                        +91 90545 93051
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl bg-background border shadow-card"
            >
              <Input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" disabled={state.submitting} className="w-full">
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Connect With Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-4 hover:shadow-xl transition"
            >
              <Github className="w-14 h-14 text-gray-500 group-hover:scale-110 transition" />
              <span className="font-medium">Github</span>
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-4 hover:shadow-xl transition"
            >
              <Linkedin className="w-14 h-14 text-gray-500 group-hover:scale-110 transition" />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="mailto:akiljalotariya34@email.com"
              className="group bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-4 hover:shadow-xl transition"
            >
              <Mail className="w-14 h-14 text-gray-500 group-hover:scale-110 transition" />
              <span className="font-medium">Email</span>
            </a>

            <a
              href="https://wa.me/919054593051"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-4 hover:shadow-xl transition"
            >
              <Phone className="w-14 h-14 text-gray-500 group-hover:scale-110 transition" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
