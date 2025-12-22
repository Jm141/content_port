# Deployment Guide: Next.js Application on Render

This guide will walk you through deploying your Next.js application to [Render](https://render.com/).

## Prerequisites

- A GitHub, GitLab, or Bitbucket account with your project repository
- A Render account (sign up at [render.com](https://render.com/))
- Node.js and npm/yarn installed locally (for local development)

## Deployment Steps

### 1. Push Your Code to a Git Repository

If you haven't already, push your code to a Git repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

### 2. Sign in to Render

1. Go to [dashboard.render.com](https://dashboard.render.com/)
2. Sign up or log in to your Render account

### 3. Create a New Web Service

1. Click the "New +" button in the top navigation
2. Select "Web Service"
3. Connect your GitHub/GitLab/Bitbucket account if prompted
4. Select your repository

### 4. Configure Your Service

1. **Name**: Enter a name for your service (e.g., "my-portfolio")
2. **Region**: Select the region closest to your users
3. **Branch**: Select the branch you want to deploy (usually `main` or `master`)
4. **Build Command**: `npm install && npm run build`
5. **Start Command**: `npm start`
6. **Plan**: Select "Free" (or choose a paid plan for production)

### 5. Environment Variables

If your app uses environment variables (like API keys or database URLs):

1. Click on the "Environment" tab
2. Add each variable as a key-value pair
3. For sensitive data, mark them as "Secret"

### 6. Deploy

1. Click "Create Web Service"
2. Render will automatically start building and deploying your application
3. Monitor the build logs in real-time

### 7. Access Your Deployed App

Once deployment is complete, you'll see a URL where your app is live (e.g., `https://your-app-name.onrender.com`)

## Custom Domain (Optional)

To use a custom domain:

1. Go to your service in the Render dashboard
2. Click on "Settings"
3. Under "Custom Domains", click "Add Custom Domain"
4. Follow the instructions to configure your DNS settings

## Automatic Deployments

By default, Render will automatically deploy new changes when you push to your connected branch. You can configure this in the "Auto-Deploy" section of your service settings.

## Troubleshooting

- **Build Failures**: Check the build logs in the Render dashboard for specific error messages
- **Environment Variables**: Ensure all required environment variables are set in the Render dashboard
- **Port Binding**: Next.js automatically uses port 3000, which is the default for Render
- **Memory Issues**: If you encounter memory issues on the free tier, consider upgrading to a paid plan

## Need Help?

- [Render Documentation](https://render.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Render Status Page](https://status.render.com/)
