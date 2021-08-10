FROM ubi8/ubi:latest
#
ENV  PORT=3000
#
MAINTAINER Sebastian Andreoletti <andreole@ar.ibm.com>
LABEL      description="*** test node.js server ***"
#
ADD     ./package.json ./
ADD     ./server.js    ./
ADD     ./.env         ./
#
RUN        dnf install -y python3 \
        && yum install -y make nodejs  \
        && yum clean all
#
WORKDIR /
EXPOSE ${PORT}
#
ENTRYPOINT  npm run start
#