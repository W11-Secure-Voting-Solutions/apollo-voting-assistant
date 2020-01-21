FROM nginx:mainline-alpine

RUN mkdir /app
COPY dist /app
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
