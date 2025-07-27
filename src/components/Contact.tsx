import { useState } from 'react';
import CodeCard from './CodeCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Ready to collaborate or discuss opportunities? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-foreground">Let's Connect</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you're looking for a software engineer, need technical consultation, 
                or want to discuss exciting projects, I'm always open to meaningful conversations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-mono font-bold text-sm sm:text-base">@</span>
                </div>
                <div>
                  <p className="font-mono font-bold text-foreground text-sm sm:text-base">Email</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">tholumuzi.kuboni@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-mono font-bold text-sm sm:text-base">in</span>
                </div>
                <div>
                  <p className="font-mono font-bold text-foreground text-sm sm:text-base">LinkedIn</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">linkedin.com/in/tholumuzi-kuboni</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center border border-border">
                  <span className="text-foreground font-mono font-bold text-sm sm:text-base">{'{}'}</span>
                </div>
                <div>
                  <p className="font-mono font-bold text-foreground text-sm sm:text-base">GitHub</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">github.com/tholumuzi-kuboni</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <CodeCard
                title="contact.js"
                language="JavaScript"
                code={`const contact = [
  "tholumuzi.kuboni@email.com",
  "linkedin.com/in/tholumuzi-kuboni",
  "github.com/tholumuzi-kuboni",
  "Open to opportunities",
  "Software Development",
  "Technical Leadership",
  "Cybersecurity",
  "Always ready to connect!"
];`}
                delay={300}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-border shadow-lg order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-foreground mb-4 sm:mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-mono font-bold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-mono font-bold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-mono font-bold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-mono font-bold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-mono font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;