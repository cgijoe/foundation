FROM node:10

WORKDIR /usr/src/app

COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

COPY start.sh start.sh 
RUN chmod +x start.sh

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

RUN npm run build

ENTRYPOINT [ "/bin/bash", "-c" ]
CMD ["./start.sh"]
