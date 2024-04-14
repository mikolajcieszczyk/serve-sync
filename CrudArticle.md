
# MySQL/NestJS/NextJS/Docker App Tutorial

cel
co otrzymamy
kiedy pisze artykul
srodowisko
spis tresci
  

# 1. Installing MySQL

**If you are familiar with it/you have MySQL installed on your device, you can skip this step**

1. **Install MySQL**: If MySQL is not installed yet, you need to install it on your system. You can do this by downloading the appropriate installer from the official MySQL website or by using a package manager available on your operating system.

  [MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)
  
**On Ubuntu 22.04.4 LTS, the following command should do the job:**

`sudo apt-get install mysql-server mysql-client`

3. **Start MySQL Server**: After installing MySQL, you need to start the server. On most operating systems, you can do this through a system service or directly from the command line.

To check whether the MySQL server has been started:

`sudo service mysql status`

You should see something like this:

`mysql.service - MySQL Community Server`
    ` Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)`
     `Active: active (running) since Sun 2024-04-14 12:45:55 CEST; 34s ago`
   ` Process: 47903 ExecStartPre=/usr/share/mysql/mysql-systemd-start pre (code=exited, status=0/SUCCESS)`
  ` Main PID: 47911 (mysqld)`
    ` Status: "Server is operational"`
 `     Tasks: 38 (limit: 18718)`
     `Memory: 365.7M`
        `CPU: 673ms`
     `CGroup: /system.slice/mysql.service`
             `└─47911 /usr/sbin/mysqld`
         
 If not, run:

`sudo service mysql start`

And check `status` once again.

3. **Create DB user and grant permissions**
Log in to MySQL as a user with appropriate privileges (for example, "root" or another user with administrative privileges).

`mysql -u root -p`

Run the **CREATE USER** command with the appropriate options, such as the username and location from which the user will be able to log in.

Instead of 'miki', enter the name of the user you want to create, and instead of 'your_password', enter the desired password for this user.

If you want to enable login from any location, you can use '%' instead of 'localhost'.

`CREATE USER 'miki'@'localhost' IDENTIFIED BY 'your_password';`

Grant appropriate permissions to the newly created user. For example, if you want the user to be able to create and manage databases, you can use the **GRANT** command:

`GRANT ALL PRIVILEGES ON *.* TO 'miki'@'localhost';`

This gives the user "miki" all permissions on all databases. You can adjust permissions to suit your needs.

Load permission changes so that they are immediately reflected by the MySQL server:

`FLUSH PRIVILEGES;`

4. **Log into MySQL**: Next, log in to MySQL using the console or a MySQL client, using the appropriate authentication credentials (username and password).

  `mysql -u YOUR_USERNAME -p`
  `Enter password: ___`

If your credentials are correct, you should be logged in to the MySQL console and you will see the mysql> prompt.

4. **Create a Database**: Once logged into MySQL, you can create a new database using the SQL command CREATE DATABASE database_name;. For example, if you want to name your database "myapp", you would execute the command CREATE DATABASE myapp;.

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



# 2. NestJS

  

  

  

# 3. NextJS
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczMDg1NDI0OF19
-->