FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build -- --output-path=public/app
RUN npm run build-storybook

RUN mv ./public /