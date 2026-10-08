<div align="center">

<img src="assets/icon.png" alt="红果短剧 Mac 版图标" width="88">

# 红果短剧 Mac 版

**非官方 macOS 桌面播放器 · 打开即看 · 历史续播**

[下载 v0.1.0 DMG](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/download/v0.1.0/HongguoMac-0.1.0-universal.dmg) · [下载页](https://strivetolearncode.github.io/hongguo-short-drama-macos/) · [校验文件](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/download/v0.1.0/SHA256SUMS.txt) · [反馈问题](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/issues)

</div>

这是由 `StriveToLearnCode` 独立维护的 Mac 客户端，与红果短剧官方和其他桌面客户端没有隶属关系。此仓库用于发行与反馈，不包含客户端源码或首次运行时获取的第三方内容服务。

![当前版本的推荐播放界面](docs/assets/recommend-latest.png)

## 当前功能

- 启动进入推荐播放；自然播完接下一集，可主动切换剧目。
- 搜索剧名或演员，浏览热播、推荐和新剧榜。
- 在选集侧栏查看分集、简介和可识别的关联季。
- 播放中切换画质、倍速，使用置顶小窗、键盘快捷操作和可关闭的弹幕。
- 在“历史”中按本机保存的集数与进度续播；收藏和设置也保存在本机。

![搜索结果](docs/assets/search-latest.png)

收藏与观看记录不与手机红果账号同步。片单和播放可用性取决于内容来源及网络；推荐来自上游榜单，不是个性化推荐。

## 安装

**已实测：Apple Silicon / macOS 15.3.1。**安装包包含 arm64 和 x86_64 应用切片；物理 Intel Mac 及 macOS 13 尚未完成实机验证。

1. 下载 [`HongguoMac-0.1.0-universal.dmg`](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/download/v0.1.0/HongguoMac-0.1.0-universal.dmg)，与同页的 [`SHA256SUMS.txt`](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/download/v0.1.0/SHA256SUMS.txt) 对照。
2. 打开 DMG，将“红果短剧 Mac 版”拖入“应用程序”。
3. 从“应用程序”启动。当前预览版采用临时签名，尚未经过 Apple 公证。如果系统**仅提示无法验证开发者**，可在“系统设置 → 隐私与安全性”中针对本应用确认打开。若提示恶意软件或“将损坏你的电脑”，停止安装并[反馈](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/issues)；不要关闭系统防护。
4. 首次启动需要联网下载约 300 MB 的 Python、Java 和内容服务组件，完成后自动进入推荐页；无需自行安装开发工具。

本版更新提示会打开最新发行页，更新仍需手动下载安装。

## 常见问题

**首次安装失败？** 在安装界面重试，或打开安装日志查看失败阶段；已校验的下载包会缓存并在重试时复用。

**播放中断？** 在播放器中重试、切换画质，或到“设置 → 播放服务”检查连接。反馈时请提供版本、macOS 版本、剧名、集数、操作步骤和错误文字；不要公开账号凭据或完整私人日志。

**如何清理缓存？** 先退出应用，再检查 `~/Library/Application Support/HongguoMac/backend/downloads/.stream_cache`。只删除此目录的视频缓存不会删除收藏和历史；下次播放会重新下载。应用启动时会整理旧缓存。

**如何卸载？** 删除“应用程序”中的客户端。如需清除本机记录和运行组件，再删除 `~/Library/Application Support/HongguoMac`。

## 来源

第三方组件与来源见 [NOTICE.md](NOTICE.md)。红果品牌、封面和视频内容归各自权利方所有。客户端源码目前未公开，本站不暗示官方授权或 Apple 公证代表内容授权。
