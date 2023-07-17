#!/bin/bash

# Wait for PostgreSQL to be available
while ! nc -z postgres 5432; do
  sleep 1
done

# Run the initial command only during the initial build
if [ ! -f /app/initial_build_completed ]; then
  # Run your initial command here
  npx prisma migrate dev --name init

  # Create a file to mark the initial build as completed
  touch /app/initial_build_completed
fi

# Start your application
exec "$@"
