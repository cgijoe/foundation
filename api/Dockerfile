FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

COPY start.sh start.sh 
RUN chmod +x start.sh

RUN npm run build

EXPOSE 3001

ENTRYPOINT [ "/bin/bash", "-c" ]
CMD ["./start.sh"]
