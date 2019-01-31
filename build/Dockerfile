FROM node as build-env

WORKDIR /app
ARG API=https://cse-api.cass.oregonstate.edu
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ENV API_ENDPOINT ${API}
ENV NODE_ENV production
RUN npm run build

FROM nginx:alpine
COPY build/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-env /app/dist /usr/share/nginx/html
