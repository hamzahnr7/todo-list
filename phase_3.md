# Phase 3

Buatlah validasi untuk enpoints sebelumnya

- Validasi untuk body
- Validasi untuk url params semacam `:id` yang mana harus berupa `integer`
- Ubah enpoint [`GET` `v1/tasks`] sehingga ada paginationnya
  ```jsonc
  {
    // ...
    "result": []
  }
  ```
  - `...` dapat berupa fields lain yang sekiranya kalian perlukan
- Tambahkan pula validasi untuk query di pagination-nya
- Buat juga DTOs di `src/dtos/<resource_name>`
  - semacam `src/dtos/tasks/create-task.dto.ts`, `src/dtos/tasks/get-todos.query.ts`
