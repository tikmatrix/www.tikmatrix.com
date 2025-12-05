#!/bin/bash
# =============================================================================
# Fix Deploy User Permissions
# Run this script as root on your VPS to fix deploy user sudo permissions
# Usage: sudo bash fix-deploy-permissions.sh
# =============================================================================

set -e

DEPLOY_USER="deploy"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Fixing deploy user permissions...${NC}"

# Check if running as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root"
    exit 1
fi

# Update sudoers configuration
cat > /etc/sudoers.d/deploy << EOF
# Allow deploy user to manage web deployments
$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx
$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx
$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chown -R deploy\:www-data /var/www.*
$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chmod -R 775 /var/www.*
EOF

chmod 440 /etc/sudoers.d/deploy

echo -e "${GREEN}✅ Sudoers configuration updated${NC}"

# Fix existing directory permissions
for dir in /var/www.*/; do
    if [[ -d "$dir" ]]; then
        echo "Fixing permissions for $dir"
        chown -R $DEPLOY_USER:www-data "$dir"
        chmod -R 775 "$dir"
    fi
done

echo -e "${GREEN}✅ Directory permissions fixed${NC}"
echo ""
echo "Done! Deploy user can now manage web directories without password."
