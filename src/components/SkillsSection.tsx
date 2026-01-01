const frontendSkills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Tailwind CSS", level: 85 },
];

const backendSkills = [
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 70 },
  { name: "REST APIs", level: 75 },
];

const tools = [
  { name: "Git", level: 80 },
  { name: "GitHub", level: 85 },
  { name: "VS Code", level: 90 },
  { name: "Postman", level: 75 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="progress-bar">
      <div 
        className="progress-bar-fill" 
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            I enjoy learning new tools and technologies that help me build better applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-background p-8 rounded-2xl shadow-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Frontend</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-background p-8 rounded-2xl shadow-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Backend</h3>
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-background p-8 rounded-2xl shadow-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Tools</h3>
            <div className="space-y-5">
              {tools.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;