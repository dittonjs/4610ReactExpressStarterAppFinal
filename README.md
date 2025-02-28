# Phanon 2.0
## Setup
### Prerequesites
- Docker

### First Time Project Setup
#### Create server.env files
- In the project root create a new file called `.env` and copy the values from `.env.example` into it. The example values will probably be good enough
- In the `server` folder create a file called `server.env` and copy the values from `server.example.env` into it. Again, defaults are just fine here.

#### Create and run containers
```bash
./bin/run.sh dev up
```

This will create the images, start the containers, and create the volumes and networks using docker-compose. Some of the services will probably crash because the database hasn't been initialized, but this ok, move on to the next section.

#### Migrate the Database
Run
```bash
docker-compose -f docker-compose.dev.yml exec server yarn migrate-prod
```
This will run the migrations and seeds.

After this, terminate the running containers and rerun `./bin/run.sh dev up`

You should be good to go now!

### Daily Workflow
1. Pull the repo
2. Start the containers `./bin/run.sh dev up`
3. Update dependencies if needed by running `./bin/install_deps.sh`
4. Migrate the database if needed by running `docker-compose -f docker-compose.dev.yml exec server yarn migrate-prod`

### Helpful Details
The repo is setup to use VS Code Dev Containers which create an ssh connection to a running container to allow you edit the code in the container (which will give you intellisense without having to install any dependencies on your host machine).

Look at the /server/package.json file for a bunch of helpful scripts for inspect the database. Run the scripts by running `docker-compose -f docker-compose.dev.yml exec server yarn <script name>`


