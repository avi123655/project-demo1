# 🔄 How to Update Your Website on Vercel

Vercel automatically redeploys your website whenever you push changes to GitHub!

---

## 📝 Quick Update Process

### Step 1: Make Your Changes
Edit any files (index.html, styles.css, script.js, etc.)

### Step 2: Push to GitHub
Run these commands in your terminal:

```bash
git add .
git commit -m "Update website - describe your changes"
git push origin main
```

### Step 3: Vercel Auto-Deploys
- Vercel detects the push automatically
- Starts building your site (takes 30-60 seconds)
- Deploys to production automatically
- Your site is updated! 🎉

---

## 🎯 Detailed Steps

### 1️⃣ Check What Changed
```bash
git status
```
This shows which files you modified.

### 2️⃣ Add All Changes
```bash
git add .
```
Or add specific files:
```bash
git add index.html styles.css
```

### 3️⃣ Commit Your Changes
```bash
git commit -m "Your update message here"
```

Examples:
- `git commit -m "Update product prices"`
- `git commit -m "Fix contact section styling"`
- `git commit -m "Add new product images"`

### 4️⃣ Push to GitHub
```bash
git push origin main
```

### 5️⃣ Watch Vercel Deploy
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your project: `project-demo1`
3. You'll see the deployment in progress
4. Wait for "Ready" status (30-60 seconds)
5. Click "Visit" to see your updated site

---

## 🚀 One-Command Update

You can combine all steps:

```bash
git add . && git commit -m "Update website" && git push origin main
```

---

## 📱 Update from Vercel Dashboard

### Method 1: Redeploy Current Version
1. Go to https://vercel.com/dashboard
2. Click your project: `project-demo1`
3. Go to "Deployments" tab
4. Click "..." on latest deployment
5. Click "Redeploy"

### Method 2: Trigger from Git
1. Make changes in GitHub directly
2. Edit files in GitHub web interface
3. Commit changes
4. Vercel auto-deploys

---

## 🔍 Check Deployment Status

### Via Vercel Dashboard:
1. Visit: https://vercel.com/dashboard
2. Click your project
3. See deployment status:
   - 🟡 Building
   - 🟢 Ready
   - 🔴 Error

### Via Git:
```bash
git log --oneline -5
```
Shows your recent commits.

---

## ⚡ Instant Preview Deployments

Every push creates:
- **Preview URL**: `https://project-demo1-xxx.vercel.app`
- **Production URL**: `https://project-demo1.vercel.app`

Preview URLs are created for every commit, production updates automatically!

---

## 🛠️ Common Update Scenarios

### Update Text Content
1. Edit `index.html`
2. Change text, prices, descriptions
3. Push to GitHub
4. Vercel redeploys automatically

### Update Styles
1. Edit `styles.css`
2. Change colors, fonts, layouts
3. Push to GitHub
4. Vercel redeploys automatically

### Update Animations
1. Edit `script.js`
2. Modify animations, interactions
3. Push to GitHub
4. Vercel redeploys automatically

### Update Multiple Files
1. Edit all files you need
2. Run: `git add .`
3. Run: `git commit -m "Multiple updates"`
4. Run: `git push origin main`
5. Vercel redeploys everything

---

## 🔄 Rollback to Previous Version

If something breaks:

1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find a working version
4. Click "..." → "Promote to Production"

Or via Git:
```bash
git log --oneline
git revert <commit-hash>
git push origin main
```

---

## 📊 Monitor Your Deployments

### Vercel Dashboard Shows:
- Build time
- Deployment status
- Error logs (if any)
- Performance metrics
- Visitor analytics

### Check Logs:
1. Go to deployment in Vercel
2. Click "View Function Logs"
3. See any errors or warnings

---

## 🎯 Best Practices

### ✅ Do:
- Test changes locally first
- Write clear commit messages
- Push small, frequent updates
- Check Vercel dashboard after pushing
- Test the live site after deployment

### ❌ Don't:
- Push untested code
- Make huge changes at once
- Forget to commit before pushing
- Ignore deployment errors

---

## 🆘 Troubleshooting

### Deployment Failed?
1. Check Vercel dashboard for error logs
2. Verify all files are committed
3. Check for syntax errors in code
4. Try redeploying from Vercel dashboard

### Changes Not Showing?
1. Clear browser cache (Ctrl+Shift+R)
2. Check if deployment finished
3. Verify correct URL (production vs preview)
4. Wait a few minutes for CDN to update

### Git Push Failed?
```bash
git pull origin main
git push origin main
```

---

## 📞 Quick Reference

### Update Website:
```bash
git add .
git commit -m "Update message"
git push origin main
```

### Check Status:
```bash
git status
git log --oneline -5
```

### View Your Site:
- Production: https://project-demo1.vercel.app
- Dashboard: https://vercel.com/dashboard

---

## 🎊 That's It!

Your Beloved Story website updates automatically on Vercel whenever you push to GitHub!

**Current Status:**
- ✅ Code pushed to GitHub
- ✅ Vercel connected to repository
- ✅ Auto-deployment enabled
- ✅ Ready for updates!

---

**Made with ❤️ by Vansh WebDev**
