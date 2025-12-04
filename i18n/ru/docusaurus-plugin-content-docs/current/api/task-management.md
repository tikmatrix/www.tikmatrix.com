---
sidebar_position: 2
title: API управления задачами
description: Полная документация по endpoint'ам управления задачами
---

На этой странице описаны все доступные API endpoint'ы для управления задачами в TikMatrix.

## Создание задачи

Создайте новую задачу для одного или нескольких устройств или имён пользователей.

- **Endpoint:** `POST /api/v1/task`
- **Content-Type:** `application/json`

### Параметры запроса

API поддерживает два режима создания задач:

**Режим 1: По устройствам** - используйте `serials` для создания задач для устройств
**Режим 2: По именам пользователей** - используйте `usernames` для создания задач напрямую для конкретных аккаунтов

| Параметр | Тип | Обязательно | Описание |
|---------|-----|-----------|---------|
| serials | string[] | Условно | Массив серийных номеров устройств (обязательно, если не указан `usernames`) |
| usernames | string[] | Условно | Массив имён пользователей (обязательно, если не указан `serials`). При указании задачи создаются напрямую для этих аккаунтов. |
| script_name | string | Да | Название скрипта для выполнения (в настоящее время поддерживается только `post`) |
| script_config | object | Да | Параметры конфигурации скрипта |
| enable_multi_account | boolean | Нет | Включить режим мультиаккаунта (по умолчанию: false). Применимо только в режиме устройств. |
| min_interval | integer | Нет | Минимальный интервал в минутах (по умолчанию: 0) |
| max_interval | integer | Нет | Максимальный интервал в минутах (по умолчанию: 0) |
| start_time | string | Нет | Запланированное время выполнения, формат "ЧЧ:ММ" |

### Конфигурация скрипта публикации (`script_config`)

Объект `script_config` содержит параметры для скрипта публикации. Ниже приведены доступные параметры:

#### Общие параметры (TikTok и Instagram)

| Параметр | Тип | Обязательно | По умолчанию | Описание |
|---------|-----|-----------|-------------|---------|
| content_type | integer | Нет | 0 | Тип контента: `0` = видео, `1` = изображения |
| image_count | integer | Нет | 1 | Количество выбираемых изображений (когда content_type = 1) |
| captions | string | Нет | "" | Текст подписи к посту. Поддерживает spintax: `{вариант1\|вариант2\|вариант3}` |
| post_way | string | Нет | "share" | Способ публикации: `share`, `addButton` или `useSound` |
| material_source | string | Нет | "materialLibrary" | Источник материала: `materialLibrary` (библиотека) или `localFolder` (локальная папка), игнорируется если указан material_list |
| material_path | string | Условно | "" | Путь к локальной папке (обязательно, когда material_source = "localFolder") |
| material_list | string[] | Нет | [] | **Массив прямых путей к файлам материалов.** При указании этого параметра логика material_source и material_path игнорируется. Идеально для API-автоматизации. |
| materials_tags | string | Нет | "" | Теги материалов через запятую для фильтрации из библиотеки |
| upload_wait_time | integer | Нет | 30 | Время ожидания загрузки в секундах |
| sound_wait_time | integer | Нет | 10 | Время ожидания загрузки звука в секундах |
| add_sound | string/integer | Нет | "-1" | Параметры звука: `-1` = по умолчанию, `0` = отключен, `1` = включен, `custom` = использовать собственный звук |
| sound_name | string | Условно | "" | Название/URL звука (обязательно, когда post_way = "useSound") |
| custom_sound_keyword | string | Условно | "" | Ключевое слово для поиска собственного звука (обязательно, когда add_sound = "custom") |
| origin_sound_volume | integer | Нет | 50 | Громкость оригинального звука (0-100) |
| add_sound_volume | integer | Нет | 50 | Громкость добавленного звука (0-100) |

#### Параметры только для TikTok

| Параметр | Тип | Обязательно | По умолчанию | Описание |
|---------|-----|-----------|-------------|---------|
| add_product_link | integer | Нет | 0 | Добавить ссылку на товар: `0` = нет, `1` = да |

#### Параметры только для Instagram

| Параметр | Тип | Обязательно | По умолчанию | Описание |
|---------|-----|-----------|-------------|---------|
| placement | string | Нет | "reel" | Размещение публикации: `reel` или `story` |

### Пример: Создание задачи с прямым списком материалов

Это рекомендуемый подход для API-автоматизации - передача путей к материалам напрямую без использования библиотеки или сканирования папок:

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Посмотрите моё новое видео! #популярное #рекомендации",
      "material_list": [
        "C:/Videos/video1.mp4"
      ],
      "upload_wait_time": 60
    }
  }'
```

### Пример: Создание задачи публикации (TikTok)

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1", "device_serial_2"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Посмотрите моё новое видео! #популярное #рекомендации",
      "post_way": "share",
      "material_source": "materialLibrary",
      "materials_tags": "популярное, танцы",
      "upload_wait_time": 60,
      "add_sound": "-1"
    },
    "enable_multi_account": false,
    "min_interval": 5,
    "max_interval": 15
  }'
```

### Пример: Создание задачи по списку имён пользователей

Этот режим позволяет создавать задачи напрямую для конкретных аккаунтов без знания их серийных номеров устройств:

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "usernames": ["@user1", "@user2", "@user3"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Посмотрите моё новое видео! #популярное #рекомендации",
      "material_list": [
        "C:/Videos/video1.mp4"
      ],
      "upload_wait_time": 60
    },
    "min_interval": 5,
    "max_interval": 15
  }'
```

### Пример: Создание задачи публикации (Instagram)

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Потрясающий контент! #instagram #reels",
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

### Пример: Публикация с собственным звуком

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "content_type": 0,
      "captions": "Танцуй под этот трек!",
      "post_way": "share",
      "add_sound": "custom",
      "custom_sound_keyword": "популярная музыка 2024",
      "origin_sound_volume": 30,
      "add_sound_volume": 70,
      "material_source": "materialLibrary",
      "upload_wait_time": 60
    }
  }'
```

### Пример: Публикация с указанным звуком

```bash
curl -X POST http://localhost:50809/api/v1/task \
  -H "Content-Type: application/json" \
  -d '{
    "serials": ["device_serial_1"],
    "script_name": "post",
    "script_config": {
      "post_way": "useSound",
      "sound_name": "https://www.tiktok.com/music/original-sound-7123456789",
      "captions": "Использую этот классный звук!",
      "material_source": "materialLibrary"
    }
  }'
```

### Ответ

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

## Список задач

Запрос задач с опциональными фильтрами.

- **Endpoint:** `GET /api/v1/task`

| Параметр | Тип | Обязательно | Описание |
|---------|-----|-----------|---------|
| status | integer | Нет | Фильтр по статусу (0=pending, 1=running, 2=completed, 3=failed) |
| serial | string | Нет | Фильтр по серийному номеру устройства |
| script_name | string | Нет | Фильтр по имени скрипта |
| source | string | Нет | Фильтр по источнику ("ui" или "api") |
| page | integer | Нет | Номер страницы (по умолчанию: 1) |
| page_size | integer | Нет | Количество элементов на странице (по умолчанию: 20, макс: 100) |

## Детали задачи

Получить подробную информацию о конкретной задаче.

- **Endpoint:** `GET /api/v1/task/{task_id}`

## Удалить задачу

Удаляет задачу. Если задача выполняется, сначала будет произведена попытка её остановить.

- **Endpoint:** `DELETE /api/v1/task/{task_id}`

## Массовое удаление задач

Удаляет несколько задач одновременно. Выполняющиеся задачи будут остановлены перед удалением.

- **Endpoint:** `DELETE /api/v1/task/batch`
- **Тело запроса:** `{ "task_ids": [1, 2, 3] }`

## Остановить задачу

Останавливает выполняющуюся задачу.

- **Endpoint:** `POST /api/v1/task/{task_id}/stop`

## Повтор попытки для неудачных задач

Повторно запустить одну неудачную задачу.

- **Endpoint:** `POST /api/v1/task/{task_id}/retry`

## Повторить все неудачные задачи

Запустить повторно все задачи, находящиеся в состоянии failed.

- **Endpoint:** `POST /api/v1/task/retry-all`

## Статистика задач

Получить статистику по всем задачам.

- **Endpoint:** `GET /api/v1/task/stats`
- **Ответ:** Возвращает количество total, pending, running, completed и failed.

## Проверка лицензии для API

Проверить, поддерживает ли лицензия доступ к API.

- **Endpoint:** `GET /api/v1/license/check`
- **Примечание:** План Starter вернёт код ошибки 40301. Доступ предоставлен для Pro, Team и Business.
