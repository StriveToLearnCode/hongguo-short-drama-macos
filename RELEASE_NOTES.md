# 红果短剧 Mac 版 v0.1.8

修复从下载 DMG 安装后，macOS 阻止内置 Python 原生扩展加载的问题。

## 更新内容

- 清理从下载 DMG 解压到用户目录后的 `com.apple.quarantine`，避免 `python3.12`、`pydantic_core` 等原生扩展被 macOS 系统策略拒绝加载。
- 新安装、已有 ready 标记的启动和失败后重试都会修复旧运行时缓存；不会删除收藏、历史与观看进度。
- 保留错误架构 Python 缓存自动重建、安装失败回滚和本机诊断日志。
- 增加 Gatekeeper 隔离属性回归测试，重新验证 Apple Silicon 与 Intel 两套内置 Python 运行时。

## 安装与限制

下载 `HongguoMac-0.1.8-universal.dmg` 和同版 `SHA256SUMS.txt` 校验文件。打开 DMG，将应用拖入“应用程序”覆盖安装；本机收藏、历史与观看位置保留。

已完成 Apple Silicon 上的断网首次安装、错误架构缓存修复、Gatekeeper 隔离属性清理、无 `uv` 安装及损坏包回滚测试。物理 Intel、M5/macOS 26、macOS 13 和全新账户的实机播放仍待单独验收。应用尚未经过 Apple 公证。
