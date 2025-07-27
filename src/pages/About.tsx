import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinGDG from '@/components/JoinGDG';
import { FaReact, FaJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiTailwindcss, SiAngular, SiGooglecloud, SiMysql } from 'react-icons/si';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me - Tholumuzi Khuboni | Software Developer Journey";
  }, []);
  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/30 rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/40 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/60 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
                  About Me
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
                  <span className="block text-foreground">Who</span>
                  <span className="block text-foreground">Is</span>
                  <span className="block text-primary italic">Tholumuzi</span>
                </h1>
                
                <div className="text-xl text-foreground font-bold mb-2">
                  Tholumuzi Kuboni
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  A passionate software engineer with expertise across multiple domains. I bring 
                  technical excellence and innovative solutions to every project, with skills spanning 
                  Software Engineering, IT Support, Security Engineering, and Cloud Computing.
                </p>
              </div>

            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Visual Block */}
                <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border border-primary"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border border-primary rotate-45"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-primary"></div>
                    <div className="absolute bottom-4 right-4 w-5 h-5 border border-primary rotate-12"></div>
                  </div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold font-mono text-primary mb-4">TK</div>
                      <div className="text-sm font-mono text-muted-foreground tracking-wider">
                        SOFTWARE ENGINEER
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-background border border-primary"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-background border border-primary rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <div className="writing-mode-vertical text-sm text-muted-foreground font-mono tracking-wider">
            SCROLL DOWN
          </div>
        </div>
      </section>

      
      {/* Professional Expertise Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-4 sm:mb-6">
              <span className="block text-foreground">My</span>
              <span className="block text-foreground">Professional</span>
              <span className="block text-primary italic">Expertise</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Comprehensive skills across multiple technology domains with a focus on innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-background border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-mono text-lg">01</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground mb-3">Software Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full-stack development with modern frameworks, clean architecture, and scalable solutions.
              </p>
            </div>

            <div className="p-6 bg-background border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-mono text-lg">02</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground mb-3">IT Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technical support, system administration, and infrastructure management for optimal performance.
              </p>
            </div>

            <div className="p-6 bg-background border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-mono text-lg">03</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground mb-3">Security Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cybersecurity implementation, vulnerability assessment, and secure coding practices.
              </p>
            </div>

            <div className="p-6 bg-background border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-mono text-lg">04</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground mb-3">Cloud Computing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cloud architecture, deployment automation, and scalable infrastructure solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-4 sm:mb-6">
              <span className="block text-foreground">Core</span>
              <span className="block text-primary italic">Values</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              The principles that guide my approach to technology and client relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-left space-y-4">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Constantly exploring new technologies and methodologies to deliver cutting-edge solutions
                that push boundaries and exceed expectations.
              </p>
            </div>

            <div className="text-left space-y-4">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Committed to delivering high-quality code and solutions with attention to detail,
                performance optimization, and maintainable architecture.
              </p>
            </div>

            <div className="text-left space-y-4">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-foreground">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building strong partnerships with clients and teams through clear communication,
                transparency, and shared vision for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies I Use */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
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
            ].map((tech) => (
              <div key={tech.name} className="group p-4 border border-border hover:border-primary/50 transition-colors text-center">
                <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:scale-110 transition-transform`} />
                <div className="text-xs text-muted-foreground font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-4 sm:mb-6">
              <span className="block text-foreground">My</span>
              <span className="block text-primary italic">Journey</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Capturing moments from conferences, events, and professional experiences that have shaped my career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Images */}
            <div className="border border-border hover:border-primary/50 transition-colors">
              <img 
                src="/lovable-uploads/6f8ec07f-8653-4ca1-a41f-483b20abb5c8.png" 
                alt="Build With AI Johannesburg Speakers"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="border border-border hover:border-primary/50 transition-colors">
              <img 
                src="/lovable-uploads/53162d06-b9e2-4d55-8cd7-a3e45b5dabf3.png" 
                alt="Build With AI Johannesburg Speakers"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="border border-border hover:border-primary/50 transition-colors">
              <img 
                src="/lovable-uploads/7575c590-2320-4fa6-8218-4968fdf230e5.png" 
                alt="Build With AI Event"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="border border-border hover:border-primary/50 transition-colors">
              <img 
                src="/lovable-uploads/f44fedc6-0977-402f-b14b-4f1bbe24608d.png" 
                alt="Google Cloud"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="border border-border hover:border-primary/50 transition-colors">
              <img 
                src="/lovable-uploads/7ee6cba4-e729-4649-9dc7-4bdc990ded10.png" 
                alt="Professional Development"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="border border-border hover:border-primary/50 transition-colors">
              <img 
                src="/lovable-uploads/72554f76-9404-42cb-a792-717c7a405017.png" 
                alt="Work Environment"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="border border-border hover:border-primary/50 transition-colors">
              <img 
                src="/lovable-uploads/b462ee0f-491c-4693-acba-e37673a84c55.png" 
                alt="Home Office"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <JoinGDG />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
