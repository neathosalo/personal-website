import { useEffect, useRef, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categories = ['全部', '咨询项目', '智能制造', '敏捷转型', 'AI应用'];

const projects = [
  {
    title: '一汽集团智能网联咨询项目',
    description: '作为德国ROI咨询公司一汽项目软件专家，与德国专家深度协作，提出研产销全生命周期创新课题群模型。',
    image: 'FAW项目',
    category: '咨询项目',
    tags: ['汽车软件', '德式咨询', '模块化', '跨文化协作'],
    metrics: { label: '客户认可', value: '副总级' },
    links: { demo: '#', github: null },
    color: 'from-blue-500/30 to-cyan-500/30',
  },
  {
    title: '浦发银行托管项目',
    description: '事业部历史最大单体项目，单体过亿，人员超200人，在总经理离职后作为台柱子之一成功交付。',
    image: '浦发项目',
    category: '咨询项目',
    tags: ['金融IT', '项目管理', '资源协调', '团队协作'],
    metrics: { label: '项目规模', value: '亿元级' },
    links: { demo: '#', github: null },
    color: 'from-violet-500/30 to-purple-500/30',
  },
  {
    title: 'CMMI-5级评估',
    description: '宝信软件海外事业部CMMI-5级评估主理人，带领组织通过评估，多个部门跟进学习经验。',
    image: 'CMMI评估',
    category: '咨询项目',
    tags: ['CMMI', '软件工程', '过程改进', '组织变革'],
    metrics: { label: '评估等级', value: '5级' },
    links: { demo: '#', github: null },
    color: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    title: '东软敏捷转型',
    description: '东软集团敏捷首席专家，十几个事业部追着约辅导，形成"CMMI+敏捷"双轮驱动。',
    image: '敏捷转型',
    category: '敏捷转型',
    tags: ['Scrum', '敏捷教练', '组织变革', '过程框架'],
    metrics: { label: '影响力', value: '全公司' },
    links: { demo: '#', github: null },
    color: 'from-orange-500/30 to-amber-500/30',
  },
  {
    title: '个人Digital Twin',
    description: '21年人生历程数字化，69篇博客、403个知乎回答、1000+照片，构建可生长的数字分身。',
    image: 'Digital Twin',
    category: 'AI应用',
    tags: ['AI应用', '知识管理', '系统工程', '自我认知'],
    metrics: { label: '数据量', value: 'TB级' },
    links: { demo: '#', github: '#' },
    color: 'from-rose-500/30 to-pink-500/30',
  },
  {
    title: '智能制造咨询服务',
    description: '聚焦制造业数字化转型咨询，CMMM评估师资质，服务多家制造企业的数字化转型。',
    image: '智能制造',
    category: '智能制造',
    tags: ['CMMM', '数字化转型', '工业4.0', '技术路线图'],
    metrics: { label: '专业资质', value: 'CMMM' },
    links: { demo: '#', github: null },
    color: 'from-indigo-500/30 to-blue-500/30',
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProjects = activeCategory === '全部'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
      id="portfolio"
      className="relative py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>精选项目</span>
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            作品<span className="text-gradient">案例</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            从AI应用到企业咨询，从开源工具到SaaS产品，
            每个项目都承载着对技术与商业的深刻理解
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal opacity-0 stagger-3 flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-muted-foreground mr-2 self-center" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full text-sm ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'border-border/50 hover:bg-secondary/50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="reveal opacity-0 group relative rounded-3xl overflow-hidden bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${0.1 * (index + 4)}s` }}
            >
              {/* Image placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{project.image.charAt(0)}</span>
                  </div>
                  <span className="text-white/90 text-sm font-medium">{project.image}</span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      查看演示
                    </a>
                  </Button>
                  {project.links.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-white/50 text-white hover:bg-white/20"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        源码
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category badge */}
                <Badge variant="secondary" className="mb-3 bg-secondary/50 text-muted-foreground">
                  {project.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight className="inline w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.metrics.label}</span>
                  <span className="text-lg font-bold text-primary">{project.metrics.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="reveal opacity-0 stagger-5 mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-border/50 hover:bg-secondary/50"
          >
            查看更多项目
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
