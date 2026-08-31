#!/usr/bin/env bash

# set of command
#start long running process at the end that is passed from CMD
rsync -a -v --ignore-existing /app/data/ /mount/data/
mv /mount/data/geth/LOCK /mount/data/geth/xLOCK

exec "$@"
