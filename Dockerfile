# Docker file for server only to use it in fly.io

FROM node:16

ENV SECRET=
ENV DATABASE_URL=
ENV AUTH0_ISSUER_URL=
ENV AUTH0_AUDIENCE=


RUN apt install git -y
RUN git clone https://github.com/estarossa0/transcendence.git

WORKDIR /transcendence/server
RUN git checkout dev

RUN npm install
RUN npx prisma migrate dev --name init
RUN npm run build
CMD ["npm", "run", "start:prod"]

EXPOSE 3000