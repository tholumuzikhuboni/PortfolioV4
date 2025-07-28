import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'; // Using fa6 for updated icons where available

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-background to-secondary/10 border-t border-border">
      <div className="max-w-7xl px-6 lg:px-8 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-4xl font-bold font-mono text-foreground">
              &lt;TK /&gt;
            </div>
            <p className="text-muted-foreground font-mono text-base leading-relaxed max-w-md">
              Building innovative solutions since childhood inspiration.
            </p>
          </div>

          {/* Code Snippet Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-mono text-foreground">
              Current Status
            </h3>
            <div className="bg-card p-6 border border-border shadow-sm">
              <div className="font-mono text-sm leading-relaxed space-y-2">
                <div className="text-muted-foreground">
                  // Always open to new opportunities
                </div>
                <div className="text-foreground">
                  <span className="text-primary font-bold">const</span>{' '}
                  <span className="text-secondary-foreground">openToWork</span>{' '}
                  = <span className="text-primary">true</span>;
                </div>
                <div className="text-foreground">
                  <span className="text-primary font-bold">const</span>{' '}
                  <span className="text-secondary-foreground">
                    collaborationReady
                  </span>{' '}
                  = <span className="text-primary">true</span>;
                </div>
                <div className="text-foreground mt-3">
                  <span className="text-primary font-bold">const</span>{' '}
                  <span className="text-secondary-foreground">passionLevel</span>{' '}
                  = <span className="text-primary">"maximum"</span>;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 pb-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"> {/* Added justify-between and items-center for better layout */}
            <div className="text-muted-foreground font-mono text-sm">
              © {new Date().getFullYear()} Built by Tholumuzi Kuboni.
            </div>
            
            {/* Social Links Section */}
            <div className="flex space-x-6 text-foreground"> {/* Added some spacing and text color */}
              <a 
                href="https://github.com/tholumuzikhuboni" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/tholumuzikhuboni" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://instagram.com/tholumuzikhuboni" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://tiktok.com/@kuboni" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaTiktok size={24} />
              </a>
              <a 
                href="https://x.com/tholumuzikuboni" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (formerly Twitter)"
                className="hover:text-primary transition-colors duration-200"
              >
                <FaXTwitter size={24} /> {/* Using FaXTwitter for the new X icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
