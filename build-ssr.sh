#!/bin/bash

# Build SSR application
echo "Building SSR application..."

# Build client
echo "Building client..."
vite build --outDir dist/client

# Build server
echo "Building server..."
vite build --ssr src/entry-server.tsx --outDir dist/server

echo "✅ SSR build complete!"
echo "Run 'npm run preview:ssr' to test the production build"
