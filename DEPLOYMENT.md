# Deployment Guide - Beloved Story

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub

If you haven't already pushed your code to the repository, run these commands:

```bash
git init
git add .
git commit -m "Initial commit - Beloved Story website"
git remote add origin https://github.com/avi123655/project-demo1.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

#### Option A: One-Click Deploy (Easiest)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Paste your GitHub URL: `https://github.com/avi123655/project-demo1`
4. Click "Import"
5. Vercel will auto-detect it as a static site
6. Click "Deploy"
7. Wait 30-60 seconds
8. Your site is live! 🎉

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Deploy to production
vercel --prod
```

#### Option C: GitHub Integration (Automatic Deployments)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Select "Import Git Repository"
4. Choose your GitHub account
5. Select `avi123655/project-demo1`
6. Click "Import"
7. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (leave empty)
   - **Output Directory**: `./`
8. Click "Deploy"

### Step 3: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `belovedstory.in`)
4. Follow Vercel's DNS configuration instructions

## 📋 Pre-Deployment Checklist

- [x] All files created (index.html, styles.css, script.js)
- [x] vercel.json configuration added
- [x] .gitignore file created
- [x] README.md updated
- [x] All external CDN links working
- [x] Images loading from Unsplash
- [x] Responsive design tested
- [x] Animations working smoothly

## 🔗 Expected URLs

After deployment, you'll get:
- **Preview URL**: `https://project-demo1-xxx.vercel.app`
- **Production URL**: `https://project-demo1.vercel.app`

## 🛠️ Troubleshooting

### Issue: Site not loading
- Check if all files are in the root directory
- Verify vercel.json is present
- Check Vercel deployment logs

### Issue: Animations not working
- Ensure CDN links are accessible
- Check browser console for errors
- Verify GSAP and Lenis scripts are loading

### Issue: Images not showing
- Unsplash URLs should work automatically
- Check network tab in browser DevTools
- Verify image URLs are correct

## 📱 Testing After Deployment

1. Test on desktop browsers (Chrome, Firefox, Safari, Edge)
2. Test on mobile devices (iOS Safari, Chrome Mobile)
3. Test smooth scrolling
4. Test all navigation links
5. Test product card animations
6. Test contact section visibility
7. Verify golden shimmer effects

## 🎯 Performance Tips

Your site is already optimized with:
- Lazy loading images
- Optimized animations
- CDN-hosted libraries
- Minimal file size
- Mobile-responsive design

## 📞 Support

If you encounter any issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Visit [Vercel Support](https://vercel.com/support)
- Contact: hello@belovedstory.in

---

**Made with ❤️ by Vansh WebDev**
