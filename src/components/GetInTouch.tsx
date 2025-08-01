
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
            <span className="block text-foreground">Get</span>
            <span className="block text-foreground">In</span>
            <span className="block text-primary italic">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Ready to collaborate or discuss opportunities? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="group p-6 bg-card border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up min-h-[120px] flex items-center" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4 w-full">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm">Email</h3>
                    <p className="text-muted-foreground text-xs">contact@tholumuzi.co.za</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Typically responds within 24h</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-card border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up min-h-[120px] flex items-center" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-4 w-full">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm">Phone</h3>
                    <p className="text-muted-foreground text-xs">+27 68 882 2288</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Available Mon-Fri, 9AM-5PM SAST</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-card border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up min-h-[120px] flex items-center" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-4 w-full">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm">Location</h3>
                    <p className="text-muted-foreground text-xs">Johannesburg, South Africa</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Available for remote work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Build Something Amazing
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you have a clear vision or just an idea, I'm here to help transform your concepts into powerful digital solutions that drive real results.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Detailed project proposal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Transparent pricing</span>
                  </div>
                </div>
                
                <Link to="/start-project" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
