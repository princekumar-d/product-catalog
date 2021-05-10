
## Getting Started


```bash
npm install
```

To start the server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

### Create docker iamge
docker build . -t product-app

### Run docker
docker run -p 3000:3000 --name productApp -d product-app

### Docker compose
docker-compose up -d