# Multi-Tenant Setup Guide

## 🎯 Overview

This project uses a **configuration-based multi-tenant system** instead of separate branches. This approach is:

- ✅ **More maintainable** - Single codebase, easy updates
- ✅ **More scalable** - Can handle hundreds of clients
- ✅ **Easier to deploy** - Each client gets their own Vercel project with custom domain

## 🏗️ Architecture

```
Single Codebase
    ↓
Configuration System
    ↓
Multiple Vercel Projects (one per client)
    ↓
Custom Domains (one per client)
```

## 📦 How It Works

1. **Single Repository** - All code lives in one place
2. **Configuration Files** - Each client has their own config (env var or file)
3. **Vercel Projects** - Each client gets a separate Vercel project
4. **Custom Domains** - Each Vercel project gets its own domain

## 🚀 Quick Start: Deploying Your First Client

### Step 1: Create Config JSON

Use the generator script or create manually:

```bash
node scripts/generate-config.js
```

Or create a JSON file:

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
  }
}
```

### Step 2: Create Vercel Project

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure build settings (should auto-detect Vite)

### Step 3: Set Environment Variable

In Vercel project settings:

1. Go to **Settings > Environment Variables**
2. Add new variable:
   - **Name:** `VITE_CLINIC_CONFIG`
   - **Value:** Your JSON (minified)
   - **Environments:** Production, Preview, Development

### Step 4: Deploy

Vercel will automatically deploy. Your client's website is now live!

### Step 5: Add Custom Domain

1. Go to **Settings > Domains**
2. Add your client's domain (e.g., `smithdental.com`)
3. Follow DNS configuration instructions

## 🔄 Deploying Multiple Clients

Repeat the process for each client:

1. Create new Vercel project (same repo)
2. Set different `VITE_CLINIC_CONFIG` 
3. Add different custom domain
4. Deploy

**That's it!** Each client gets their own isolated website.

## 📝 Configuration Options

### Option A: Environment Variables (Recommended for Quick Setup)

**Pros:**
- No code changes needed
- Easy to update via Vercel dashboard
- Quick to set up

**Cons:**
- Large JSON strings
- Not version controlled

**Use when:** You want to deploy quickly, have few clients

### Option B: Config Files (Recommended for Scale)

1. Create file: `src/config/clients/smith-dental.ts`
2. Set env var: `VITE_CLIENT_ID=smith-dental`
3. Deploy

**Pros:**
- Version controlled
- Type-safe (TypeScript)
- Easier to review changes

**Cons:**
- Requires code changes
- Need to update config loader

**Use when:** You have many clients, want version control

## 🎨 Using the Config in Components

Components automatically use the config via the `useClinicConfig` hook:

```tsx
import { useClinicConfig } from "@/hooks/useClinicConfig";

function MyComponent() {
  const config = useClinicConfig();
  
  return (
    <div>
      <h1>{config.clinic.name}</h1>
      <p>{config.contact.phone}</p>
    </div>
  );
}
```

## 🔧 Updating the Codebase

When you update the code:

1. **Push to main branch**
2. **All Vercel projects auto-redeploy**
3. **Each client keeps their own config**

This means:
- ✅ Bug fixes apply to all clients automatically
- ✅ New features available to all clients
- ✅ Client-specific content stays the same

## 📊 Example: 3 Clients

```
GitHub Repo (main branch)
    ├── Vercel Project: "smith-dental"
    │   ├── Domain: smithdental.com
    │   └── Config: Smith Dental info
    │
    ├── Vercel Project: "jones-dentistry"  
    │   ├── Domain: jonesdentistry.com
    │   └── Config: Jones Dentistry info
    │
    └── Vercel Project: "premium-smiles"
        ├── Domain: premiumsmiles.com
        └── Config: Premium Smiles info
```

All three use the same code, but different configs = different websites!

## 🆚 Why Not Branches?

| Issue | Branch Approach | Config Approach ✅ |
|-------|----------------|---------------------|
| **100 clients** | 100 branches = chaos | 100 Vercel projects = organized |
| **Bug fix** | Merge to 100 branches | Push once, all update |
| **New feature** | Merge to 100 branches | Push once, all get it |
| **Maintenance** | Nightmare | Simple |

## 🎯 Best Practices

1. **Start with env vars** for first few clients
2. **Move to config files** as you scale
3. **Use consistent naming** for client IDs
4. **Document client configs** in a spreadsheet or database
5. **Test changes** on a preview deployment first

## 📚 Next Steps

- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions
- Check [src/config/types.ts](./src/config/types.ts) for all config options
- See [src/config/clients/example.ts](./src/config/clients/example.ts) for example config

## ❓ FAQ

**Q: Can I use the same domain for multiple clients?**  
A: No, each client needs their own domain. But you can use Vercel's preview URLs for testing.

**Q: How do I update a client's info?**  
A: Update their `VITE_CLINIC_CONFIG` in Vercel and redeploy, or edit their config file and push.

**Q: What if I need client-specific code changes?**  
A: Use feature flags or conditional rendering based on config. Avoid client-specific code when possible.

**Q: How many clients can I support?**  
A: Unlimited! Vercel supports unlimited projects on paid plans.

**Q: Can clients edit their own content?**  
A: Not yet, but you can build a CMS panel (see DEPLOYMENT.md for ideas).
