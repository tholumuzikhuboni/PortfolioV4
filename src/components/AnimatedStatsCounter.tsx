import { useState, useEffect, useRef } from 'react';
import { Code, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Code,
    label: 'Projects Completed',
    value: 15,
    suffix: '+',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Users,
    label: 'Happy Clients',
    value: 10,
    suffix: '+',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Award,
    label: 'Years Experience',
    value: 2,
    suffix: '+',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

const AnimatedStatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const intervals = stats.map((stat, index) => {
        const increment = stat.value / 100; // Animate over ~2 seconds (100 * 20ms)
        
        return setInterval(() => {
          setCounters(prev => {
            const newCounters = [...prev];
            if (newCounters[index] < stat.value) {
              newCounters[index] = Math.min(
                newCounters[index] + increment,
                stat.value
              );
            }
            return newCounters;
          });
        }, 20);
      });

      // Clear intervals after animation completes
      const timeout = setTimeout(() => {
        intervals.forEach(clearInterval);
        setCounters(stats.map(stat => stat.value));
      }, 2500);

      return () => {
        intervals.forEach(clearInterval);
        clearTimeout(timeout);
      };
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">By</span>
              <span className="block text-foreground">The</span>
              <span className="block text-primary italic">Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Some statistics that showcase my journey and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Main Card */}
                <div className="relative overflow-hidden border border-border bg-background/50 backdrop-blur-sm p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  {/* Counter */}
                  <div className="mb-4">
                    <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                      <span className="tabular-nums">
                        {Math.floor(counters[index]).toLocaleString()}
                      </span>
                      <span className={stat.color}>{stat.suffix}</span>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-2000 ease-out ${stat.color.replace('text-', 'bg-')}`}
                      style={{
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-accent/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>

                {/* Animated Ring */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-none transition-all duration-500 group-hover:scale-105"></div>
              </div>
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { label: 'Technologies Mastered', value: '25+' },
              { label: 'GitHub Commits', value: '5.2K+' },
              { label: 'Lines of Code', value: '1M+' },
              { label: 'Problem Solving Rate', value: '98%' },
            ].map((item, index) => (
              <div key={item.label} className="space-y-2">
                <div className="text-2xl font-bold text-primary font-mono">{item.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsCounter;
