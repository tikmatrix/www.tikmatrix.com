---
sidebar_position: 1
title: 本地 API 概览
description: TikMatrix 本地 API，用于以编程方式管理任务
---

TikMatrix 提供了一个本地的 RESTful API，允许你以编程方式管理任务。这对于将 TikMatrix 集成到你自己的自动化系统、构建自定义工作流程或创建批量操作非常有用。

## 要求

:::warning 许可证要求
**本地 API 仅对 Pro、Team 和 Business 计划用户开放。** Starter 计划不提供 API 访问权限。
:::

## 基础 URL

API 在本机运行，地址为：

```text
http://localhost:50809/api/v1/
```

:::note
端口 `50809` 为默认端口。请在发起请求前确保 TikMatrix 已在运行。
:::

## 响应格式

所有 API 响应遵循以下格式：

```json
{
  "code": 0,
  "message": "success",
  "data": { ... }
}
```

### 响应码说明

| Code | 描述 |
|------|------|
| 0 | 成功 |
| 40001 | 参数错误 - 无效的请求参数 |
| 40301 | 禁止 - API 访问需要 Pro+ 计划 |
| 40401 | 未找到 - 资源不存在 |
| 50001 | 服务器内部错误 |

## 快速开始

### 1. 检查 API 访问权限

首先，确认你的许可证是否支持 API：

```bash
curl http://localhost:50809/api/v1/license/check
```

示例响应：

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "plan_name": "Pro",
    "api_enabled": true,
    "device_limit": 20,
    "message": "API access enabled"
  }
}
```

### 2. 创建任务

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1", "device_serial_2"],
    "script_name": "follow",
    "script_config": {
      "target_username": "@example_user"
    },
    "enable_multi_account": false,
    "min_interval": 1,
    "max_interval": 5
  }'
```

### 3. 查询任务列表

```bash
curl http://localhost:50809/api/v1/task?status=0&page=1&page_size=20
```

## 可用脚本

`script_name` 参数可接受下列值：

| 脚本名 | 描述 |
|--------|------|
| `follow` | 关注用户 |
| `unfollow` | 取消关注 |
| `like` | 点赞 |
| `comment` | 评论 |
| `message` | 私信 |
| `post` | 发布内容 |
| `account_warmup` | 账号预热 |
| `super_marketing` | 超级营销活动 |
| `profile` | 更新个人资料 |
| `scrape_user` | 抓取用户数据 |

## 任务状态

| 状态码 | 状态文本 | 描述 |
|--------|----------|------|
| 0 | pending | 任务等待执行 |
| 1 | running | 任务正在执行 |
| 2 | completed | 任务执行成功 |
| 3 | failed | 任务执行失败 |

## 后续

- [任务管理 API](./task-management) - 创建、查询和管理任务
- [API 示例](./examples) - 不同语言的代码示例
