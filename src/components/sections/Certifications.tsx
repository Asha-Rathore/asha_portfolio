import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Languages, Heart } from 'lucide-react';

const certifications = [
  { name: 'Flutter Fundamentals', issuer: '10Pearls' },
  { name: 'UI/UX Certificate', issuer: '10Pearls' },
  { name: 'Development Trainee', issuer: 'Binate Digital' }
];

const languages = [
  { name: 'English', level: 'IELTS 7' },
  { name: 'German', level: 'A2 (B1 in progress)' }
];

const interests = ['Painting', 'Travelling', 'Learning new technologies'];

export function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="certifications"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & More</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Certifications */}
            <Card
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-shadow"
              style={{
                animationDelay: '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out'
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="border-l-2 border-primary pl-3">
                      <p className="font-semibold text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-shadow"
              style={{
                animationDelay: '100ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out'
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                  <Languages className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {languages.map((lang, index) => (
                    <li key={index} className="border-l-2 border-secondary pl-3">
                      <p className="font-semibold text-sm">{lang.name}</p>
                      <p className="text-xs text-muted-foreground">{lang.level}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-shadow"
              style={{
                animationDelay: '200ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out'
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
