import { useState, useEffect } from 'react';
import { Terminal, Code2, GitBranch, Database } from 'lucide-react';

const commands = [
  { 
    command: 'git clone https://github.com/myprojects/portfolio.git',
    output: 'Cloning into \'portfolio\'...\nremote: Enumerating objects: 127, done.\nremote: Total 127 (delta 0), reused 0 (delta 0)\nReceiving objects: 100% (127/127), done.'
  },
  {
    command: 'cd portfolio && npm install',
    output: 'added 1247 packages, and audited 1248 packages in 12s\n\n185 packages are looking for funding'
  },
  {
    command: 'npm run dev',
    output: '  VITE v5.0.8  ready in 342 ms\n\n  ➜  Local:   http://localhost:3000/\n  ➜  Network: use --host to expose'
  },
  {
    command: 'docker build -t my-app .',
    output: 'Sending build context to Docker daemon...\nStep 1/8 : FROM node:18-alpine\n ---> f21f745f3b24\nSuccessfully built 7a9f8c2d1e3b'
  },
  {
    command: 'kubectl apply -f deployment.yaml',
    output: 'deployment.apps/portfolio-app created\nservice/portfolio-service created\nConfigured successfully! 🚀'
  }
];

const LiveTerminalSimulation = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{command: string, output: string}>>([]);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      // Reset after all commands
      const resetTimer = setTimeout(() => {
        setCurrentCommandIndex(0);
        setTerminalHistory([]);
        setCurrentText('');
        setShowOutput(false);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const command = commands[currentCommandIndex];
    setIsTyping(true);
    setShowOutput(false);
    
    let charIndex = 0;
    const typeCommand = () => {
      if (charIndex < command.command.length) {
        setCurrentText(command.command.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeCommand, 50 + Math.random() * 50);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setShowOutput(true);
          setTimeout(() => {
            setTerminalHistory(prev => [...prev, command]);
            setCurrentText('');
            setCurrentCommandIndex(prev => prev + 1);
          }, 1500);
        }, 500);
      }
    };

    const startTimer = setTimeout(typeCommand, 1000);
    return () => clearTimeout(startTimer);
  }, [currentCommandIndex]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">My</span>
              <span className="block text-foreground">Live</span>
              <span className="block text-primary italic">Terminal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Watch me work in real-time. This simulates my typical development workflow from git to deployment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Terminal Window */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <div className="bg-white overflow-hidden border border-slate-300 shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs xs:text-sm font-mono">bash - development</span>
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs font-mono">
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-2 sm:p-4 h-64 sm:h-80 lg:h-96 overflow-y-auto font-mono text-[10px] xs:text-xs sm:text-sm">
                  {/* Previous commands */}
                  {terminalHistory.map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center text-green-600 mb-1">
                        <span className="text-blue-600">➜</span>
                        <span className="ml-2 text-slate-700">~</span>
                        <span className="ml-2">{item.command}</span>
                      </div>
                      <div className="text-slate-600 whitespace-pre-line ml-4">
                        {item.output}
                      </div>
                    </div>
                  ))}

                  {/* Current command */}
                  <div className="flex items-center text-green-600">
                    <span className="text-blue-600">➜</span>
                    <span className="ml-2 text-slate-700">~</span>
                    <span className="ml-2">{currentText}</span>
                    {isTyping && (
                      <span className="ml-1 animate-pulse bg-green-600 w-2 h-5 inline-block"></span>
                    )}
                  </div>

                  {/* Current output */}
                  {showOutput && currentCommandIndex < commands.length && (
                    <div className="text-slate-600 whitespace-pre-line ml-4 mt-1 animate-fade-in">
                      {commands[currentCommandIndex].output}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="bg-secondary/30 border border-border p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Development Flow</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <GitBranch className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-medium text-foreground">Version Control</div>
                      <div className="text-xs text-muted-foreground">Git workflows & collaboration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="font-medium text-foreground">Build Tools</div>
                      <div className="text-xs text-muted-foreground">Vite, Webpack, npm scripts</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Database className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="font-medium text-foreground">DevOps</div>
                      <div className="text-xs text-muted-foreground">Docker, Kubernetes, CI/CD</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Command Queue */}
              <div className="bg-background border border-border p-4">
                <h4 className="font-bold text-foreground mb-3 text-sm">Command Queue</h4>
                <div className="space-y-2">
                  {commands.map((cmd, index) => (
                    <div
                      key={index}
                      className={`text-[10px] xs:text-xs font-mono p-2 rounded transition-all duration-300 ${
                        index < currentCommandIndex
                          ? 'bg-green-500/10 text-green-400 line-through'
                          : index === currentCommandIndex
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'bg-muted/30 text-muted-foreground'
                      }`}
                    >
                      {cmd.command.length > 40 ? cmd.command.slice(0, 40) + '...' : cmd.command}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTerminalSimulation;
