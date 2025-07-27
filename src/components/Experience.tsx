import CodeCard from './CodeCard';

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 sm:mb-6">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Building expertise through education and hands-on experience
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {/* Education Section */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-foreground">Education</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 sm:pl-6">
                  <h4 className="text-lg sm:text-xl font-bold font-mono text-foreground">BSc in Computer Engineering</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Advanced studies in computer systems and engineering</p>
                </div>
                
                <div className="border-l-4 border-accent pl-4 sm:pl-6">
                  <h4 className="text-lg sm:text-xl font-bold font-mono text-foreground">Diploma in IT (Software Engineering)</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Foundational knowledge in software development</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <CodeCard
                title="education.js"
                language="JavaScript"
                code={`const education = [
  "BSc in Computer Engineering",
  "IT (Software Engineering)",
  "Software Architecture",
  "System Design", 
  "Algorithm Optimization",
  "Database Management",
  "Network Security",
  "Project Management"
];`}
                delay={0}
              />
            </div>
          </div>

          {/* Professional Roles */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="order-1">
              <CodeCard
                title="roles.js"
                language="JavaScript"
                code={`const professionalRoles = [
  "Software Engineer",
  "IT Specialist",
  "Tech Lead", 
  "Security Engineer",
  "Full-stack Development",
  "Team Leadership",
  "Security Implementation",
  "System Architecture"
];`}
                delay={200}
              />
            </div>

            <div className="space-y-6 order-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-foreground">Professional Roles</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold font-mono text-foreground mb-2 text-sm sm:text-base">Software Engineer</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Full-stack development and system design</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold font-mono text-foreground mb-2 text-sm sm:text-base">IT Specialist</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Infrastructure and technical solutions</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold font-mono text-foreground mb-2 text-sm sm:text-base">Tech Lead</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Team leadership and project management</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold font-mono text-foreground mb-2 text-sm sm:text-base">Security Engineer</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Cybersecurity and risk assessment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;