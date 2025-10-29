CloudFunc – Node.js + PostgreSQL (Docker Compose)
🧭 Overview

A simple project that runs a Node.js backend and a PostgreSQL database using Docker Compose.
Both containers communicate through Docker’s internal network.

⚙️ Steps Performed
1. Created Project Files

Dockerfile

docker-compose.yml

app.js

package.json

db-test.js

2. Built and Ran Containers
docker-compose up --build

3. Verified Running Containers
docker ps

4. Tested Internal Communication

Accessed the backend container and pinged the PostgreSQL container:

docker exec -it backend sh
ping db

5. Tested PostgreSQL Connection

Inside the backend container, verified that the Node.js app could connect to the database:

node db-test.js
