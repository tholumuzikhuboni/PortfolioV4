import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import ProfessionalHighlights from '@/components/ProfessionalHighlights';
import NotASecret from '@/components/NotASecret';
import FeaturedProjects from '@/components/FeaturedProjects';
import JoinGDG from '@/components/JoinGDG';
import GetInTouch from '@/components/GetInTouch';
import WhatIDo from '@/components/WhatIDo';
import DayInLife from '@/components/DayInLife';
import { FaReact, FaJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiTailwindcss, SiAngular, SiGooglecloud, SiMysql } from 'react-icons/si';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      <Hero />
      
      {/* Technologies I Use */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-slide-in-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">Technologies</span>
              <span className="block text-foreground">I</span>
              <span className="block text-primary italic">Use</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks that I leverage to build 
              robust, scalable, and innovative solutions for complex challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {[
              { name: 'React', icon: FaReact, color: 'text-blue-500' },
              { name: 'Angular', icon: SiAngular, color: 'text-red-600' },
              { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
              { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
              { name: 'Python', icon: FaPython, color: 'text-green-500' },
              { name: 'SQL', icon: SiMysql, color: 'text-blue-700' },
              { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500' },
              { name: 'GCP', icon: SiGooglecloud, color: 'text-blue-500' },
              { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
            ].map((tech, index) => (
              <div 
                key={tech.name} 
                className="group p-4 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhatIDo />
      <DayInLife />
      
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <Education />
      </div>
      <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
        <ProfessionalHighlights />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <FeaturedProjects />
      </div>
      <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
        <NotASecret />
      </div>
      <div className="animate-scale-in" style={{ animationDelay: '0.7s' }}>
        <JoinGDG />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <GetInTouch />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
