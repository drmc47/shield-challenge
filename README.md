# 🚀 Wallets API – Technical Challenge

A RESTful API for user authentication and wallet management, built with Node.js, Express, Prisma, PostgreSQL, JWT, Zod, and fully documented using Swagger (OpenAPI).

This project is part of a technical challenge and is prepared to run easily via Docker or locally.

## 🛠️ Technologies Used

Node.js + Express

TypeScript

Prisma ORM

PostgreSQL

Docker + Docker Compose

JWT (JSON Web Token)

Zod for input validation

Swagger (OpenAPI) for API documentation

Bcrypt for password hashing

## 📦 Installation
1. Clone the repository
```
git clone https://github.com/drmc47/shield-challenge.git
```

## ⚙️ Environment Variables

Create a .env file using .env.example as a reference:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
JWT_SECRET="changeme123"
PORT=3000
POSTGRES_USER=testuser
POSTGRES_PASSWORD=testuser
POSTGRES_DB=challenge_db
```

🐳 Running with Docker (recommended)

This project ships with a docker-compose.yml that starts the API and PostgreSQL together.

```
docker-compose up --build
```

API available at:
➡️ http://localhost:3000

Swagger docs:
➡️ http://localhost:3000/docs

▶️ Running Locally (without Docker)
1. Install dependencies
npm install

2. Start PostgreSQL

You may use your own DB or start just the database container:
```
docker-compose up -d db
```
3. Run Prisma migrations
```
npx prisma migrate dev
```
4. Start development server

```
npm run dev
```
5. Or run the compiled version
```
npm run build
npm start
```
## 📚 API Documentation

Swagger UI is available at:

📍 http://localhost:3000/docs

Documentation includes:

- Authentication endpoints

- Full Wallets CRUD

- Required/optional fields

- Schemas & examples

- Authorization requirements

# 🔐 Main Endpoints
## Authentication

- POST	/signin	Sign in a user and return a JWT
- POST	/signout	Sign out the user (requires JWT)
## Wallets

- GET	/wallets	Retrieve all wallets for the user
- POST	/wallets	Create a new wallet
- GET	/wallets/:id	Retrieve a wallet by ID
- PUT	/wallets/:id	Update a wallet
- DELETE	/wallets/:id	Delete a wallet by ID
## 📁 Project Structure
```
src/
  modules/
    auth/
    wallets/
  middlewares/
  prisma/
docs/
  swagger/
    auth.yaml
    wallets.yaml
docker-compose.yml
package.json
tsconfig.json
README.md
.env.example
```
## 🔧 Useful Scripts
```
npm run dev       # Run in development mode
npm run build     # Compile TypeScript
npm start         # Run compiled code
npm run prisma    # Run Prisma commands
```
## 🧪 Postman Collection (optional)

A ready-to-use Postman collection is included:
```
docs/postman_collection.json
```

Import it into Postman to test the API quickly.

## 👨‍💻 Author

Developed by Daniel Mojica
🔗 GitHub: https://github.com/drmc47

## 📝 License

MIT License.
