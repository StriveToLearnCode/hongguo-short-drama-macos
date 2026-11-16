# 安装包中转范围与依据

维护者已单独同意：仅在临时 GitHub 运行器下载并运行 Cloudflare 官方 cloudflared，以临时外网入口接收这份已扫描的公开安装包，再上传 GitHub。知情范围包含 Cloudflare 可见安装包、IP 与传输元数据，组件历史漏洞及不能保证零风险。用户电脑不安装组件、不开放监听入口，也不提供远程控制。

## 固定组件与公开证据

- 官方 [cloudflared 2026.11.0](https://github.com/cloudflare/cloudflared/releases/tag/2026.11.0)，仅使用 Linux amd64 独立二进制，不执行系统安装器。GitHub Release 元数据给出的大小为 40,283,099 字节，SHA-256 为 `51f7c68b57ed7269164075d7e789efce5b59355982f06392deeb037d982a51fd`；运行器下载后先核对大小与摘要。
- 阅读固定版本的 [quick_tunnel.go](https://github.com/cloudflare/cloudflared/blob/2026.11.0/cmd/cloudflared/tunnel/quick_tunnel.go)、[tunnel/cmd.go](https://github.com/cloudflare/cloudflared/blob/2026.11.0/cmd/cloudflared/tunnel/cmd.go)、[main.go](https://github.com/cloudflare/cloudflared/blob/2026.11.0/cmd/cloudflared/main.go) 和 [go.mod](https://github.com/cloudflare/cloudflared/blob/2026.11.0/go.mod)。Quick Tunnel 默认公开，配置由 Cloudflare 提供，源码将临时 TunnelSecret 传给内存结构；本流程不保存或输出供应商原始日志，不将会话字段写入描述文件。
- 源码默认初始化 `sentry.io` 异常上报。本流程在一次性运行器的 hosts 中将该域名映射到回环，并确认解析结果，再启动组件；云端进程使用最小环境，排除 GitHub token。自动更新关闭，metrics 绑定运行器回环动态端口。
- 查阅官方[安全公告](https://github.com/cloudflare/cloudflared/security/advisories)：GHSA-7mjv-x3jf-545x 影响旧 Windows 安装器（修复版本 2023.3.1），GHSA-hgwp-4vp4-qmm2 影响早于 2020.8.1 的版本。它们不等于本固定 Linux 二进制已完成全面安全认证。
- 查阅公开反馈：[#1798](https://github.com/cloudflare/cloudflared/issues/1798) 涉及连接协议选择；[#1800](https://github.com/cloudflare/cloudflared/issues/1800) 涉及 ingress 通配主机名。此次固定 HTTP/2 与单一回环 origin，不配置通配 ingress。PR #1802 尚有网络依赖更新，不能据此声称依赖漏洞全部排除。

## 数据与暴露范围

仅在手动触发的 `receive-release.yml` 运行中启用，默认不常驻。GitHub 运行器主进程使用该公开仓库的短期 GitHub token 完成附件上传，token 不写入文件；不向 cloudflared 子进程传递该环境变量。Cloudflare 是新增传输接收方，可见预定公开安装包及传输元数据；未传输公司代码、用户账号或本机日志。

运行器接收端只提供 `PUT /chunks/<index>` 与 `GET /status`。每块必须匹配此次安装包预先给定的索引、长度和 SHA-256；不支持任意文件读取、目录浏览、命令执行或其他文件写入。限制并发与内存用量，最终重新组装后核对整包 SHA-256 与大小，再上传既有草稿。公开描述文件仅含非秘密 endpoint、版本与摘要，不使用落盘的 bearer token 或秘密 URL 路径。路径、错误摘要与越界索引的合成负向测试通过。

收到全部分块后关闭隧道，再组装与上传；finally 删除临时描述附件并清理临时目录。GitHub 作业取消或运行器销毁也会结束对外入口。源码推送和元数据同步仍直接使用 GitHub；本机未启用 Cloudflare 隧道。

## 验证局限

此次为所用入口与数据路径的定向源码、依赖清单、公开公告和用户反馈检查，没有审计所有依赖，也没有从源码重建二进制。Release 摘要只证明与供应商发布的文件相同。最小环境和 hosts 限制不构成完整系统沙箱，不能据此证明供应商二进制绝不会读取运行器其他信息或产生其他网络行为。临时运行器中只准备已允许公开的发行材料，不放入公司文件或真实账号资料。

## 最终传输方式与关闭状态

临时 Cloudflare 接收作业已取消并结束，公开描述附件已移除。该尝试没有成为最终安装包的传输路径。

最终只向 GitHub 草稿上传 17,544,967 字节差分，其 SHA-256 为 `b71774ca22fdc466e97bdf84fb8d152462489dc2a5b11a4fa0008b4273ddd9f2`。差分仅包含已经扫描的最终安装包字节及旧包复制位置，不引入其他文件内容。本机已完整还原并确认逐字节目标摘要一致；同一还原逻辑的本地模拟还覆盖上传与临时附件清理。

GitHub 的 `reconstruct-release.yml` 用既有 v1.3.5 公开 DMG 作基线，先验证旧包 SHA-256，再按有界复制/插入操作还原 v1.3.6。还原后大小必须为 342,667,628 字节、SHA-256 必须为 `69afb21eefa1cdf524be2ba1fd93214c3e2393d202d4a4b5651f5156603e095a`，与本机挂载验收的最终包完全相同，才上传原始完整 DMG。差分不是对外安装格式；完整包验证后会移除临时差分附件。该还原流程仅使用 GitHub 运行器预装 Python 和 gh，不下载或执行新的外部组件。
