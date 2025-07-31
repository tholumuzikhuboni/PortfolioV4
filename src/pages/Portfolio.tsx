import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitFork, Calendar, Code2, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

const Portfolio = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const username = 'tholumuzikhuboni';

  useEffect(() => {
    document.title = "My Portfolio - Tholumuzi Khuboni | GitHub Projects & Work";
    
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepos(reposData);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background font-mono">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Loading Portfolio</h3>
              <p className="text-muted-foreground">Fetching my latest projects...</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Database className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '0ms' }} />
              <Zap className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '150ms' }} />
              <Github className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background font-mono">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <p className="text-red-500 mb-4">Error: {error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Geometric Background Elements with animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 animate-float-slow"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/10 rotate-12 animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-40 bg-primary/30 animate-pulse"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 rounded-full border-2 border-accent/30 animate-bounce-gentle"></div>
          
          {/* New animated elements */}
          <div className="absolute top-10 left-1/4 w-6 h-6 bg-primary/20 rotate-45 animate-rotate-in" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-10 left-1/2 w-8 h-8 border border-accent/30 rounded-full animate-scale-in" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-10 w-1 h-20 bg-accent/40 animate-slide-in-left" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                {/* Small intro */}
                <div className="inline-block">
                  <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                    Software Engineer
                  </span>
                  <div className="w-16 h-0.5 bg-primary mt-2"></div>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                  <span className="block text-foreground">My</span>
                  <span className="block text-foreground">Portfolio</span>
                  <span className="block text-primary italic">Projects</span>
                </h1>

                {/* Description */}
                <div className="pl-4 border-l-4 border-accent">
                  <p className="text-xl text-muted-foreground font-light">Showcasing</p>
                  <p className="text-3xl font-bold text-foreground">Innovation & Code</p>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Explore my latest projects from public repositories. Each project represents a journey of 
                  learning and innovation, while most of my professional work remains private.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-none transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  View GitHub Profile
                  <Github className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-medium rounded-none hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Visual Block */}
                <div className="w-80 h-96 bg-gradient-to-br from-primary to-accent relative hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  
                  {/* Content inside the block */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Github className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-2xl font-bold mb-2">PORTFOLIO</div>
                      <div className="text-sm tracking-wider">OPEN SOURCE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full relative">
              <div className="w-1 h-2 bg-muted-foreground rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
            <div className="writing-mode-vertical text-sm text-muted-foreground tracking-wider">
              SCROLL DOWN
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Enhanced GitHub Stats Section */}
          {user && (
            <section className="py-20 bg-secondary/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-20">
              <div className="max-w-6xl mx-auto">
                <div className="mb-16 animate-slide-in-left">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                    <span className="block text-foreground">GitHub</span>
                    <span className="block text-foreground">Developer</span>
                    <span className="block text-primary italic">Statistics</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    Real-time insights from my GitHub activity, showcasing collaboration, 
                    code quality, and community engagement metrics.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <div className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in bg-card" style={{ animationDelay: '0.1s' }}>
                    <Database className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{user.public_repos}</div>
                    <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">Public Repos</div>
                  </div>

                  <div className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in bg-card" style={{ animationDelay: '0.2s' }}>
                    <Star className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {repos.reduce((total, repo) => total + repo.stargazers_count, 0)}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">Total Stars</div>
                  </div>

                  <div className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in bg-card" style={{ animationDelay: '0.3s' }}>
                    <GitFork className="w-8 h-8 mx-auto mb-3 text-primary/70 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {repos.reduce((total, repo) => total + repo.forks_count, 0)}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">Total Forks</div>
                  </div>

                  <div className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in bg-card" style={{ animationDelay: '0.4s' }}>
                    <Github className="w-8 h-8 mx-auto mb-3 text-accent/70 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{user.followers}</div>
                    <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">Followers</div>
                  </div>

                  <div className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in bg-card" style={{ animationDelay: '0.5s' }}>
                    <Code2 className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {repos.filter(repo => repo.language).length}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">Languages</div>
                  </div>

                  <div className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:scale-105 animate-scale-in bg-card" style={{ animationDelay: '0.6s' }}>
                    <Zap className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {repos.filter(repo => new Date(repo.updated_at) > new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)).length}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">Recent Updates</div>
                  </div>
                </div>

                {/* Language Breakdown */}
                <div className="mt-16 animate-fade-in-up">
                  <h3 className="text-2xl font-bold leading-none mb-8">
                    <span className="block text-foreground">Top</span>
                    <span className="block text-primary italic">Languages</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {Array.from(new Set(repos.map(repo => repo.language).filter(Boolean)))
                      .slice(0, 6)
                      .map((language, index) => {
                        const count = repos.filter(repo => repo.language === language).length;
                        return (
                          <div 
                            key={language} 
                            className="p-4 border border-border hover:border-primary/50 transition-all duration-300 text-center hover:scale-105 animate-scale-in bg-card/50"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                            <div className="text-sm font-medium text-foreground">{language}</div>
                            <div className="text-xs text-muted-foreground">{count} repos</div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Projects Grid */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16 animate-slide-in-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                  <span className="block text-foreground">My</span>
                  <span className="block text-foreground">Recent</span>
                  <span className="block text-primary italic">Projects</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  A curated selection of my latest public repositories, showcasing diverse technologies
                  and innovative solutions across different domains.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, index) => (
                  <Card key={repo.id} className="border border-border bg-card hover:border-primary/50 transition-colors rounded-none animate-fade-in-up hover:animate-glow" style={{ animationDelay: `${index * 200}ms` }}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
                            <Github className="w-5 h-5 text-primary" />
                            {repo.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {repo.description || 'No description available'}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Topics */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {repo.topics.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{repo.topics.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3 h-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>

                      {/* View Project Button */}
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                      >
                        <a 
                          href={repo.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {repos.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No projects found.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
