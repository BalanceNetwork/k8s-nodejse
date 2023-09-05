FROM node:alpine

RUN apk add git autoconf automake g++ make --no-cache

WORKDIR /home

COPY run.sh .

ENTRYPOINT [ "./run.sh" ]
