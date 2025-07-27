import CodeCard from './CodeCard';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            My journey from a curious primary school student to a professional software engineer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-foreground">The Beginning</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                It all started in primary school when I first heard about Bill Gates and how he created Microsoft. 
                The term "software engineer" was completely new to me, but something about it immediately captured 
                my imagination. From that moment, I knew I wanted to build things with code.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-foreground">The Journey</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                What began as childhood curiosity evolved into a serious pursuit of knowledge. I earned my 
                Diploma in IT (Software Engineering) and later completed a BSc in Computer Engineering, 
                each step deepening my understanding of technology and its possibilities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-foreground">Today</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Now, as a Software Engineer, IT Specialist, Tech Lead, and Security Engineer, I combine 
                technical expertise with leadership skills to drive innovation and solve complex problems. 
                That young boy inspired by Bill Gates has never looked back.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <CodeCard
              title="my-story.js"
              language="JavaScript"
              code={`const myJourney = [
  "Bill Gates inspiration",
  "Primary school curiosity", 
  "Diploma in IT (Software Engineering)",
  "BSc in Computer Engineering",
  "Software Engineer role",
  "IT Specialist expertise",
  "Tech Lead position",
  "Security Engineer skills",
  "Never stop learning",
  "Still coding, still growing"
];`}
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;