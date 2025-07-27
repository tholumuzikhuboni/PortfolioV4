import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target } from 'lucide-react';

const NotASecret = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
            <span className="block text-foreground">Not</span>
            <span className="block text-foreground">A Secret</span>
            <span className="block text-primary italic">Anymore</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The moment that sparked a lifelong passion for software engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Story Content */}
          <div className="space-y-12">
            {/* The Revelation */}
            <div className="pl-4 border-l-4 border-primary">
              <p className="text-xl text-muted-foreground font-light">The</p>
              <p className="text-3xl font-bold text-foreground">Revelation</p>
              <div className="flex items-center space-x-2 mt-2">
                <Lightbulb className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">High School Computer Lesson</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                During my high school computer lessons, our teacher told us something that would change my life forever: 
                "The richest person in the world was a Software Engineer." That person was Bill Gates, the founder of Microsoft.
              </p>
            </div>

            {/* The Evolution */}
            <div className="pl-4 border-l-4 border-accent">
              <p className="text-xl text-muted-foreground font-light">The</p>
              <p className="text-3xl font-bold text-foreground">Evolution</p>
              <div className="flex items-center space-x-2 mt-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">From Wealth to Passion</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                My love for software engineering started right then and there. I'll be honest - initially, 
                it was because I wanted to be rich. But over the years, it has transformed into something much deeper: 
                my true passion.
              </p>
            </div>

            {/* The Inspiration */}
            <div className="pl-4 border-l-4 border-secondary">
              <p className="text-xl text-muted-foreground font-light">The</p>
              <p className="text-3xl font-bold text-foreground">Inspiration</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary-foreground">!</span>
                </div>
                <span className="text-muted-foreground">World-Changing Solutions</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                I am still inspired by Bill Gates to this day. My goal is to create innovative solutions 
                just like him - solutions that can change the world and make a meaningful impact on people's lives.
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
                      The richest person in the world was a Software Engineer
                    </p>
                    <div className="text-sm text-muted-foreground mt-4 font-mono">- My High School Computer Teacher</div>
                    <div className="pt-4 border-t border-border mt-4">
                      <div className="text-xl font-bold text-primary">Bill Gates</div>
                      <div className="text-xs text-muted-foreground">Founder of Microsoft</div>
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
  );
};

export default NotASecret;
