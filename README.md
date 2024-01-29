# tabnine-recruitment-task
 

## Prerequisites
1. Docker
2. Node.js
3. Yarn

## Install
1. cd to the project folder
2. Run `yarn`
3. Run `yarn build`
4. Run `docker-compose up -d`
5. Run `yarn start`


## Endpoints
1. `POST /api/queue/QUEUE_NAME` - add new task to specific queue
2. `GET /api/queue/QUEUE_NAME/?timeout=10` - get first item from specific queue