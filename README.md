# API Admin

## Variáveis de ambiente
- `DATABASE_URL`: conexão Postgres usada pela API.
- `DIRECT_URL`: URL direta para comandos do Prisma.
- `JWT_SECRET` e `JWT_REFRESH_SECRET`: segredos para gerar tokens.
- `PORT` (opcional): porta exposta pela aplicação, padrão `3000`.

## Build e execução com Docker (produção)
- Gerar a imagem: `docker build -t api-admin .`
- Rodar o container: `docker run -d --env-file .env -p 3000:3000 api-admin`
- Ajuste o mapeamento de porta se usar outro `PORT`.

## Docker Compose (app + Postgres)
- Suba tudo: `docker compose up -d --build`
- A API ficará em `http://localhost:3000` e o Postgres em `localhost:5432`.
- Por padrão, o banco usa `admin`/`admin` e base `api_admin`. Você pode sobrepor `DATABASE_URL`/`DIRECT_URL` no `.env`.
- Aplique migrações depois de subir: `docker compose exec app npm exec prisma migrate deploy`
- (Opcional) Rodar seed: `docker compose exec app npm exec prisma db seed`

## Migrações e seed
- Aplique as migrações antes de subir: `docker run --rm --env-file .env api-admin npm exec prisma migrate deploy`
- (Opcional) Rodar seed: `docker run --rm --env-file .env api-admin npm exec prisma db seed`
