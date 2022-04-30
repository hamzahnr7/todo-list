# `GET` `/v1/tasks/:id`
### Description : 
> Get a Task by Id Endpoint. 
---
- ## Response 
  - Status `200`
  ```jsonc
    {
      "id": number,
      "title": "string",
      "description": "string",
      "status": "string",
      "dueDate": Date,
      "createdAt": Date,
      "updatedAt": Date
    }
  ```
