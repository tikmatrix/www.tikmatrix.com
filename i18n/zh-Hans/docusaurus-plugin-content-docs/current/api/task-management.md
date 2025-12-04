---
sidebar_position: 2
title: 任务管理 API
description: 任务管理端点的完整参考
---

本页面记录了管理 TikMatrix 任务的所有可用 API 端点。

## 创建任务

为一个或多个设备创建新任务。

- **端点：** `POST /api/v1/task`
- **Content-Type：** `application/json`

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| serials | string[] | 是 | 设备序列号数组 |
| script_name | string | 是 | 要执行的脚本名称 |
| script_config | object | 否 | 脚本的配置参数 |
| enable_multi_account | boolean | 否 | 是否启用多账号模式（默认：false） |
| min_interval | integer | 否 | 最小时间间隔（秒，默认：1） |
| max_interval | integer | 否 | 最大时间间隔（秒，默认：5） |

## 列表任务

使用可选过滤条件查询任务。

- **端点：** `GET /api/v1/task`

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| status | integer | 否 | 按状态过滤（0=pending, 1=running, 2=completed, 3=failed） |
| serial | string | 否 | 按设备序列号过滤 |
| script_name | string | 否 | 按脚本名称过滤 |
| source | string | 否 | 按来源过滤（"ui" 或 "api"） |
| page | integer | 否 | 页码（默认：1） |
| page_size | integer | 否 | 每页条目数（默认：20，最大：100） |

## 获取任务详情

获取指定任务的详细信息。

- **端点：** `GET /api/v1/task/{task_id}`

## 删除任务

删除任务。如果任务正在运行，会先尝试停止它。

- **端点：** `DELETE /api/v1/task/{task_id}`

## 批量删除任务

一次删除多个任务，正在运行的任务会先被停止。

- **端点：** `DELETE /api/v1/task/batch`
- **请求体：** `{ "task_ids": [1, 2, 3] }`

## 停止任务

停止正在运行的任务。

- **端点：** `POST /api/v1/task/{task_id}/stop`

## 重试失败任务

重试单个失败任务。

- **端点：** `POST /api/v1/task/{task_id}/retry`

## 重试所有失败任务

一次性重试所有失败的任务。

- **端点：** `POST /api/v1/task/retry-all`

## 获取任务统计

获取任务总体统计数据。

- **端点：** `GET /api/v1/task/stats`
- **响应：** 返回 total、pending、running、completed、failed 的计数。

## 检查 API 许可

检查你的许可证是否支持 API 访问。

- **端点：** `GET /api/v1/license/check`
- **注意：** Starter 计划会返回错误码 40301；Pro/Team/Business 计划可访问 API。
