# Use official Node.js 16 image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install NestJS dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose port 3201
EXPOSE 3201

# Command to run your NestJS application
CMD ["npm", "run", "start:dev"]
