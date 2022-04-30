# `GET` `/v1/tasks`
### Description : 
> Get All Task Endpoint and have a pagination with it. Request with page and size in Request Query and Get JSON Data Respone with Result, Size, and Page Variable. 
---
- ## Request 
  - Query
  ```
  page  : number 
  size  : number // min 5
  ```

---
- ## Response 
  - Status `200`
  ```jsonc
    {
      "result": [], 
      "size": number,  
      "page": number, 
    }
  ```
