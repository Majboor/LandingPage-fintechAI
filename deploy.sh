#!/bin/bash

# Deploy script for Cloudflare Pages
echo "🚀 Starting deployment to Cloudflare Pages..."

# Clean install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in the .next directory"
    echo "🌐 Ready for deployment to Cloudflare Pages"
else
    echo "❌ Build failed!"
    exit 1
fi 