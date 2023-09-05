FROM node:alpine

WORKDIR /home

RUN apk add git autoconf automake g++ make --no-cache

ENTRYPOINT ["git", "clone"]

CMD [ "yarn" ]

