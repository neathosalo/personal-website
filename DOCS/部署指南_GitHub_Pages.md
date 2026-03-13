# GitHub Pages 部署指南

**创建时间**: 2026-03-13
**版本**: v1.0

---

## 一、部署路线

### 阶段一：本地开发
- ✅ 开发页面内容
- ✅ 本地测试预览

### 阶段二：GitHub工程管理
- [ ] 创建GitHub仓库
- [ ] 初始化Git
- [ ] 推送代码

### 阶段三：GitHub Pages发布
- [ ] 配置GitHub Pages
- [ ] 自动构建部署

### 阶段四：自定义域名
- [ ] 配置CNAME
- [ ] 绑定自有域名

---

## 二、本地开发

### 2.1 安装依赖
```bash
cd /Users/apple/Desktop/01-AISoft/TRAE_CN/04_网站运营
npm install
```

### 2.2 启动开发服务器
```bash
npm run dev
```
访问：http://localhost:5173

### 2.3 构建生产版本
```bash
npm run build
```
生成：`dist/` 目录

---

## 三、GitHub工程管理

### 3.1 创建GitHub仓库
1. 访问 https://github.com/new
2. 仓库名建议：`personal-website` 或 `16tael-website`
3. 选择 Public
4. **不要**初始化README、.gitignore、license
5. 点击 Create repository

### 3.2 初始化本地Git
```bash
cd /Users/apple/Desktop/01-AISoft/TRAE_CN/04_网站运营

# 初始化Git
git init

# 添加所有文件
git add .

# 首次提交
git commit -m "Initial commit: 老邢个人网站 v1.0"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送到main分支
git branch -M main
git push -u origin main
```

---

## 四、GitHub Pages自动部署

### 4.1 使用GitHub Actions自动部署（推荐）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4.2 配置GitHub Pages
1. 进入仓库 Settings
2. 左侧 Pages
3. Build and deployment:
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
4. 保存

### 4.3 推送触发部署
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

等待几分钟，访问：`https://你的用户名.github.io/你的仓库名/`

---

## 五、自定义域名配置

### 5.1 在仓库中添加CNAME文件
```bash
# 创建CNAME文件，内容为你的域名
echo "www.你的域名.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 5.2 在域名服务商配置
以阿里云为例：
1. 进入域名管理
2. 添加解析记录：
   - 记录类型：CNAME
   - 主机记录：@ 或 www
   - 记录值：`你的用户名.github.io`
   - TTL：10分钟

### 5.3 在GitHub Pages中启用
1. Settings → Pages
2. Custom domain：输入你的域名
3. 勾选 Enforce HTTPS
4. 保存

等待DNS生效（最多24小时），访问你的域名！

---

## 六、项目结构

```
04_网站运营/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions部署配置
├── src/
│   ├── sections/
│   │   ├── Hero.tsx         # 首页英雄区
│   │   ├── About.tsx        # 关于我
│   │   ├── Experience.tsx    # 工作经历
│   │   ├── Portfolio.tsx     # 项目展示
│   │   ├── Services.tsx      # 服务内容
│   │   ├── Contact.tsx       # 联系方式
│   │   ├── Navbar.tsx        # 导航栏
│   │   └── Footer.tsx        # 页脚
│   └── App.tsx
├── dist/                    # 构建输出（gitignore）
├── package.json
├── vite.config.ts
├── .gitignore
└── CNAME                    # 自定义域名（可选）
```

---

**文档维护**: 小T
**最后更新**: 2026-03-13
