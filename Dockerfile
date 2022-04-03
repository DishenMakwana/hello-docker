FROM node:17-alpine3.14

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]

EXPOSE 4000