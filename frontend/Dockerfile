FROM node:alpine As development

WORKDIR /app

COPY frontend/package*.json /app/
RUN npm install
COPY frontend /app/
RUN npm install -g serve
RUN npm run build