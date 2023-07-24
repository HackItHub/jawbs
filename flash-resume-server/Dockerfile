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

RUN npm run generate
RUN npm run build

CMD ["npm", "run", "start"]

FROM node:18 as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm pkg delete scripts.prepare

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
