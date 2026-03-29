import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Zap, Users } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main description */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  I'm a <span className="font-semibold text-primary">Software Engineer</span> with{' '}
                  <span className="font-semibold">3+ years of experience</span> building scalable and 
                  efficient solutions across backend, web, and mobile platforms. My expertise spans{' '}
                  <span className="font-semibold text-primary">Java, Spring Boot, .NET, Flutter</span>, 
                  and modern web technologies, with a strong foundation in{' '}
                  <span className="font-semibold">REST APIs</span> and full-stack development.
                </p>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-4">
                  I thrive in <span className="font-semibold text-secondary">Agile/Scrum</span> environments 
                  and leverage AI productivity tools like{' '}
                  <span className="font-semibold">GitHub Copilot, ChatGPT, and Claude</span> to enhance 
                  development efficiency and code quality.
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Full-Stack Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Backend, web, and mobile development with modern frameworks
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI-Enhanced Workflow</h3>
                  <p className="text-sm text-muted-foreground">
                    Leveraging AI tools for productivity and code quality
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Agile Methodology</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced in Scrum practices and collaborative development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
