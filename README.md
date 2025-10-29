# CloudFunc – Node.js + PostgreSQL (Docker Compose)

## Overview
A simple project that runs a Node.js backend and a PostgreSQL database using Docker Compose.
Both containers communicate through Docker's internal network.

## Steps Performed

1. **Created project files**
   - `Dockerfile`
   - `docker-compose.yml`
   - `app.js`
   - `package.json`
   - `db-test.js`

2. **Built and ran containers**
   ```bash
   docker-compose up --build
   Verified running containers

3. Verified running containers
 ```bash
   docker ps

4.Tested container connectivity

```bash
docker exec -it backend sh
ping db


