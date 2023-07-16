#!/bin/ash

if ! command -v rollup >/dev/null; then
  echo "Installing rollup..."
  npm install -g rollup@2.38
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

npm install -D @types/screeps @types/lodash@3.10.1
