

## Plan: GitHub Actions Deployment Workflow + .htaccess

### Files to create:

**1. `.github/workflows/deploy.yml`**
- Triggers on push to `main` branch
- Steps: checkout → install deps (npm ci) → build (npm run build) → deploy `dist/` via FTP using `SamKirkland/FTP-Deploy-Action@v4`
- Uses 4 GitHub secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_PATH`

**2. `public/.htaccess`**
- Apache rewrite rules for SPA routing (all routes → `index.html`)
- Gets copied into `dist/` automatically during build

### After implementation, you will need to:
Add these 4 secrets in GitHub: **Settings → Secrets and variables → Actions → New repository secret**:
- `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_PATH`

