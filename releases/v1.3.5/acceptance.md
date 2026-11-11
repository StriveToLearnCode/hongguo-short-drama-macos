# v1.3.5 build 48 验收记录

日期：2026-11-11。[v1.3.5 已正式发布并设为 latest](https://github.com/StriveToLearnCode/hongguo-short-drama-macos/releases/tag/v1.3.5)。修复片源空响应、ByteVC2 编码无法播放，以及更新安装/钥匙串读取卡住。本版重新构建完整通用安装包，不覆盖线上 v1.3.4 附件。

## 最终包的真实链路

只读挂载最终 DMG，以挂载包内的 bootstrap 与资源在空目录安装，校验实际后端模块与包内文件一致，并新建生产后端及签名进程。仅复用已有匿名游客设备上下文，不复制账号凭据、缓存或保护状态，不替换模型、分集接口或 CDN。

- 《全球死考：刚下刑场你让我去考试一季》第 11 集：实时取址，真实 WKWebView 播放、暂停、拖动到 20 秒、恢复、自动播放第 12 集及缓存重开通过；首次播放约 11.49 秒。
- 《装瞎万人迷被团宠了第二季》第 1 集：实时返回 ByteVC2，内置 Librempeg 转为 H.264，真实 WKWebView 同样通过播放、暂停、拖动、恢复、自动播放第 2 集和缓存重开；首次播放约 25.09 秒。
- 上述两个分集完整文件均通过生产 Range 路由和 FFmpeg `-xerror` 全程音视频解码。[实时播放证据](fresh-playback.json)绑定最终版本、构建号、来源摘要与时间。
- 另两个固定视频、六档画质共 12 项能力、Range、首帧解码和尺寸检查通过，见[画质矩阵](playback.json)。低档可复用同集高档缓存，不将每项都声称为独立 CDN 下载。
- 游客推荐两页 11 项、目录两页 36 项通过。账号未配置为已验证状态，明确失败 `not_configured`，见[推荐报告](recommendation.json)。

## 回归与安装

Python 675 项：627 通过、48 按环境条件跳过；JavaScript 82 项、遥测 30 项通过。签名含独立外部密文和请求字节向量，覆盖请求体、查询编码与时间绑定。

原生更新发现、下载中断/Range/校验/回退、安装器进程超时/回滚、更新 UI 与钥匙串等待预算、三种退出路径、遥测、全屏及小窗记忆测试通过。双架构生产编译、代码签名、资源来源及 DMG SHA-256 校验通过。

断网安装、运行时复用、依赖修复、缓存修复、ByteVC2 组件丢失/损坏修复、回滚、无 uv 安装及用户资料保留通过。隔离验收发现 bootstrap 缺少三份体验页面资源：正常原生启动原本会补齐，本版将引导安装也补齐，并根据 HTML 引用自动检查安装后资源完整性。

## 避免重复漏检

新增 `scripts/check_fresh_playback.py`：使用最终包的空运行目录、实时源和真实 WKWebView，验证上述两个故障样本以及完整媒体解码。`scripts/check_release_health.py` 新增必需的实时报告；旧缓存/模型快照、过期报告、不同来源摘要或只解码首帧的结果不能通过这一门槛。发布前执行：

```sh
python3 scripts/check_fresh_playback.py --app-bundle '/path/to/mounted/红果短剧 Mac 版.app' --output dist/validation/fresh-playback-1.3.5-build48.json
python3 scripts/check_release_health.py
```

可选 `--guest-device` 仅导入白名单匿名设备字段用于推荐检查。原始运行日志含临时地址，保留在忽略目录，不作为公开验收附件。

## 已披露限制

默认发布门槛因账号推荐未验证返回 `Release blocked: recommendation is not healthy`，没有将游客结果改成账号通过。本次依据维护者“先发一版吧”的发布指令延续既有已披露限制；[发布决定](publication-decision.json)明确绑定本次版本、构建、来源摘要和 DMG 摘要，其余门槛全部通过。默认门槛保留严格检查。

实体 Intel、macOS 13 与外接显示器实际拔插未实机验收；当前包未经过 Apple 公证。第三方接口变化仍可能导致未来失败，首次下载与转换仍需等待。本次实测不能保证所有剧集或未来永久可用。

包信息见[package-verification.json](package-verification.json)。远端附件、公开下载、官网和更新清单均已核对，见[发布校验记录](publication-verification.json)。
