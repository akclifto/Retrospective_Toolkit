#Docker file for production build
#Stage 1 Build the backend
FROM node:alpine

WORKDIR '/backend'

COPY ./server/package.json ./
COPY ./server/yarn.lock ./

RUN yarn install --production

COPY ./server .

CMD [ "yarn", "start"]

#Stage 2: Build the static files to be hosted by nginx
FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

ENV PATH="./node_modules/.bin:$PATH"

COPY ./src ./src
COPY ./public ./public

RUN yarn run build

#Stage 3: Add env variable support, move static files into nginx folder, and serve them
FROM nginx:alpine

RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin

COPY ./nginx.config /etc/nginx/nginx.template

CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]

COPY --from=builder /app/build /usr/share/nginx/html