import { Clock, Sun, Sunset, Moon } from 'lucide-react';

const DayInLife = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">A Day</span>
              <span className="block text-foreground">In My</span>
              <span className="block text-primary italic">Life</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              How I structure my day to balance productivity, learning, and well-being 
              while building innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Daily Schedule */}
            <div className="space-y-12">
              {/* Morning */}
              <div className="pl-4 border-l-4 border-primary">
                <div className="flex items-center space-x-2 mb-2">
                  <Sun className="w-5 h-5 text-primary" />
                  <p className="text-xl text-muted-foreground font-light">Morning</p>
                  <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                  <span className="text-sm text-muted-foreground">06:00 - 12:00</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-3">Focus & Foundation</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Start with exercise and planning, then dive into deep work sessions. 
                  Morning hours are dedicated to complex problem-solving and writing quality code.
                </p>
              </div>

              {/* Afternoon */}
              <div className="pl-4 border-l-4 border-accent">
                <div className="flex items-center space-x-2 mb-2">
                  <Sunset className="w-5 h-5 text-accent" />
                  <p className="text-xl text-muted-foreground font-light">Afternoon</p>
                  <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                  <span className="text-sm text-muted-foreground">12:00 - 18:00</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-3">Collaboration & Growth</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Team meetings, code reviews, and collaborative projects. Time for learning 
                  new technologies and staying updated with industry trends.
                </p>
              </div>

              {/* Evening */}
              <div className="pl-4 border-l-4 border-secondary">
                <div className="flex items-center space-x-2 mb-2">
                  <Moon className="w-5 h-5 text-secondary" />
                  <p className="text-xl text-muted-foreground font-light">Evening</p>
                  <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                  <span className="text-sm text-muted-foreground">18:00 - 22:00</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-3">Innovation & Reflection</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Personal projects, experimenting with new ideas, and contributing to open source. 
                  End the day with reflection and planning for tomorrow.
                </p>
              </div>
            </div>

            {/* Right side - Visual Element */}
            <div className="flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative">
                {/* Main Visual Block */}
                <div className="w-72 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 border border-border relative">
                  {/* Floating quote */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl text-primary/30 font-mono mb-4">"</div>
                      <p className="text-foreground font-mono text-lg leading-relaxed">
                        Consistency in small actions leads to significant results
                      </p>
                      <div className="text-sm text-muted-foreground mt-4 font-mono">- Daily Philosophy</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 border border-primary/30"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rotate-45"></div>
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

export default DayInLife;
