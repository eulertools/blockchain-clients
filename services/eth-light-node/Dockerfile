FROM ubuntu:18.04

# Prerequisites
RUN apt update
RUN apt install git make wget build-essential -y

WORKDIR /app
RUN wget https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.10.14-11a3a350.tar.gz
RUN tar -zxvf geth-linux-amd64-1.10.14-11a3a350.tar.gz
RUN mv /app/geth-linux-amd64-1.10.14-11a3a350/geth /usr/bin/geth
RUN chmod +x /usr/bin/geth

COPY config.toml .

EXPOSE 30303 8546 8545
CMD geth --config ./config.toml --datadir /mount/data
