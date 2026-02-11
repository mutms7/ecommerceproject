# GitHub Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `ecommerceproject`
3. Description: "Modern ecommerce application built with Next.js"
4. Keep it as Public or Private (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, run these commands in the terminal from the `ecommerceproject` directory:

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/ecommerceproject.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Alternative: Using GitHub CLI

If you want to use GitHub CLI in the future, you can install it:
- Windows: `winget install --id GitHub.cli`
- Or download from: https://cli.github.com/

Then you could create repos directly from the command line:
```bash
gh repo create ecommerceproject --public --source=. --remote=origin --push
```