import { useEffect, useRef } from 'react';
import { 
  Building2, 
  Cpu, 
  Users2, 
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Building2,
    title: '智能制造与数字化转型',
    description: '基于CMMM评估师资质，提供智能制造能力成熟度评估与数字化转型咨询服务。',
    features: [
      'CMMM成熟度评估',
      '智能制造路线图规划',
      '数字化转型战略',
      '工业4.0落地实施',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Cpu,
    title: '敏捷转型与过程改进',
    description: '20年软件工程经验，提供Scrum/敏捷方法论导入与组织过程改进服务。',
    features: [
      '敏捷教练服务',
      'Scrum Master培训',
      'CMMI过程改进',
      '组织变革管理',
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Users2,
    title: 'AI时代的知识管理',
    description: '个人Digital Twin实践经验，帮助企业构建AI驱动的知识管理体系。',
    features: [
      '知识资产数字化',
      'AI知识助理构建',
      '组织记忆沉淀',
      '一人公司模式',
    ],
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
  },
  {
    icon: Lightbulb,
    title: '跨文化项目协作',
    description: '日本、德国工作经验，提供跨文化项目管理与德式咨询方法论导入。',
    features: [
      '德式项目管理',
      '中日协作咨询',
      '跨文化沟通',
      '模块化战略',
    ],
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
  },
];

export function Services() {
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
      id="services"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>服务项目</span>
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            我能为您<span className="text-gradient">做什么</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            基于20年跨界经验，提供从战略到落地的全方位服务，
            助力企业在数字化时代实现突破
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal opacity-0 group relative p-8 rounded-3xl bg-card/50 border ${service.borderColor} hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
              style={{ animationDelay: `${0.1 * (index + 3)}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto"
                >
                  了解详情
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 stagger-5 mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-card/50 border border-border/50">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                有特定的需求？
              </h4>
              <p className="text-muted-foreground text-sm">
                欢迎预约免费咨询，探讨您的项目需求
              </p>
            </div>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              预约咨询
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
