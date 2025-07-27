import { Card, CardContent } from '@/components/ui/card';
import { Clock, Coffee, Code, Dumbbell, Book, Users } from 'lucide-react';

const DayInLife = () => {
  const schedule = [
    { time: '06:00', activity: 'Morning Workout', icon: Dumbbell, description: 'Start the day with energy' },
    { time: '07:30', activity: 'Coffee & Planning', icon: Coffee, description: 'Review goals and priorities' },
    { time: '09:00', activity: 'Deep Work', icon: Code, description: 'Focused coding sessions' },
    { time: '12:00', activity: 'Team Collaboration', icon: Users, description: 'Meetings and code reviews' },
    { time: '15:00', activity: 'Learning Time', icon: Book, description: 'Stay updated with tech trends' },
    { time: '18:00', activity: 'Personal Projects', icon: Code, description: 'Building side projects' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-6">
              A Day in My Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How I structure my day to balance productivity, learning, and well-being
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schedule.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-mono text-muted-foreground">{item.time}</span>
                      </div>
                      <h3 className="font-bold font-mono text-foreground mb-1">{item.activity}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground font-mono">
                  "Consistency in small actions leads to significant results"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInLife;