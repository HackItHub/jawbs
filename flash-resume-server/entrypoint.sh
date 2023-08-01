#!/bin/bash

# Wait for PostgreSQL to be available
while true; do
  if nc -z postgres 5432; then
    # PostgreSQL is available, break the loop
    break
  fi
  sleep 1
done

# Run the initial command only during the initial build
if [ ! -f /initial_build_completed ]; then
  # Run your initial command here
  npm run generate
  npm run migrate

  # Create a file to mark the initial build as completed
  touch /initial_build_completed
fi

# Start your application
exec npm run dev
