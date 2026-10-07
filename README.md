<div align="center">

<img src="assets/icon.png" alt="红果短剧 Mac 版图标" width="90">

# 红果短剧 Mac 版｜macOS 桌面播放器（非官方）

**红果短剧电脑版的 macOS 第三方适配版** · Apple Silicon / Intel · macOS 13+

[下载最新 Mac 安装包](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/latest) · [安装说明](#安装) · [反馈问题](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/issues)

</div>

这是一个由 `StriveToLearnCode` 独立维护的 macOS 项目，参考 [红果桌面版 Windows 发行仓库](https://github.com/waligoraamodio288-rgb/hongguo-desktop-releases)的公开界面和功能。**本项目不是红果官方软件，也不是原 Windows 作者发布的 Mac 移植版。**原项目私有源码没有公开；两者的内容来源、底层实现和可用性不能视为相同。

## 功能

- 发现、分类、热播榜、新剧榜、搜索与剧集详情
- 选集分组和集数定位、播放进度、1 至 3 倍速、自动连播
- 本机收藏、观看历史、断点续播与历史清理
- `⌘ Shift B` 隐藏并暂停窗口，返回后恢复原状态
- 图形化首次安装、播放服务状态与失败重试

收藏与进度仅保存在这台 Mac，不同步手机红果账号。在线片单与播放依赖用户设备首次启动时获取的外部内容服务，服务或接口变化可能导致搜索、封面或播放暂时不可用。

## 安装

1. 下载发行页的 `HongguoMac-0.1.0-universal.dmg`，核对同页的 SHA-256 摘要。
2. 打开 DMG，将“红果短剧 Mac 版”拖入“应用程序”。
3. 首次打开时，如 macOS 提示无法验证开发者，请在“系统设置 → 隐私与安全性”中选择“仍要打开”。本版本没有 Apple Developer ID 签名或公证；请核对下载来源，不要关闭系统防护。
4. 应用会以图形界面下载独立 Python、Java 和固定版本的外部内容服务。首次运行需要联网，时间与网络速度有关；不需要 Homebrew 或开发者工具。

安装完成后会直接进入发现页。若服务未就绪，界面会显示原因与“重试”“打开安装日志”。

## 常见问题

**首次安装失败？** 检查网络后点“重试”；可点“打开安装日志”查看具体阶段。失败不会删除收藏和观看历史。

**能打开首页但不能播放？** 在“设置 → 播放服务”点“检查连接”；若仍失败，请反馈应用版本、macOS 版本、剧名、集数和错误提示。不要公开令牌或完整私人日志。

**如何卸载？** 删除“应用程序”中的 App；如需同时删除本机收藏、历史、运行组件和缓存，再删除 `~/Library/Application Support/HongguoMac`。

## 来源与说明

本仓库仅用于公开发行与反馈，不包含应用源码或第三方后端代码。第三方组件在用户设备首次运行时从各自来源获取，具体见 [NOTICE.md](NOTICE.md)。品牌、封面和剧集内容归各自权利方所有。本项目使用描述性名称帮助 Mac 用户找到适配版，不暗示官方授权或与原 Windows 作者合作。

