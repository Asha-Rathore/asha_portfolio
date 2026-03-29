import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Code, Mail } from 'lucide-react';
import { scrollToElement } from '@/lib/animations';

const CV_URL = 'cv/Asha_CV.pdf';
const PROFILE_IMAGE = 'images/profile/asha.jpeg';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer building scalable web, mobile, and backend systems.';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    window.open(CV_URL, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background with mesh effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Animated mesh grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'mesh-move 20s linear infinite'
        }} />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'hsl(var(--primary) / 0.3)' 
                : i % 3 === 1 
                ? 'hsl(var(--secondary) / 0.3)' 
                : 'hsl(var(--primary) / 0.2)',
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative group">
                {/* Animated ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity animate-pulse" />
                
                {/* Image container */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Asha - Software Engineer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  Available for hire
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
              {/* Name with staggered animation */}
              <div className="space-y-2 animate-fade-in">
                <p className="text-base md:text-lg text-muted-foreground">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                  Asha
                </h1>
              </div>

              {/* Typewriter effect */}
              <div className="min-h-[80px] md:min-h-[100px] flex items-center justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <p className="text-xl md:text-3xl text-foreground/90 font-light">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
                </p>
              </div>

              {/* Location and details */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-sm md:text-base text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <span className="flex items-center gap-1">
                  📍 Ilmenau, Germany
                </span>
                <span className="hidden md:inline">•</span>
                <span>Open to relocation, hybrid, remote</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <Button
                  size="lg"
                  onClick={handleDownloadCV}
                  className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToElement('projects')}
                  className="w-full sm:w-auto gap-2"
                >
                  <Code className="h-5 w-5" />
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToElement('contact')}
                  className="w-full sm:w-auto gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

