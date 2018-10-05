FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . .

RUN npm run build -- --output-path=public/dist
RUN npm run build-storybook

RUN mv ./public /