import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'License Generating Tool',
    description: 'Web application for automated generation of PDF licenses with customizable templates and secure distribution',
    techStack: ['Blazor', '.NET', 'Spring Boot', 'PDF Generation'],
    githubUrl: 'https://github.com/Asha-Rathore/license-tool'
  },
  {
    name: 'Fare Share',
    description: 'Travel expense splitting application with real-time synchronization and multi-currency support',
    techStack: ['Flutter', 'REST APIs', 'Firebase', 'Real-time Sync'],
    githubUrl: 'https://github.com/Asha-Rathore/fare-share'
  },
  {
    name: 'Locks',
    description: 'Sports information application providing live scores, team statistics, and match schedules',
    techStack: ['Flutter', 'REST APIs', 'State Management'],
    githubUrl: 'https://github.com/Asha-Rathore/locks'
  },
  {
    name: 'Baby Bonding',
    description: 'Location-based application using Google Maps for connecting parents and organizing playdates',
    techStack: ['Flutter', 'Google Maps API', 'Geolocation'],
    githubUrl: 'https://github.com/Asha-Rathore/baby-bonding'
  },
  {
    name: 'Rent Folkz',
    description: 'QR-based rental platform for seamless equipment booking and inventory management',
    techStack: ['Flutter', 'QR Integration', 'REST APIs', 'Payment Gateway'],
    githubUrl: 'https://github.com/Asha-Rathore/rent-folkz'
  }
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing full-stack development expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover hover:scale-105 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out'
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <ExternalLink className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
