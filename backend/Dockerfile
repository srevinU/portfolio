FROM node:alpine As development

USER root

WORKDIR /app

COPY backend/package*.json /app/
RUN npm install
COPY backend /app/
RUN npm run build
