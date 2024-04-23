
# MySQL/NestJS/NextJS/Docker App Tutorial

cel
co otrzymamy
kiedy pisze artykul
srodowisko
spis tresci
  

## 1. Create basic app structure


## 2. Create a Database

Once logged into MySQL, you can create a new database using the SQL command CREATE DATABASE database_name;. For example, if you want to name your database "myapp", you would execute the command CREATE DATABASE myapp;.

To maintain consistency in the later parts of the tutorial, let's name our database: "serve_sync", so the command should look like this:

`CREATE DATABASE serve_sync;`

Now, tell MySQL that u want to use the newly created database:

`USE serve_sync;`

Now that we have everything ready to work with MySQL, **let's add three tables: Clients, Courts, Bookings.**

**Create the "Clients" table:**

`CREATE TABLE Clients (`
    `client_id INT AUTO_INCREMENT PRIMARY KEY,`
    `first_name VARCHAR(50),`
    `last_name VARCHAR(50),`
    `email VARCHAR(100),`
    `phone VARCHAR(20)`
`);`

**Create the "Courts" table:**

`CREATE TABLE Courts (`
    `court_id INT AUTO_INCREMENT PRIMARY KEY,`
    `court_name VARCHAR(100),`
    `location VARCHAR(100),`
    `surface VARCHAR(50),`
    `hourly_rate DECIMAL(10, 2)`
`);`

**Create the "**Bookings**" table:**

`CREATE TABLE Bookings (`
    `booking_id INT AUTO_INCREMENT PRIMARY KEY,`
   ` client_id INT,`
    `court_id INT,`
    `booking_date DATETIME,`
    `duration_minutes INT,`
    `FOREIGN KEY (client_id) REFERENCES Clients(client_id),`
    `FOREIGN KEY (court_id) REFERENCES Courts(court_id)`
`);`

To inspect if everything was added fine, you can run following command:

`SHOW COLUMNS FROM Clients`

If everything went well, you should get the following result:
`+------------+--------------+------+-----+---------+----------------+`
`| Field      | Type         | Null | Key | Default | Extra          |`
`+------------+--------------+------+-----+---------+----------------+`
`| client_id  | int          | NO   | PRI | NULL    | auto_increment |`
`| first_name | varchar(50)  | YES  |     | NULL    |                |`
`| last_name  | varchar(50)  | YES  |     | NULL    |                |`
`| email      | varchar(100) | YES  |     | NULL    |                |`
`| phone      | varchar(20)  | YES  |     | NULL    |                |`
`+------------+--------------+------+-----+---------+----------------+`

Let's leave the database topic for now, we'll come back to it in later steps.

## Create new NestJS App
Create root directory in your local machine and call it `serve_sync` or whatever you want.
Run:
````bash
npm i -g @nestjs/cli
````
and install our app:
```bash
nest new api
```



## 4. Dockerize it!
What we want to achieve now is to dockerize the entire application using docker-compose.
Ultimately, we will have three containers:
- MySQL Database
- NestJS API
- NextJS Frontend

go to api directory:

`cd api`

add new Dockerfile and call it `Dockerfile`

`touch Dockerfile`

Add following code:

`#Use official Node.js 16 image as the base image`
`FROM node:16`

`# Set the working directory in the container`
`WORKDIR /app`

`# Copy the package.json and package-lock.json`
`COPY package*.json ./`

`# Install NestJS dependencies`
`RUN npm install`

`# Copy the entire project directory into the container`
`COPY . .`

`# Expose port 3201`
`EXPOSE 3201`

 ` # Command to run your NestJS application`
`CMD ["npm", "run", "start:dev"]`

### Yeah, looks great! Let's wrap it by Docker Compose now.
Go to project root folder:

`cd ..`

Add new docker-compose file:

`touch docker-compose.yaml`

And add the following:

`version:  "3.7"`
`services:`
` db:`
` image:  mysql`
` container_name:  mysql_db`
` restart:  always`
` environment:`
` MYSQL_ROOT_PASSWORD:  ${MYSQL_PASSWORD}`
` MYSQL_DATABASE:  ${MYSQL_DATABASE}`
` ports:`
` -  "3200:3306"`
` volumes:`
` -  ./mysql-data:/var/lib/mysql`
` api:`
` build:`
` context:  ./api`
` dockerfile:  Dockerfile`
` container_name:  api`
` restart:  always`
` ports:`
` -  "${API_PORT}:${API_PORT}"`
` depends_on:`
` -  db`

**To run our app just type**:
`docker-compose up --build`

After visiting http://localhost:3201 in your browser, you should see "Hello World!"
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzY1NDk0MjMzLDg4MDI1OTY4NSwtOTczMD
EwNDkxLDE3MzA4NTQyNDhdfQ==
-->