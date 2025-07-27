import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Terminal, AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [checks, setChecks] = useState([
    { text: "Checking URL path...", status: "running" },
    { text: "Searching for route...", status: "pending" },
    { text: "Checking redirects...", status: "pending" },
    { text: "Route not found", status: "pending" }
  ]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Simulate checks
    const timeouts = [
      setTimeout(() => {
        setChecks(prev => prev.map((check, i) => 
          i === 0 ? { ...check, status: "complete" } : check
        ));
      }, 1000),
      
      setTimeout(() => {
        setChecks(prev => prev.map((check, i) => 
          i === 1 ? { ...check, status: "running" } : check
        ));
      }, 1500),
      
      setTimeout(() => {
        setChecks(prev => prev.map((check, i) => 
          i === 1 ? { ...check, status: "complete" } : 
          i === 2 ? { ...check, status: "running" } : check
        ));
      }, 2500),
      
      setTimeout(() => {
        setChecks(prev => prev.map((check, i) => 
          i === 2 ? { ...check, status: "complete" } : 
          i === 3 ? { ...check, status: "error" } : check
        ));
      }, 3500)
    ];

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(countdownInterval);
    };
  }, [location.pathname, navigate]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />;
      case "complete":
        return <div className="w-2 h-2 bg-green-500 rounded-full" />;
      case "error":
        return <div className="w-2 h-2 bg-red-500 rounded-full" />;
      default:
        return <div className="w-2 h-2 bg-gray-300 rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-none">
                <span className="block text-foreground">404</span>
                <span className="block text-foreground">Error</span>
                <span className="block text-primary italic">Not Found</span>
              </h1>
              
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                The page you're looking for doesn't exist. Let me run some diagnostics...
              </p>
            </div>
          </div>

          {/* IDE-style Terminal Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-mono text-gray-600">Route Diagnostics</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="bg-white text-gray-800 p-4 font-mono text-sm">
              <div className="mb-4">
                <span className="text-gray-500">$</span> route-check {location.pathname}
              </div>
              
              <div className="space-y-2 mb-4">
                {checks.map((check, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {getStatusIcon(check.status)}
                    <span className={`${
                      check.status === "error" ? "text-red-600" : 
                      check.status === "complete" ? "text-green-600" : 
                      "text-orange-600"
                    }`}>
                      {check.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span className="text-red-600 font-bold">ROUTE NOT FOUND</span>
                </div>
                <div className="text-gray-600 mb-3">
                  Path: <span className="text-gray-800 font-semibold">{location.pathname}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600">
                    Redirecting to home in {countdown} seconds...
                  </span>
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

export default NotFound;
