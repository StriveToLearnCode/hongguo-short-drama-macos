<div align="center">

<img src="assets/icon.png" alt="红果短剧 Mac 版图标" width="88">

# 红果短剧 Mac 版（非官方）

**历史记录与推荐加载修复 · v1.0.1**

手机里的红果片单，终于搬上 Mac 了。

[下载 v1.0.1 完整 DMG](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/download/v1.0.1/HongguoMac-1.0.1-universal.dmg) · [项目官网](https://strivetolearncode.github.io/hongguo-short-drama-macos/) · [校验文件](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/download/v1.0.1/SHA256SUMS.txt) · [反馈问题](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/issues)

</div>

这是由 `StriveToLearnCode` 独立维护的非官方 macOS 客户端，与红果短剧官方无隶属关系。本仓库用于发行与反馈，客户端源码目前未公开。欢迎自愿 Star 支持项目，不影响下载或使用。

## 1.0.1 修复更新

- 修复历史移除后又回来、撤销保存被覆盖，以及清空后旧云端记录回流的问题；移除和清空只影响本机显示，手机端观看进度保留。
- 推荐一轮结束后继续向平台获取下一轮，跨轮过滤重复剧目并保留平台顺序。平台暂未提供新内容时仍可能没有更多推荐。
- 改进账号会话保存、设备绑定和同步节奏；平台要求验证或冷却时暂停自动请求。

本次修复经过本地自动化与合成接口页面测试，没有使用真实账号进行联机回归。Apple 绑定账号兼容、手机/Mac 共存和推荐观看行为回传仍未完成验证，账号同步继续作为测试功能提供。

## 1.0 大版本：同一个账号，换个屏幕接着追

Mac 登录同一红果账号，可查看收藏、观看历史、预约和点赞记录；Mac 的新操作也可以回写账号云记录。旧 Mac 游客记录先预览，再由本人选择是否上传。账号凭据保存在 macOS 钥匙串，不同账号的片单与待上传操作隔离。

**账号云同步现开放测试。** 账号云端读取、身份恢复及部分写入已有真实账号验证；手机屏幕上的双向变化、跨设备进度冲突及所有平台验证状态尚未全部实机覆盖，不承诺实时、无延迟或所有账号均可用。不登录也可使用游客模式，游客收藏与续播位置保存在本机。

[完整发行说明](RELEASE_NOTES.md) · [历史版本记录](CHANGELOG.md)

![v1.0.0 build 33 实际播放界面](docs/assets/v1.0.0-b33-player.webp)

## 新版真实演示

[![v1.0.0 build 33 真实演示封面](docs/assets/v1.0.0-b33-video-poster.webp)](https://strivetolearncode.github.io/hongguo-short-drama-macos/assets/v1.0.0-b33-intro.mp4)

[观看 30 秒新版客户端静音演示](https://strivetolearncode.github.io/hongguo-short-drama-macos/assets/v1.0.0-b33-intro.mp4) · [下载演示视频](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/download/v1.0.0/HongguoMac-1.0.0-intro.mp4)

本轮图片与视频均来自 v1.0.0 build 33 实际客户端，个人账号资料已隐藏；视频、海报与内容归各自权利方所有。

## 找剧与桌面体验

- 收藏、观看历史、预约、点赞与账号消息集中查看，评论列表接近底部自动分页。
- 搜索联想、分享链接直达、分季选集、推荐连播；来源结果可能不完整。
- 按本集片源选择 1080P、720P、540P 和 360P，具体可用画质取决于来源与设备。
- 最高 3 倍速、按住加速、全屏与可选置顶小窗；弹幕和深浅色外观可切换。
- 下一集预加载、播放重试与缓存整理；来源持续不可用时仍可能播放失败。

![v1.0.0 账号观看历史](docs/assets/v1.0.0-b33-history.webp)

## 下载与安装

macOS 13+，Apple Silicon / Intel 通用包。Apple Silicon 已构建与验收；物理 Intel Mac、macOS 13 和全新 macOS 用户账户仍待实机验证。

1. 下载 v1.0.1 DMG，可用同版 `SHA256SUMS.txt` 核验；安装包 SHA-256 为 `a8a650cb0a58737918c48afc39e32716f06aaf770ec5b8f7ad34dd8245229379`。
2. 打开 DMG，将“红果短剧 Mac 版”拖入“应用程序”，覆盖安装保留已有收藏、历史与设置。
3. 从“应用程序”启动。安装包采用临时签名，尚未经过 Apple 公证。如果系统仅提示无法验证开发者，可在“系统设置 → 隐私与安全性”中针对本应用确认打开。若提示恶意软件或“将损坏你的电脑”，停止安装并反馈，不要关闭系统防护。
4. 首次启动所需组件内置；找剧、播放与账号同步需要联网。

旧版检查更新失败时，可手动覆盖安装。新版应用内下载会显示进度并核验可信摘要，下载完成后由用户选择保存位置及安装。摘要校验不等于 Apple 公证。

## 隐私与反馈

默认发送匿名启动、播放结果与预设失败类别统计，使用随机安装 ID；包含处理器架构与 macOS 大版本，断网时在本机限量保存至多 7 天。不上传机型、观看内容、用户路径或错误详情，可在安装界面或设置中关闭；本机日志不自动上传。账号同步需要向内容服务读取和回写你主动使用的账号记录。

反馈时请提供版本、macOS 版本、操作步骤和错误文字，不要公开账号凭据或完整私人日志。“设置”中的诊断摘要可手动预览和复制，不会自动发送。

第三方组件和来源见 [NOTICE.md](NOTICE.md)。品牌、封面和视频归各自权利方所有。
