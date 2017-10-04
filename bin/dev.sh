#!/usr/bin/env bash

NGROK_PORT=4390

CURRENT=$(pwd)
BINDIR="$(pwd)/bin"
cd $BINDIR

BINARY="ngrok"

if [ ! -f "$BINARY" ]; then
  echo "Unable to find ngrok installation folder"
  echo "About to download and install ngrok..."

  wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
  unzip ngrok-stable-linux-amd64.zip
fi

if [ -f "ngrok-stable-linux-amd64.zip" ]; then
    rm ngrok-stable-linux-amd64.zip
fi

echo "$BINARY http $NGROK_PORT"

cd $CURRENT

./bin/$BINARY http $NGROK_PORT


