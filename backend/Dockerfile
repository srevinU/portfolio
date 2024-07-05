FROM node:alpine As development

USER root

WORKDIR /app

COPY backend/package*.json /app/
RUN npm install
COPY backend /app/
RUN npm run build

FROM node:alpine As production

USER root
WORKDIR /app
COPY backend /app/
RUN npm install