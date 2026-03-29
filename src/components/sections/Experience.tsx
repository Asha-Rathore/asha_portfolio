import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Working Student – Software Development',
    company: 'Analytik Jena',
    period: 'February 2025 – December 2025',
    location: 'Germany',
    highlights: [
      'Built a Blazor web application for automated license generation',
      'Implemented full feature lifecycle from design to deployment',
      'Collaborated with cross-functional teams to deliver production-ready solutions'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Binate Digital',
    period: 'May 2022 – August 2024',
    location: 'Pakistan',
    highlights: [
      'Developed cross-platform mobile applications using Flutter',
      'Integrated REST APIs and optimized application performance',
      'Delivered multiple projects with focus on user experience and code quality',
      'Worked in Agile/Scrum environment with regular sprint cycles'
    ]
  },
  {
    role: 'Flutter Intern',
    company: 'Aks iQ',
    period: 'March 2022 – April 2022',
    location: 'Pakistan',
    highlights: [
      'Gained hands-on experience with Flutter mobile development',
      'Contributed to real-world projects and learned industry best practices'
    ]
  }
];

export function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional journey building impactful software solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 -translate-x-1/2" />

              {/* Experience items */}
              <div className="space-y-8 md:space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)] md:text-right'
                    }`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'all 0.6s ease-out'
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-shadow">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-foreground mb-2">{exp.role}</h3>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4 text-primary" />
                              <span className="font-semibold text-foreground">{exp.company}</span>
                            </div>
                            <span className="hidden md:inline">•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <span className="hidden md:inline">•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-sm text-foreground/90">
                              <span className="text-primary mt-1.5">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
