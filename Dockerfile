#This file is no longer used for deployment due to conflicts with Heroku, Socket.io, and NGINX.
#Had to use Heroku buildpacks to bypass the connection issues

FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

ENV PATH="./node_modules/.bin:$PATH"

COPY ./src ./src
COPY ./public ./public

RUN yarn run build

#Stage 1 Build the backend
FROM node:alpine

WORKDIR '/backend'

COPY ./server/package.json ./
COPY ./server/yarn.lock ./

RUN yarn install --production

COPY ./server .

COPY --from=builder /app/build ./build

CMD [ "yarn", "start"]

#Below no longer works because of socket issues with Heroku

#Stage 2: Build the static files to be hosted by nginx

#Stage 3: Add env variable support, move static files into nginx folder, and serve them
#FROM nginx:alpine

#COPY ./nginx.conf /etc/nginx.conf

#COPY ./retrotoolbox.herokuapp.com.conf /etc/nginx/templates/default.conf.template

#COPY --from=builder /app/build /usr/share/nginx/html

#CMD ["nginx", "-g", "daemon off;"]