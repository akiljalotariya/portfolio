import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">

      {/* LEFT — TEXT CONTENT */}
      <div className="max-w-3xl">
        <p className="text-muted-foreground text-lg mb-2">Hello</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
          Hi, I'm <span className="text-primary">Akil Jalotariya</span>
        </h1>

        {/* Code Card */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-card max-w-lg border border-border">
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-slate-400 text-sm ml-4">developer.js</span>
          </div>

          <div className="bg-slate-900 p-6 font-mono text-sm text-slate-300">
            <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {"{"}</p>
            <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-amber-300">"Jalotariya Akil"</span>,</p>
            <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-amber-300">"MERN Stack Developer"</span>,</p>
            <p className="pl-4"><span className="text-cyan-400">stack</span>: [<span className="text-amber-300">"MongoDB"</span>, <span className="text-amber-300">"Express"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node.js"</span>],</p>
            <p className="pl-4"><span className="text-cyan-400">passion</span>: <span className="text-amber-300">"Building amazing apps"</span></p>
            <p>{"}"}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
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

      {/* RIGHT — ROUND IMAGE */}
      <div className="flex justify-center md:justify-end w-100 h-100 sm:w-90 sm:h-90">
        <img
          src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwY29kaW5nfGVufDB8fDB8fHww"
          alt="Profile"
          className="w-100 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl border-4 border-white/20"
        />
      </div>

    </div>
  </div>
</section>


    </>
  );
};

export default HeroSection;