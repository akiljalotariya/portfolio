import { Monitor, Server, Smartphone, Layout, Database, Wrench } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces with React and modern CSS frameworks.",
    tags: ["React", "Tailwind", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable server-side applications and RESTful APIs with Node.js and Express.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    icon: Smartphone,
    title: "Full Stack Applications",
    description: "End-to-end development of web applications using the complete MERN stack.",
    tags: ["MERN Stack", "Full Stack"],
  },
  {
    icon: Layout,
    title: "Mobile Responsive Design",
    description: "Ensuring websites look and work perfectly on all devices and screen sizes.",
    tags: ["Responsive", "Mobile-First"],
  },
  {
    icon: Database,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user experiences with attention to detail.",
    tags: ["Figma", "UI Design"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Keeping websites secure, updated, and performing at their best.",
    tags: ["Maintenance", "Updates"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            I offer a variety of web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border card-hover group"
            >
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;