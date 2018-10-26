FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV API_ENDPOINT http://cse-dev.cass.oregonstate.edu
ENV NODE_ENV production
RUN npm run build -- --output-path=public/

RUN mv ./public /