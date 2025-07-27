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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">My</span>
              <span className="block text-foreground">Portfolio</span>
              <span className="block text-primary italic">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Explore my latest projects from my public repositories. Each project represents a journey of learning and innovation, while most of my work remains in private repositories.
            </p>
          </div>

          {/* GitHub Stats */}
          {user && (
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="pl-4 border-l-4 border-primary">
                <p className="text-xl text-muted-foreground font-light">Public</p>
                <p className="text-3xl font-bold text-foreground">{user.public_repos}</p>
                <p className="text-sm text-muted-foreground mt-1">Repositories</p>
              </div>
              <div className="pl-4 border-l-4 border-accent">
                <p className="text-xl text-muted-foreground font-light">Community</p>
                <p className="text-3xl font-bold text-foreground">{user.followers}</p>
                <p className="text-sm text-muted-foreground mt-1">Followers</p>
              </div>
              <div className="pl-4 border-l-4 border-primary/60">
                <p className="text-xl text-muted-foreground font-light">Network</p>
                <p className="text-3xl font-bold text-foreground">{user.following}</p>
                <p className="text-sm text-muted-foreground mt-1">Following</p>
              </div>
              <div className="pl-4 border-l-4 border-accent/60">
                <p className="text-xl text-muted-foreground font-light">Total</p>
                <p className="text-3xl font-bold text-foreground">
                  {repos.reduce((total, repo) => total + repo.stargazers_count, 0)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Stars Earned</p>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold leading-none mb-8">
              <span className="block text-foreground">My</span>
              <span className="block text-foreground">Recent</span>
              <span className="block text-primary italic">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <Card key={repo.id} className="border-border hover:border-primary/50 transition-colors rounded-none">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground mb-2">{repo.name}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                          {repo.description || 'No description available'}
                        </CardDescription>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
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
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          {repo.language && (
                            <span className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-1"></div>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center">
                            <GitFork className="w-3 h-3 mr-1" />
                            {repo.forks_count}
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>

                      {/* View Project Button */}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button variant="outline" className="w-full">
                          View Project
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;