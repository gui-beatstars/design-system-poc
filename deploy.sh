#!/bin/bash

# Deploy Storybook to GitHub Pages
echo "🚀 Building Storybook..."
npm run build-storybook

echo "📁 Copying Storybook files to root for GitHub Pages..."
cp -r storybook-static/* .

echo "📝 Committing and pushing to GitHub..."
git add .
git commit -m "Deploy Storybook to GitHub Pages - $(date)"
git push origin main

echo "✅ Deployment complete! Your Storybook will be available at:"
echo "   https://gui-beatstars.github.io/design-system-poc/"
echo "   https://gui-beatstars.github.io/design-system-poc/index.json"
