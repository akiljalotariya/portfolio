import { Monitor, Server, Layers, Wrench } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Building responsive UIs with React, HTML, CSS, and JavaScript.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs with Node.js, Express, and MongoDB.",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "End-to-end application development using the MERN stack.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Keeping websites updated, secure, and performing optimally.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            I'm a dedicated developer crafting digital experiences with modern technologies
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Bridging Learning & Industry
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm a BCA student passionate about web development, currently interning at 
              Valudas Tech Park. I specialize in building full-stack web applications 
              using the MERN stack — MongoDB, Express.js, React, and Node.js.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My internship experience has given me hands-on exposure to real-world 
              projects, agile workflows, and industry-standard coding practices. I love 
              turning ideas into functional, beautiful applications that solve real problems.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Node.js", "MongoDB", "Express.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-secondary/50 border border-border card-hover"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;