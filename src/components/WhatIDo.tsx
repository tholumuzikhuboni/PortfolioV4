import { MapPin, Code2, Globe, Cloud, Wrench } from 'lucide-react';

const WhatIDo = () => {
  return (
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="border-l-4 border-primary pl-6 inline-block text-left">
              <p className="text-2xl font-bold text-foreground mb-2">Ready to Get Started?</p>
              <p className="text-muted-foreground">
                Let's discuss how I can help bring your ideas to life and transform your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
