import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaReact, FaJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiTailwindcss, SiAngular, SiGooglecloud, SiMysql } from 'react-icons/si';

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          description: ''
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                <span className="block text-foreground">Start</span>
                <span className="block text-foreground">A</span>
                <span className="block text-primary italic">Project</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Ready to bring your vision to life? Let's discuss your project requirements and create something amazing together.
              </p>
            </div>
          </div>

          {/* Technologies I Use */}
          <div className="mb-16">
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
              ].map((tech) => (
                <div key={tech.name} className="group p-4 border border-border hover:border-primary/50 transition-colors text-center">
                  <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-xs text-muted-foreground font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Project Form */}
            <div className="lg:col-span-3">
              <div className="bg-accent/5 border border-border p-8 rounded-none">
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

                  {/* Price Ranges Section */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">Investment Ranges (ZAR)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 border border-border bg-accent/5">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Small Projects</div>
                        <div className="text-lg font-bold text-foreground">R15,000 - R30,000</div>
                        <div className="text-xs text-muted-foreground mt-1">Simple websites, landing pages</div>
                      </div>
                      <div className="p-4 border border-border bg-accent/5">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Medium Projects</div>
                        <div className="text-lg font-bold text-foreground">R30,000 - R75,000</div>
                        <div className="text-xs text-muted-foreground mt-1">Web applications, e-commerce</div>
                      </div>
                      <div className="p-4 border border-border bg-accent/5">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Large Projects</div>
                        <div className="text-lg font-bold text-foreground">R75,000 - R150,000</div>
                        <div className="text-xs text-muted-foreground mt-1">Complex systems, integrations</div>
                      </div>
                      <div className="p-4 border border-border bg-accent/5">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Enterprise</div>
                        <div className="text-lg font-bold text-foreground">R150,000+</div>
                        <div className="text-xs text-muted-foreground mt-1">Custom enterprise solutions</div>
                      </div>
                    </div>
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
                  ].map((item) => (
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

      <Footer />
    </div>
  );
};

export default StartProject;