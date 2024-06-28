FROM node:alpine As development

WORKDIR /app

COPY backend/package.json /app
COPY backend/package-lock.json /app
COPY backend/tsconfig.json /app
COPY backend/nest-cli.json /app
COPY backend/test /app/test
COPY backend/env /app/env
COPY backend/src /app/src

RUN npm install
RUN npm run build

# EXPOSE 8080
