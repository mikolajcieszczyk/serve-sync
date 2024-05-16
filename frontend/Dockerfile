# FROM node:18-alpine AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install --legacy-peer-deps
# COPY . .
# RUN npm run build

# FROM node:18-alpine AS serve
# WORKDIR /app
# COPY --from=build /app/package.json /app/package-lock.json ./
# RUN npm install --legacy-peer-deps --production
# COPY --from=build /app/.next ./.next
# EXPOSE 3000
# CMD ["npm", "start"]

FROM node:22-alpine3.18

ENV NODE_ENV=development

USER root

# Timezone
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

EXPOSE 3200

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
