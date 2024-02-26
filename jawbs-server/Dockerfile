FROM node:20 as development

RUN apt-get update && apt-get install -y netcat-traditional

RUN apt-get update && apt-get install -y rsync

WORKDIR /usr/src/cache

COPY package.json ./

COPY package-lock.json ./

RUN npm install

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY prisma/schema.prisma ./prisma/

ENV NODE_ENV=development

COPY . .

COPY /entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

FROM node:20 as prisma-studio

RUN apt-get update && apt-get install -y netcat-traditional

RUN apt-get update && apt-get install -y rsync

WORKDIR /usr/src/cache

COPY package.json ./

COPY package-lock.json ./

RUN npm install

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY prisma/schema.prisma ./prisma/

ENV NODE_ENV=development

COPY . .

CMD [ "npm run studio" ]

FROM node:20 as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm pkg delete scripts.prepare

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
