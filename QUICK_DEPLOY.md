# 🚀 Quick Deploy Guide

## Deploy to Vercel in 3 Steps

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Deploy Beloved Story website"
git remote add origin https://github.com/avi123655/project-demo1.git
git branch -M main
git push -u origin main
```

### Step 2: Go to Vercel
Visit: **https://vercel.com/new**

### Step 3: Import & Deploy
1. Click "Import Git Repository"
2. Paste: `https://github.com/avi123655/project-demo1`
3. Click "Import"
4. Click "Deploy"
5. Done! 🎉

---

## Alternative: Use Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## Your Live URL
After deployment, your site will be available at:
- `https://project-demo1.vercel.app`

You can also add a custom domain like `belovedstory.in` in Vercel settings.

---

**That's it! Your Beloved Story website is now live! ✨**
