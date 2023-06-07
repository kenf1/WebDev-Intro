FROM node:lts-alpine

#store all projects under app folder
RUN mkdir /app
COPY ./Code_ext ./app/Code_ext
COPY ./JavaScript ./app/JavaScript
COPY ./TypeScript ./app/TypeScript

RUN npm install -g npm@latest yo generator-code vsce