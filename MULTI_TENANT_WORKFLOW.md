# Multi-Tenant Workflow Guide

## 🎯 Overview

This guide explains the complete workflow for deploying the same repository to multiple clients, each with their own domain and content.

## 🏗️ Architecture

```
┌─────────────────────────────────┐
│   Single GitHub Repository     │
│   (smile-architect-global)     │
└──────────────┬──────────────────┘
               │
               │ (Same Code)
               │
    ┌──────────┴──────────┐
    │                     │
    ▼                     ▼
┌─────────┐         ┌─────────┐
│ Vercel │         │ Vercel │
│Project 1│         │Project 2│
│         │         │         │
│ Domain: │         │ Domain: │
│smith.com│         │jones.com│
│         │         │         │
│ Env Var:│         │ Env Var:│
│ Config1 │         │ Config2 │
└─────────┘         └─────────┘
```

**Key Points:**
- ✅ Same codebase (one repo)
- ✅ Different Vercel projects (one per client)
- ✅ Different environment variables (VITE_CLINIC_CONFIG)
- ✅ Different domains (one per client)

## 📋 Step-by-Step Workflow

### Step 1: Prepare Client Configuration

1. **Open CMS Admin Panel**
   - Navigate to `/admin` in your local development
   - Or use the CMS to edit content

2. **Edit Content**
   - Fill in client-specific information:
     - Clinic name
     - Contact details
     - Services
     - Content
     - Social media links

3. **Export Configuration**
   - Click "Copy Minified (for Vercel)" button
   - This copies the JSON to your clipboard
   - Or download as JSON file for backup

### Step 2: Create Vercel Project

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"

2. **Import Repository**
   - Connect your GitHub account
   - Select `smile-architect-global` repository
   - Click "Import"

3. **Configure Project**
   - Project Name: `client-smith-dental` (or client name)
   - Framework Preset: Vite (auto-detected)
   - Root Directory: `smile-architect-global` (if in subdirectory)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)

### Step 3: Set Environment Variable

1. **Before Deploying, Add Environment Variable**
   - In Vercel project settings, go to **Settings > Environment Variables**
   - Click "Add New"

2. **Add Variable:**
   - **Name:** `VITE_CLINIC_CONFIG`
   - **Value:** Paste the JSON you copied from CMS (minified)
   - **Environments:** Select all (Production, Preview, Development)
   - Click "Save"

3. **Example Value:**
   ```json
   {"clinic":{"name":"Smith Dental Care","tagline":"Your Family Dentist","logo":{"initial":"S"}},"contact":{"phone":"+1 (555) 123-4567","email":"info@smithdental.com","address":{"street":"456 Main St","city":"Los Angeles","state":"CA","zip":"90001"},"hours":{"weekdays":"Mon-Fri: 8AM - 6PM"}},"social":{"facebook":"https://facebook.com/smithdental"}}
   ```

### Step 4: Deploy

1. **Deploy Project**
   - Click "Deploy" in Vercel
   - Wait for build to complete
   - Your site will be live at `client-smith-dental.vercel.app`

### Step 5: Add Custom Domain

1. **Add Domain**
   - Go to **Settings > Domains**
   - Click "Add Domain"
   - Enter client's domain: `smithdental.com`
   - Follow DNS configuration instructions

2. **Configure DNS**
   - Add CNAME record pointing to Vercel
   - Wait for DNS propagation
   - Domain will be active

### Step 6: Repeat for Next Client

For each new client:
1. Use CMS to create their config
2. Create new Vercel project (same repo)
3. Set different `VITE_CLINIC_CONFIG`
4. Add their custom domain
5. Deploy

## 🔄 Updating Content

### Update Single Client

1. **Edit in CMS**
   - Go to `/admin` (or use CMS)
   - Make changes
   - Copy new config JSON

2. **Update Vercel**
   - Go to client's Vercel project
   - Settings > Environment Variables
   - Edit `VITE_CLINIC_CONFIG`
   - Paste new JSON
   - Redeploy

### Update All Clients (Code Changes)

1. **Push Code Update**
   - Make changes to codebase
   - Push to GitHub main branch

2. **Auto-Deploy**
   - All Vercel projects auto-redeploy
   - Each keeps their own config
   - All clients get the update

## 📊 Managing Multiple Clients

### Recommended Organization

**Vercel Projects:**
```
vercel-dashboard/
├── smith-dental-care
│   ├── Domain: smithdental.com
│   └── Config: Smith Dental config
│
├── jones-family-dentistry
│   ├── Domain: jonesdentistry.com
│   └── Config: Jones Dentistry config
│
└── premium-smiles-clinic
    ├── Domain: premiumsmiles.com
    └── Config: Premium Smiles config
```

**Keep Track:**
- Use a spreadsheet or database to track:
  - Client name
  - Vercel project name
  - Domain
  - Config JSON (or reference to file)
  - Last updated date

## 🎨 CMS Workflow

### Using the CMS Admin Panel

1. **Access:** Navigate to `/admin` route
2. **Unlock:** Click "Unlock Editing"
3. **Edit:** Make changes in tabs
4. **Export:** 
   - Click "Copy for Vercel" (minified JSON)
   - Or "Download JSON" (formatted file)
5. **Use:** Paste into Vercel environment variable

### CMS Features

- ✅ **Basic Info:** Clinic name, tagline
- ✅ **Contact:** Phone, email, address, hours
- ✅ **Services:** Manage service list
- ✅ **Content:** Hero text, about section
- ✅ **Social Media:** Facebook, Instagram links
- ✅ **Export:** Copy or download config JSON

## 💡 Best Practices

1. **Version Control Configs**
   - Save config JSON files in a separate folder
   - Name them: `config-smith-dental.json`
   - Keep them in version control (private repo)

2. **Test Before Deploying**
   - Test config locally first
   - Use preview deployments in Vercel
   - Verify all content displays correctly

3. **Document Client Info**
   - Keep a spreadsheet with:
     - Client name
     - Domain
     - Vercel project URL
     - Config file location
     - Contact person

4. **Backup Configs**
   - Download configs regularly
   - Store in secure location
   - Version control if possible

## 🆘 Troubleshooting

**Issue: Config not loading**
- Check environment variable name: `VITE_CLINIC_CONFIG`
- Verify JSON is valid (use JSON validator)
- Check Vercel build logs for errors

**Issue: Wrong content showing**
- Clear Vercel cache
- Trigger new deployment
- Verify environment variable is set correctly

**Issue: Changes not appearing**
- Ensure you redeployed after changing env var
- Check that env var is set for correct environment
- Verify JSON was pasted correctly (no extra quotes)

## ✅ Summary

**Your Approach is Perfect!**

- ✅ Same repository = Easy maintenance
- ✅ Different Vercel projects = Client isolation
- ✅ Environment variables = Easy content management
- ✅ Different domains = Professional setup
- ✅ CMS panel = Easy content editing

This is a scalable, maintainable solution that will work great for hundreds of clients!
