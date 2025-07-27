import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const FeaturedProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tholumuzikhuboni/repos?sort=updated&per_page=6');
        const data = await response.json();
        // Filter for repos that are not forks and have descriptions
        const featuredRepos = data.filter((repo: GitHubRepo) => 
          repo.description && !repo.name.includes('fork')
        ).slice(0, 3);
        setRepos(featuredRepos);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
                <span className="block text-foreground">My</span>
                <span className="block text-foreground">Featured</span>
                <span className="block text-primary italic">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Loading featured projects from GitHub...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">My</span>
              <span className="block text-foreground">Featured</span>
              <span className="block text-primary italic">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A showcase of my latest work from my public repositories, featuring innovative 
              solutions and technical implementations. Most of my repositories are private.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card key={repo.id} className="border border-border bg-card hover:border-primary/50 transition-colors rounded-none">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Github className="w-5 h-5 text-primary" />
                    {repo.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {repo.description || 'No description available'}
                  </p>
                  
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
                  </div>
                  
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
              <p className="text-muted-foreground">No featured projects found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;