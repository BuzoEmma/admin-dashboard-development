FROM node:lts-alpine

WORKDIR /habeep/habeep-dashboard

COPY package*.json ./

COPY . ./

RUN ls -la

EXPOSE 8084