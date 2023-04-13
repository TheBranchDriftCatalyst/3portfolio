FROM node:15.12.0

WORKDIR /.

ADD . .

RUN npm install -g yarn
RUN yarn install
RUN yarn build


#CMD ["npm", "run", "dev"]
