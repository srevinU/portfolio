FROM node:alpine As development

WORKDIR /app

COPY frontend/package.json /app
COPY frontend/package-lock.json /app
COPY frontend/env /app/env
COPY frontend/. ./app

RUN npm install