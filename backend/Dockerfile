FROM node:alpine AS development

USER root

WORKDIR /app

COPY backend/package*.json /app/
RUN npm install
COPY backend /app/
RUN npm run build

FROM node:alpine AS production

USER root
WORKDIR /app
COPY backend /app/
RUN npm install