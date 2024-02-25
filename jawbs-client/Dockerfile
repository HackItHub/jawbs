FROM node as development

RUN apt-get update && apt-get install -y rsync

WORKDIR /usr/src/cache

RUN npm cache clean --force

COPY package.json ./

COPY package-lock.json ./

RUN npm install

WORKDIR /usr/src/app

COPY . .

COPY /entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
