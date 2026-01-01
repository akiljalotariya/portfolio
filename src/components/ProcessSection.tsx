import { Search, PenTool, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Planning",
    description: "Understanding requirements and planning the project architecture.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes and visual designs for the application.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Building the application with clean, maintainable code.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Testing & Deployment",
    description: "Thorough testing and deploying the final product.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            How I <span className="text-primary">Work</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A streamlined process to deliver quality results on time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;