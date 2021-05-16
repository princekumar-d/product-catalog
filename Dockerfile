
FROM node:alpine

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:prod"]