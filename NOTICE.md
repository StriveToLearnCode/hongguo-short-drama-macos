# 来源与许可

本仓库独立编写应用壳、界面、安装程序和图标。`zerozhh/hongguo-mac` 仅作为实现思路和体验对照；未复制其应用代码、页面或图标。原 Windows 应用 `waligoraamodio288-rgb/hongguo-desktop-releases` 仅作为公开行为与界面参考，双方无维护关系。

v0.1.3 离线安装包在构建时从各自来源获取下列运行组件；源码仓库不包含它们。维护者确认拥有内容服务及签名资源的打包发布授权，公开发布前应留存可核对的授权记录：

| 组件 | 来源 | 说明 |
| --- | --- | --- |
| 内容服务及签名资源 | `zhangbaio/hongguo` 固定提交 `5f8a58d10f48954bc9b6a58c9cd6418bf499feb9` | 上游仓库未声明再分发许可；按维护者确认的单独授权打包并本地适配。 |
| uv | `astral-sh/uv` v0.8.24 | MIT / Apache-2.0，下载包校验 SHA-256。 |
| CPython | uv 的 Python 安装源 | PSF License。 |
| Temurin JRE 17 | Eclipse Adoptium 17.0.20.1+1 | GPLv2 with Classpath Exception，校验官方 SHA-256。 |
| Python 依赖 | PyPI | requests、FastAPI、uvicorn、pycryptodome、Pillow、pillow-heif、imageio-ffmpeg；各自遵循原许可。 |
| TTEncrypt framing and key derivation | `ssovit/x-gorogn-khronos-argus-ladon` | MIT, Copyright (c) 2023 Everbody; 许可证随应用保留，使用标准 SHA-512/AES 实现兼容格式。 |
| Python playback signing protocol | `jackotom/hongguo-drama` commits `81158c06cc4528bc7223543f206cc1a143dc59c3`, `d0410c8ef7b02a087f5c16eb026e0ece61454115`, PR #133 `ecc4dd06a8f263b8e48af40b1ba93ebea277d32d` and `3f5927d0d605ff7742fde8cbd1bb92ffe951b080`; originally credits `woshishiq1/drpys`, `N3urda/hongguoTV`, `tsukiyo-zero/hongguoTV` and `ch6vip/fqapp` | GPL-3.0-only. Python ports in `app/mac_playback_signing.py` and `app/mac_playback_signature551.py`, with public SDK constants, SM3 fallback, gzip legacy requests and bodyless signed video_tab GET requests. Playback now uses complete Argus 551/Ladon bound to final query and actual body; the earlier timestamp placeholders and branch-zero wire selection are no longer sent. Argus/Ladon reference: N3urda/hongguoTV `7444bb01aec7b0420740103e551c45f1f66101c9`, Argus.kt. Complete modified source and GPL text accompany the installed modules. License: `app/Playback-Signing-LICENSE.txt`. |
| Independent public platform adapters | `jackotom/hongguo-drama` commit `81158c06cc4528bc7223543f206cc1a143dc59c3`, `src/native/xifan.js` and `src/native/hema.js` | GPL-3.0-only. Python protocol and normalization port in `app/mac_providers.py`, with independent rate limits, fresh access checks and a bounded MP4 proxy. Complete modified source is included in the application. License: `app/Playback-Signing-LICENSE.txt`. |
| Lucide icons | `lucide-icons/lucide` 0.468.0 | ISC；图标和许可证随应用保留。 |
| ByteVC2 conversion helper | `librempeg/librempeg` cb1f8f3 and x264 b35605a; build recipe from `jackotom/hongguo-drama` v6.7 | Separate AGPL-3.0-or-later executable with GPL x264. Only converts ByteVC2 media to H.264; ordinary FFmpeg is retained. Both upstream source archives, exact recipe, patch and licenses are bundled in `bytevc2/corresponding-source.tar.gz` and `bytevc2/licenses/`. |

品牌、剧集封面与视频内容归各自权利方所有。本项目是非官方第三方桌面适配版。
