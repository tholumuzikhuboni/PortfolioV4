import CodeCard from './CodeCard';

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 sm:mb-6">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive toolkit built through years of learning and practical experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <CodeCard
            title="frontend.js"
            language="JavaScript"
            code={`const frontend = [
  "JavaScript",
  "TypeScript", 
  "React",
  "Vue.js",
  "Next.js",
  "Tailwind CSS"
];`}
            delay={0}
          />

          <CodeCard
            title="backend.js"
            language="JavaScript"
            code={`const backend = [
  "Node.js",
  "Python",
  "Java",
  "Express.js",
  "PostgreSQL",
  "AWS"
];`}
            delay={200}
          />

          <CodeCard
            title="security.js"
            language="JavaScript"
            code={`const security = [
  "OWASP",
  "Penetration Testing",
  "OAuth2",
  "SSL/TLS",
  "GDPR"
];`}
            delay={400}
          />

          <CodeCard
            title="devops.js"
            language="JavaScript"
            code={`const devops = [
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitHub Actions",
  "Terraform"
];`}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;