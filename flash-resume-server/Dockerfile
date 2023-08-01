FROM node:18 as development

RUN apt-get update && apt-get install -y netcat-traditional

WORKDIR /usr/src/cache

COPY package.json ./
COPY package-lock.json ./
RUN npm install

WORKDIR /usr/src/app

COPY package*.json .

RUN npm pkg delete scripts.prepare

RUN npm install

COPY prisma/schema.prisma ./prisma/

ENV NODE_ENV=development

COPY . .

COPY /entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN npm run build

ENTRYPOINT ["/entrypoint.sh"]

FROM node:18 as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm pkg delete scripts.prepare

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
