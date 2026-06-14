# Flora Backend
 
REST API для проекту Flora.
 
## Стек
 
- Node.js + Express
- PostgreSQL + Sequelize
- Joi (валідація)
- Multer + gravatar (зображення)
- Swagger UI (документація)
 
## Render деплой
 
[Backend](https://sem4-webdev-backend.onrender.com/api)

[Swagger](https://sem4-webdev-backend.onrender.com/api-docs)

## Запуск локально
 
```bash
npm install
cp .env.example .env
npm run start
```

При успішному підключенні видасть: `Database connection successful`.
 
Swagger UI: `http://localhost:<PORT>/api-docs`
 
## Структура проєкту
 
```
src/
    controllers/
    services/
    routes/
    middlewares/
    schemas/ 
    models/
    helpers/
    db/
    app.js
temp/          
public/photos/ 
server.js
```