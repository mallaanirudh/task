# CloudFunc – Node.js + PostgreSQL (Docker Compose)

## Overview
A simple project that runs a Node.js backend and a PostgreSQL database using Docker Compose.  
Both containers communicate through Docker’s internal network.

---

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
3.**Verify running containers**
        `docker ps`
4.**docker exec -it backend sh**
`ping db`
5.**Tested PostgreSQL connection**  
`node db-test.js`




