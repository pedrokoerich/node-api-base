# Node API com TypeScript, Express e Prisma

Este projeto é uma base para desenvolvimento de APIs em Node.js utilizando TypeScript, Express e Prisma ORM. O objetivo é aprofundar conhecimentos em conexão com bancos de dados no Node usando o Prisma.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
npm install
```

Copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

Configure as variáveis de ambiente, especialmente a conexão com o banco de dados.

## Uso

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Para executar as migrações do Prisma:

```bash
npx prisma migrate dev
```

## Estrutura do Projeto

- `src/` — Código-fonte da aplicação
- `prisma/` — Schema e migrações do Prisma
- `.env` — Variáveis de ambiente

## Observações

- Remova o `origin` do repositório se quiser adicionar seu próprio repositório remoto:

```bash
git remote remove origin
git remote add origin <url>
```

- Consulte a [documentação do Prisma](https://www.prisma.io/docs/) para mais detalhes sobre configuração e uso.

---

Este projeto é focado em aprendizado e experimentação com integração de bancos de dados usando Prisma no Node.js.