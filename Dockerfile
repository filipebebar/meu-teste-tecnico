FROM node:18-alpine

USER root

WORKDIR /home/project-nest-template

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn start:dev



