import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [dots, setDots] = useState('');

  const loadingSteps = [
    { text: 'Initializing systems', duration: 800 },
    { text: 'Loading framework', duration: 600 },
    { text: 'Compiling components', duration: 700 },
    { text: 'Optimizing performance', duration: 500 },
    { text: 'Ready to launch', duration: 400 }
  ];

  useEffect(() => {
    // Animated dots effect
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 400);

    let currentStep = 0;
    let currentProgress = 0;

    const updateProgress = () => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setLoadingText(step.text);
        
        const stepProgress = 100 / loadingSteps.length;
        const targetProgress = (currentStep + 1) * stepProgress;
        
        const progressInterval = setInterval(() => {
          currentProgress += 1.5;
          setProgress(Math.min(currentProgress, targetProgress));
          
          if (currentProgress >= targetProgress) {
            clearInterval(progressInterval);
            currentStep++;
            
            if (currentStep < loadingSteps.length) {
              setTimeout(updateProgress, 100);
            } else {
              setTimeout(() => {
                clearInterval(dotsInterval);
                onComplete();
              }, 600);
            }
          }
        }, 25);
        
      }
    };

    const timer = setTimeout(updateProgress, 500);
    return () => {
      clearTimeout(timer);
      clearInterval(dotsInterval);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-white font-mono">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen pt-4 relative">
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-lg mx-4 text-center space-y-8">
          {/* Logo and branding */}
          <div className="space-y-6">
            <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/20 animate-pulse">
              <span className="text-2xl font-bold text-white">TK</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Tholumuzi Kuboni
              </h1>
              <p className="text-muted-foreground">
                Software Engineer
              </p>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-primary font-mono">Initializing...</span>
              </div>
            </div>
          </div>

          {/* Progress section */}
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Loading Portfolio</span>
                <span className="text-primary font-mono font-semibold">{Math.round(progress)}%</span>
              </div>
              
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out relative rounded-full"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Status text */}
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-foreground font-mono text-sm">
                {loadingText}{dots}
              </span>
            </div>
          </div>

          {/* Loading indicators */}
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Preloader;
