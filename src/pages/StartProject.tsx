import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send, CheckCircle, Code2, Globe, Cloud, Wrench, Lightbulb, Target, Check, Shield, Clock, Users, Award, HelpCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaReact, FaJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiTailwindcss, SiAngular, SiGooglecloud, SiMysql } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    timeline: '',
    description: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Start A Project - Tholumuzi Khuboni | Software Developer";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xgveoyla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          projectType: '',
          timeline: '',
          description: '',
          budget: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      
      {/* Hero Section */}
      <section id="start-project" className="relative min-h-screen flex items-center overflow-hidden">
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
                    Let's Work Together
                  </span>
                  <div className="w-16 h-0.5 bg-primary mt-2"></div>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                  <span className="block text-foreground">Start</span>
                  <span className="block text-foreground">Your</span>
                  <span className="block text-primary italic">Project</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Are you ready to bring your vision to life? I am a Senior Software Engineer & IT Professional, I specialize in creating secure, scalable solutions 
                  that drive real business results. Let's discuss your project, business needs and make it happen!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  View Pricing
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#project-form"
                  className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-medium rounded-none hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300"
                >
                  Get Started
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
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
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
                      <div className="text-4xl font-bold mb-2">START</div>
                      <div className="text-sm tracking-wider">YOUR PROJECT TODAY</div>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                <span className="block text-foreground">Get</span>
                <span className="block text-foreground">Transparent</span>
                <span className="block text-primary italic">Pricing</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Clear, honest pricing for quality software solutions. Choose the service that fits your needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Web Development */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 hover:shadow-lg group transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground">Web Development</h3>
                    <p className="text-sm text-muted-foreground mt-2">Responsive websites & landing pages</p>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-foreground">From R2,000</div>
                    <div className="text-sm text-muted-foreground">Starting price</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Responsive Design</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Modern Technologies</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">SEO Optimized</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Mobile Friendly</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Software Development */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 hover:shadow-lg group transition-all duration-300 relative">
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-3 py-1 font-medium">
                  MOST POPULAR
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground">Software Development</h3>
                    <p className="text-sm text-muted-foreground mt-2">Custom applications & systems</p>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-foreground">From R12,000</div>
                    <div className="text-sm text-muted-foreground">Starting price</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Custom Solutions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Database Integration</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">API Development</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Testing & QA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud Solutions */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 hover:shadow-lg group transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-center">
                    <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground">Cloud Solutions</h3>
                    <p className="text-sm text-muted-foreground mt-2">GCP deployment & management</p>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-foreground">From R8,000</div>
                    <div className="text-sm text-muted-foreground">Starting price</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">GCP Deployment</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Scalable Infrastructure</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Security Setup</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Monitoring & Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support & Maintenance */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 hover:shadow-lg group transition-all duration-300">
                <div className="space-y-4">
                  <div className="text-center">
                    <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground">Support & Maintenance</h3>
                    <p className="text-sm text-muted-foreground mt-2">Ongoing support & troubleshooting</p>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-foreground">From R1,500</div>
                    <div className="text-sm text-muted-foreground">Per month</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">24/7 Support</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Bug Fixes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Performance Monitoring</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Regular Updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-muted-foreground mb-6">
                All prices are estimates. Final pricing depends on project complexity and requirements.
              </p>
              <a
                href="#project-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-none hover:bg-primary/90 transition-all duration-300"
              >
                Get Custom Quote
                <Send className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="project-form" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">

          {/* Project Form Header */}
          <div className="mb-16 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
                <span className="block text-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Let's Build</span>
                <span className="block text-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Something</span>
                <span className="block text-primary italic animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Amazing</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Fill out the form below with your project details, and I'll get back to you within 24 hours with a custom proposal.
              </p>
            </div>
          </div>

          {/* Technologies I Use */}
          <div className="mb-16 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8">Technologies I Use</h3>
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
                  className="group p-4 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                  <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Project Form */}
            <div className="lg:col-span-3 animate-slide-in-left">
              <div className="bg-accent/5 border border-border p-8 rounded-none animate-scale-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Project Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block uppercase tracking-wide">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border h-12 rounded-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block uppercase tracking-wide">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border h-12 rounded-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block uppercase tracking-wide">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none text-foreground focus:outline-none focus:ring-2 focus:ring-primary h-12"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="api">API Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block uppercase tracking-wide">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-none text-foreground focus:outline-none focus:ring-2 focus:ring-primary h-12"
                      >
                        <option value="">Select timeline</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-4 months">3-4 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="ongoing">Ongoing partnership</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Budget Section */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block uppercase tracking-wide">Estimated Budget (ZAR)</label>
                    <select
                      name="budget"
                      value={formData.budget || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-none text-foreground focus:outline-none focus:ring-2 focus:ring-primary h-12"
                    >
                      <option value="">Select your budget range</option>
                      <option value="R2,000 - R5,000">R2,000 - R5,000 (Simple websites)</option>
                      <option value="R5,000 - R12,000">R5,000 - R12,000 (Advanced websites)</option>
                      <option value="R12,000 - R25,000">R12,000 - R25,000 (Small software applications)</option>
                      <option value="R25,000 - R50,000">R25,000 - R50,000 (Medium software projects)</option>
                      <option value="R50,000 - R100,000">R50,000 - R100,000 (Large applications)</option>
                      <option value="R100,000+">R100,000+ (Enterprise solutions)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block uppercase tracking-wide">Project Description</label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      className="bg-background border-border rounded-none resize-none"
                    />
                  </div>

                  {isSubmitted ? (
                    <div className="w-full bg-green-600 text-white h-12 rounded-none font-medium flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Project Request Sent!
                    </div>
                  ) : (
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-foreground text-background hover:bg-primary h-12 rounded-none font-medium disabled:opacity-50">
                      {isSubmitting ? 'Sending...' : 'Send Project Request'}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </form>
              </div>
            </div>

            {/* Right Sidebar - Development Process */}
            <div className="lg:col-span-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Development Process</h3>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                    { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and timeline' },
                    { step: '03', title: 'Development', desc: 'Building your solution with regular updates' },
                    { step: '04', title: 'Testing', desc: 'Comprehensive testing and quality assurance' },
                    { step: '05', title: 'Launch', desc: 'Deployment and post-launch support' }
                  ].map((item, index) => (
                    <div key={item.step} className="flex flex-col sm:flex-row gap-4 group">
                      <div className="w-12 h-12 bg-primary text-background flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                <span className="block text-foreground">Why</span>
                <span className="block text-foreground">Choose</span>
                <span className="block text-primary italic">Me?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Experience, reliability, and dedication to delivering exceptional results for your business.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Services */}
              <div className="space-y-12">
                {/* Secure & Reliable */}
                <div className="pl-4 border-l-4 border-primary">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-xl text-muted-foreground font-light">Security</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">Secure & Reliable</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Built with security-first approach and industry best practices to ensure your solution 
                    is protected and performs consistently.
                  </p>
                </div>

                {/* Client-Focused */}
                <div className="pl-4 border-l-4 border-accent">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-xl text-muted-foreground font-light">Partnership</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">Client-Focused</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Your success is my priority with ongoing support, clear communication, and 
                    dedicated partnership throughout the entire project lifecycle.
                  </p>
                </div>
              </div>

              {/* Right side - More Services */}
              <div className="space-y-12 mt-8 lg:mt-0">
                {/* On-Time Delivery */}
                <div className="pl-4 border-l-4 border-primary">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-xl text-muted-foreground font-light">Reliability</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">On-Time Delivery</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Committed to meeting deadlines without compromising quality, ensuring your 
                    project launches when you need it to.
                  </p>
                </div>

                {/* Quality Assured */}
                <div className="pl-4 border-l-4 border-accent">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-xl text-muted-foreground font-light">Excellence</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">Quality Assured</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    Rigorous testing and quality control for every project to deliver exceptional 
                    results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                <span className="block text-foreground">Frequently Asked</span>
                <span className="block text-primary italic">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Get answers to the most common questions about my services and process.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 'payment',
                  question: 'What are your payment terms?',
                  answer: 'I typically work with a 50% upfront payment to begin the project, with the remaining 50% due upon completion. For larger projects, we can arrange milestone-based payments to ensure mutual comfort and project progress.'
                },
                {
                  id: 'timeline',
                  question: 'How long does a typical project take?',
                  answer: 'Project timelines vary based on complexity. Simple websites take 1-2 weeks, while custom software applications can take 2-6 months. I provide detailed timelines during the initial consultation and keep you updated throughout the development process.'
                },
                {
                  id: 'maintenance',
                  question: 'Do you provide ongoing maintenance and support?',
                  answer: 'Yes! I offer comprehensive maintenance and support packages starting from R1,500/month. This includes bug fixes, security updates, performance monitoring, and minor feature additions to keep your solution running smoothly.'
                },
                {
                  id: 'technologies',
                  question: 'What technologies do you specialize in?',
                  answer: 'I specialize in React, Angular, TypeScript, JavaScript, Python, Google Cloud Platform, Firebase, and modern CSS frameworks like TailwindCSS. I stay current with industry best practices and emerging technologies.'
                },
                {
                  id: 'communication',
                  question: 'How do you communicate project progress?',
                  answer: 'I believe in transparent communication. I provide regular updates via email, scheduled video calls, and use project management tools to track progress. You\'ll always know exactly where your project stands.'
                },
                {
                  id: 'ownership',
                  question: 'Who owns the code and intellectual property?',
                  answer: 'You retain full ownership of all code, designs, and intellectual property created for your project. Upon final payment, you receive complete source code, documentation, and any necessary credentials.'
                }
              ].map((faq) => (
                <Collapsible key={faq.id} open={openFAQ === faq.id} onOpenChange={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}>
                  <CollapsibleTrigger className="w-full bg-secondary/30 p-6 text-left hover:bg-secondary/50 transition-colors border border-border">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-background border-l border-r border-b border-border">
                    <div className="p-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-muted-foreground mb-6">Still have questions?</p>
              <a
                href="#project-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-none hover:bg-primary/90 transition-all duration-300"
              >
                Contact Me Directly
                <HelpCircle className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default StartProject;
