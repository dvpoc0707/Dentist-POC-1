# Multi-Tenant Deployment Guide

This guide explains how to deploy multiple client websites from a single codebase using Vercel.

## 🎯 Approach: Multi-Tenant Configuration System

Instead of using separate branches (which becomes unmaintainable), we use a **configuration-based approach**:

- ✅ **Single codebase** - Easy to maintain and update
- ✅ **Client-specific configs** - Each client gets their own configuration
- ✅ **Separate Vercel projects** - Each client gets their own domain
- ✅ **Easy updates** - Update once, deploy to all clients

## 📋 Deployment Options

### Option 1: Environment Variables (Recommended)

**Best for:** Quick setup, easy to manage

1. **Create a new Vercel project** for each client
2. **Connect the same GitHub repository** to each Vercel project
3. **Set environment variables** in each Vercel project:

```bash
# In Vercel Dashboard > Settings > Environment Variables
VITE_CLINIC_CONFIG='{"clinic":{"name":"Smith Dental","tagline":"Your Family Dentist","logo":{"initial":"S"}},"contact":{"phone":"+1 (555) 123-4567","email":"info@smithdental.com","address":{"street":"456 Main St","city":"Los Angeles","state":"CA","zip":"90001"}},...}'
```

4. **Assign custom domain** to each Vercel project

**Pros:**
- No code changes needed
- Easy to update via Vercel dashboard
- Can use Vercel's environment variable management

**Cons:**
- Large JSON strings in environment variables
- Harder to version control configs

### Option 2: Client Config Files

**Best for:** Version-controlled configs, easier to manage

1. **Create client config file** in `src/config/clients/[client-id].ts`
2. **Update config loader** to include the new client
3. **Create Vercel project** and set environment variable:

```bash
VITE_CLIENT_ID=smith-dental
```

4. **Deploy** - Vercel will build with the correct config

**Pros:**
- Configs are version controlled
- Easier to review changes
- Can use TypeScript for type safety

**Cons:**
- Requires code changes for new clients
- Need to update config loader

### Option 3: CMS/API Integration (Advanced)

**Best for:** Many clients, dynamic updates

1. **Set up a CMS** (Strapi, Contentful, or custom API)
2. **Store client configs** in the CMS
3. **Fetch config at build time** or runtime
4. **Use Vercel environment variables** to point to client:

```bash
VITE_CLIENT_ID=smith-dental
VITE_CMS_API_URL=https://your-cms.com/api
```

## 🚀 Step-by-Step: Deploying a New Client

### Using Environment Variables (Option 1)

1. **Prepare the config JSON:**
   ```json
   {
     "clinic": {
       "name": "Smith Dental Care",
       "tagline": "Your Family Dentist",
       "logo": { "initial": "S" }
     },
     "contact": {
       "phone": "+1 (555) 123-4567",
       "email": "info@smithdental.com",
       "address": {
         "street": "456 Main Street",
         "city": "Los Angeles",
         "state": "CA",
         "zip": "90001"
       },
       "hours": {
         "weekdays": "Mon-Fri: 8AM - 6PM",
         "saturday": "Saturday: 9AM - 3PM",
         "sunday": "Sunday: Closed"
       }
     },
     "social": {
       "facebook": "https://facebook.com/smithdental",
       "instagram": "https://instagram.com/smithdental"
     }
   }
   ```

2. **Create Vercel project:**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project settings

3. **Set environment variable:**
   - Go to Project Settings > Environment Variables
   - Add `VITE_CLINIC_CONFIG` with your JSON (minified)
   - Make sure to select all environments (Production, Preview, Development)

4. **Deploy:**
   - Vercel will automatically deploy
   - Or trigger a new deployment manually

5. **Add custom domain:**
   - Go to Project Settings > Domains
   - Add your client's domain (e.g., `smithdental.com`)
   - Configure DNS as instructed

### Using Config Files (Option 2)

1. **Create client config:**
   ```bash
   cp src/config/clients/example.ts src/config/clients/smith-dental.ts
   ```

2. **Edit the config file** with client-specific data

3. **Update config loader** (if needed):
   ```typescript
   // src/config/index.ts
   const clientConfigs: Record<string, () => Promise<{ default: ClinicConfig }>> = {
     example: () => import("./clients/example"),
     "smith-dental": () => import("./clients/smith-dental"), // Add this
   };
   ```

4. **Create Vercel project** and set:
   ```bash
   VITE_CLIENT_ID=smith-dental
   ```

5. **Deploy and add domain** (same as Option 1)

## 🔧 Vercel Configuration

### vercel.json (Optional)

You can create a `vercel.json` for project-specific settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "VITE_CLIENT_ID": "client-id-here"
  }
}
```

### Branch-based Deployments

If you want to use branches (not recommended, but possible):

1. Create a branch for each client: `client-smith-dental`
2. In Vercel, create a project linked to that branch
3. Set environment variables per project
4. Each branch deploys to its own domain

**Note:** This approach becomes hard to maintain with many clients.

## 📝 Managing Multiple Clients

### Recommended Structure

```
vercel-projects/
├── smile-studio-default (main demo)
├── smith-dental-care
├── jones-family-dentistry
└── ...
```

Each Vercel project:
- Points to the same GitHub repo
- Has its own `VITE_CLINIC_CONFIG` or `VITE_CLIENT_ID`
- Has its own custom domain
- Deploys independently

### Updating All Clients

When you need to update the codebase:

1. **Push changes** to main branch
2. **Vercel automatically redeploys** all projects
3. Each project uses its own config, so content stays client-specific

### Updating a Single Client's Config

**Option 1 (Env Vars):**
- Go to client's Vercel project
- Update `VITE_CLINIC_CONFIG` environment variable
- Redeploy

**Option 2 (Config Files):**
- Edit `src/config/clients/[client-id].ts`
- Commit and push
- Vercel auto-deploys

## 🎨 CMS Panel (Future Enhancement)

For a full CMS solution, consider:

1. **Admin Panel** (`/admin` route)
   - Login system
   - Form to edit clinic config
   - Image upload
   - Preview changes

2. **Backend API**
   - Store configs in database
   - Serve configs via API
   - Handle image uploads

3. **Build-time Integration**
   - Fetch configs during Vercel build
   - Generate static sites per client

## 📊 Comparison: Branch vs Config Approach

| Aspect | Branch Approach | Config Approach ✅ |
|--------|----------------|---------------------|
| Maintenance | Hard (many branches) | Easy (single codebase) |
| Updates | Manual merge to each | Automatic to all |
| Scalability | Poor (100+ branches?) | Excellent |
| Version Control | Messy | Clean |
| Deployment | Complex | Simple |
| Client Isolation | Good | Good (via config) |

## ✅ Recommended Workflow

1. **Start with Option 1** (Environment Variables) for quick setup
2. **Move to Option 2** (Config Files) as you scale
3. **Consider Option 3** (CMS) when you have 50+ clients

## 🆘 Troubleshooting

**Issue:** Config not loading
- Check environment variable name (must start with `VITE_`)
- Verify JSON is valid
- Check Vercel build logs

**Issue:** Wrong config showing
- Clear Vercel cache
- Trigger new deployment
- Verify environment variables are set for correct environment

**Issue:** Images not loading
- Ensure image paths are correct
- Check if images are in `public/` folder
- Verify image URLs in config

## 📚 Additional Resources

- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
