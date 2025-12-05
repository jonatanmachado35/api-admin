# API Admin

## Variáveis de ambiente
- `DATABASE_URL`: conexão Postgres usada pela API (use a URL do Supabase com `sslmode=require`).
- `DIRECT_URL`: URL direta para comandos do Prisma (pode ser a mesma do `DATABASE_URL`).
- `JWT_SECRET` e `JWT_REFRESH_SECRET`: segredos para gerar tokens.
- `PORT` (opcional): porta exposta pela aplicação, padrão `3000`.

## Build e execução com Docker (produção)
- Gerar a imagem: `docker build -t api-admin .`
- Rodar o container: `docker run -d --env-file .env -p 3000:3000 api-admin`
- Ajuste o mapeamento de porta se usar outro `PORT`.

## Docker Compose (apenas app, usando Supabase)
- Configure o `.env` com o `DATABASE_URL`/`DIRECT_URL` do Supabase (ex.: `postgresql://...supabase.co:5432/postgres?sslmode=require`).
- Suba a API: `docker compose up -d --build`
- A API ficará em `http://localhost:3000`. Não há Postgres local; tudo aponta para o Supabase.
- Aplique migrações depois de subir (cuidado: elas rodarão no Supabase): `docker compose exec app npm exec prisma migrate deploy`
- (Opcional) Rodar seed no Supabase: `docker compose exec app npm exec prisma db seed`

## Migrações e seed
- As migrações/seed rodam contra o banco configurado no `.env` (Supabase). Certifique-se de usar `sslmode=require`.
- Aplique as migrações antes de subir: `docker run --rm --env-file .env api-admin npm exec prisma migrate deploy`
- (Opcional) Rodar seed: `docker run --rm --env-file .env api-admin npm exec prisma db seed`
