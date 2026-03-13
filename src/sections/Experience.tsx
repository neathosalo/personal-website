import { useEffect, useRef } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award,
  TrendingUp
} from 'lucide-react';

const experiences = [
  {
    type: 'work',
    period: '2025 - 至今',
    title: 'AI转型顾问 & 一人公司创始人',
    company: '独立顾问',
    description: '专注于AI时代的数字化转型咨询，构建个人Digital Twin，探索敏捷+AI复合方法论。',
    achievements: [
      '完成个人Digital Twin基座搭建',
      '21年人生历程数字化',
      'AI变革服务与一人公司模式',
    ],
    icon: TrendingUp,
  },
  {
    type: 'work',
    period: '2018 - 2024',
    title: '总经理 & 咨询顾问',
    company: '拾陆两科技',
    description: '创立拾陆两科技，提供企业数字化转型咨询服务，聚焦智能制造领域。',
    achievements: [
      '服务多家制造企业数字化转型',
      '智能制造方向专业咨询',
      'CMMM评估师资质',
    ],
    icon: Briefcase,
  },
  {
    type: 'work',
    period: '2019 - 2020',
    title: '软件专家顾问',
    company: '德国ROI Consulting · 一汽集团项目',
    description: '作为软件专家参与一汽集团智能网联院+新能源院咨询项目，与德国专家深度协作。',
    achievements: [
      '提出研产销全生命周期创新课题群模型',
      '与麦肯锡同台竞技胜出',
      '获得一汽集团副总认可',
    ],
    icon: Award,
  },
  {
    type: 'work',
    period: '2014 - 2017',
    title: '质量总监 & 项目协调人',
    company: '东软集团金融事业部',
    description: '负责浦发银行托管项目，单体过亿，人员超200人的超级项目。',
    achievements: [
      '浦发托管项目成功交付',
      '事业部历史最大单体项目',
      '成为团队台柱子之一',
    ],
    icon: Briefcase,
  },
  {
    type: 'work',
    period: '2010 - 2013',
    title: '敏捷首席专家',
    company: '东软集团PIC',
    description: '公司敏捷方法论探索者，全公司公认的敏捷首席专家。',
    achievements: [
      '十几个事业部追着约辅导',
      '形成"CMMI+敏捷"双轮驱动',
      '当红小生——专业身份高光时刻',
    ],
    icon: Award,
  },
  {
    type: 'work',
    period: '2008 - 2009',
    title: 'CMMI-5级评估主理人',
    company: '宝信软件海外事业部',
    description: '带领组织通过CMMI-5级评估，实现程序员向软件工程方法论专家转型。',
    achievements: [
      'CMMI-5级评估通过',
      '多个部门跟进学习经验',
      '专业兴趣点重大转向',
    ],
    icon: Briefcase,
  },
];

const certifications = [
  { name: 'CMMM评估师', year: '2024' },
  { name: 'Scrum Master认证', year: '2012' },
  { name: 'CMMI-5级评估主理人', year: '2009' },
  { name: '敏捷方法论专家', year: '2010' },
];

export function Experience() {
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
      id="experience"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>职业经历</span>
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            我的<span className="text-gradient">职业轨迹</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            从程序员到创业者，从咨询顾问到技术领袖，
            每一步都是跨界融合的积累
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

              {/* Experience items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="reveal opacity-0 relative pl-16"
                    style={{ animationDelay: `${0.1 * (index + 3)}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content card */}
                    <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                      {/* Period */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        {exp.period}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, aIndex) => (
                          <div
                            key={aIndex}
                            className="flex items-center gap-2 text-sm text-foreground/80"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="reveal opacity-0 stagger-4 p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">专业认证</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                  >
                    <span className="text-foreground text-sm">{cert.name}</span>
                    <span className="text-muted-foreground text-xs">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills cloud */}
            <div className="reveal opacity-0 stagger-5 p-6 rounded-2xl bg-card/50 border border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">核心能力</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  '敏捷方法论', 'Scrum', 'CMMI', 'CMMM', '智能制造', '数字化转型',
                  '项目管理', '组织变革', '跨文化协作', 'AI应用', '知识管理',
                  '系统工程', '软件过程', '德式项目管理', '一人公司'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="reveal opacity-0 stagger-5 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <blockquote className="text-foreground italic leading-relaxed">
                "我个人也不追求作高管，我追求作专家型的Top。"
              </blockquote>
              <cite className="block mt-4 text-sm text-muted-foreground not-italic">
                — 邢雷
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
