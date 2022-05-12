# Phase 2

Buatlah REST API dengan Express dan Sequelize yang memiliki fungsi sebagai berikut:

- Membuat todo (Create todo)
- Mengambil semua data todo (Read todo)
- Mengambil detail todo berdasarkan ID (Get todo by ID)
- Mengubah data todo (Update todo)
- Menghapus data todo (Delete todo)

Kamu bisa test REST API yang sedang kamu develop menggunakan tools seperti `Postman`, `Insomnia` atau `curl`. Jika masih belum mengerti tentang konsep REST API, bisa baca dulu [REST API Tutorial](https://restapitutorial.com/)

Berikut routes/endpoint yang harus kalian buat:

- `POST` `v1/tasks`
  - body
    ```json
    {
      "title": "string",
      "description": "string",
      "status": "pending | done",
      "date": "date (yyyy-mm-dd)"
    }
    ```
  - bila success kembalikan dengan response `201` dan data yang sudah disimpan
- `GET` `v1/tasks`
  - bila success kembalikan dengan response `200` dan semua data yang tersimpan
- `GET` `v1/tasks/:id`
  - bila success kembalikan dengan response `200` dan data yang tersimpan
  - bila tidak ada kembalikan dengan response `404`
    - bisa `throw createHttpError(404, "Task not found")`
- `PATCH` `v1/tasks/:id`
  - body
    ```json
    {
      "title?": "string",
      "description?": "string",
      "status?": "pending | done",
      "date?": "date (yyyy-mm-dd)"
    }
    ```
    - `?` artinya optional
  - bila success kembalikan dengan response `204` no content
  - bila tidak ada kembalikan dengan response `404`
    - bisa `throw createHttpError(404, "Task not found")`
- `DELETE` `v1/tasks/:id`
  - bila success kembalikan dengan response `204` no content
  - bila tidak ada kembalikan dengan response `404`
    - bisa `throw createHttpError(404, "Task not found")`
