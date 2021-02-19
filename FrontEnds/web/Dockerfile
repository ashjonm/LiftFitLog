FROM node:14-alpine AS build-env

WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:stable-alpine AS runtime-env

WORKDIR /usr/share/nginx/html
COPY --from=build-env ./build/build .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf