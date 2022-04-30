# `PATCH` `/v1/tasks/:id`
### Description
> Update Task Endpoint. Updating task with an optional Request Body.
---
- ## Request 
  - Body
  ```jsonc
    {
      "title?": "string", // max 255 character
      "description?": "string", // 
      "status?": "string", // ex: pending | done
      "dueDate?": date(YYYY-MM-DD) // ex: 2022-04-31
    }
  ```
---
- ## Response 
  - Status `204` No Content
