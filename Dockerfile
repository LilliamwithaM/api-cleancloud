FROM node:18.16-bullseye
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3090
CMD [ "npm", "start" ]
