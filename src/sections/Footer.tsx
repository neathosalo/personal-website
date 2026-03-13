import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter,
  Heart,
  ArrowUp
} from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:xinglei@email.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

const quickLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我', href: '#about' },
  { label: '服务项目', href: '#services' },
  { label: '作品案例', href: '#portfolio' },
  { label: '职业经历', href: '#experience' },
  { label: '联系我', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">邢</span>
              </div>
              <span className="font-serif font-semibold text-foreground text-lg">
                邢雷
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              追求专家型Top，而非高管。20年跨界经验，
              致力于帮助企业实现数字化转型与智能化升级。
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">联系方式</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a 
                  href="mailto:xinglei@email.com"
                  className="hover:text-primary transition-colors"
                >
                  xinglei@email.com
                </a>
              </li>
              <li>中国 · 大连</li>
              <li>
                <a 
                  href="#contact"
                  className="text-primary hover:underline"
                >
                  预约免费咨询 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> by 邢雷 & 小T
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="回到顶部"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
