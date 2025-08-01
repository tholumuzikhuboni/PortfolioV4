import React, { useState } from 'react';
import { Lightbulb, Users, Code2, TestTube, Rocket, Check, ArrowRight } from 'lucide-react';

const IdeaToLifeProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      icon: Lightbulb,
      title: "Discovery & Planning",
      subtitle: "Understanding Your Vision",
      description: "We start by deeply understanding your business goals, target audience, and technical requirements. This phase includes comprehensive research, competitor analysis, and creating a detailed project roadmap.",
      features: [
        "In-depth consultation sessions",
        "Market research & analysis",
        "Technical feasibility study",
        "Project timeline & milestones"
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500"
    },
    {
      id: 1,
      icon: Users,
      title: "Design & Architecture",
      subtitle: "Crafting the Blueprint",
      description: "I create intuitive user interfaces and robust system architecture that perfectly balances user experience with technical excellence. Every design decision is made with your users in mind.",
      features: [
        "User experience design",
        "System architecture planning",
        "Database design & modeling",
        "Interactive prototypes"
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500"
    },
    {
      id: 2,
      icon: Code2,
      title: "Development",
      subtitle: "Building Your Solution",
      description: "Using modern technologies and best practices, I build scalable, secure, and performant applications. Regular updates keep you informed throughout the development process.",
      features: [
        "Clean, maintainable code",
        "Modern tech stack",
        "Regular progress updates",
        "Version control & documentation"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary"
    },
    {
      id: 3,
      icon: TestTube,
      title: "Testing & Refinement",
      subtitle: "Ensuring Excellence",
      description: "Rigorous testing ensures your application works flawlessly across all devices and scenarios. I test for functionality, performance, security, and user experience.",
      features: [
        "Comprehensive testing suite",
        "Cross-browser compatibility",
        "Performance optimization",
        "Security vulnerability checks"
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500"
    },
    {
      id: 4,
      icon: Rocket,
      title: "Launch & Support",
      subtitle: "Going Live",
      description: "I handle the deployment process and provide ongoing support to ensure your application runs smoothly. Training and documentation help your team take ownership.",
      features: [
        "Smooth deployment process",
        "Performance monitoring",
        "User training & documentation",
        "Ongoing support & maintenance"
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">How I Turn</span>
              <span className="block text-foreground">Your Idea</span>
              <span className="block text-primary italic">To Life</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A proven 5-step process that transforms your vision into a powerful, 
              scalable solution that drives real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Steps Navigation */}
            <div className="lg:col-span-5 space-y-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                const isCompleted = activeStep > index;
                
                return (
                  <div
                    key={step.id}
                    className={`p-4 border-l-4 cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? `${step.borderColor} bg-gradient-to-r ${step.bgColor}` 
                        : isCompleted
                        ? 'border-green-500 bg-green-500/5'
                        : 'border-border hover:border-muted-foreground hover:bg-secondary/30'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        isActive ? step.bgColor : isCompleted ? 'bg-green-500/10' : 'bg-secondary'
                      }`}>
                        {isCompleted ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <IconComponent className={`w-5 h-5 ${
                            isActive ? step.color : 'text-muted-foreground'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold ${
                            isActive ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {step.title}
                          </h3>
                          {isActive && (
                            <ArrowRight className="w-4 h-4 text-primary animate-pulse" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Step Details */}
            <div className="lg:col-span-7">
              <div className="bg-secondary/30 p-8 min-h-[400px] transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full ${steps[activeStep].bgColor}`}>
                      {React.createElement(steps[activeStep].icon, {
                        className: `w-8 h-8 ${steps[activeStep].color}`
                      })}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-xl lg:text-2xl font-bold text-foreground">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-xs sm:text-base lg:text-lg text-muted-foreground">
                        {steps[activeStep].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-foreground">What's Included:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {steps[activeStep].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm lg:text-base text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="pt-6">
                    <div className="flex items-center justify-between text-xs sm:text-sm lg:text-base text-muted-foreground mb-3">
                      <span>Process Progress</span>
                      <span className="font-medium">{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-700 ease-out bg-primary relative overflow-hidden rounded-full`}
                          style={{ 
                            width: `${((activeStep + 1) / steps.length) * 100}%`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="px-4 py-2 text-sm border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="border-l-4 border-primary pl-6 inline-block text-left">
              <p className="text-2xl font-bold text-foreground mb-2">Ready to Start Your Journey?</p>
              <p className="text-muted-foreground mb-4">
                Let's discuss your project and create something amazing together.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaToLifeProcess;
