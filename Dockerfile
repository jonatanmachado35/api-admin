FROM node:20-alpine AS builder
WORKDIR /app

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

# Remove dependências de desenvolvimento para o pacote final
RUN npm prune --omit=dev

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copia apenas o necessário para rodar em produção
COPY package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY prisma ./prisma

EXPOSE 3000

CMD ["node", "dist/main.js"]
