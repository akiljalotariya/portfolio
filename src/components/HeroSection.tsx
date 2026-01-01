import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Text Content */}
          <div className="stagger-children">
            {/* Greeting */}
            <p className="text-muted-foreground text-lg mb-2"> Hello!</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Hi, I'm <span className="text-primary">Jalotariya Akil</span>
            </h1>

            {/* Code Block */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-card max-w-lg border border-border mx-auto">
              {/* Code Window Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-slate-400 text-sm ml-4">developer.js</span>
              </div>
              
              {/* Code Content */}
              <div className="bg-slate-900 p-6 font-mono text-sm text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {"{"}</p>
                <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-amber-300">"Jalotariya Akil"</span>,</p>
                <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-amber-300">"MERN Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-cyan-400">stack</span>: [<span className="text-amber-300">"MongoDB"</span>, <span className="text-amber-300">"Express"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node.js"</span>],</p>
                <p className="pl-4"><span className="text-cyan-400">passion</span>: <span className="text-amber-300">"Building amazing apps"</span></p>
                <p>{"}"}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
