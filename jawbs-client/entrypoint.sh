#!/bin/bash

# Copy node_modules from cache to app node_modules (for dynamic node_modules)
rsync -arv /usr/src/cache/node_modules/. /usr/src/app/node_modules/

# Start your application
exec npm run dev
