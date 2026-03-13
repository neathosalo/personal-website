import { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter,
  MapPin,
  Send,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const socialLinks = [
  {
    icon: Mail,
    label: '邮箱',
    value: 'xinglei@email.com',
    href: 'mailto:xinglei@email.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/xinglei',
    href: 'https://linkedin.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/xinglei',
    href: 'https://github.com',
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>联系我</span>
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            让我们<span className="text-gradient">聊聊</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            无论是项目合作、技术交流还是职业咨询，
            都欢迎与我联系
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal opacity-0 stagger-3">
              <h3 className="text-xl font-bold text-foreground mb-6">
                联系方式
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="reveal opacity-0 stagger-4 p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">所在城市</h4>
              </div>
              <p className="text-muted-foreground">
                中国 · 大连
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                支持远程协作，可接受出差
              </p>
            </div>

            {/* Quick booking */}
            <div className="reveal opacity-0 stagger-4 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">预约咨询</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                有具体项目需求？预约一次免费咨询，探讨合作可能性。
              </p>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                <Calendar className="mr-2 w-4 h-4" />
                选择时间
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="reveal opacity-0 stagger-5 p-8 rounded-3xl bg-card/50 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">
                发送消息
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    消息已发送
                  </h4>
                  <p className="text-muted-foreground">
                    感谢您的来信，我会尽快回复您！
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        姓名 <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="您的姓名"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        邮箱 <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      主题 <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="咨询项目合作"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      消息内容 <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请描述您的需求或问题..."
                      required
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 animate-pulse-glow"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    发送消息
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    提交即表示您同意我的隐私政策
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
