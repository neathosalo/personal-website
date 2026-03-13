import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <div className="reveal opacity-0 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                欢迎访问我的个人网站
              </span>
            </div>

            {/* Name */}
            <h1 className="reveal opacity-0 stagger-1 text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              邢雷
            </h1>

            {/* Identity tags */}
            <div className="reveal opacity-0 stagger-2 mb-6">
              <p className="text-lg sm:text-xl text-muted-foreground font-mono">
                数字化转型顾问 <span className="text-primary">·</span>{' '}
                CMMM评估师 <span className="text-primary">·</span>{' '}
                技术管理者
              </p>
            </div>

            {/* Value proposition */}
            <div className="reveal opacity-0 stagger-3 mb-10">
              <p className="text-xl sm:text-2xl text-foreground/90 font-light leading-relaxed">
                用<span className="text-primary font-medium">20年软件工程经验</span>
                助力<span className="text-accent font-medium">企业数字化转型</span>
              </p>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto lg:mx-0">
                中日跨境能力，深耕智能制造与CMMM评估，提供务实的数字化转型解决方案
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="reveal opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-full animate-pulse-glow"
              >
                了解更多
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-border/50 hover:bg-secondary/50 px-8 py-6 text-base font-medium rounded-full"
              >
                <Mail className="mr-2 w-4 h-4" />
                联系我
              </Button>
            </div>
          </div>

          {/* Right content - Portrait placeholder */}
          <div className="reveal opacity-0 stagger-2 hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl scale-110" />
              
              {/* Portrait container */}
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-border/50 glass-effect">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                      <span className="text-5xl font-serif text-primary">邢</span>
                    </div>
                    <p className="text-muted-foreground text-sm">专业形象照</p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-card border border-border/50 shadow-lg animate-float">
                <span className="text-sm font-medium text-foreground">20+ 年经验</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-card border border-border/50 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-foreground">中日双语</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
