# 红果短剧 Mac 版 v0.1.3-rc1 候选版

修复物理 Intel Mac 上签名服务在 `libunicorn.dylib` 中触发 `SIGBUS` 后退出的问题。Intel Mac 改用上游签名 JAR 已内置的备用 Unicorn 后端；Apple Silicon 的运行路径不变。

本版改为完整离线 DMG。安装包包含 Apple Silicon 与 Intel 两套运行组件；用户下载 DMG 后，首次启动只在本机配置所需组件，不再从 GitHub、PyPI 等来源下载约 300 MB 的运行环境。收藏、历史和观看进度仍保存在原有本机数据目录，覆盖安装不会清除。

此前的更新也包含在本包中：v0.1.2 的代理直连修复和签名服务断开重试；推荐、搜索、选集、历史续播、画质切换、弹幕和小窗等现有功能。本轮还改进了全屏控制栏的自动隐藏、搜索框布局、版本检查和 Gitee 反馈入口。

已用 x86_64 Java 在 Rosetta 下完成真实 `/sign` 请求，返回 `X-Gorgon` 等签名字段。发布前仍需在物理 Intel Mac 上验证首次安装、签名服务持续运行及实际播放，并完成新包常规验收。SLF4J 日志警告与本次崩溃无关。

安装包尚未经过 Apple 公证。完整包体积、SHA-256 和实机验证范围以同页校验文件及下方验收记录为准；Gitee 不用于托管此大文件。

候选包 `HongguoMac-0.1.3-rc1-universal.dmg` 为 315,469,855 字节（约 301 MiB），SHA-256：`c39aea26c3ff3ac9fa60a1d6d4692635e3b867133fc112074ce2c29a851629fe`。在 Apple Silicon / macOS 15.3.1 上，已从候选包验证断网首次组件安装；受限网络下本机页面和服务正常启动，恢复联网后实际播放推进到 0:24。x86_64 Python 与原生依赖已在 Rosetta 下验证导入。M5/macOS 26 和物理 Intel Mac 尚未实机验收，本候选包不作为已验证正式版发布。
