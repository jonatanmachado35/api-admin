FROM node:20-bullseye-slim AS builder
WORKDIR /app

# Instala OpenSSL e dependências do Prisma
RUN apt-get update -y && \
    apt-get install -y openssl libssl1.1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Instala as dependências para build
COPY package*.json ./
RUN npm ci

# Copia configurações e gera o cliente do Prisma
COPY tsconfig*.json nest-cli.json ./
COPY prisma ./prisma
RUN npx prisma generate

# Copia o código e compila para produção
COPY src ./src
RUN npm run build

FROM node:20-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Instala OpenSSL na imagem final
RUN apt-get update -y && \
    apt-get install -y openssl libssl1.1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copia package.json
COPY package*.json ./

# Copia node_modules do builder (com todas as dependências)
COPY --from=builder /app/node_modules ./node_modules

# Copia o código compilado (IMPORTANTE!)
COPY --from=builder /app/dist ./dist

# Copia prisma schema
COPY --from=builder /app/prisma ./prisma

# Gera o Prisma Client na imagem final
RUN npx prisma generate

EXPOSE 3000

CMD ["node", "dist/main.js"]