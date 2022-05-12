# Phase 1

Settings

- Buat database baru di PostgreSQL (nama terserah seperti `todo_list`, `task_manager`, dsb)
- Buatlah tabel dengan nama `tasks` dan model seperti
  ```json
  {
    "title": "varchar(255)",
    "description": "text",
    "status": "varchar(255)",
    "due_date": "date"
  }
  ```
  - Kalian bisa mengunakan sequelize:
    - buat `.sequelizerc` untuk konfigurasi
    - `npm i sequelize sequelize-cli`
    - `yarn sequelize init` | `npx sequelize init`
    - `yarn or npx` + `sequelize model:generate --name Task --attributes title:string,description:text,status:string,dueDate:date --underscored`
    - setelah itu kalian edit file di `migrations` dan `models`
      - map `dueDate` ke `due_date`
    - `yarn or npx` + `sequelize db:migrate`
