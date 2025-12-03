# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Environment

- OS: Ubuntu 22.04 LTS
- Web Server: Nginx

## Quick Setup (One-Click)

For new VPS, run the interactive setup script to automatically configure everything:

```bash
# Download and run the setup script
curl -fsSL https://raw.githubusercontent.com/tikmatrix/www.tikmatrix.com/main/scripts/setup-vps.sh -o setup-vps.sh
chmod +x setup-vps.sh
sudo ./setup-vps.sh
```

Or clone the repository first:

```bash
git clone https://github.com/tikmatrix/www.tikmatrix.com.git
cd www.tikmatrix.com
chmod +x scripts/setup-vps.sh
sudo ./scripts/setup-vps.sh
```

The interactive script will guide you through:

- ✅ Select site (tikmatrix.com, igmatrix.com, ytmatrix.com, tikzenx.com, or custom)
- ✅ Configure SSH port
- ✅ Add GitHub Actions deploy key
- ✅ Setup SSL certificate (optional, with HTTP or Route 53 validation)
- ✅ Install and configure Nginx with security hardening
- ✅ Setup UFW firewall and Fail2Ban
- ✅ Create deploy user with proper permissions
- ✅ Configure auto-backup and auto-renewal

## GitHub Actions Configuration

### 1. Add SSH Private Key Secret

Only one secret is required in your GitHub repository:

| Secret | Description |
|--------|-------------|
| `SSH_PRIVATE_KEY` | Ed25519 private key content |

### 2. Generate SSH Key Pair

```bash
# Generate key pair locally
ssh-keygen -t ed25519 -C "github-actions-deploy" -f github_deploy_key -N ""

# Display public key (add this during VPS setup)
cat github_deploy_key.pub

# Display private key (add this as GitHub secret SSH_PRIVATE_KEY)
cat github_deploy_key
```

### 3. Configure Servers and Sites

Edit `deploy-config.json` to manage your deployment targets:

```json
{
  "servers": [
    {
      "id": "server-1",
      "host": "your-server-ip-or-domain",
      "port": 22,
      "user": "deploy"
    }
  ],
  "sites": [
    {
      "name": "tikmatrix",
      "domain": "tikmatrix.com",
      "branch": "main",
      "brandReplace": false,
      "deployTo": ["server-1"]
    }
  ]
}
```

### Deployment Flow

1. Push to `main` branch → Deploys tikmatrix, ytmatrix, igmatrix
2. Push to `TikZenX` branch → Deploys tikzenx
3. Manual trigger → Select specific site to deploy

### Deployment Directories

| Site | Directory |
|------|-----------|
| tikmatrix.com | `/var/www.tikmatrix.com` |
| igmatrix.com | `/var/www.igmatrix.com` |
| ytmatrix.com | `/var/www.ytmatrix.com` |
| tikzenx.com | `/var/www.tikzenx.com` |

## Manual SSL Setup (if skipped during installation)

### HTTP Validation (DNS must point to server)

```bash
sudo certbot --nginx -d tikmatrix.com -d www.tikmatrix.com --agree-tos --no-eff-email
```

### Route 53 DNS Validation

```bash
export AWS_ACCESS_KEY_ID="your_access_key_id"
export AWS_SECRET_ACCESS_KEY="your_secret_access_key"
sudo certbot -i nginx -d tikmatrix.com -d www.tikmatrix.com --dns-route53 --agree-tos --no-eff-email
```

## Useful Commands

```bash
# Check Nginx status
systemctl status nginx

# Test Nginx configuration
nginx -t

# Reload Nginx
systemctl reload nginx

# View logs
tail -f /var/log/nginx/tikmatrix.access.log
tail -f /var/log/nginx/tikmatrix.error.log

# Check firewall status
ufw status

# Check Fail2Ban status
fail2ban-client status
```
