const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-background to-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-4xl font-bold font-mono text-foreground">
                &lt;TK /&gt;
              </div>
              <p className="text-muted-foreground font-mono text-base leading-relaxed max-w-md">
                Building innovative solutions since childhood inspiration.
              </p>
            </div>
            
            {/* Social Links or Additional Info */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-mono">
                Passionate about creating impactful technology solutions
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                Always learning, always building
              </p>
            </div>
          </div>

          {/* Code Snippet Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-mono text-foreground">
              Current Status
            </h3>
            <div className="bg-card p-6 border border-border shadow-sm">
              <div className="font-mono text-sm leading-relaxed space-y-2">
                <div className="text-muted-foreground">// Always open to new opportunities</div>
                <div className="text-foreground">
                  <span className="text-primary font-bold">const</span>{' '}
                  <span className="text-secondary-foreground">openToWork</span> = <span className="text-primary">true</span>;
                </div>
                <div className="text-foreground">
                  <span className="text-primary font-bold">const</span>{' '}
                  <span className="text-secondary-foreground">collaborationReady</span> = <span className="text-primary">true</span>;
                </div>
                <div className="text-foreground mt-3">
                  <span className="text-primary font-bold">const</span>{' '}
                  <span className="text-secondary-foreground">passionLevel</span> = <span className="text-primary">"maximum"</span>;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground font-mono text-sm">
              © {new Date().getFullYear()} Tholumuzi Kuboni. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;