# FROM node:16
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --legacy-peer-deps
# COPY . .
# EXPOSE 3201
# CMD ["npm", "run", "start:dev"]

FROM node:22-alpine3.18

ENV NODE_ENV=development

USER root

# RUN apt-get update
# RUN apt-get upgrade
# RUN apt-get add ca-certificates && update-ca-certificates
# # Change TimeZone
# RUN apt-get add --update tzdata
# ENV TZ=Europe/Warsaw
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm -f /var/cache/apt/*
RUN rm -rf /tmp/*

RUN npm cache clean -f

USER node

WORKDIR /app
VOLUME /app

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
