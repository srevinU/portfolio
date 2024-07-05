FROM node:alpine As development

USER root

WORKDIR /app

COPY frontend/package*.json /app/
RUN npm install
COPY frontend /app/
RUN npm install -g serve
RUN npm run build

FROM node:alpine As production

USER root
WORKDIR /app
COPY frontend /app/
RUN npm install
RUN npm install -g serve