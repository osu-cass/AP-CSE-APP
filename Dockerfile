FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV API_ENDPOINT https://cse-api.cass.oregonstate.edu

ENV NODE_ENV production

RUN mkdir ./public 

RUN npm run build -- --output-path=public/

RUN mv ./public /
