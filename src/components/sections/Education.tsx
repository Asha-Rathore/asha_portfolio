import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'M.Sc. in Research in Computer and Systems Engineering',
    institution: 'Technische Universität Ilmenau',
    period: '2024 – Present',
    current: true
  },
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Karachi Institute of Economics and Technology',
    period: '2018 – 2022',
    current: false
  }
];

export function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="education"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Academic foundation in computer science and systems engineering
            </p>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-all duration-300 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out'
                }}
              >
                {/* Current badge */}
                {edu.current && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Current
                    </span>
                  </div>
                )}

                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-7 w-7 text-primary-foreground" />
                  </div>

                  {/* Degree */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 pr-16">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-base text-muted-foreground font-medium mb-3">
                    {edu.institution}
                  </p>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{edu.period}</span>
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
