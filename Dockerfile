# Fase 1: Construção do aplicativo Next.js
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do projeto para o contêiner
COPY . .

# Executa o build do Next.js para produção
RUN npm run build

# Fase 2: Configuração do servidor para servir o app Next.js
FROM node:18-alpine AS production

# Define o diretório de trabalho
WORKDIR /app

# Copia as dependências instaladas e o código construído da fase anterior
COPY --from=build /app ./

# Define a variável de ambiente para o modo de produção
ENV NODE_ENV=production

# Expor a porta 3000, já que Next.js roda nesta porta por padrão
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]

