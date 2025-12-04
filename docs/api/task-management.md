---
sidebar_position: 2
title: Task Management API
description: Complete API reference for task management endpoints
---

This page documents all available API endpoints for managing tasks in TikMatrix.

## Create Task

Create a new task for one or more devices or usernames.

- **Endpoint:** `POST /api/v1/task`
- **Content-Type:** `application/json`

### Request Parameters

The API supports two modes for creating tasks:

**Mode 1: Device-based** - Use `serials` to create tasks for devices
**Mode 2: Username-based** - Use `usernames` to create tasks directly for specific accounts

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| serials | string[] | Conditional | Array of device serial numbers (required if `usernames` is not provided) |
| usernames | string[] | Conditional | Array of usernames to create tasks for (required if `serials` is not provided). When provided, tasks are created directly for these accounts. |
| script_name | string | Yes | Name of the script to execute (currently only `post` is supported) |
| script_config | object | Yes | Configuration parameters for the script |
| enable_multi_account | boolean | No | Enable multi-account mode (default: false). Only applicable in device-based mode. |
| min_interval | integer | No | Minimum interval between tasks in minutes (default: 0) |
| max_interval | integer | No | Maximum interval between tasks in minutes (default: 0) |
| start_time | string | No | Scheduled start time in "HH:MM" format |

### Post Script Configuration (`script_config`)

The `script_config` object contains the parameters for the post script. Below are the available parameters:

#### Common Parameters (TikTok & Instagram)

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| content_type | integer | No | 0 | Content type: `0` = Video, `1` = Images |
| image_count | integer | No | 1 | Number of images to select (when content_type = 1) |
| captions | string | No | "" | Caption text for the post. Supports spintax format: `{option1\|option2\|option3}` |
| post_way | string | No | "share" | Post method: `share`, `addButton`, or `useSound` |
| material_source | string | No | "materialLibrary" | Material source: `materialLibrary` or `localFolder` (ignored if material_list is provided) |
| material_path | string | Conditional | "" | Local folder path (required when material_source = "localFolder") |
| material_list | string[] | No | [] | **Direct material file paths array.** When provided, bypasses material_source and material_path logic. Ideal for API automation. |
| materials_tags | string | No | "" | Comma-separated material tags for filtering from library |
| upload_wait_time | integer | No | 30 | Seconds to wait for upload completion |
| sound_wait_time | integer | No | 10 | Seconds to wait for sound loading |
| add_sound | string/integer | No | "-1" | Sound option: `-1` = default, `0` = disable, `1` = enable, `custom` = use custom sound |
| sound_name | string | Conditional | "" | Sound name/URL (required when post_way = "useSound") |
| custom_sound_keyword | string | Conditional | "" | Keyword to search for custom sound (required when add_sound = "custom") |
| origin_sound_volume | integer | No | 50 | Original sound volume (0-100) |
| add_sound_volume | integer | No | 50 | Added sound volume (0-100) |

#### TikTok Specific Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| add_product_link | integer | No | 0 | Add product link: `0` = No, `1` = Yes |

#### Instagram Specific Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| placement | string | No | "reel" | Post placement: `reel` or `story` |

### Example: Create Post Task with Direct Material List

This is the recommended approach for API automation - pass material paths directly without relying on material library or folder scanning:

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Check out my new video! #viral #fyp",
      "material_list": [
        "C:/Videos/video1.mp4"
      ],
      "upload_wait_time": 60
    }
  }'
```

### Example: Create Post Task (TikTok)

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1", "device_serial_2"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Check out my new video! #viral #fyp",
      "post_way": "share",
      "material_source": "materialLibrary",
      "materials_tags": "trending, dance",
      "upload_wait_time": 60,
      "add_sound": "-1"
    },
    "enable_multi_account": false,
    "min_interval": 5,
    "max_interval": 15
  }'
```

### Example: Create Post Task by Username List

This mode allows you to create tasks directly for specific accounts without knowing their device serial numbers:

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "usernames": ["@user1", "@user2", "@user3"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Check out my new video! #viral #fyp",
      "material_list": [
        "C:/Videos/video1.mp4"
      ],
      "upload_wait_time": 60
    },
    "min_interval": 5,
    "max_interval": 15
  }'
```

### Example: Create Post Task (Instagram)

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Amazing content! #instagram #reels",
      "post_way": "addButton",
      "placement": "reel",
      "material_source": "localFolder",
      "material_path": "C:/Videos/instagram",
      "upload_wait_time": 45
    },
    "enable_multi_account": true,
    "min_interval": 10,
    "max_interval": 30
  }'
```

### Example: Post with Custom Sound

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Dancing to this trending sound!",
      "post_way": "share",
      "add_sound": "custom",
      "custom_sound_keyword": "trending dance 2024",
      "origin_sound_volume": 30,
      "add_sound_volume": 70,
      "material_source": "materialLibrary",
      "upload_wait_time": 60
    }
  }'
```

### Example: Post Using Specific Sound

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "post_way": "useSound",
      "sound_name": "https://www.tiktok.com/music/original-sound-7123456789",
      "captions": "Using this awesome sound!",
      "material_source": "materialLibrary"
    }
  }'
```

### Response

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "task_ids": [101, 102],
    "created_count": 2
  }
}
```

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
