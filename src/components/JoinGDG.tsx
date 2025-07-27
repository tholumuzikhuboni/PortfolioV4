import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Calendar, Code } from "lucide-react";

const JoinGDG = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">Join</span>
              <span className="block text-primary italic">GDG Johannesburg</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Connect with passionate developers, attend insightful events, and grow your skills 
              in Google technologies alongside a vibrant tech community.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-12">
              {/* Exciting Events */}
              <div className="pl-4 border-l-4 border-primary">
                <p className="text-xl text-muted-foreground font-light">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Exciting
                </p>
                <p className="text-3xl font-bold text-foreground">Events</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  Attend DevFest, Build with AI, I/O Extended, and other engaging tech events 
                  throughout the year.
                </p>
              </div>

              {/* Community Growth */}
              <div className="pl-4 border-l-4 border-accent">
                <p className="text-xl text-muted-foreground font-light">
                  <Users className="w-5 h-5 inline mr-2" />
                  Community
                </p>
                <p className="text-3xl font-bold text-foreground">Growth</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  Network with like-minded developers, share knowledge, and build lasting 
                  professional relationships.
                </p>
              </div>

              {/* Skill Development */}
              <div className="pl-4 border-l-4 border-secondary">
                <p className="text-xl text-muted-foreground font-light">
                  <Code className="w-5 h-5 inline mr-2" />
                  Skill
                </p>
                <p className="text-3xl font-bold text-foreground">Development</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  Learn cutting-edge Google technologies, best practices, and industry trends 
                  from expert speakers.
                </p>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative">
                {/* Main Visual Block */}
                <div className="w-72 h-80 bg-gradient-to-br from-primary/20 to-accent/20 border border-border relative">
                  {/* Quote Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl text-primary/30 font-mono mb-4">"</div>
                      <p className="text-foreground font-mono text-lg leading-relaxed">
                        Be Part of Something Bigger
                      </p>
                      <div className="text-sm text-muted-foreground mt-4 font-mono">
                        Join the GDG Johannesburg Community
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
      </div>
    </section>
  );
};

export default JoinGDG;