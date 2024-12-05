# YAAC (Yet Another Auto Commit) - PRD

## 产品愿景
打造一款优秀的 VSCode AI 自动提交插件，通过智能分析代码变更，生成高质量的 commit message，提升开发效率和代码库的可维护性。YAAC（读作"雅刻"）将为开发者带来前所未有的提交体验。

## 设计理念
- **简单至上**：用户无需关心底层技术实现，只需关注结果
- **灵活可选**：提供多种提交方案，用户可根据成本、效果、性能自由选择
- **一次配置**：API 密钥等配置只需设置一次，后续专注于提交体验

## 目标用户
- 使用 VSCode 的开发者
- 重视代码提交质量的团队
- 希望提高工作效率的个人开发者

## 核心功能

### 1. 智能提交（重新设计）
- **快速提交模式**
  - 一键式智能提交
  - 使用推荐的默认提交方案
  - 无需任何额外配置

- **提交方案选择**
  - 在状态栏快速切换不同提交方案
  - 方案示例：
    - `official_recommend`（官方推荐，平衡性能与成本）
    - `gcop_fast`（速度优先）
    - `premium_quality`（质量优先）
  - 支持用户自定义方案名称
  - 显示方案的成本/性能/质量指标

### 2. 配置管理（重新设计）
- **API 配置**
  - 统一的 API 配置界面
  - 支持多个服务商的 API 设置
  - API 密钥安全存储
  - 一键测试 API 可用性

- **方案管理**
  - 自定义提交方案
  - 重命名已有方案
  - 调整方案参数
  - 导入/导出方案配置

### 3. 代码变更分析
- 智能识别重要代码变更
- 支持多文件变更的统一分析
- 识别重构、bugfix、feature 等不同类型的变更

### 4. 用户交互
- 提供直观的 UI 界面
- 支持快捷键操作
- 提交前预览和编辑功能
- 实时反馈和建议

### 5. 高级特性
- 支持 Git hooks 集成
- 团队配置共享
- 提交历史分析和建议
- AI 模型可配置（支持自定义 API）

## 用户界面

### 1. 状态栏
- 当前选择的提交方案名称
- 快速切换方案的下拉菜单
- 方案性能指标图标（速度/成本/质量）

### 2. 命令面板
- `YAAC: Quick Commit` - 使用当前方案快速提交
- `YAAC: Switch Solution` - 切换提交方案
- `YAAC: Configure API Keys` - 配置 API 密钥
- `YAAC: Manage Solutions` - 管理提交方案

### 3. 设置界面
- API 配置分组
- 提交方案管理
- 个性化设置

## 性能指标
- 快速提交响应时间 < 2s
- 配置切换无延迟
- API 配置过程简单直观

## 开发里程碑

### Phase 1 - MVP（v0.1.0）
- [x] 项目初始化
- [ ] 基础 VSCode 插件框架
- [ ] 简单的 AI 提交信息生成
- [ ] 基础 UI 界面

### Phase 2 - 核心功能（v0.2.0）
- [ ] 完整的代码分析系统
- [ ] 多种提交格式支持
- [ ] 用户配置系统
- [ ] 提交历史分析

### Phase 3 - 高级特性（v0.3.0）
- [ ] 团队功能
- [ ] CI/CD 集成
- [ ] 性能优化
- [ ] 多语言支持完善

## 成功指标
1. 用户满意度 > 4.5/5
2. VSCode 商店评分 > 4.8/5
3. 月活用户 > 10,000
4. 提交信息采纳率 > 80%