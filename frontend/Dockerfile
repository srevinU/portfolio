FROM node:alpine AS base
USER root
WORKDIR /app
COPY frontend/package*.json /app/
RUN npm install
RUN npm install -g serve

FROM base AS development
COPY frontend /app/
RUN npm run build

FROM base AS production
COPY frontend/build /app/build