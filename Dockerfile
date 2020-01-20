FROM node:12-alpine AS builder

RUN apk update \
    && apk upgrade

WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY ./ .
RUN npm run lint
RUN npm run build

FROM nginx:mainline-alpine AS prod

RUN mkdir /app
COPY --from=BUILDER /app/dist /app
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
