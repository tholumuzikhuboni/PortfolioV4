import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Timer, Target, Zap, Code2 } from 'lucide-react';

const codeSnippets = [
  {
    level: 'Easy',
    code: `const greeting = "Hello World!";
console.log(greeting);`,
    language: 'JavaScript'
  },
  {
    level: 'Medium', 
    code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}`,
    language: 'JavaScript'
  },
  {
    level: 'Hard',
    code: `const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};`,
    language: 'JavaScript'
  },
  {
    level: 'Expert',
    code: `class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  append(data) {
    const newNode = { data, next: null };
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
}`,
    language: 'JavaScript'
  }
];

const InteractiveCodeGame = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0, time: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const snippet = codeSnippets[currentSnippet];
  const targetCode = snippet.code;

  useEffect(() => {
    if (gameStarted && !startTime) {
      setStartTime(Date.now());
    }
  }, [gameStarted, startTime]);

  useEffect(() => {
    if (userInput === targetCode && !isCompleted) {
      setIsCompleted(true);
      calculateStats();
    }
  }, [userInput, targetCode, isCompleted]);

  const calculateStats = () => {
    if (!startTime) return;
    
    const endTime = Date.now();
    const timeInMinutes = (endTime - startTime) / (1000 * 60);
    const wordsTyped = targetCode.split(' ').length;
    const wpm = Math.round(wordsTyped / timeInMinutes);
    
    let correctChars = 0;
    for (let i = 0; i < Math.min(userInput.length, targetCode.length); i++) {
      if (userInput[i] === targetCode[i]) correctChars++;
    }
    const accuracy = Math.round((correctChars / targetCode.length) * 100);
    
    setStats({
      wpm,
      accuracy,
      time: Math.round((endTime - startTime) / 1000)
    });
  };

  const startGame = () => {
    setGameStarted(true);
    setUserInput('');
    setIsCompleted(false);
    setStartTime(null);
    inputRef.current?.focus();
  };

  const nextLevel = () => {
    if (currentSnippet < codeSnippets.length - 1) {
      setCurrentSnippet(prev => prev + 1);
      resetGame();
    }
  };

  const resetGame = () => {
    setUserInput('');
    setGameStarted(false);
    setIsCompleted(false);
    setStartTime(null);
    setStats({ wpm: 0, accuracy: 0, time: 0 });
  };

  const renderCodeWithHighlight = () => {
    const lines = targetCode.split('\n');
    return (
      <div className="font-mono text-[10px] sm:text-xs leading-tight sm:leading-relaxed">
        {lines.map((line, lineIndex) => {
          const lineStart = lines.slice(0, lineIndex).join('\n').length + (lineIndex > 0 ? 1 : 0);
          const lineEnd = lineStart + line.length;
          const typedLength = Math.min(userInput.length, targetCode.length);
          
          let displayLine = line;
          let correctPart = '';
          let incorrectPart = '';
          let remainingPart = line;
          
          if (lineStart < typedLength) {
            const lineTypedStart = Math.max(0, userInput.length - lineStart);
            const lineTypedEnd = Math.min(line.length, userInput.length - lineStart);
            
            if (lineTypedStart < line.length) {
              correctPart = line.slice(0, Math.min(lineTypedEnd, line.length));
              const userTypedLine = userInput.slice(lineStart, Math.min(lineEnd, userInput.length));
              
              // Check for incorrect characters
              let incorrectStart = -1;
              for (let i = 0; i < Math.min(correctPart.length, userTypedLine.length); i++) {
                if (correctPart[i] !== userTypedLine[i]) {
                  incorrectStart = i;
                  break;
                }
              }
              
              if (incorrectStart >= 0) {
                correctPart = correctPart.slice(0, incorrectStart);
                incorrectPart = userTypedLine.slice(incorrectStart);
                remainingPart = line.slice(userTypedLine.length);
              } else {
                remainingPart = line.slice(correctPart.length);
              }
            }
          }
          
          return (
            <div key={lineIndex} className="flex">
              <span className="text-muted-foreground/50 select-none pr-2 sm:pr-3 text-right w-6 sm:w-8">
                {lineIndex + 1}
              </span>
              <span className="flex-1">
                <span className="text-green-400">{correctPart}</span>
                <span className="bg-red-500/20 text-red-400">{incorrectPart}</span>
                <span className="text-muted-foreground">{remainingPart}</span>
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-slide-in-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">Code</span>
              <span className="block text-foreground">Typing</span>
              <span className="block text-primary italic">Challenge</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Test your coding speed and accuracy! Type the code snippet exactly as shown
              and see how fast you can code like a professional developer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Game Area */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Challenge Info */}
              <div className="pl-4 border-l-4 border-primary animate-fade-in-up">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Badge variant="outline" className="font-mono text-[10px] sm:text-xs">
                    {snippet.language}
                  </Badge>
                  <Badge 
                    variant={snippet.level === 'Easy' ? 'default' : 
                            snippet.level === 'Medium' ? 'secondary' : 'destructive'}
                    className="text-[10px] sm:text-xs"
                  >
                    {snippet.level}
                  </Badge>
                  <span className="text-[10px] sm:text-xs text-muted-foreground ml-auto">
                    Level {currentSnippet + 1} / {codeSnippets.length}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  Challenge #{currentSnippet + 1}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Type the code exactly as shown. Focus on accuracy first, then build your speed.
                </p>
              </div>

              {/* Code Display */}
              <div className="border border-border bg-background/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* IDE Header */}
                <div className="bg-secondary/50 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex space-x-1 sm:space-x-1.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-red-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-500"></div>
                      </div>
                      <span className="text-foreground font-mono text-[10px] sm:text-xs">challenge_{currentSnippet + 1}.js</span>
                    </div>
                    <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-2 sm:p-3 lg:p-4 font-mono min-h-[150px] sm:min-h-[180px] lg:min-h-[200px] overflow-x-auto bg-slate-900 text-slate-100">
                  {gameStarted ? renderCodeWithHighlight() : (
                    <div className="font-mono text-[10px] sm:text-xs leading-tight sm:leading-relaxed text-muted-foreground">
                      {targetCode.split('\n').map((line, index) => (
                        <div key={index} className="flex">
                          <span className="text-muted-foreground/30 select-none pr-2 sm:pr-3 text-right w-6 sm:w-8">
                            {index + 1}
                          </span>
                          <span className="flex-1 text-slate-300">{line}</span>
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
              </div>

              {/* Input Area */}
              {gameStarted && !isCompleted && (
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="border border-border bg-slate-900">
                    {/* IDE Input Header */}
                    <div className="bg-secondary/50 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 border-b border-border">
                      <span className="text-foreground font-mono text-[10px] sm:text-xs">input.js</span>
                    </div>
                    {/* Input with line numbers */}
                    <div className="flex">
                      <div className="bg-slate-800 px-2 sm:px-3 py-2 sm:py-3 border-r border-border">
                        {userInput.split('\n').map((_, index) => (
                          <div key={index} className="text-[10px] sm:text-xs text-muted-foreground/50 text-right leading-tight sm:leading-relaxed">
                            {index + 1}
                          </div>
                        ))}
                      </div>
                      <textarea
                        ref={inputRef}
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onPaste={(e) => e.preventDefault()}
                        onDrop={(e) => e.preventDefault()}
                        onDragOver={(e) => e.preventDefault()}
                        className="flex-1 h-20 sm:h-24 lg:h-28 p-2 sm:p-3 bg-slate-900 text-slate-100 font-mono text-[10px] sm:text-xs resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 border-none"
                        placeholder="Start typing the code here..."
                        spellCheck={false}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {!gameStarted && (
                  <button 
                    onClick={startGame} 
                    className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-medium font-mono rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg flex-1 sm:flex-none"
                  >
                    <Zap className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                    Start Challenge
                  </button>
                )}
                {isCompleted && (
                  <>
                    {currentSnippet < codeSnippets.length - 1 && (
                      <button 
                        onClick={nextLevel} 
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-medium font-mono rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg flex-1 sm:flex-none"
                      >
                        Next Level
                      </button>
                    )}
                    <button 
                      onClick={resetGame} 
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-foreground text-foreground font-medium font-mono rounded-none hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 flex-1 sm:flex-none"
                    >
                      Try Again
                    </button>
                  </>
                )}
                {gameStarted && !isCompleted && (
                  <button 
                    onClick={resetGame} 
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-foreground text-foreground font-medium font-mono rounded-none hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 flex-1 sm:flex-none"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Right side - Stats & Progress */}
            <div className="flex justify-center items-center mt-8 lg:mt-0 animate-slide-in-right">
                <div className="relative w-full max-w-sm animate-scale-in" style={{ animationDelay: '0.6s' }}>
                {/* Main Stats Block */}
                <div className="w-full h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-primary/10 to-accent/10 border border-border relative">
                  <div className="absolute inset-0 p-3 sm:p-4 lg:p-6">
                    <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                      <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">Performance</h3>
                      <div className="w-6 sm:w-8 lg:w-10 h-0.5 bg-primary mx-auto"></div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                      {/* Speed */}
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Zap className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-primary mr-1" />
                          <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Speed</span>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{stats.wpm}</div>
                        <div className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground">WPM</div>
                      </div>
                      
                      {/* Accuracy */}
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Target className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-accent mr-1" />
                          <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Accuracy</span>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{stats.accuracy}</div>
                        <div className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground">%</div>
                      </div>
                      
                      {/* Time */}
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Timer className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-muted-foreground mr-1" />
                          <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Time</span>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{stats.time}</div>
                        <div className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground">seconds</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 border border-primary/30"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 bg-accent/20 rotate-45"></div>
                </div>

                {/* Progress Indicators */}
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <h4 className="text-xs sm:text-sm font-medium text-foreground text-center">Progress</h4>
                  <div className="flex justify-center space-x-1.5 sm:space-x-2">
                    {codeSnippets.map((snippet, index) => (
                      <div key={index} className="flex flex-col items-center space-y-1">
                        <div 
                          className={`w-2 h-2 sm:w-3 sm:h-3 transition-colors ${
                            index < currentSnippet ? 'bg-primary' : 
                            index === currentSnippet ? 'bg-accent' : 'bg-muted'
                          }`}
                        />
                        <span className="text-[9px] sm:text-xs text-muted-foreground">
                          {snippet.level.charAt(0)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional geometric elements */}
                <div className="absolute top-6 sm:top-8 -left-3 sm:-left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rotate-45"></div>
                <div className="absolute bottom-12 sm:bottom-16 -right-2 sm:-right-3 w-2 h-2 sm:w-3 sm:h-3 border border-primary"></div>
              </div>
            </div>
          </div>

          {/* Completion Message */}
          {isCompleted && (
            <div className="mt-12 text-center animate-scale-in">
              <div className="inline-block border border-primary/30 bg-primary/5 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                  🎉 Challenge Completed!
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  You typed {targetCode.length} characters in {stats.time} seconds
                  with {stats.accuracy}% accuracy at {stats.wpm} WPM!
                </p>
                {currentSnippet === codeSnippets.length - 1 && (
                  <p className="text-sm text-primary mt-2 font-medium">
                    🏆 All challenges completed! You're a coding speed master!
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCodeGame;
