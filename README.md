## Cadastro de Usuários - Fullstack App
Aplicação completa frontend + backend para cadastro, listagem e exclusão de usuários.
Feita com React no front e Node.js + Express + PostgreSQL no back.


#  Tecnologias Utilizadas
 Backend
- Node.js
- Express
- PostgreSQL
- Prisma ORM
- Cors
- Nodemon

Funcionalidades
✅ Cadastro de novos usuários
✅ Listagem automática de usuários cadastrados
✅ Exclusão de usuários via ícone de lixeira
✅ Design responsivo e moderno


# Backend

 1. Clonar o projeto
git clone https://github.com/ValvassoriDev/FullStackApi-Back

 2. Instalar as dependências
cd backend
npm install

 3. Criar o banco de dados (PostgreSQL) e configurar o .env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome-do-banco"

 4. Rodar as migrations
npx prisma migrate dev --name init

 5. Iniciar o servidor
npm run dev
A API estará disponível em: http://localhost:3000

# Frontend


 1. Clonar o projeto
git clone https://github.com/ValvassoriDev/FullStackApi-Front

 2. Instalar as dependências
cd frontend
npm install

 3. Configurar o endpoint da API
Em src/services/api.js:
axios.create({ baseURL: 'http://localhost:3000' })

4. Iniciar o projeto
npm start
A aplicação estará disponível em: http://localhost:5173 (ou porta padrão do Vite)
