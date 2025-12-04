---
sidebar_position: 1
title: Local API Overview
description: TikMatrix Local API for programmatic task management
---

TikMatrix provides a local RESTful API that allows you to manage tasks programmatically. This is useful for integrating TikMatrix with your own automation systems, building custom workflows, or creating batch operations.

## Requirements

:::warning License Requirement
**The Local API is only available for Pro, Team, and Business plan subscribers.** Starter plan does not have access to the API.
:::

## Base URL

The API runs on your local machine at:

```text
http://localhost:50809/api/v1/
```

:::note
The port `50809` is the default port. Make sure TikMatrix is running before making API requests.
:::

## Response Format

All API responses follow this format:

```json
{
  "code": 0,
  "message": "success",
  "data": { ... }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 0 | Success |
| 40001 | Bad Request - Invalid parameters |
| 40301 | Forbidden - API access requires Pro+ plan |
| 40401 | Not Found - Resource not found |
| 50001 | Internal Server Error |

## Quick Start

### 1. Check API Access

First, verify your license supports API access:

```bash
curl http://localhost:50809/api/v1/license/check
```

Response:

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

### 2. Create a Task

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

### 3. List Tasks

```bash
curl http://localhost:50809/api/v1/task?status=0&page=1&page_size=20
```

## Available Scripts

The `script_name` parameter accepts the following values:

| Script Name | Description |
|-------------|-------------|
| `follow` | Follow a user |
| `unfollow` | Unfollow a user |
| `like` | Like posts |
| `comment` | Comment on posts |
| `message` | Send direct messages |
| `post` | Publish content |
| `account_warmup` | Warm up accounts |
| `super_marketing` | Super marketing campaign |
| `profile` | Update profile |
| `scrape_user` | Scrape user data |

## Task Status

| Status Code | Status Text | Description |
|-------------|-------------|-------------|
| 0 | pending | Task is waiting to be executed |
| 1 | running | Task is currently running |
| 2 | completed | Task completed successfully |
| 3 | failed | Task failed |

## Next Steps

- [Task Management API](./task-management) - Create, query, and manage tasks
- [API Examples](./examples) - Code examples in different languages
