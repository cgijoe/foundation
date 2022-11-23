FROM node:10

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3001

RUN npm run build


CMD [ "npm", "start" ]

