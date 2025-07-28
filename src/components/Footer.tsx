import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'; // Added FaWhatsapp

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

          {/* Code Snippet Section & Social Links */}
          <div className="space-y-8">
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

            {/* Social Links Section */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold font-mono text-foreground">
                    Connect
                </h3>
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/tholumuzikhuboni"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/tholumuzikhuboni"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href="https://instagram.com/tholumuzikhuboni"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border"
                    >
                        <FaInstagram size={18} />
                    </a>
                    <a
                        href="https://tiktok.com/@kuboni"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border"
                    >
                        <FaTiktok size={18} />
                    </a>
                    <a
                        href="https://x.com/tholumuzikuboni"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (formerly Twitter)"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border"
                    >
                        <FaXTwitter size={18} />
                    </a>
                    <a
                        href="https://wa.me/27608941029"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border"
                    >
                        <FaWhatsapp size={18} />
                    </a>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 pt-8 pb-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <div className="text-muted-foreground font-mono text-sm">
              © {new Date().getFullYear()} Built by Tholumuzi Kuboni.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
