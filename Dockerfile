FROM node:19-bullseye

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 4000

CMD NODE_ENV=dev npx nodemon --watch