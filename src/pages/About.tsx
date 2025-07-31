import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinGDG from '@/components/JoinGDG';
import { FaReact, FaJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiTailwindcss, SiAngular, SiGooglecloud, SiMysql } from 'react-icons/si';
import { MapPin, Code2, Globe, Cloud, Wrench, Lightbulb, Target, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me - Tholumuzi Khuboni | Software Developer Journey";
  }, []);
  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Geometric Background Elements with animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 animate-float-slow"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/10 rotate-12 animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-40 bg-primary/30 animate-pulse"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 rounded-full border-2 border-accent/30 animate-bounce-gentle"></div>
          
          {/* New animated elements */}
          <div className="absolute top-10 left-1/4 w-6 h-6 bg-primary/20 rotate-45 animate-rotate-in" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-10 left-1/2 w-8 h-8 border border-accent/30 rounded-full animate-scale-in" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-10 w-1 h-20 bg-accent/40 animate-slide-in-left" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                {/* Small intro */}
                <div className="inline-block">
                  <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                    About Me
                  </span>
                  <div className="w-16 h-0.5 bg-primary mt-2"></div>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                  <span className="block text-foreground">My</span>
                  <span className="block text-foreground">Story</span>
                  <span className="block text-primary italic">& Journey</span>
                </h1>

                {/* Name */}
                <div className="pl-4 border-l-4 border-accent">
                  <p className="text-xl text-muted-foreground font-light">I'm</p>
                  <p className="text-3xl font-bold text-foreground">Tholumuzi Kuboni</p>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  A passionate software engineer whose journey began with curiosity and evolved into expertise. 
                  Driven by innovation, guided by excellence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/start-project"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  Work With Me
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-medium rounded-none hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300"
                >
                  View Portfolio
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-foreground">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Visual Block */}
                <div className="w-80 h-96 bg-gradient-to-br from-primary to-accent relative hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  
                  {/* Content inside the block */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">TK</div>
                      <div className="text-sm tracking-wider">SOFTWARE ENGINEER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full relative">
              <div className="w-1 h-2 bg-muted-foreground rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
            <div className="writing-mode-vertical text-sm text-muted-foreground tracking-wider">
              SCROLL DOWN
            </div>
          </div>
        </div>
      </section>

      
      {/* My Journey - Nelson Mandela Style Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">The</span>
              <span className="block text-foreground">Bill Gates</span>
              <span className="block text-primary italic">Inspiration</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              The moment that sparked a lifelong passion for software engineering and changed everything.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Story Content */}
            <div className="space-y-12 animate-slide-in-left">
              {/* The Discovery */}
              <div className="pl-4 border-l-4 border-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl text-muted-foreground font-light">The</p>
                <p className="text-3xl font-bold text-foreground">Discovery</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Lightbulb className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Primary School Computer Lesson</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  It all started when I first heard about Bill Gates and how he created Microsoft. 
                  The term "software engineer" was completely new to me, but something about it immediately captured my imagination.
                </p>
              </div>

              {/* The Evolution */}
              <div className="pl-4 border-l-4 border-accent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-xl text-muted-foreground font-light">The</p>
                <p className="text-3xl font-bold text-foreground">Evolution</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Target className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">From Curiosity to Passion</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  What began as childhood curiosity evolved into a serious pursuit. Through my Diploma in IT and BSc in Computer Engineering, 
                  each step deepened my understanding and love for creating innovative solutions.
                </p>
              </div>

              {/* The Present */}
              <div className="pl-4 border-l-4 border-secondary animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-xl text-muted-foreground font-light">The</p>
                <p className="text-3xl font-bold text-foreground">Present</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Leading & Innovating</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  Today, as a Software Engineer, IT Specialist, Tech Lead, and Security Engineer, I combine 
                  technical expertise with leadership skills to drive innovation. That young boy inspired by Bill Gates has never looked back.
                </p>
              </div>
            </div>

            {/* Right side - Visual Element with Quote */}
            <div className="flex justify-center items-center mt-8 lg:mt-0 animate-slide-in-right">
              <div className="relative animate-scale-in" style={{ animationDelay: '0.8s' }}>
                {/* Main Visual Block */}
                <div className="w-72 h-80 bg-gradient-to-br from-primary/20 to-accent/20 border border-border relative">
                  {/* Floating quote */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl text-primary/30 font-mono mb-4">"</div>
                      <p className="text-foreground font-mono text-lg leading-relaxed">
                        Your most unhappy customers are your greatest source of learning
                      </p>
                      <div className="text-sm text-muted-foreground mt-4 font-mono">- Bill Gates</div>
                      <div className="pt-4 border-t border-border mt-4">
                        <div className="text-xl font-bold text-primary">Microsoft</div>
                        <div className="text-xs text-muted-foreground">My First Inspiration</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 border border-primary/30"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rotate-45"></div>
                </div>

                {/* Additional geometric elements */}
                <div className="absolute top-8 -left-6 w-3 h-3 bg-accent rotate-45"></div>
                <div className="absolute bottom-16 -right-4 w-4 h-4 border border-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                <span className="block text-foreground">What</span>
                <span className="block text-foreground">I</span>
                <span className="block text-primary italic">Do</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I specialize in delivering comprehensive technology solutions that drive business growth 
                and help organizations leverage modern technologies effectively.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Services */}
              <div className="space-y-12">
                {/* Custom Software Development */}
                <div className="pl-4 border-l-4 border-primary">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="text-xl text-muted-foreground font-light">Development</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">Custom Software Development</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Building tailored software solutions that perfectly fit your business needs and requirements 
                    using modern frameworks and best practices.
                  </p>
                </div>

                {/* Web Applications */}
                <div className="pl-4 border-l-4 border-accent">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="w-5 h-5 text-accent" />
                    <span className="text-xl text-muted-foreground font-light">Frontend & Backend</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">Web Applications</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Creating responsive, scalable web applications using React, Angular, and modern 
                    backend technologies for optimal performance and user experience.
                  </p>
                </div>
              </div>

              {/* Right side - More Services */}
              <div className="space-y-12 mt-8 lg:mt-0">
                {/* Google Cloud */}
                <div className="pl-4 border-l-4 border-primary">
                  <div className="flex items-center space-x-2 mb-2">
                    <Cloud className="w-5 h-5 text-primary" />
                    <span className="text-xl text-muted-foreground font-light">Cloud Solutions</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">Google Cloud Platform</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Leveraging Google Cloud Platform for scalable, secure, and efficient cloud solutions 
                    including deployment, storage, and infrastructure management.
                  </p>
                </div>

                {/* IT Troubleshooting */}
                <div className="pl-4 border-l-4 border-accent">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wrench className="w-5 h-5 text-accent" />
                    <span className="text-xl text-muted-foreground font-light">Support & Maintenance</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">IT Troubleshooting</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Providing expert technical support and problem-solving for your IT infrastructure 
                    with quick diagnosis and effective solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Journey - Education Style */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                <span className="block text-foreground">My</span>
                <span className="block text-foreground">Academic</span>
                <span className="block text-primary italic">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Building a strong foundation through comprehensive academic training in computer 
                science and software engineering from leading South African institutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Education */}
              <div className="space-y-12 animate-slide-in-left">
                {/* BSc Computer Engineering */}
                <div className="pl-4 border-l-4 border-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <p className="text-xl text-muted-foreground font-light">BSc</p>
                  <p className="text-3xl font-bold text-foreground">Computer Engineering</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">University of Cape Town</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Advanced studies in computer systems, software engineering principles, and 
                    engineering methodologies with focus on system design and optimization.
                  </p>
                </div>

                {/* Diploma in IT */}
                <div className="pl-4 border-l-4 border-accent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <p className="text-xl text-muted-foreground font-light">Diploma in IT</p>
                  <p className="text-3xl font-bold text-foreground">Software Development</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">University of Johannesburg</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Foundational training in software development, programming languages, and 
                    information technology systems with emphasis on practical application.
                  </p>
                </div>
              </div>

              {/* Right side - Visual Element with Quote */}
              <div className="flex justify-center items-center mt-8 lg:mt-0 animate-slide-in-right">
                <div className="relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
                  {/* Main Visual Block */}
                  <div className="w-72 h-80 bg-gradient-to-br from-primary/20 to-accent/20 border border-border relative">
                    {/* Floating quote */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-6xl text-primary/30 font-mono mb-4">"</div>
                        <p className="text-foreground font-mono text-lg leading-relaxed">
                          Education is the most powerful weapon which you can use to change the world
                        </p>
                        <div className="text-sm text-muted-foreground mt-4 font-mono">- Nelson Mandela</div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 border border-primary/30"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rotate-45"></div>
                  </div>

                  {/* Additional geometric elements */}
                  <div className="absolute top-8 -left-6 w-3 h-3 bg-accent rotate-45"></div>
                  <div className="absolute bottom-16 -right-4 w-4 h-4 border border-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                className="group p-4 border border-border hover:border-primary/50 transition-colors text-center animate-rotate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:scale-110 transition-transform`} />
                <div className="text-xs text-muted-foreground font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="animate-fade-in-up">
        <JoinGDG />
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
