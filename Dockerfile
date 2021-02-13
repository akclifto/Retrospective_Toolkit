FROM node:alpine
WORKDIR '/backend'
COPY ./server/package.json ./
RUN yarn
COPY ./server .
CMD [ "yarn", "start"]

FROM node:alpine AS builder

WORKDIR /app
COPY package.json ./
RUN yarn

ENV PATH="./node_modules/.bin:$PATH"

COPY ./src ./src
COPY ./public ./public
RUN yarn run build

FROM nginx:alpine
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
COPY --from=builder /app/build /usr/share/nginx/html