FROM ubuntu:18.04

# Prerequisites
RUN apt-get update
RUN apt-get install git make wget build-essential rsync grsync -y

WORKDIR /app
RUN wget https://github.com/binance-chain/bsc/releases/download/v1.1.7/geth_linux
RUN mv /app/geth_linux /usr/bin/geth
RUN chmod +x /usr/bin/geth

COPY config.toml .
COPY genesis.json .
COPY entrypoint.sh .
RUN chmod +x /app/entrypoint.sh

EXPOSE 30311 8546 8545
RUN geth --datadir /app/data init /app/genesis.json

ENTRYPOINT ["/app/entrypoint.sh"]
CMD geth --config ./config.toml --datadir /mount/data --syncmode=light --diffsync

