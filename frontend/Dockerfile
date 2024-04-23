FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS serve
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm install --production
COPY --from=build /app/.next ./.next
EXPOSE 3000
CMD ["npm", "start"]
