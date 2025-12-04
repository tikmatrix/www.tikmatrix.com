---
sidebar_position: 3
title: API 示例
description: 使用 TikMatrix 本地 API 的代码示例
---

本页面提供了在不同编程语言中使用 TikMatrix 本地 API 的示例代码。

## Python

```python
import requests
import json

BASE_URL = "http://localhost:50809/api/v1"

def check_license():
    """Check if API access is available"""
    response = requests.get(f"{BASE_URL}/license/check")
    return response.json()

def create_task(serials, script_name, script_config=None, multi_account=False):
    """Create a new task"""
    payload = {
        "serials": serials,
        "script_name": script_name,
        "script_config": script_config or {},
        "enable_multi_account": multi_account,
        "min_interval": 2,
        "max_interval": 5
    }
    response = requests.post(
        f"{BASE_URL}/task",
        headers={"Content-Type": "application/json"},
        json=payload
    )
    return response.json()

# Usage example
if __name__ == "__main__":
    # Check license first
    license_info = check_license()
    if license_info["code"] != 0:
        print("API access not available:", license_info["message"])
        exit(1)
    
    print("License OK:", license_info["data"]["plan_name"])
    
    # Create a follow task
    result = create_task(
        serials=["device_serial_1"],
        script_name="follow",
        script_config={"target_username": "@tikmatrix"}
    )
    print("Task created:", result)
```

## JavaScript / Node.js

```javascript
const BASE_URL = 'http://localhost:50809/api/v1';

async function checkLicense() {
  const response = await fetch(`${BASE_URL}/license/check`);
  return response.json();
}

// ...existing code...
```

（文档中保留了更多 Node.js、cURL、PowerShell 示例，详见英文原文）
