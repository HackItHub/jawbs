#!/bin/bash

# Copy node_modules from cache to app node_modules
rsync -arv /usr/src/cache/node_modules/. /usr/src/app/node_modules/

# Wait for PostgreSQL to be available
while true; do
  if nc -z postgres 5432; then
    # PostgreSQL is available, break the loop
    break
  fi
  sleep 1
done

npm run generate

# Run the initial command only during the initial build
if [ ! -f /initial_build_completed ]; then
  # Run your initial command here
  npm run migrate

  # Create a file to mark the initial build as completed
  touch /initial_build_completed
fi

# Build dist file and start application

exec npm run dev:build
