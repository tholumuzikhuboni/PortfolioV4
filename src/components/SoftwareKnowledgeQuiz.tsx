import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Timer, Target, Zap, Brain } from 'lucide-react';

const quizQuestions = [
  {
    level: 'Easy',
    question: 'What does "UI" stand for in software development?',
    options: ['User Interface', 'Unified Integration', 'Universal Input', 'Unit Information'],
    correct: 0,
    category: 'Terminology'
  },
  {
    level: 'Easy', 
    question: 'What is a "bug" in software development?',
    options: ['A security feature', 'An error or flaw in the program', 'A type of virus', 'A testing method'],
    correct: 1,
    category: 'Terminology'
  },
  {
    level: 'Medium',
    question: 'What is the purpose of "version control" in software development?',
    options: ['To control software versions sold', 'To track changes and manage code history', 'To limit user access', 'To optimize performance'],
    correct: 1,
    category: 'Process'
  },
  {
    level: 'Medium',
    question: 'What does "API" stand for and what is its main purpose?',
    options: ['Application Programming Interface - allows different software to communicate', 'Advanced Program Integration - combines multiple programs', 'Automated Process Indicator - shows program status', 'Application Performance Index - measures speed'],
    correct: 0,
    category: 'Technical Concepts'
  },
  {
    level: 'Hard',
    question: 'What is the main benefit of "Agile" software development methodology?',
    options: ['Faster coding speed', 'Iterative development with frequent feedback and adaptability', 'Reduced development costs', 'Automated testing'],
    correct: 1,
    category: 'Methodology'
  },
  {
    level: 'Hard',
    question: 'What is "technical debt" in software development?',
    options: ['Money owed for software licenses', 'The cost of maintaining legacy systems', 'Future work needed due to choosing quick solutions over better approaches', 'Budget overrun in development projects'],
    correct: 2,
    category: 'Project Management'
  },
  {
    level: 'Expert',
    question: 'What is the primary goal of "DevOps" in software development?',
    options: ['Developing mobile applications', 'Bridging development and operations for faster, more reliable deployments', 'Creating development tools', 'Managing developer resources'],
    correct: 1,
    category: 'Methodology'
  },
  {
    level: 'Expert',
    question: 'What is "scalability" in software architecture?',
    options: ['The ability to resize user interfaces', 'The capacity to handle increased workload by adding resources', 'The process of reducing code size', 'The ability to scale down features'],
    correct: 1,
    category: 'Architecture'
  }
];

const SoftwareKnowledgeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stats, setStats] = useState({ score: 0, accuracy: 0, time: 0, correct: 0, total: 0 });
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentQuestion];

  useEffect(() => {
    if (quizStarted && !startTime) {
      setStartTime(Date.now());
      setAnswers(new Array(quizQuestions.length).fill(null));
    }
  }, [quizStarted, startTime]);

  const calculateStats = () => {
    if (!startTime) return;
    
    const endTime = Date.now();
    const timeInSeconds = Math.round((endTime - startTime) / 1000);
    
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correct) {
        correctAnswers++;
      }
    });
    
    const accuracy = Math.round((correctAnswers / quizQuestions.length) * 100);
    const score = Math.round((correctAnswers / quizQuestions.length) * 1000);
    
    setStats({
      score,
      accuracy,
      time: timeInSeconds,
      correct: correctAnswers,
      total: quizQuestions.length
    });
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCompleted(false);
    setShowResult(false);
    setStartTime(null);
    setAnswers(new Array(quizQuestions.length).fill(null));
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz completed
        setIsCompleted(true);
        calculateStats();
      }
    }
  };

  const showAnswer = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCompleted(false);
    setShowResult(false);
    setStartTime(null);
    setAnswers([]);
    setStats({ score: 0, accuracy: 0, time: 0, correct: 0, total: 0 });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'default';
      case 'Medium': return 'secondary';
      case 'Hard': return 'destructive';
      case 'Expert': return 'outline';
      default: return 'default';
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-slide-in-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">Software</span>
              <span className="block text-foreground">Knowledge</span>
              <span className="block text-primary italic">Challenge</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Test your understanding of software development concepts! Perfect for non-technical 
              professionals working with development teams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Quiz Area */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Challenge Info */}
              <div className="pl-4 border-l-4 border-primary animate-fade-in-up">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Badge variant="outline" className="font-mono text-[10px] sm:text-xs">
                    {question?.category}
                  </Badge>
                  <Badge 
                    variant={getLevelColor(question?.level || 'Easy')}
                    className="text-[10px] sm:text-xs"
                  >
                    {question?.level}
                  </Badge>
                  <span className="text-[10px] sm:text-xs text-muted-foreground ml-auto">
                    Question {currentQuestion + 1} / {quizQuestions.length}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  Question #{currentQuestion + 1}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Read carefully and select the best answer. Take your time to think it through.
                </p>
              </div>

              {/* Question Display */}
              <div className="border border-border bg-background/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* Quiz Header */}
                <div className="bg-secondary/50 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex space-x-1 sm:space-x-1.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-red-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-500"></div>
                      </div>
                      <span className="text-foreground font-mono text-[10px] sm:text-xs">software_quiz_{currentQuestion + 1}.md</span>
                    </div>
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Question Content */}
                <div className="p-2 sm:p-3 lg:p-4 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
                  {quizStarted ? (
                    <div className="space-y-4">
                      <h4 className="text-sm sm:text-base lg:text-lg font-medium text-foreground leading-relaxed">
                        {question.question}
                      </h4>
                      
                      <div className="space-y-2">
                        {question.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => selectAnswer(index)}
                            disabled={showResult}
                            className={`w-full text-left p-2 sm:p-3 border rounded-none text-xs sm:text-sm transition-all duration-200 ${
                              selectedAnswer === index 
                                ? 'border-primary bg-primary/10 text-primary' 
                                : 'border-border hover:border-primary/50 hover:bg-primary/5'
                            } ${showResult && index === question.correct ? 'border-green-500 bg-green-500/10 text-green-700' : ''}
                            ${showResult && selectedAnswer === index && index !== question.correct ? 'border-red-500 bg-red-500/10 text-red-700' : ''}
                            ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <span className="font-mono mr-2">{String.fromCharCode(65 + index)}.</span>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center h-full">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Ready to test your software knowledge?<br />
                        Click "Start Quiz" to begin!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {!quizStarted && (
                  <button 
                    onClick={startQuiz} 
                    className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-medium font-mono rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg flex-1 sm:flex-none"
                  >
                    <Brain className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                    Start Quiz
                  </button>
                )}
                {quizStarted && !isCompleted && !showResult && selectedAnswer !== null && (
                  <button 
                    onClick={showAnswer} 
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-foreground text-foreground font-medium font-mono rounded-none hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 flex-1 sm:flex-none"
                  >
                    Show Answer
                  </button>
                )}
                {quizStarted && !isCompleted && showResult && (
                  <button 
                    onClick={nextQuestion} 
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-medium font-mono rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg flex-1 sm:flex-none"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </button>
                )}
                {(quizStarted || isCompleted) && (
                  <button 
                    onClick={resetQuiz} 
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-foreground text-foreground font-medium font-mono rounded-none hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 flex-1 sm:flex-none"
                  >
                    Reset Quiz
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
                      {/* Score */}
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Zap className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-primary mr-1" />
                          <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Score</span>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{stats.score}</div>
                        <div className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground">points</div>
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
                    {quizQuestions.map((question, index) => (
                      <div key={index} className="flex flex-col items-center space-y-1">
                        <div 
                          className={`w-2 h-2 sm:w-3 sm:h-3 transition-colors ${
                            index < currentQuestion ? 'bg-primary' : 
                            index === currentQuestion ? 'bg-accent' : 'bg-muted'
                          }`}
                        />
                        <span className="text-[9px] sm:text-xs text-muted-foreground">
                          {question.level.charAt(0)}
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
                  🎉 Quiz Completed!
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  You scored {stats.correct} out of {stats.total} questions correct
                  with {stats.accuracy}% accuracy in {stats.time} seconds!
                </p>
                {stats.accuracy >= 80 && (
                  <p className="text-sm text-primary mt-2 font-medium">
                    🏆 Excellent! You have a strong understanding of software development concepts!
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

export default SoftwareKnowledgeQuiz;
