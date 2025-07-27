const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/10 rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-40 bg-primary/30"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 rounded-full border-2 border-accent/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {/* Small intro */}
              <div className="inline-block">
                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                  Software Engineer
                </span>
                <div className="w-16 h-0.5 bg-primary mt-2"></div>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                <span className="block text-foreground">Building</span>
                <span className="block text-foreground">the</span>
                <span className="block text-primary italic">Future</span>
              </h1>

              {/* Name */}
              <div className="pl-4 border-l-4 border-accent">
                <p className="text-xl text-muted-foreground font-light">I'm</p>
                <p className="text-3xl font-bold text-foreground">Tholumuzi Kuboni</p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A passionate software engineer specializing in secure, scalable solutions. 
                Leading teams and driving innovation through clean code and strategic thinking.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/start-project"
                className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-none transition-all duration-300 hover:bg-primary"
              >
                Start a Project
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-medium rounded-none hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Visual Block */}
              <div className="w-80 h-96 bg-gradient-to-br from-primary to-accent relative">
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-background bg-accent"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary"></div>
                
                {/* Content inside the block */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">TK</div>
                    <div className="text-sm tracking-wider">SOFTWARE ENGINEER</div>
                  </div>
                </div>
              </div>

              {/* Additional geometric elements */}
              <div className="absolute top-10 -left-8 w-4 h-4 bg-accent rotate-45"></div>
              <div className="absolute bottom-20 -right-6 w-6 h-6 border-2 border-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8">
        <div className="writing-mode-vertical text-sm text-muted-foreground tracking-wider">
          SCROLL DOWN
        </div>
      </div>
    </section>
  );
};

export default Hero;