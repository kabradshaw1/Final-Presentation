FROM node:20.11.1-alpine:3.18

WORKDIR /app

COPY pakcage.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]