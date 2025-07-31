Const Hero = () => {
  return (
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
          
          {/* Left Content with staggered animations */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {/* Small intro with slide animation */}
              <div className="inline-block animate-slide-in-left">
                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                  Software Engineer
                </span>
                <div className="w-16 h-0.5 bg-primary mt-2 animate-shimmer"></div>
              </div>

              {/* Main heading with staggered text animations */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                <span className="block text-foreground animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Building</span>
                <span className="block text-foreground animate-slide-in-left" style={{ animationDelay: '0.4s' }}>the</span>
                <span className="block text-primary italic animate-slide-in-left animate-glow" style={{ animationDelay: '0.6s' }}>Future</span>
              </h1>

              {/* Name with fade-in animation */}
              <div className="pl-4 border-l-4 border-accent animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <p className="text-xl text-muted-foreground font-light">I'm</p>
                <p className="text-3xl font-bold text-foreground">Tholumuzi Kuboni</p>
              </div>

              {/* Description with delayed fade-in */}
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
                A passionate software engineer specializing in secure, scalable solutions. 
                Leading teams and driving innovation through clean code and strategic thinking.
              </p>
            </div>

            {/* Action Buttons with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <a
                href="/start-project"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-medium rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg"
              >
                Start a Project
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

            {/* Stats with count-up effect simulation */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
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

          {/* Right Content - Enhanced Visual Element */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-scale-in" style={{ animationDelay: '1.6s' }}>
              {/* Main Visual Block with enhanced animations */}
              <div className="w-80 h-96 bg-gradient-to-br from-primary to-accent relative hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
                {/* Animated overlay pattern */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                
                {/* Floating Elements with enhanced animations */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-background bg-accent animate-float-fast hover:rotate-180 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary animate-bounce-gentle hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content inside the block with glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2 animate-pulse">TK</div>
                    <div className="text-sm tracking-wider">SOFTWARE ENGINEER</div>
                  </div>
                </div>

                {/* New animated inner elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/40 animate-bounce"></div>
              </div>

              {/* Additional geometric elements with animations */}
              <div className="absolute top-10 -left-8 w-4 h-4 bg-accent rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-20 -right-6 w-6 h-6 border-2 border-primary rounded-full animate-pulse"></div>
              
              {/* New floating particles */}
              <div className="absolute top-1/4 -left-4 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 -right-2 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-8 animate-fade-in-up" style={{ animationDelay: '2s' }}>
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
  );
};

export default Hero;
