# Health Overview
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dev

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Production

```bash
npm run build
# and
npm start 
```

# Deploment with Docker 

## Generate Image

```bash
docker build -t next-app . 
```

## Run Image 

```bash
docker run --name=next-app -p 3000:3000 next-app 
``` 


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.