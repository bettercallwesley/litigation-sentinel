# How to Launch LitigationSentinel.com

**For Wes — no terminal commands required after the initial setup.**

---

## What You Have Right Now

Your site is fully built and runs at `localhost:3000` on your Mac. To put it on the internet at **www.LitigationSentinel.com**, you need two things:

1. **Buy the domain** (LitigationSentinel.com — confirmed available)
2. **Deploy to Vercel** (free hosting, built by the same team that makes Next.js)

That's it. No servers, no AWS, no DevOps. Vercel handles everything.

---

## Step 1: Buy the Domain (~2 minutes)

Go to **[Namecheap.com](https://www.namecheap.com)** (or your preferred registrar).

1. Search for `LitigationSentinel.com`
2. Add to cart → Checkout
3. **Turn OFF** "WhoisGuard" auto-renew spam, domain privacy is fine to keep on
4. Should cost ~$10-13/year

> You'll configure the DNS in Step 3 after Vercel is set up. Don't touch DNS settings yet.

---

## Step 2: Deploy to Vercel (~5 minutes)

### 2a. Push your code to GitHub

If you don't already have this repo on GitHub:

1. Go to [github.com/new](https://github.com/new)
2. Name it `caseglide-platform` (or `litigation-sentinel` — doesn't matter, it's private)
3. Set to **Private**
4. Don't add README or .gitignore (you already have them)
5. Follow the instructions GitHub shows to "push an existing repository" — or just tell me and I'll run the git commands for you

### 2b. Connect to Vercel

1. Go to **[vercel.com](https://vercel.com)** → Sign up with your GitHub account
2. Click **"Add New Project"**
3. It will show your GitHub repos — select **caseglide-platform**
4. Vercel auto-detects Next.js. Leave all settings as default.
5. Click **"Deploy"**
6. Wait ~60 seconds. Done. Your site is live at `caseglide-platform.vercel.app` (or similar)

### 2c. Verify it works

Visit the Vercel URL it gives you. You should see the Litigation Sentinel home page with all your articles. Click through:
- Home page → articles render
- `/briefing` → assessment starts
- `/council` → overview loads
- `/trial` → 5-tab platform loads

---

## Step 3: Connect Your Domain (~3 minutes)

### 3a. Add domain in Vercel

1. In your Vercel dashboard, click on your project
2. Go to **Settings → Domains**
3. Type `litigationsentinel.com` → click **Add**
4. Vercel will also add `www.litigationsentinel.com` automatically
5. Vercel shows you **DNS records** to add — you'll need these for the next step

### 3b. Point your domain to Vercel

Go back to Namecheap (or wherever you bought the domain):

1. Go to **Domain List → Manage** next to LitigationSentinel.com
2. Click **Advanced DNS**
3. Delete any existing records
4. Add the records Vercel told you to add. Usually it's one of these:

**Option A (Recommended — Nameservers):**
- Change nameservers to Vercel's nameservers (Vercel will tell you exactly what to enter)

**Option B (CNAME):**
- Add a CNAME record: Host = `www`, Value = `cname.vercel-dns.com`
- Add an A record: Host = `@`, Value = `76.76.21.21`

5. Save. DNS changes take 5-30 minutes to propagate (sometimes up to 48 hours, but usually fast).

### 3c. Verify

After a few minutes, visit **www.LitigationSentinel.com** — your site should be live with HTTPS automatically enabled.

---

## Step 4: Set Up Analytics (Optional, 2 minutes)

Vercel includes free analytics:

1. In your Vercel dashboard → your project → **Analytics** tab
2. Click **Enable**
3. You'll see page views, visitor countries, top pages, etc.

For Google Analytics (if you want it):
- I can add the GA tracking code to the site. Just give me your GA Measurement ID (starts with `G-`).

---

## What Happens When You Push Updates

After the initial deploy, any time you push code to GitHub, Vercel automatically rebuilds and deploys your site within ~60 seconds. So if I update articles or fix something in Claude Code:

1. I commit the changes
2. You push to GitHub (or I can push for you)
3. Site updates automatically — no manual deploy needed

---

## Cost Summary

| Item | Cost |
|------|------|
| Domain (LitigationSentinel.com) | ~$12/year |
| Vercel Hosting (Hobby plan) | Free |
| SSL Certificate | Free (automatic) |
| CDN / Global Distribution | Free (included) |
| **Total** | **~$12/year** |

If traffic grows significantly (unlikely during marketing campaign phase), Vercel Pro is $20/month with higher limits.

---

## Quick Reference

| What | Where |
|------|-------|
| Your code | `/Users/wesleytodd/Desktop/Claude Code/caseglide-platform/` |
| Local preview | `http://localhost:3000` (run `npm run dev` in terminal) |
| Vercel dashboard | vercel.com → your project |
| Domain management | Namecheap (or your registrar) |
| DNS propagation check | [dnschecker.org](https://dnschecker.org) |

---

## Need Help?

Tell me to:
- **"Push to GitHub"** — I'll run the git commands
- **"Add Google Analytics"** — Give me your GA ID and I'll wire it in
- **"Update an article"** — I'll edit the content and commit
- **"Add a new page"** — I'll build it and deploy

The whole deploy process should take under 15 minutes from start to finish.
