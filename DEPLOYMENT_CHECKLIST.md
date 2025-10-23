# 🚀 SSR Deployment Checklist

Use this checklist to ensure your SSR deployment is production-ready.

## Pre-Deployment

### Code & Configuration
- [ ] Updated `package.json` with SSR scripts
- [ ] Made `build-ssr.sh` executable (`chmod +x build-ssr.sh`)
- [ ] Created `.env` file with production variables
- [ ] Tested SSR locally with `npm run dev:ssr`
- [ ] Built production bundle with `npm run build:ssr`
- [ ] Tested production build with `npm run preview:ssr`

### Testing
- [ ] Verified all pages render with content (view source)
- [ ] Checked meta tags appear correctly
- [ ] Validated structured data on product pages
- [ ] Tested hydration (interactivity works after page load)
- [ ] Ran Lighthouse audit (SEO score 95+)
- [ ] Tested on mobile devices
- [ ] Verified no hydration warnings in console
- [ ] Checked all images load correctly
- [ ] Tested all forms and interactive elements

### SEO Validation
- [ ] Validated structured data: https://validator.schema.org/
- [ ] Tested rich results: https://search.google.com/test/rich-results
- [ ] Checked robots.txt is accessible
- [ ] Verified sitemap.xml is accessible
- [ ] Confirmed canonical URLs are correct
- [ ] Checked Open Graph tags with: https://metatags.io/

## Deployment

### Server Setup
- [ ] Node.js 18+ installed on server
- [ ] PM2 or process manager installed (recommended)
- [ ] Nginx/Apache configured (if needed)
- [ ] SSL certificate installed (HTTPS)
- [ ] Environment variables set
- [ ] Firewall configured to allow traffic
- [ ] Port 5173 accessible (or configured port)

### Build & Deploy
- [ ] Ran `npm run build:ssr` successfully
- [ ] Uploaded `dist/` folder to server
- [ ] Uploaded `server.ts` to server
- [ ] Uploaded `package.json` and `package-lock.json`
- [ ] Ran `npm ci --only=production` on server
- [ ] Started server: `NODE_ENV=production node server.ts`
- [ ] Configured process manager (PM2): `pm2 start server.ts`
- [ ] Set PM2 to start on reboot: `pm2 startup && pm2 save`

### DNS & Domain
- [ ] Domain DNS points to server IP
- [ ] A/AAAA records configured
- [ ] HTTPS redirect configured
- [ ] WWW redirect configured (if needed)
- [ ] CDN configured (optional but recommended)

## Post-Deployment

### Verification
- [ ] Homepage loads and renders correctly
- [ ] All product pages accessible
- [ ] View source shows full HTML content
- [ ] No console errors
- [ ] No 404 errors in network tab
- [ ] Assets (CSS, JS, images) load correctly
- [ ] Forms submit properly
- [ ] Cart functionality works
- [ ] Checkout process works
- [ ] Admin panel accessible (if applicable)

### Performance Testing
- [ ] Run Lighthouse on production URL
- [ ] Check Core Web Vitals
- [ ] Test page load speed (< 2.5s LCP)
- [ ] Test time to first byte (< 600ms)
- [ ] Verify compression is enabled
- [ ] Check asset caching headers

### SEO & Indexing
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for key pages
- [ ] Verify robots.txt allows indexing
- [ ] Check structured data appears in Google
- [ ] Monitor crawl errors in Search Console
- [ ] Set up Google Analytics
- [ ] Configure search console alerts

### Monitoring Setup
- [ ] Error tracking enabled (Sentry, etc.)
- [ ] Performance monitoring enabled
- [ ] Uptime monitoring configured
- [ ] Server logs accessible
- [ ] Backup strategy in place
- [ ] Alerts configured for downtime

## Ongoing Maintenance

### Weekly
- [ ] Check server logs for errors
- [ ] Monitor uptime status
- [ ] Review performance metrics
- [ ] Check SEO rankings

### Monthly
- [ ] Review Search Console data
- [ ] Analyze Core Web Vitals
- [ ] Update dependencies (`npm update`)
- [ ] Review and optimize slow pages
- [ ] Check for security updates

### Quarterly
- [ ] Full SEO audit
- [ ] Performance optimization review
- [ ] Security audit
- [ ] Dependency updates (major versions)
- [ ] Review and update content

## Rollback Plan

If issues occur after deployment:

1. **Immediate Rollback**
   ```bash
   pm2 stop roots-richness
   # Restore previous version
   pm2 start server.ts --name roots-richness
   ```

2. **Debug Mode**
   ```bash
   DEBUG=express:* node server.ts
   ```

3. **Emergency SPA Fallback**
   - Can revert to SPA build if needed
   - Use `npm run build` instead of `npm run build:ssr`
   - Serve with static hosting

## Support Contacts

- **Developer**: [Your Name]
- **DevOps**: [DevOps Team]
- **DNS/Domain**: [Registrar]
- **Hosting**: [Hosting Provider]

## Success Criteria

Deployment is successful when:

- ✅ All pages load in < 2.5 seconds
- ✅ Lighthouse SEO score is 95+
- ✅ No console errors or warnings
- ✅ All Core Web Vitals in green
- ✅ Search engines can crawl all pages
- ✅ Structured data validates correctly
- ✅ No hydration mismatches
- ✅ All interactive features work
- ✅ Mobile experience is smooth
- ✅ HTTPS is properly configured

## Notes

_Add any deployment-specific notes here:_

---

**Deployment Date**: _________________

**Deployed By**: _________________

**Version**: _________________

**Production URL**: _________________

---

🎉 **Congratulations on deploying your SSR application!**
