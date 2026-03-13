import { useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Code2, 
  Users, 
  Rocket, 
  Brain,
  Download,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const identities = [
  {
    icon: MessageSquare,
    title: '数字化转型顾问',
    description: '为制造企业提供数字化转型战略规划与落地指导，主导多个千万级咨询项目',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Code2,
    title: 'CMMM评估师',
    description: '智能制造能力成熟度评估师，主导锦西石化等CMMM三级评估项目',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Users,
    title: '技术管理者',
    description: '20年技术管理经验，擅长团队搭建、人才培养与组织优化',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
  },
  {
    icon: Rocket,
    title: '创业者',
    description: '拾陆两科技创始人，探索B2B SaaS与企业服务领域',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
  },
  {
    icon: Brain,
    title: 'AI实践者',
    description: '探索AI在企业中的应用落地，利用Playwright等工具提升效率',
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-500/30',
  },
];

const highlights = [
  { number: '20+', label: '年行业经验' },
  { number: '中日', label: '双语能力' },
  { number: 'CMMM', label: '评估师资质' },
  { number: '10+', label: '企业客户' },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>关于我</span>
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            多维度<span className="text-gradient">专业背景</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            技术与商业的跨界融合，让我能够从双重视角，
            为企业提供更全面、更落地的数字化转型解决方案
          </p>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 stagger-3 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Identity cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {identities.map((identity, index) => (
            <div
              key={index}
              className={`reveal opacity-0 group relative p-6 rounded-2xl bg-card/50 border ${identity.borderColor} hover:border-primary/50 transition-all duration-300 hover:-translate-y-1`}
              style={{ animationDelay: `${0.1 * (index + 4)}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${identity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <identity.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {identity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {identity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal story */}
        <div className="reveal opacity-0 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              我的故事
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                从一线程序员到技术总监，从咨询顾问到创业者，我的职业轨迹横跨技术与商业两个领域。
                这种跨界经历让我深刻理解：技术只有与业务深度融合，才能真正创造价值。
              </p>
              <p>
                过去20年，我有幸参与并主导了众多数字化转型项目，见证了技术如何重塑商业模式。
                从早期的互联网浪潮到如今的AI革命，始终保持学习的热情与实践的勇气。
              </p>
              <p>
                今天，我致力于帮助更多制造企业拥抱数字化变革，用务实的方法论和丰富的实战经验，
                陪伴企业完成CMMM评估与数字化转型的每一步。
              </p>
            </div>
            <Button variant="outline" className="rounded-full group">
              <Download className="mr-2 w-4 h-4" />
              下载完整简历
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Skills/Expertise */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              核心专长
            </h3>
            <div className="space-y-4">
              {[
                { name: '企业数字化转型', level: 95 },
                { name: 'CMMM评估服务', level: 92 },
                { name: '技术团队管理', level: 90 },
                { name: '战略规划咨询', level: 88 },
                { name: '智能制造', level: 85 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
