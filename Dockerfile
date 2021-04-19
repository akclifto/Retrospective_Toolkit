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

COPY ./nginx.conf /etc/nginx.conf

COPY ./retrotoolbox.herokuapp.com.conf /etc/nginx/templates/default.conf.template

COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]