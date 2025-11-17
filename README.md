🚀 Challenge – Wallets API

API REST para autenticación y CRUD de wallets, construida con Node.js, Express, Prisma, PostgreSQL, Zod, y documentada con Swagger.

🛠️ Tecnologías

Node.js + Express

Prisma ORM

PostgreSQL

Docker + docker-compose

Zod (validación)

JWT (autenticación)

Swagger (documentación)

📦 Instalación
Clonar el repositorio
git clone https://github.com/<tu-usuario>/<tu-repo>.git
cd <tu-repo>

⚙️ Variables de entorno

Crear un archivo .env basado en .env.example:

DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
JWT_SECRET="changeme123"
PORT=3000

🐳 Correr con Docker (recomendado)
docker-compose up --build

La API estará en:
📍 http://localhost:3000

Swagger en:
📍 http://localhost:3000/docs

▶️ Correr localmente

Instalar dependencias:

npm install

Crear la DB:

docker-compose up -d db

Ejecutar migraciones:

npx prisma migrate dev

Levantar servidor:

npm run dev

📚 Documentación

Swagger disponible en:
👉 http://localhost:3000/docs

🔐 Endpoints principales
Auth

POST /signin

POST /signout

Wallets

GET /wallets

POST /wallets

GET /wallets/:id

PUT /wallets/:id

DELETE /wallets/:id

🔧 Scripts útiles
npm run dev # modo desarrollo
npm run build # compilar TypeScript
npm start # correr versión compilada

📁 Postman Collection

Se incluye la colección en:
docs/postman_collection.json

📝 Licencia

MIT
