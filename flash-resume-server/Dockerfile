FROM node:18 as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm pkg delete scripts.prepare

RUN npm install

COPY prisma/schema.prisma ./prisma/

# Wait for PostgreSQL to be available
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV NODE_ENV=development

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "dev"]

FROM node:18 as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm pkg delete scripts.prepare

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3001

CMD ["node", "dist/index.js"]
