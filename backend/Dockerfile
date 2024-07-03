FROM node:alpine As development

WORKDIR /app

COPY backend/package*.json /app/
RUN npm install
COPY backend /app/
RUN npm run build
