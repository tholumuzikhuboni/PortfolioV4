import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 bg-secondary/30">
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
            <div className="space-y-12">
              {/* BSc Computer Engineering */}
              <div className="pl-4 border-l-4 border-primary">
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
              <div className="pl-4 border-l-4 border-accent">
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
            <div className="flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative">
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
  );
};

export default Education;