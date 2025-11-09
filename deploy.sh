#!/bin/bash

# Beloved Story - Deployment Script
# This script will push your code to GitHub and deploy to Vercel

echo "🚀 Beloved Story - Deployment Script"
echo "======================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Beloved Story website to Vercel"

# Add remote if not exists
if ! git remote | grep -q origin; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/avi123655/project-demo1.git
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main --force

echo ""
echo "✅ Code pushed to GitHub successfully!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://vercel.com/new"
echo "2. Import your repository: avi123655/project-demo1"
echo "3. Click 'Deploy'"
echo ""
echo "Or use Vercel CLI:"
echo "  npm install -g vercel"
echo "  vercel login"
echo "  vercel --prod"
echo ""
echo "🎉 Your site will be live in ~60 seconds!"
