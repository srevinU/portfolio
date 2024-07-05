FROM node:alpine AS base
USER root
WORKDIR /app
COPY backend/package*.json /app/
RUN npm install

FROM base AS development
COPY backend /app/
RUN npm run build

FROM base AS production
COPY backend/dist /app/dist