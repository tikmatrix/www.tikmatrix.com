---
sidebar_position: 2
title: Task Management API
description: Complete API reference for task management endpoints
---

This page documents all available API endpoints for managing tasks in TikMatrix.

## Create Task

Create a new task for one or more devices.

- **Endpoint:** `POST /api/v1/task`
- **Content-Type:** `application/json`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| serials | string[] | Yes | Array of device serial numbers |
| script_name | string | Yes | Name of the script to execute |
| script_config | object | No | Configuration parameters for the script |
| enable_multi_account | boolean | No | Enable multi-account mode (default: false) |
| min_interval | integer | No | Minimum interval in seconds (default: 1) |
| max_interval | integer | No | Maximum interval in seconds (default: 5) |

## List Tasks

Query tasks with optional filters.

- **Endpoint:** `GET /api/v1/task`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | integer | No | Filter by status (0=pending, 1=running, 2=completed, 3=failed) |
| serial | string | No | Filter by device serial |
| script_name | string | No | Filter by script name |
| source | string | No | Filter by source ("ui" or "api") |
| page | integer | No | Page number (default: 1) |
| page_size | integer | No | Items per page (default: 20, max: 100) |

## Get Task Details

Get detailed information about a specific task.

- **Endpoint:** `GET /api/v1/task/{task_id}`

## Delete Task

Delete a task. If the task is running, it will be stopped first.

- **Endpoint:** `DELETE /api/v1/task/{task_id}`

## Batch Delete Tasks

Delete multiple tasks at once. Running tasks will be stopped first.

- **Endpoint:** `DELETE /api/v1/task/batch`
- **Body:** `{ "task_ids": [1, 2, 3] }`

## Stop Task

Stop a running task.

- **Endpoint:** `POST /api/v1/task/{task_id}/stop`

## Retry Failed Task

Retry a failed task.

- **Endpoint:** `POST /api/v1/task/{task_id}/retry`

## Retry All Failed Tasks

Retry all failed tasks at once.

- **Endpoint:** `POST /api/v1/task/retry-all`

## Get Task Statistics

Get statistics about all tasks.

- **Endpoint:** `GET /api/v1/task/stats`
- **Response:** Returns total, pending, running, completed, and failed counts.

## Check API License

Check if your license supports API access.

- **Endpoint:** `GET /api/v1/license/check`
- **Note:** Starter plan returns error code 40301. Pro, Team, and Business plans have API access.
