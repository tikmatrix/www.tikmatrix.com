# Deploy TikMatrix API Rust Service - Sudo Permission Fix Guide

## Problem Summary

The "Deploy TikMatrix API Rust Service" GitHub Actions workflow fails with the following error:

```
sudo: a terminal is required to read the password; either use the -S option to read from standard input or configure an askpass helper
sudo: a password is required
Error: Process completed with exit code 1.
```

This happens because the `deploy` user doesn't have NOPASSWD sudo permissions for systemd service management commands that are needed to deploy and manage the TikMatrix API Rust service.

## Root Cause

The deploy user's sudoers configuration was missing permissions for:
- `systemctl daemon-reload` - reload systemd after adding service files
- `systemctl enable/start/stop/restart` - manage custom services like tikmatrix-api-rs
- `mv /tmp/*.service /etc/systemd/system/` - install service definition files
- `nginx -t` - test nginx configuration before applying changes
- `cp/mv /tmp/*.conf /etc/nginx/conf.d/` - deploy nginx configuration files

The "Deploy Site" workflow works fine because it only uses commands that ARE in the sudoers whitelist (chown, chmod for /var/www.* directories).

## Solution

Update the sudoers configuration on all VPS servers to add the missing permissions.

## How to Apply the Fix

### Option 1: Run the Automated Fix Script (Recommended)

SSH into each VPS server and run:

```bash
# Download the fix script from GitHub
curl -O https://raw.githubusercontent.com/tikmatrix/www.tikmatrix.com/main/scripts/fix-deploy-permissions.sh

# Run the script as root
sudo bash fix-deploy-permissions.sh
```

### Option 2: Manual Update

SSH into each VPS server and edit the sudoers file:

```bash
sudo nano /etc/sudoers.d/deploy
```

Replace the entire content with:

```
# Allow deploy user to manage web deployments
# Nginx management
deploy ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx
deploy ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx
deploy ALL=(ALL) NOPASSWD: /usr/sbin/nginx -t
deploy ALL=(ALL) NOPASSWD: /bin/cp /tmp/*.conf /etc/nginx/conf.d/
deploy ALL=(ALL) NOPASSWD: /bin/mv /tmp/*.conf /etc/nginx/conf.d/
# Systemd service management (broad permissions for flexibility with TikMatrix ecosystem services)
deploy ALL=(ALL) NOPASSWD: /bin/systemctl daemon-reload
deploy ALL=(ALL) NOPASSWD: /bin/systemctl enable *
deploy ALL=(ALL) NOPASSWD: /bin/systemctl start *
deploy ALL=(ALL) NOPASSWD: /bin/systemctl stop *
deploy ALL=(ALL) NOPASSWD: /bin/systemctl restart *
# File permission management for web directories
deploy ALL=(ALL) NOPASSWD: /bin/chown -R deploy\:www-data /var/www.*
deploy ALL=(ALL) NOPASSWD: /bin/chmod -R 775 /var/www.*
# Service file deployment
deploy ALL=(ALL) NOPASSWD: /bin/mv /tmp/*.service /etc/systemd/system/
```

Then set proper permissions:

```bash
sudo chmod 440 /etc/sudoers.d/deploy
```

## Verification

After applying the fix on a server, verify the configuration:

```bash
# View the sudoers configuration
sudo cat /etc/sudoers.d/deploy

# Test sudo without password (should not prompt for password)
sudo systemctl daemon-reload
```

## Servers to Update

Apply this fix on all VPS servers:

1. **server-dublin** (172.245.97.215)
2. **server-us** (check deploy-config.json for IP)
3. **server-sgp** (check deploy-config.json for IP)

## After Applying the Fix

Once all servers are updated:

1. Go to GitHub Actions: https://github.com/tikmatrix/www.tikmatrix.com/actions
2. Find the "Deploy TikMatrix API Rust Service" workflow
3. Click "Run workflow" to test the deployment
4. The workflow should now complete successfully without sudo password errors

## Security Note

The updated configuration uses wildcards for systemctl commands to support multiple services in the TikMatrix ecosystem (tikmatrix-api-rs, igmatrix-api, etc.). This is acceptable for dedicated VPS servers with SSH key authentication. For stricter security, the wildcards can be replaced with specific service names.

## Related Documentation

- [VPS Management Guide (CN)](./vps-management.md)
- [VPS Management Guide (EN)](./vps-management.en.md)
- See the "Permission Management" and "Troubleshooting" sections for more details

## Questions?

If you encounter any issues or have questions, please:
1. Check the troubleshooting section in vps-management.md
2. Review the GitHub Actions workflow logs for detailed error messages
3. Open an issue in the repository with the error details
