FROM node:alpine AS base
USER root
WORKDIR /app
COPY frontend/package*.json /app/
RUN npm install
RUN npm install -g serve

FROM base AS development
COPY frontend /app/
RUN npm run build:development

FROM base AS preproduction
COPY frontend/build /app/build
COPY frontend/public /app/public
COPY frontend/src /app/src
COPY frontend/webpack.config.js /app/
COPY frontend/env /app/env

FROM base AS production
COPY frontend/build /app/build
COPY frontend/public /app/public
COPY frontend/src /app/src
COPY frontend/webpack.config.js /app/
COPY frontend/env /app/env