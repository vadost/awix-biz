FROM node:latest

ARG APP_ENV=development

WORKDIR /dock

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build:${APP_ENV}

EXPOSE 5000
CMD npm run-script start:server
