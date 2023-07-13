#React Dockerfile
#pull official base image
FROM node:16.20.0 AS build
#set working dir
WORKDIR /home/user
#choose port
EXPOSE 9090
#install dependencies
COPY package.json yarn.lock ./
RUN yarn
#add app
COPY . .
#build
RUN yarn run build
#Run locally after build
CMD ["yarn", "run", "start"]