const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-background to-secondary/10 border-t border-border">
      {/* Changed py-16 to pt-16 and adjusted bottom padding on the copyright section */}
      {/* Removed mx-auto to left-align the content. px-6 lg:px-8 will provide internal padding. */}
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
          <div className="flex flex-col md:flex-row">
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
