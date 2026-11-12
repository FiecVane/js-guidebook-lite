# JavaScript Guidebook Lite

📚 JavaScript 知识图谱：ECMAScript、DOM、BOM、HTML5、计算机网络

> 本仓库将 [javascript-guidebook](https://github.com/tsejx/javascript-guidebook) 内容迁移至 VitePress
> 在保留原内容框架的基础上，对部分章节进行了<u>内容补充、修正和重组</u>

## 本地开发

### 环境要求

- [Node.js](https://nodejs.org) 22.0 或更高版本
- [pnpm](https://pnpm.io) 包管理器（推荐）
- [git](https://git-scm.com) 分布式版本控制系统

### 常用命令

```bash
# 克隆仓库
git clone https://github.com/FiecVane/js-guidebook-lite.git

# 进入目录并安装依赖
cd js-guidebook-lite
pnpm i

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## License

本仓库采用**双重许可**：

| 适用范围 | 许可证 | 许可证文本 |
| :--- | :--- | :--- |
| 代码（包含[`/docs/.vitepress/`](https://github.com/FiecVane/js-guidebook-lite/tree/main/docs/.vitepress)） | MIT | [LICENSE](./LICENSE) |
| [`/docs/`](https://github.com/FiecVane/js-guidebook-lite/tree/main/docs)（<u>[`/docs/.vitepress/`](https://github.com/FiecVane/js-guidebook-lite/tree/main/docs/.vitepress) 除外</u>）的文章、文档等创作内容 | CC BY-NC-SA 3.0 CN | [LICENSE.docs](./LICENSE.docs) |

> 注：`/docs/` 下的文章内容继承自 [javascript-guidebook](https://github.com/tsejx/javascript-guidebook)（原作者 tsejx 及贡献者），依据其 CC BY-NC-SA 3.0 CN 许可进行再许可

## 致谢

- [javascript-guidebook](https://github.com/tsejx/javascript-guidebook)
- [VitePress](https://github.com/vuejs/vitepress)
