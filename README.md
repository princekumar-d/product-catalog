
## Getting Started


```bash
npm install
# or
yarn install
```

To start the server:

```bash
npm run build
# or
yarn build

npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the product results page.

## Docker

### Create docker iamge
docker build . -t product-app

### Run docker
docker run -p 3000:3000 --name productApp -d product-app

### Docker compose
docker-compose up -d -t 100

Open [http://localhost:3000](http://localhost:3000) with your browser to see the product results page.


### Docker image for graphql api
##### For local dev mounting and running the grpahql api

docker run -p 3001:3001 --name product-api -d chrismns/tech-test-mock-server:0.1.0