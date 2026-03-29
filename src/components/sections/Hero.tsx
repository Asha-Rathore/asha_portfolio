import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Code, Mail } from 'lucide-react';
import { scrollToElement } from '@/lib/animations';

const CV_URL = 'https://miaoda-conversation-file.s3cdn.medo.dev/user-algotrj1adj4/conv-algtcfmyiwow/20260329/file-algwtu1o8g74.pdf';

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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Name with staggered animation */}
          <div className="space-y-2 animate-fade-in">
            <p className="text-base md:text-lg text-muted-foreground">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Asha
            </h1>
          </div>

          {/* Typewriter effect */}
          <div className="min-h-[80px] md:min-h-[100px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-3xl text-foreground/90 font-light">
              {displayText}
              <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          {/* Location and details */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-base text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center gap-1">
              📍 Ilmenau, Germany
            </span>
            <span className="hidden md:inline">•</span>
            <span>Open to relocation, hybrid, remote</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
