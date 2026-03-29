import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'C#', 'Dart', 'Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'REST APIs', 'JWT', 'Entity Framework', 'Node.js', 'Firebase']
  },
  {
    category: 'Frontend',
    skills: ['Blazor', 'React', 'HTML', 'CSS']
  },
  {
    category: 'Mobile',
    skills: ['Flutter', 'React Native', 'Kotlin']
  },
  {
    category: 'Tools & IDEs',
    skills: ['Git', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'Jira', 'Figma']
  },
  {
    category: 'Concepts & Practices',
    skills: ['OOP', 'Data Structures', 'Clean Architecture', 'SOLID Principles', 'Agile/Scrum']
  },
  {
    category: 'AI Productivity Tools',
    skills: ['GitHub Copilot', 'ChatGPT', 'Claude']
  }
];

export function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Animated code-like background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-primary font-mono text-xs animate-pulse">
          {'{ code: "clean" }'}
        </div>
        <div className="absolute top-20 right-20 text-secondary font-mono text-xs animate-pulse" style={{ animationDelay: '1s' }}>
          {'function() { return true; }'}
        </div>
        <div className="absolute bottom-20 left-1/4 text-primary font-mono text-xs animate-pulse" style={{ animationDelay: '2s' }}>
          {'const dev = "passionate";'}
        </div>
        <div className="absolute bottom-40 right-1/3 text-secondary font-mono text-xs animate-pulse" style={{ animationDelay: '1.5s' }}>
          {'<Component />'}
        </div>
        
        {/* Floating dots pattern */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${categoryIndex * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out'
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
