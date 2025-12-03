#!/usr/bin/env bash#!/bin/bash#!/bin/bash

# =============================================================================

# TikMatrix VPS Setup Script v3.0# =============================================================================# =============================================================================

# Supports: Initial setup / Add new site / Manage existing sites

# =============================================================================# TikMatrix VPS Setup Script v3.0# TikMatrix VPS Setup Script



set -e# Supports: Initial setup / Add new site / Manage existing sites# One-click setup for www.tikmatrix.com ecosystem on Ubuntu 22.04 LTS



# =============================================================================# =============================================================================# =============================================================================

# Configuration Variables

# =============================================================================

DOMAIN=""

WWW_DOMAIN=""set -e  # Exit on errorset -e  # Exit on error

WEB_ROOT=""

NGINX_CONF=""

DEPLOY_USER="deploy"

LOG_FILE="/var/log/tikmatrix-setup.log"# =============================================================================# =============================================================================

SSH_PORT="22"

ENABLE_SSL="n"# Configuration Variables# Configuration Variables (Will be set interactively)

AWS_KEY_ID=""

AWS_SECRET=""# =============================================================================# =============================================================================

GITHUB_PUBKEY=""

SCRIPT_MODE=""DOMAIN=""DOMAIN=""

FIRST_SITE_DOMAIN=""

WWW_DOMAIN=""WWW_DOMAIN=""

STATE_FILE="/etc/tikmatrix/.setup-state"

STATE_DIR="/etc/tikmatrix"WEB_ROOT=""WEB_ROOT=""



RED='\033[0;31m'NGINX_CONF=""NGINX_CONF=""

GREEN='\033[0;32m'

YELLOW='\033[1;33m'DEPLOY_USER="deploy"DEPLOY_USER="deploy"

BLUE='\033[0;34m'

CYAN='\033[0;36m'LOG_FILE="/var/log/tikmatrix-setup.log"LOG_FILE="/var/log/tikmatrix-setup.log"

NC='\033[0m'

SSH_PORT="22"SSH_PORT="22"

# =============================================================================

# Helper FunctionsENABLE_SSL="n"ENABLE_SSL="n"

# =============================================================================

log_info() {AWS_KEY_ID=""AWS_KEY_ID=""

    echo -e "${BLUE}[INFO]${NC} $1"

    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"AWS_SECRET=""AWS_SECRET=""

}

GITHUB_PUBKEY=""GITHUB_PUBKEY=""

log_success() {

    echo -e "${GREEN}[SUCCESS]${NC} $1"SCRIPT_MODE=""  # init / add-site / manage

    echo "[SUCCESS] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"

}# Predefined site configurations



log_warning() {# State file to track setup statusdeclare -A SITE_CONFIGS

    echo -e "${YELLOW}[WARNING]${NC} $1"

    echo "[WARNING] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"STATE_FILE="/etc/tikmatrix/.setup-state"SITE_CONFIGS["tikmatrix"]="tikmatrix.com"

}

STATE_DIR="/etc/tikmatrix"SITE_CONFIGS["igmatrix"]="igmatrix.com"

log_error() {

    echo -e "${RED}[ERROR]${NC} $1"SITE_CONFIGS["ytmatrix"]="ytmatrix.com"

    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"

}# Colors for outputSITE_CONFIGS["tikzenx"]="tikzenx.com"



print_banner() {RED='\033[0;31m'

    echo -e "${CYAN}"

    echo "============================================================="GREEN='\033[0;32m'# Colors for output

    echo "           TikMatrix VPS Setup Script v3.0                   "

    echo "  Supports: Initial setup / Add sites / Manage sites         "YELLOW='\033[1;33m'RED='\033[0;31m'

    echo "============================================================="

    echo -e "${NC}"BLUE='\033[0;34m'GREEN='\033[0;32m'

}

CYAN='\033[0;36m'YELLOW='\033[1;33m'

check_root() {

    if [[ $EUID -ne 0 ]]; thenNC='\033[0m' # No ColorBLUE='\033[0;34m'

        log_error "This script must be run as root. Use: sudo $0"

        exit 1CYAN='\033[0;36m'

    fi

}# =============================================================================NC='\033[0m' # No Color



check_os() {# Helper Functions

    if [[ ! -f /etc/os-release ]]; then

        log_error "Cannot detect OS."# =============================================================================# =============================================================================

        exit 1

    filog_info() {# Helper Functions

    source /etc/os-release

    if [[ "$ID" != "ubuntu" && "$ID" != "debian" ]]; then    echo -e "${BLUE}[INFO]${NC} $1"# =============================================================================

        log_warning "This script is designed for Ubuntu/Debian. Current OS: $ID"

        read -p "Continue anyway? (y/n): " -r    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"log_info() {

        if [[ ! $REPLY =~ ^[Yy]$ ]]; then

            exit 1}    echo -e "${BLUE}[INFO]${NC} $1"

        fi

    fi    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"

    log_info "Detected OS: $PRETTY_NAME"

}log_success() {}



is_initialized() {    echo -e "${GREEN}[SUCCESS]${NC} $1"

    [[ -f "$STATE_FILE" ]] && grep -q "initialized=true" "$STATE_FILE"

}    echo "[SUCCESS] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"log_success() {



save_state() {}    echo -e "${GREEN}[SUCCESS]${NC} $1"

    mkdir -p "$STATE_DIR"

    cat > "$STATE_FILE" << EOF    echo "[SUCCESS] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"

initialized=true

deploy_user=$DEPLOY_USERlog_warning() {}

ssh_port=$SSH_PORT

setup_date=$(date '+%Y-%m-%d %H:%M:%S')    echo -e "${YELLOW}[WARNING]${NC} $1"

EOF

    chmod 600 "$STATE_FILE"    echo "[WARNING] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"log_warning() {

}

}    echo -e "${YELLOW}[WARNING]${NC} $1"

load_state() {

    if [[ -f "$STATE_FILE" ]]; then    echo "[WARNING] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"

        source "$STATE_FILE"

        DEPLOY_USER="${deploy_user:-deploy}"log_error() {}

        SSH_PORT="${ssh_port:-22}"

    fi    echo -e "${RED}[ERROR]${NC} $1"

}

    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"log_error() {

list_sites() {

    echo ""}    echo -e "${RED}[ERROR]${NC} $1"

    echo -e "${CYAN}Configured Sites:${NC}"

    echo "-------------------------------------------------------------"    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"

    local sites_found=false

    for conf in /etc/nginx/conf.d/www.*.conf; doprint_banner() {}

        if [[ -f "$conf" ]]; then

            sites_found=true    echo -e "${CYAN}"

            local domain

            domain=$(basename "$conf" .conf | sed 's/^www\.//')    echo "╔═══════════════════════════════════════════════════════════════╗"print_banner() {

            local web_root="/var/www.$domain"

            local ssl_status="HTTP"    echo "║                                                               ║"    echo -e "${CYAN}"

            if grep -q "listen 443 ssl" "$conf" 2>/dev/null; then

                ssl_status="HTTPS"    echo "║              TikMatrix VPS Setup Script v3.0                  ║"    echo "╔═══════════════════════════════════════════════════════════════╗"

            fi

            local status="Empty"    echo "║                                                               ║"    echo "║                                                               ║"

            if [[ -d "$web_root" && "$(ls -A "$web_root" 2>/dev/null)" ]]; then

                status="Active"    echo "║  Supports: Initial setup / Add sites / Manage sites          ║"    echo "║              TikMatrix VPS Setup Script v2.0                  ║"

            fi

            printf "  %-25s %-10s %-10s %s\n" "$domain" "$ssl_status" "$status" "$web_root"    echo "║                                                               ║"    echo "║                                                               ║"

        fi

    done    echo "╚═══════════════════════════════════════════════════════════════╝"    echo "║  Automated setup for TikMatrix ecosystem websites             ║"

    if [[ "$sites_found" == false ]]; then

        echo "  No sites configured yet."    echo -e "${NC}"    echo "║                                                               ║"

    fi

    echo "-------------------------------------------------------------"}    echo "╚═══════════════════════════════════════════════════════════════╝"

    echo ""

}    echo -e "${NC}"



# =============================================================================check_root() {}

# Mode Selection

# =============================================================================    if [[ $EUID -ne 0 ]]; then

select_mode() {

    echo ""        log_error "This script must be run as root. Use: sudo $0"check_root() {

    echo -e "${CYAN}=============================================================${NC}"

    echo -e "${CYAN}                    Select Operation                          ${NC}"        exit 1    if [[ $EUID -ne 0 ]]; then

    echo -e "${CYAN}=============================================================${NC}"

    echo ""    fi        log_error "This script must be run as root. Use: sudo $0"

    

    if is_initialized; then}        exit 1

        load_state

        echo -e "${GREEN}Server is already initialized${NC}"    fi

        echo "  Deploy user: $DEPLOY_USER"

        echo "  SSH port: $SSH_PORT"check_os() {}

        list_sites

        echo "What would you like to do?"    if [[ ! -f /etc/os-release ]]; then

        echo "  1) Add a new site"

        echo "  2) Setup SSL for existing site"        log_error "Cannot detect OS. /etc/os-release not found."check_os() {

        echo "  3) Add GitHub deploy key"

        echo "  4) Show server info"        exit 1    if [[ ! -f /etc/os-release ]]; then

        echo "  5) Re-run full initialization"

        echo "  6) Exit"    fi        log_error "Cannot detect OS. /etc/os-release not found."

        echo ""

        while true; do            exit 1

            read -p "Enter choice [1-6]: " mode_choice

            case $mode_choice in    source /etc/os-release    fi

                1) SCRIPT_MODE="add-site"; break ;;

                2) SCRIPT_MODE="setup-ssl"; break ;;    if [[ "$ID" != "ubuntu" && "$ID" != "debian" ]]; then    

                3) SCRIPT_MODE="add-key"; break ;;

                4) SCRIPT_MODE="show-info"; break ;;        log_warning "This script is designed for Ubuntu/Debian. Current OS: $ID"    source /etc/os-release

                5) SCRIPT_MODE="init"; break ;;

                6) exit 0 ;;        read -p "Continue anyway? (y/n): " -n 1 -r    if [[ "$ID" != "ubuntu" && "$ID" != "debian" ]]; then

                *) echo "Invalid choice." ;;

            esac        echo        log_warning "This script is designed for Ubuntu/Debian. Current OS: $ID"

        done

    else        if [[ ! $REPLY =~ ^[Yy]$ ]]; then        read -p "Continue anyway? (y/n): " -n 1 -r

        echo "Fresh server detected. Running initial setup..."

        SCRIPT_MODE="init"            exit 1        echo

    fi

}        fi        if [[ ! $REPLY =~ ^[Yy]$ ]]; then



# =============================================================================    fi            exit 1

# Site Selection

# =============================================================================    log_info "Detected OS: $PRETTY_NAME"        fi

select_site() {

    echo ""}    fi

    echo -e "${YELLOW}Select site to add:${NC}"

    echo "  1) tikmatrix.com"    log_info "Detected OS: $PRETTY_NAME"

    echo "  2) igmatrix.com"

    echo "  3) ytmatrix.com"# Check if initial setup has been done}

    echo "  4) tikzenx.com"

    echo "  5) Custom domain"is_initialized() {

    echo ""

    while true; do    [[ -f "$STATE_FILE" ]] && grep -q "initialized=true" "$STATE_FILE"# =============================================================================

        read -p "Enter choice [1-5]: " site_choice

        case $site_choice in}# Interactive Configuration

            1) DOMAIN="tikmatrix.com"; break ;;

            2) DOMAIN="igmatrix.com"; break ;;# =============================================================================

            3) DOMAIN="ytmatrix.com"; break ;;

            4) DOMAIN="tikzenx.com"; break ;;# Save stateinteractive_config() {

            5)

                read -p "Enter domain (e.g., example.com): " DOMAINsave_state() {    echo ""

                if [[ -z "$DOMAIN" ]]; then

                    log_error "Domain cannot be empty"    mkdir -p "$STATE_DIR"    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"

                    continue

                fi    cat > "$STATE_FILE" << EOF    echo -e "${CYAN}                    Configuration Setup                         ${NC}"

                break

                ;;initialized=true    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"

            *) echo "Invalid choice." ;;

        esacdeploy_user=$DEPLOY_USER    echo ""

    done

    WWW_DOMAIN="www.$DOMAIN"ssh_port=$SSH_PORT    

    WEB_ROOT="/var/www.$DOMAIN"

    NGINX_CONF="/etc/nginx/conf.d/www.$DOMAIN.conf"setup_date=$(date '+%Y-%m-%d %H:%M:%S')    # Site selection

    if [[ -f "$NGINX_CONF" ]]; then

        log_warning "Site $DOMAIN already exists!"EOF    echo -e "${YELLOW}Select site to deploy:${NC}"

        read -p "Overwrite? (y/n): " -r

        if [[ ! $REPLY =~ ^[Yy]$ ]]; then    chmod 600 "$STATE_FILE"    echo "  1) tikmatrix.com (TikMatrix)"

            return 1

        fi}    echo "  2) igmatrix.com (IgMatrix)"

    fi

    log_info "Domain: $DOMAIN"    echo "  3) ytmatrix.com (YTMatrix)"

    log_info "Web root: $WEB_ROOT"

    return 0# Load state    echo "  4) tikzenx.com (TikZenX)"

}

load_state() {    echo "  5) Custom domain"

# =============================================================================

# Setup Functions    if [[ -f "$STATE_FILE" ]]; then    echo ""

# =============================================================================

setup_system() {        source "$STATE_FILE"    

    log_info "Updating system..."

    apt-get update && apt-get upgrade -y        DEPLOY_USER="${deploy_user:-deploy}"    while true; do

    log_info "Installing packages..."

    apt-get install -y curl wget git vim htop unzip software-properties-common \        SSH_PORT="${ssh_port:-22}"        read -p "Enter choice [1-5]: " site_choice

        ca-certificates gnupg lsb-release ufw fail2ban acl rsync jq

    log_success "System updated."    fi        case $site_choice in

}

}            1)

setup_firewall() {

    log_info "Configuring firewall..."                DOMAIN="tikmatrix.com"

    if ufw status | grep -q "Status: active"; then

        ufw allow "$SSH_PORT/tcp" 2>/dev/null || true# List configured sites                break

        ufw allow 80/tcp 2>/dev/null || true

        ufw allow 443/tcp 2>/dev/null || truelist_sites() {                ;;

    else

        ufw --force reset    echo ""            2)

        ufw default deny incoming

        ufw default allow outgoing    echo -e "${CYAN}Configured Sites:${NC}"                DOMAIN="igmatrix.com"

        ufw allow "$SSH_PORT/tcp"

        ufw allow 80/tcp    echo "─────────────────────────────────────────────────────"                break

        ufw allow 443/tcp

        ufw --force enable                    ;;

    fi

    log_success "Firewall configured."    local sites_found=false            3)

}

    for conf in /etc/nginx/conf.d/www.*.conf; do                DOMAIN="ytmatrix.com"

setup_fail2ban() {

    log_info "Configuring Fail2Ban..."        if [[ -f "$conf" ]]; then                break

    cat > /etc/fail2ban/jail.local << EOF

[DEFAULT]            sites_found=true                ;;

bantime = 3600

findtime = 600            local domain=$(basename "$conf" .conf | sed 's/^www\.//')            4)

maxretry = 5

backend = systemd            local web_root="/var/www.$domain"                DOMAIN="tikzenx.com"



[sshd]            local ssl_status="HTTP"                break

enabled = true

port = $SSH_PORT                            ;;

filter = sshd

logpath = /var/log/auth.log            # Check if SSL is configured            5)

maxretry = 3

bantime = 86400            if grep -q "listen 443 ssl" "$conf" 2>/dev/null; then                read -p "Enter your domain (e.g., example.com): " DOMAIN



[nginx-http-auth]                ssl_status="HTTPS ✓"                if [[ -z "$DOMAIN" ]]; then

enabled = true

filter = nginx-http-auth            fi                    log_error "Domain cannot be empty"

port = http,https

logpath = /var/log/nginx/error.log                                continue

maxretry = 3

EOF            # Check if directory exists and has content                fi

    systemctl enable fail2ban

    systemctl restart fail2ban            local status="Empty"                break

    log_success "Fail2Ban configured."

}            if [[ -d "$web_root" && "$(ls -A $web_root 2>/dev/null)" ]]; then                ;;



setup_deploy_user() {                status="Active"            *)

    log_info "Setting up deploy user..."

    if ! id "$DEPLOY_USER" &>/dev/null; then            fi                echo "Invalid choice. Please enter 1-5."

        useradd -m -s /bin/bash "$DEPLOY_USER"

        log_info "Created user: $DEPLOY_USER"                            ;;

    fi

    usermod -aG www-data "$DEPLOY_USER"            printf "  %-25s %-10s %-15s %s\n" "$domain" "$ssl_status" "$status" "$web_root"        esac

    mkdir -p "/home/$DEPLOY_USER/.ssh"

    chmod 700 "/home/$DEPLOY_USER/.ssh"        fi    done

    touch "/home/$DEPLOY_USER/.ssh/authorized_keys"

    chmod 600 "/home/$DEPLOY_USER/.ssh/authorized_keys"    done    

    chown -R "$DEPLOY_USER:$DEPLOY_USER" "/home/$DEPLOY_USER/.ssh"

    cat > /etc/sudoers.d/deploy << EOF        WWW_DOMAIN="www.$DOMAIN"

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx    if [[ "$sites_found" == false ]]; then    WEB_ROOT="/var/www.$DOMAIN"

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chown -R www-data\:www-data /var/www.*

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chmod -R 755 /var/www.*        echo "  No sites configured yet."    NGINX_CONF="/etc/nginx/conf.d/www.$DOMAIN.conf"

EOF

    chmod 440 /etc/sudoers.d/deploy    fi    

    log_success "Deploy user configured."

}    echo "─────────────────────────────────────────────────────"    echo ""



add_github_key() {    echo ""    log_info "Domain: $DOMAIN"

    echo ""

    echo -e "${YELLOW}GitHub Actions SSH Public Key:${NC}"}    log_info "Web root: $WEB_ROOT"

    echo "  Paste public key (ssh-ed25519 or ssh-rsa)."

    echo "  Leave empty to skip."    echo ""

    echo ""

    read -p "Public key: " GITHUB_PUBKEY# =============================================================================    

    if [[ -n "$GITHUB_PUBKEY" ]]; then

        if ! grep -qF "$GITHUB_PUBKEY" "/home/$DEPLOY_USER/.ssh/authorized_keys" 2>/dev/null; then# Mode Selection    # SSH Port

            echo "$GITHUB_PUBKEY" >> "/home/$DEPLOY_USER/.ssh/authorized_keys"

            chown "$DEPLOY_USER:$DEPLOY_USER" "/home/$DEPLOY_USER/.ssh/authorized_keys"# =============================================================================    read -p "SSH port [default: 22]: " input_port

            log_success "GitHub key added."

        elseselect_mode() {    SSH_PORT="${input_port:-22}"

            log_warning "Key already exists."

        fi    echo ""    

    else

        log_info "Skipped."    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"    # GitHub Deploy Key

    fi

}    echo -e "${CYAN}                      Select Operation                          ${NC}"    echo ""



setup_nginx_base() {    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"    echo -e "${YELLOW}GitHub Actions SSH Public Key:${NC}"

    if command -v nginx &>/dev/null; then

        log_info "Nginx already installed."    echo ""    echo "  This is used for automated deployments from GitHub Actions."

    else

        log_info "Installing Nginx..."        echo "  You can generate one with: ssh-keygen -t ed25519 -C 'github-actions'"

        apt-get install -y nginx

    fi    if is_initialized; then    echo "  Paste the PUBLIC key (starts with 'ssh-ed25519' or 'ssh-rsa')."

    if ! grep -q "server_tokens off" /etc/nginx/nginx.conf; then

        sed -i '/http {/a\    server_tokens off;' /etc/nginx/nginx.conf        load_state    echo "  Leave empty to skip (you can add it later)."

    fi

    rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true        echo -e "${GREEN}✓ Server is already initialized${NC}"    echo ""

    systemctl enable nginx

    systemctl start nginx        echo "  Deploy user: $DEPLOY_USER"    read -p "GitHub deploy public key: " GITHUB_PUBKEY

    log_success "Nginx ready."

}        echo "  SSH port: $SSH_PORT"    



add_site_nginx() {        list_sites    # SSL Configuration

    log_info "Configuring Nginx for $DOMAIN..."

    mkdir -p "$WEB_ROOT"            echo ""

    cat > "$WEB_ROOT/index.html" << EOF

<!DOCTYPE html>        echo "What would you like to do?"    echo -e "${YELLOW}SSL Certificate Configuration:${NC}"

<html lang="en">

<head>        echo "  1) Add a new site"    read -p "Setup SSL certificate now? (y/n) [default: n]: " ENABLE_SSL

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">        echo "  2) Setup SSL for existing site"    ENABLE_SSL="${ENABLE_SSL:-n}"

    <title>$DOMAIN - Coming Soon</title>

    <style>        echo "  3) Add GitHub deploy key"    

        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }

        .container { text-align: center; }        echo "  4) Show server info"    if [[ "$ENABLE_SSL" =~ ^[Yy]$ ]]; then

        h1 { font-size: 3rem; }

        p { font-size: 1.2rem; opacity: 0.9; }        echo "  5) Re-run full initialization (will skip existing components)"        echo ""

    </style>

</head>        echo "  6) Exit"        echo "SSL validation method:"

<body>

    <div class="container">        echo ""        echo "  1) HTTP validation (requires DNS already pointing to this server)"

        <h1>$DOMAIN</h1>

        <p>Coming soon!</p>                echo "  2) Route 53 DNS validation (requires AWS credentials)"

    </div>

</body>        while true; do        echo ""

</html>

EOF            read -p "Enter choice [1-6]: " mode_choice        read -p "Enter choice [1-2]: " ssl_method

    chown -R "$DEPLOY_USER:www-data" "$WEB_ROOT"

    chmod -R 755 "$WEB_ROOT"            case $mode_choice in        

    setfacl -R -m "u:$DEPLOY_USER:rwx" "$WEB_ROOT" 2>/dev/null || true

    setfacl -R -d -m "u:$DEPLOY_USER:rwx" "$WEB_ROOT" 2>/dev/null || true                1) SCRIPT_MODE="add-site"; break ;;        if [[ "$ssl_method" == "2" ]]; then

    local ZONE_NAME="${DOMAIN//./_}_limit"

    cat > "$NGINX_CONF" << EOF                2) SCRIPT_MODE="setup-ssl"; break ;;            echo ""

limit_req_zone \$binary_remote_addr zone=${ZONE_NAME}:10m rate=10r/s;

                3) SCRIPT_MODE="add-key"; break ;;            read -p "AWS Access Key ID: " AWS_KEY_ID

server {

    listen 80;                4) SCRIPT_MODE="show-info"; break ;;            read -s -p "AWS Secret Access Key: " AWS_SECRET

    listen [::]:80;

    server_name $DOMAIN $WWW_DOMAIN;                5) SCRIPT_MODE="init"; break ;;            echo ""



    root $WEB_ROOT;                6) exit 0 ;;        fi

    index index.html;

                *) echo "Invalid choice. Please enter 1-6." ;;    fi

    access_log /var/log/nginx/${DOMAIN}.access.log;

    error_log /var/log/nginx/${DOMAIN}.error.log warn;            esac    



    sendfile on;        done    # Confirmation

    tcp_nopush on;

    tcp_nodelay on;    else    echo ""

    keepalive_timeout 65;

        echo "This appears to be a fresh server. Running initial setup..."    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"

    include /etc/nginx/mime.types;

    default_type application/octet-stream;        echo ""    echo -e "${CYAN}                    Configuration Summary                       ${NC}"



    location ~ /\.(?!well-known) { deny all; }        SCRIPT_MODE="init"    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"

    location ~* \.(php|asp|aspx|jsp|cgi)$ { deny all; }

    fi    echo ""

    location / {

        limit_req zone=${ZONE_NAME} burst=20 nodelay;}    echo "  Domain:          $DOMAIN"

        try_files \$uri \$uri/ /index.html;

        add_header Cache-Control "no-cache";    echo "  WWW Domain:      $WWW_DOMAIN"

        add_header X-Content-Type-Options nosniff always;

        add_header X-Frame-Options SAMEORIGIN always;# =============================================================================    echo "  Web Root:        $WEB_ROOT"

    }

# Site Selection (for adding new site)    echo "  Deploy User:     $DEPLOY_USER"

    location ~* \.(css|js|json|svg|png|jpe?g|gif|ico|webp|woff2?)$ {

        expires 365d;# =============================================================================    echo "  SSH Port:        $SSH_PORT"

        add_header Cache-Control "public, immutable";

    }select_site() {    echo "  SSL Setup:       $ENABLE_SSL"



    gzip on;    echo ""    if [[ -n "$GITHUB_PUBKEY" ]]; then

    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

}    echo -e "${YELLOW}Select site to add:${NC}"        echo "  GitHub Key:      Provided"

EOF

    nginx -t    echo "  1) tikmatrix.com"    else

    systemctl reload nginx

    log_success "Site $DOMAIN added."    echo "  2) igmatrix.com"        echo "  GitHub Key:      Not provided (add later)"

}

    echo "  3) ytmatrix.com"    fi

setup_site_ssl() {

    if ! command -v certbot &>/dev/null; then    echo "  4) tikzenx.com"    echo ""

        log_info "Installing Certbot..."

        apt-get install -y certbot python3-certbot-nginx python3-certbot-dns-route53    echo "  5) Custom domain"    

    fi

    echo ""    echo ""    read -p "Proceed with these settings? (y/n): " confirm

    echo -e "${YELLOW}SSL for $DOMAIN${NC}"

    echo "  1) HTTP validation (DNS must point here)"        if [[ ! "$confirm" =~ ^[Yy]$ ]]; then

    echo "  2) Route 53 DNS validation"

    echo "  3) Skip"    while true; do        log_info "Setup cancelled by user."

    echo ""

    read -p "Choice [1-3]: " ssl_choice        read -p "Enter choice [1-5]: " site_choice        exit 0

    case $ssl_choice in

        1)        case $site_choice in    fi

            certbot --nginx -d "$DOMAIN" -d "$WWW_DOMAIN" --agree-tos --no-eff-email --non-interactive --email "admin@$DOMAIN" || log_warning "SSL failed."

            ;;            1) DOMAIN="tikmatrix.com"; break ;;}

        2)

            read -p "AWS Access Key ID: " AWS_KEY_ID            2) DOMAIN="igmatrix.com"; break ;;

            read -s -p "AWS Secret: " AWS_SECRET

            echo ""            3) DOMAIN="ytmatrix.com"; break ;;# =============================================================================

            if [[ -n "$AWS_KEY_ID" && -n "$AWS_SECRET" ]]; then

                export AWS_ACCESS_KEY_ID="$AWS_KEY_ID"            4) DOMAIN="tikzenx.com"; break ;;# System Update & Basic Setup

                export AWS_SECRET_ACCESS_KEY="$AWS_SECRET"

                certbot -i nginx -d "$DOMAIN" -d "$WWW_DOMAIN" --dns-route53 --agree-tos --no-eff-email --non-interactive --email "admin@$DOMAIN" || log_warning "SSL failed."            5)# =============================================================================

            fi

            ;;                read -p "Enter your domain (e.g., example.com): " DOMAINsetup_system() {

        3) log_info "SSL skipped." ;;

    esac                if [[ -z "$DOMAIN" ]]; then    log_info "Updating system packages..."

    (crontab -l 2>/dev/null | grep -v certbot; echo "0 3 * * * /usr/bin/certbot renew --quiet --post-hook 'systemctl reload nginx'") | sort -u | crontab -

}                    log_error "Domain cannot be empty"    apt update && apt upgrade -y



setup_security() {                    continue    

    log_info "Security hardening..."

    if ! grep -q "# TikMatrix Security" /etc/sysctl.conf; then                fi    log_info "Installing essential packages..."

        cat >> /etc/sysctl.conf << 'EOF'

                break    apt install -y \

# TikMatrix Security

net.ipv4.conf.default.rp_filter=1                ;;        curl \

net.ipv4.conf.all.rp_filter=1

net.ipv4.tcp_syncookies=1            *) echo "Invalid choice. Please enter 1-5." ;;        wget \

EOF

        sysctl -p 2>/dev/null || true        esac        git \

    fi

    log_success "Security applied."    done        vim \

}

            htop \

setup_optimization() {

    log_info "Optimizations..."    WWW_DOMAIN="www.$DOMAIN"        unzip \

    local CORES

    CORES=$(nproc)    WEB_ROOT="/var/www.$DOMAIN"        software-properties-common \

    sed -i "s/worker_processes auto;/worker_processes $CORES;/" /etc/nginx/nginx.conf 2>/dev/null || true

    log_success "Optimizations applied."    NGINX_CONF="/etc/nginx/conf.d/www.$DOMAIN.conf"        ca-certificates \

}

            gnupg \

setup_deploy_script() {

    log_info "Creating deploy script..."    # Check if site already exists        lsb-release \

    cat > "/home/$DEPLOY_USER/deploy.sh" << 'EOF'

#!/bin/bash    if [[ -f "$NGINX_CONF" ]]; then        ufw \

set -e

ARCHIVE="$1"        log_warning "Site $DOMAIN already exists!"        fail2ban \

TARGET="$2"

[[ -z "$ARCHIVE" || -z "$TARGET" ]] && { echo "Usage: $0 <archive> <target>"; exit 1; }        read -p "Overwrite configuration? (y/n): " -n 1 -r        acl \

[[ ! -f "$ARCHIVE" ]] && { echo "Archive not found"; exit 1; }

mkdir -p "$TARGET" /var/backups/www        echo        rsync

if [[ -d "$TARGET" && "$(ls -A "$TARGET" 2>/dev/null)" ]]; then

    tar -czf "/var/backups/www/$(basename "$TARGET")-$(date +%Y%m%d_%H%M%S).tar.gz" -C "$TARGET" . 2>/dev/null || true        if [[ ! $REPLY =~ ^[Yy]$ ]]; then    

    ls -t "/var/backups/www/$(basename "$TARGET")-"* 2>/dev/null | tail -n +4 | xargs -r rm -f

fi            return 1    log_success "System packages updated and essentials installed."

rm -rf "$TARGET"/*

tar -xzf "$ARCHIVE" -C "$TARGET"        fi}

sudo chown -R www-data:www-data "$TARGET"

sudo chmod -R 755 "$TARGET"    fi

rm -f "$ARCHIVE"

echo "Done!"    # =============================================================================

EOF

    chmod +x "/home/$DEPLOY_USER/deploy.sh"    echo ""# Firewall Configuration

    chown "$DEPLOY_USER:$DEPLOY_USER" "/home/$DEPLOY_USER/deploy.sh"

    mkdir -p /var/backups/www    log_info "Domain: $DOMAIN"# =============================================================================

    chown "$DEPLOY_USER:$DEPLOY_USER" /var/backups/www

    log_success "Deploy script created."    log_info "Web root: $WEB_ROOT"setup_firewall() {

}

    return 0    log_info "Configuring UFW firewall..."

show_server_info() {

    local SERVER_IP}    

    SERVER_IP=$(curl -s --connect-timeout 5 ifconfig.me 2>/dev/null || echo 'N/A')

    echo ""    # Reset UFW to default

    echo -e "${CYAN}=============================================================${NC}"

    echo -e "${GREEN}                Server Information                           ${NC}"# =============================================================================    ufw --force reset

    echo -e "${CYAN}=============================================================${NC}"

    echo ""# Initial Setup - System    

    echo "  IP: $SERVER_IP"

    echo "  User: $DEPLOY_USER"# =============================================================================    # Default policies

    echo "  SSH Port: $SSH_PORT"

    list_sitessetup_system() {    ufw default deny incoming

    echo -e "${YELLOW}GitHub Secret:${NC}"

    echo "  SSH_PRIVATE_KEY = (your private key)"    log_info "Updating system packages..."    ufw default allow outgoing

    echo ""

    echo -e "${YELLOW}deploy-config.json:${NC}"    apt update && apt upgrade -y    

    echo "  { \"id\": \"server\", \"host\": \"$SERVER_IP\", \"port\": $SSH_PORT, \"user\": \"$DEPLOY_USER\" }"

    echo ""        # Allow SSH

}

    log_info "Installing essential packages..."    ufw allow $SSH_PORT/tcp

# =============================================================================

# Interactive Init Config    apt install -y \    

# =============================================================================

interactive_init_config() {        curl \    # Allow HTTP and HTTPS

    echo ""

    echo -e "${CYAN}Initial Configuration${NC}"        wget \    ufw allow 80/tcp

    echo ""

    read -p "SSH port [22]: " input_port        git \    ufw allow 443/tcp

    SSH_PORT="${input_port:-22}"

    add_github_key        vim \    

    echo ""

    read -p "Add first site now? (y/n) [y]: " add_first        htop \    # Enable UFW

    add_first="${add_first:-y}"

    if [[ "$add_first" =~ ^[Yy]$ ]]; then        unzip \    ufw --force enable

        if select_site; then

            FIRST_SITE_DOMAIN="$DOMAIN"        software-properties-common \    

        fi

    fi        ca-certificates \    log_success "Firewall configured and enabled."

    echo ""

    echo "Summary:"        gnupg \}

    echo "  User: $DEPLOY_USER"

    echo "  SSH Port: $SSH_PORT"        lsb-release \

    [[ -n "$FIRST_SITE_DOMAIN" ]] && echo "  First Site: $FIRST_SITE_DOMAIN"

    echo ""        ufw \# =============================================================================

    read -p "Proceed? (y/n): " confirm

    [[ ! "$confirm" =~ ^[Yy]$ ]] && exit 0        fail2ban \# Fail2Ban Configuration

}

        acl \# =============================================================================

# =============================================================================

# Run Functions        rsync \setup_fail2ban() {

# =============================================================================

run_init() {        jq    log_info "Configuring Fail2Ban..."

    interactive_init_config

    setup_system        

    setup_deploy_user

    setup_firewall    log_success "System packages updated and essentials installed."    cat > /etc/fail2ban/jail.local << EOF

    setup_fail2ban

    setup_nginx_base}[DEFAULT]

    setup_optimization

    setup_securitybantime = 3600

    setup_deploy_script

    if [[ -n "$FIRST_SITE_DOMAIN" ]]; then# =============================================================================findtime = 600

        DOMAIN="$FIRST_SITE_DOMAIN"

        WWW_DOMAIN="www.$DOMAIN"# Firewall Configurationmaxretry = 5

        WEB_ROOT="/var/www.$DOMAIN"

        NGINX_CONF="/etc/nginx/conf.d/www.$DOMAIN.conf"# =============================================================================backend = systemd

        add_site_nginx

        read -p "Setup SSL for $DOMAIN? (y/n) [n]: " ssl_nowsetup_firewall() {

        [[ "$ssl_now" =~ ^[Yy]$ ]] && setup_site_ssl

    fi    log_info "Configuring UFW firewall..."[sshd]

    save_state

    systemctl restart nginx    enabled = true

    show_server_info

}    # Check if UFW is already configuredport = $SSH_PORT



run_add_site() {    if ufw status | grep -q "Status: active"; thenfilter = sshd

    if select_site; then

        add_site_nginx        log_info "UFW is already active, ensuring ports are open..."logpath = /var/log/auth.log

        read -p "Setup SSL for $DOMAIN? (y/n) [n]: " ssl_now

        [[ "$ssl_now" =~ ^[Yy]$ ]] && setup_site_ssl        ufw allow $SSH_PORT/tcp 2>/dev/null || truemaxretry = 3

        log_success "Site $DOMAIN added!"

    fi        ufw allow 80/tcp 2>/dev/null || truebantime = 86400

}

        ufw allow 443/tcp 2>/dev/null || true

run_setup_ssl() {

    echo ""    else[nginx-http-auth]

    echo -e "${YELLOW}Select site for SSL:${NC}"

    local sites=()        ufw --force resetenabled = true

    local i=1

    for conf in /etc/nginx/conf.d/www.*.conf; do        ufw default deny incomingfilter = nginx-http-auth

        if [[ -f "$conf" ]]; then

            local domain        ufw default allow outgoingport = http,https

            domain=$(basename "$conf" .conf | sed 's/^www\.//')

            sites+=("$domain")        ufw allow $SSH_PORT/tcplogpath = /var/log/nginx/error.log

            echo "  $i) $domain"

            ((i++))        ufw allow 80/tcpmaxretry = 3

        fi

    done        ufw allow 443/tcp

    [[ ${#sites[@]} -eq 0 ]] && { log_error "No sites found."; return; }

    echo ""        ufw --force enable[nginx-limit-req]

    read -p "Choice [1-$((i-1))]: " site_num

    if [[ "$site_num" -ge 1 && "$site_num" -lt "$i" ]]; then    fienabled = true

        DOMAIN="${sites[$((site_num-1))]}"

        WWW_DOMAIN="www.$DOMAIN"    filter = nginx-limit-req

        WEB_ROOT="/var/www.$DOMAIN"

        NGINX_CONF="/etc/nginx/conf.d/www.$DOMAIN.conf"    log_success "Firewall configured."port = http,https

        setup_site_ssl

    fi}logpath = /var/log/nginx/error.log

}

maxretry = 10

# =============================================================================

# Main# =============================================================================EOF

# =============================================================================

main() {# Fail2Ban Configuration    

    print_banner

    check_root# =============================================================================    systemctl enable fail2ban

    check_os

    touch "$LOG_FILE" 2>/dev/null || truesetup_fail2ban() {    systemctl restart fail2ban

    chmod 644 "$LOG_FILE" 2>/dev/null || true

    select_mode    log_info "Configuring Fail2Ban..."    

    case $SCRIPT_MODE in

        init) run_init ;;        log_success "Fail2Ban configured and started."

        add-site) run_add_site ;;

        setup-ssl) run_setup_ssl ;;    cat > /etc/fail2ban/jail.local << EOF}

        add-key) add_github_key ;;

        show-info) show_server_info ;;[DEFAULT]

    esac

}bantime = 3600# =============================================================================



main "$@"findtime = 600# Create Deploy User


maxretry = 5# =============================================================================

backend = systemdsetup_deploy_user() {

    log_info "Setting up deploy user..."

[sshd]    

enabled = true    # Create deploy user if not exists

port = $SSH_PORT    if ! id "$DEPLOY_USER" &>/dev/null; then

filter = sshd        useradd -m -s /bin/bash "$DEPLOY_USER"

logpath = /var/log/auth.log        log_info "Created user: $DEPLOY_USER"

maxretry = 3    else

bantime = 86400        log_warning "User $DEPLOY_USER already exists, updating configuration."

    fi

[nginx-http-auth]    

enabled = true    # Add deploy user to www-data group

filter = nginx-http-auth    usermod -aG www-data "$DEPLOY_USER"

port = http,https    

logpath = /var/log/nginx/error.log    # Setup SSH directory

maxretry = 3    mkdir -p /home/$DEPLOY_USER/.ssh

    chmod 700 /home/$DEPLOY_USER/.ssh

[nginx-limit-req]    touch /home/$DEPLOY_USER/.ssh/authorized_keys

enabled = true    chmod 600 /home/$DEPLOY_USER/.ssh/authorized_keys

filter = nginx-limit-req    

port = http,https    # Add GitHub deploy key if provided

logpath = /var/log/nginx/error.log    if [[ -n "$GITHUB_PUBKEY" ]]; then

maxretry = 10        # Avoid duplicate keys

EOF        if ! grep -qF "$GITHUB_PUBKEY" /home/$DEPLOY_USER/.ssh/authorized_keys 2>/dev/null; then

                echo "$GITHUB_PUBKEY" >> /home/$DEPLOY_USER/.ssh/authorized_keys

    systemctl enable fail2ban            log_success "GitHub deploy key added to authorized_keys"

    systemctl restart fail2ban        else

                log_warning "GitHub deploy key already exists in authorized_keys"

    log_success "Fail2Ban configured."        fi

}    fi

    

# =============================================================================    chown -R $DEPLOY_USER:$DEPLOY_USER /home/$DEPLOY_USER/.ssh

# Create Deploy User    

# =============================================================================    # Create sudoers configuration for deploy user

setup_deploy_user() {    cat > /etc/sudoers.d/deploy << EOF

    log_info "Setting up deploy user..."# Allow deploy user to manage web deployments

    $DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx

    if ! id "$DEPLOY_USER" &>/dev/null; then$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx

        useradd -m -s /bin/bash "$DEPLOY_USER"$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chown -R www-data\:www-data /var/www.*

        log_info "Created user: $DEPLOY_USER"$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chmod -R 755 /var/www.*

    elseEOF

        log_info "User $DEPLOY_USER already exists."    

    fi    chmod 440 /etc/sudoers.d/deploy

        

    usermod -aG www-data "$DEPLOY_USER"    log_success "Deploy user configured."

    }

    # Setup SSH directory

    mkdir -p /home/$DEPLOY_USER/.ssh# =============================================================================

    chmod 700 /home/$DEPLOY_USER/.ssh# Nginx Installation & Configuration

    touch /home/$DEPLOY_USER/.ssh/authorized_keys# =============================================================================

    chmod 600 /home/$DEPLOY_USER/.ssh/authorized_keyssetup_nginx() {

    chown -R $DEPLOY_USER:$DEPLOY_USER /home/$DEPLOY_USER/.ssh    log_info "Installing Nginx..."

        apt install nginx -y

    # Create sudoers configuration    

    cat > /etc/sudoers.d/deploy << EOF    log_info "Configuring Nginx for $DOMAIN..."

# Allow deploy user to manage web deployments    

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx    # Create web root directory

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx    mkdir -p "$WEB_ROOT"

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chown -R www-data\:www-data /var/www.*    

$DEPLOY_USER ALL=(ALL) NOPASSWD: /bin/chmod -R 755 /var/www.*    # Create placeholder index.html

EOF    cat > "$WEB_ROOT/index.html" << EOF

    chmod 440 /etc/sudoers.d/deploy<!DOCTYPE html>

    <html lang="en">

    log_success "Deploy user configured."<head>

}    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

# =============================================================================    <title>$DOMAIN - Coming Soon</title>

# Add GitHub Deploy Key    <style>

# =============================================================================        body {

add_github_key() {            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

    echo ""            display: flex;

    echo -e "${YELLOW}GitHub Actions SSH Public Key:${NC}"            justify-content: center;

    echo "  Paste the PUBLIC key (starts with 'ssh-ed25519' or 'ssh-rsa')."            align-items: center;

    echo "  Leave empty to skip."            height: 100vh;

    echo ""            margin: 0;

    read -p "GitHub deploy public key: " GITHUB_PUBKEY            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

                color: white;

    if [[ -n "$GITHUB_PUBKEY" ]]; then        }

        # Avoid duplicate keys        .container { text-align: center; }

        if ! grep -qF "$GITHUB_PUBKEY" /home/$DEPLOY_USER/.ssh/authorized_keys 2>/dev/null; then        h1 { font-size: 3rem; margin-bottom: 0.5rem; }

            echo "$GITHUB_PUBKEY" >> /home/$DEPLOY_USER/.ssh/authorized_keys        p { font-size: 1.2rem; opacity: 0.9; }

            chown $DEPLOY_USER:$DEPLOY_USER /home/$DEPLOY_USER/.ssh/authorized_keys    </style>

            log_success "GitHub deploy key added."</head>

        else<body>

            log_warning "This key already exists in authorized_keys."    <div class="container">

        fi        <h1>$DOMAIN</h1>

    else        <p>Site is being deployed. Check back soon!</p>

        log_info "Skipped adding GitHub key."    </div>

    fi</body>

}</html>

EOF

# =============================================================================    

# Install Nginx    # Set ownership - deploy user owns the files, www-data group for reading

# =============================================================================    chown -R $DEPLOY_USER:www-data "$WEB_ROOT"

setup_nginx_base() {    chmod -R 755 "$WEB_ROOT"

    if command -v nginx &>/dev/null; then    

        log_info "Nginx is already installed."    # Set ACL for deploy user

    else    setfacl -R -m u:$DEPLOY_USER:rwx "$WEB_ROOT" 2>/dev/null || true

        log_info "Installing Nginx..."    setfacl -R -d -m u:$DEPLOY_USER:rwx "$WEB_ROOT" 2>/dev/null || true

        apt install nginx -y    

    fi    # Create Nginx configuration

        cat > "$NGINX_CONF" << EOF

    # Hide nginx version globally# $DOMAIN Nginx Configuration

    if ! grep -q "server_tokens off" /etc/nginx/nginx.conf; then# Rate limiting zone

        sed -i '/http {/a\    server_tokens off;' /etc/nginx/nginx.conflimit_req_zone \$binary_remote_addr zone=${DOMAIN//./_}_limit:10m rate=10r/s;

    fi

    server {

    # Remove default site    listen 80;

    rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true    listen [::]:80;

        server_name $DOMAIN $WWW_DOMAIN;

    systemctl enable nginx

    systemctl start nginx    root $WEB_ROOT;

        index index.html;

    log_success "Nginx base setup complete."

}    access_log /var/log/nginx/${DOMAIN}.access.log;

    error_log  /var/log/nginx/${DOMAIN}.error.log warn;

# =============================================================================

# Add Site to Nginx    # Performance tuning

# =============================================================================    sendfile        on;

add_site_nginx() {    tcp_nopush      on;

    log_info "Configuring Nginx for $DOMAIN..."    tcp_nodelay     on;

        keepalive_timeout 65;

    # Create web root directory    types_hash_max_size 2048;

    mkdir -p "$WEB_ROOT"

        include /etc/nginx/mime.types;

    # Create placeholder index.html    default_type application/octet-stream;

    cat > "$WEB_ROOT/index.html" << EOF

<!DOCTYPE html>    # Security - hide sensitive files

<html lang="en">    location ~ /\.(?!well-known) {

<head>        deny all;

    <meta charset="UTF-8">        access_log off;

    <meta name="viewport" content="width=device-width, initial-scale=1.0">        log_not_found off;

    <title>$DOMAIN - Coming Soon</title>    }

    <style>

        body {    # Block common attack patterns

            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;    location ~* (\.php|\.asp|\.aspx|\.jsp|\.cgi)\$ {

            display: flex; justify-content: center; align-items: center;        deny all;

            height: 100vh; margin: 0;        access_log off;

            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);        log_not_found off;

            color: white;    }

        }

        .container { text-align: center; }    # Main location with rate limiting

        h1 { font-size: 3rem; margin-bottom: 0.5rem; }    location / {

        p { font-size: 1.2rem; opacity: 0.9; }        limit_req zone=${DOMAIN//./_}_limit burst=20 nodelay;

    </style>        try_files \$uri \$uri/ /index.html;

</head>        

<body>        add_header Cache-Control "no-cache, must-revalidate, max-age=0";

    <div class="container">        add_header X-Content-Type-Options nosniff always;

        <h1>$DOMAIN</h1>        add_header X-Frame-Options "SAMEORIGIN" always;

        <p>Site is being deployed. Check back soon!</p>        add_header X-XSS-Protection "1; mode=block" always;

    </div>        add_header Referrer-Policy "strict-origin-when-cross-origin" always;

</body>        add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

</html>    }

EOF

        # Static assets with long cache

    # Set ownership    location ~* \.(?:css|js|json|map|xml|svg|png|jpe?g|gif|ico|webp|avif|ttf|woff2?|eot)\$ {

    chown -R $DEPLOY_USER:www-data "$WEB_ROOT"        try_files \$uri =404;

    chmod -R 755 "$WEB_ROOT"        access_log off;

    setfacl -R -m u:$DEPLOY_USER:rwx "$WEB_ROOT" 2>/dev/null || true        expires 365d;

    setfacl -R -d -m u:$DEPLOY_USER:rwx "$WEB_ROOT" 2>/dev/null || true        add_header Cache-Control "public, max-age=31536000, immutable";

            add_header Pragma public;

    # Create Nginx configuration    }

    local ZONE_NAME="${DOMAIN//./_}_limit"

    cat > "$NGINX_CONF" << EOF    location = /robots.txt { try_files \$uri =404; access_log off; }

# $DOMAIN Nginx Configuration    location = /sitemap.xml { try_files \$uri =404; access_log off; }

limit_req_zone \$binary_remote_addr zone=${ZONE_NAME}:10m rate=10r/s;    location = /favicon.ico { try_files \$uri =404; access_log off; }



server {    autoindex off;

    listen 80;    error_page 404 /index.html;

    listen [::]:80;    error_page 500 502 503 504 /50x.html;

    server_name $DOMAIN $WWW_DOMAIN;    location = /50x.html { root /usr/share/nginx/html; }



    root $WEB_ROOT;    # Gzip compression

    index index.html;    gzip on;

    gzip_vary on;

    access_log /var/log/nginx/${DOMAIN}.access.log;    gzip_proxied any;

    error_log  /var/log/nginx/${DOMAIN}.error.log warn;    gzip_comp_level 6;

    gzip_min_length 256;

    sendfile on;    gzip_types

    tcp_nopush on;        text/plain text/css text/xml text/javascript

    tcp_nodelay on;        application/json application/javascript application/x-javascript

    keepalive_timeout 65;        application/xml application/xml+rss

    types_hash_max_size 2048;        application/vnd.ms-fontobject application/x-font-ttf

        font/opentype image/svg+xml image/x-icon;

    include /etc/nginx/mime.types;}

    default_type application/octet-stream;EOF

    

    location ~ /\.(?!well-known) {    # Remove default nginx site

        deny all;    rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true

        access_log off;    

        log_not_found off;    # Hide nginx version globally

    }    sed -i 's/# server_tokens off;/server_tokens off;/' /etc/nginx/nginx.conf 2>/dev/null || \

    grep -q "server_tokens off" /etc/nginx/nginx.conf || \

    location ~* (\.php|\.asp|\.aspx|\.jsp|\.cgi)\$ {    sed -i '/http {/a\    server_tokens off;' /etc/nginx/nginx.conf

        deny all;    

        access_log off;    # Test and start nginx

        log_not_found off;    nginx -t

    }    systemctl enable nginx

    systemctl restart nginx

    location / {    

        limit_req zone=${ZONE_NAME} burst=20 nodelay;    log_success "Nginx installed and configured."

        try_files \$uri \$uri/ /index.html;}

        

        add_header Cache-Control "no-cache, must-revalidate, max-age=0";# =============================================================================

        add_header X-Content-Type-Options nosniff always;# SSL/TLS Configuration with Certbot

        add_header X-Frame-Options "SAMEORIGIN" always;# =============================================================================

        add_header X-XSS-Protection "1; mode=block" always;setup_ssl() {

        add_header Referrer-Policy "strict-origin-when-cross-origin" always;    log_info "Installing Certbot..."

        add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;    apt install certbot python3-certbot-nginx python3-certbot-dns-route53 -y

    }    

    if [[ "$ENABLE_SSL" =~ ^[Yy]$ ]]; then

    location ~* \.(?:css|js|json|map|xml|svg|png|jpe?g|gif|ico|webp|avif|ttf|woff2?|eot)\$ {        log_info "Obtaining SSL certificate..."

        try_files \$uri =404;        

        access_log off;        if [[ -n "$AWS_KEY_ID" && -n "$AWS_SECRET" ]]; then

        expires 365d;            # Route 53 DNS validation

        add_header Cache-Control "public, max-age=31536000, immutable";            export AWS_ACCESS_KEY_ID="$AWS_KEY_ID"

        add_header Pragma public;            export AWS_SECRET_ACCESS_KEY="$AWS_SECRET"

    }            

            certbot -i nginx \

    location = /robots.txt { try_files \$uri =404; access_log off; }                -d "$DOMAIN" \

    location = /sitemap.xml { try_files \$uri =404; access_log off; }                -d "$WWW_DOMAIN" \

    location = /favicon.ico { try_files \$uri =404; access_log off; }                --dns-route53 \

                --agree-tos \

    autoindex off;                --no-eff-email \

    error_page 404 /index.html;                --non-interactive \

    error_page 500 502 503 504 /50x.html;                --email "admin@$DOMAIN" || {

    location = /50x.html { root /usr/share/nginx/html; }                    log_warning "SSL setup with Route 53 failed. You may need to configure it manually."

                }

    gzip on;        else

    gzip_vary on;            # HTTP validation

    gzip_proxied any;            certbot --nginx \

    gzip_comp_level 6;                -d "$DOMAIN" \

    gzip_min_length 256;                -d "$WWW_DOMAIN" \

    gzip_types                --agree-tos \

        text/plain text/css text/xml text/javascript                --no-eff-email \

        application/json application/javascript application/x-javascript                --non-interactive \

        application/xml application/xml+rss                --email "admin@$DOMAIN" || {

        application/vnd.ms-fontobject application/x-font-ttf                    log_warning "SSL setup failed. Make sure DNS is pointing to this server."

        font/opentype image/svg+xml image/x-icon;                }

}        fi

EOF    else

            log_info "SSL setup skipped. Run manually when ready:"

    # Test and reload nginx        echo ""

    nginx -t        echo "  Option 1 (HTTP validation - DNS must point here):"

    systemctl reload nginx        echo "    sudo certbot --nginx -d $DOMAIN -d $WWW_DOMAIN --agree-tos --no-eff-email"

            echo ""

    log_success "Site $DOMAIN added to Nginx."        echo "  Option 2 (Route 53 DNS validation):"

}        echo "    export AWS_ACCESS_KEY_ID='your_key_id'"

        echo "    export AWS_SECRET_ACCESS_KEY='your_secret'"

# =============================================================================        echo "    sudo certbot -i nginx -d $DOMAIN -d $WWW_DOMAIN --dns-route53 --agree-tos --no-eff-email"

# SSL Setup for Site        echo ""

# =============================================================================    fi

setup_site_ssl() {    

    # Install certbot if needed    # Setup auto-renewal cron job

    if ! command -v certbot &>/dev/null; then    (crontab -l 2>/dev/null | grep -v certbot; echo "0 3 * * * /usr/bin/certbot renew --quiet --post-hook 'systemctl reload nginx'") | crontab -

        log_info "Installing Certbot..."    

        apt install certbot python3-certbot-nginx python3-certbot-dns-route53 -y    log_success "Certbot installed and auto-renewal configured."

    fi}

    

    echo ""# =============================================================================

    echo -e "${YELLOW}SSL Certificate for $DOMAIN${NC}"# Create Deploy Script

    echo "  1) HTTP validation (DNS must point to this server)"# =============================================================================

    echo "  2) Route 53 DNS validation (requires AWS credentials)"setup_deploy_script() {

    echo "  3) Skip SSL setup"    log_info "Creating deployment script..."

    echo ""    

        cat > /home/$DEPLOY_USER/deploy.sh << 'DEPLOY_SCRIPT'

    read -p "Enter choice [1-3]: " ssl_choice#!/bin/bash

    # Deployment script for GitHub Actions

    case $ssl_choice in# Usage: ./deploy.sh <archive_path> <target_dir>

        1)

            log_info "Setting up SSL with HTTP validation..."set -e

            certbot --nginx \

                -d "$DOMAIN" \ARCHIVE="$1"

                -d "$WWW_DOMAIN" \TARGET_DIR="$2"

                --agree-tos \

                --no-eff-email \if [[ -z "$ARCHIVE" || -z "$TARGET_DIR" ]]; then

                --non-interactive \    echo "Usage: $0 <archive_path> <target_dir>"

                --email "admin@$DOMAIN" || {    echo "Example: $0 /tmp/build-tikmatrix.tar.gz /var/www.tikmatrix.com"

                    log_warning "SSL setup failed. Make sure DNS points to this server."    exit 1

                }fi

            ;;

        2)if [[ ! -f "$ARCHIVE" ]]; then

            echo ""    echo "Error: Archive not found: $ARCHIVE"

            read -p "AWS Access Key ID: " AWS_KEY_ID    exit 1

            read -s -p "AWS Secret Access Key: " AWS_SECRETfi

            echo ""

            echo "🚀 Deploying $ARCHIVE -> $TARGET_DIR"

            if [[ -n "$AWS_KEY_ID" && -n "$AWS_SECRET" ]]; then

                export AWS_ACCESS_KEY_ID="$AWS_KEY_ID"# Create target directory if not exists

                export AWS_SECRET_ACCESS_KEY="$AWS_SECRET"mkdir -p "$TARGET_DIR"

                

                certbot -i nginx \# Backup current deployment (keep last 3)

                    -d "$DOMAIN" \BACKUP_DIR="/var/backups/www"

                    -d "$WWW_DOMAIN" \mkdir -p "$BACKUP_DIR"

                    --dns-route53 \BACKUP_NAME="$(basename $TARGET_DIR)-$(date +%Y%m%d_%H%M%S).tar.gz"

                    --agree-tos \

                    --no-eff-email \if [[ -d "$TARGET_DIR" && "$(ls -A $TARGET_DIR 2>/dev/null)" ]]; then

                    --non-interactive \    echo "📦 Backing up current deployment..."

                    --email "admin@$DOMAIN" || {    tar -czf "$BACKUP_DIR/$BACKUP_NAME" -C "$TARGET_DIR" . 2>/dev/null || true

                        log_warning "SSL setup with Route 53 failed."    

                    }    # Keep only last 3 backups

            else    ls -t "$BACKUP_DIR/$(basename $TARGET_DIR)-"* 2>/dev/null | tail -n +4 | xargs -r rm -f

                log_warning "AWS credentials not provided. Skipping SSL."fi

            fi

            ;;# Clear target directory

        3)echo "🗑️ Clearing target directory..."

            log_info "SSL setup skipped for $DOMAIN"rm -rf "$TARGET_DIR"/*

            ;;

    esac# Extract new deployment

    echo "📦 Extracting new deployment..."

    # Setup auto-renewal if certbot is installedtar -xzf "$ARCHIVE" -C "$TARGET_DIR"

    if command -v certbot &>/dev/null; then

        (crontab -l 2>/dev/null | grep -v certbot; echo "0 3 * * * /usr/bin/certbot renew --quiet --post-hook 'systemctl reload nginx'") | sort -u | crontab -# Set permissions

    fiecho "🔐 Setting permissions..."

}sudo chown -R www-data:www-data "$TARGET_DIR"

sudo chmod -R 755 "$TARGET_DIR"

# =============================================================================

# Security Hardening# Cleanup

# =============================================================================echo "🧹 Cleaning up..."

setup_security() {rm -f "$ARCHIVE"

    log_info "Applying security hardening..."

    echo "✅ Deployment completed successfully!"

    # Harden shared memoryecho "   Target: $TARGET_DIR"

    if ! grep -q "tmpfs /run/shm tmpfs" /etc/fstab; thenecho "   Backup: $BACKUP_DIR/$BACKUP_NAME"

        echo "tmpfs /run/shm tmpfs defaults,noexec,nosuid 0 0" >> /etc/fstabDEPLOY_SCRIPT

    fi    

        chmod +x /home/$DEPLOY_USER/deploy.sh

    chmod 600 /etc/ssh/sshd_config    chown $DEPLOY_USER:$DEPLOY_USER /home/$DEPLOY_USER/deploy.sh

        

    # Kernel security parameters    # Create backup directory

    if ! grep -q "# TikMatrix Security" /etc/sysctl.conf; then    mkdir -p /var/backups/www

        cat >> /etc/sysctl.conf << 'EOF'    chown $DEPLOY_USER:$DEPLOY_USER /var/backups/www

    

# TikMatrix Security hardening    log_success "Deployment script created at /home/$DEPLOY_USER/deploy.sh"

net.ipv4.conf.default.rp_filter=1}

net.ipv4.conf.all.rp_filter=1

net.ipv4.tcp_syncookies=1# =============================================================================

net.ipv4.conf.all.accept_redirects=0# Security Hardening

net.ipv4.conf.default.accept_redirects=0# =============================================================================

net.ipv4.conf.all.send_redirects=0setup_security() {

net.ipv4.conf.default.send_redirects=0    log_info "Applying security hardening..."

net.ipv4.conf.all.accept_source_route=0    

net.ipv4.conf.default.accept_source_route=0    # Harden shared memory

net.ipv4.conf.all.log_martians=1    if ! grep -q "tmpfs /run/shm tmpfs" /etc/fstab; then

EOF        echo "tmpfs /run/shm tmpfs defaults,noexec,nosuid 0 0" >> /etc/fstab

        sysctl -p 2>/dev/null || true    fi

    fi    

        chmod 600 /etc/ssh/sshd_config

    log_success "Security hardening applied."    

}    # Kernel security parameters

    if ! grep -q "# TikMatrix Security" /etc/sysctl.conf; then

# =============================================================================        cat >> /etc/sysctl.conf << 'EOF'

# System Optimization

# =============================================================================# TikMatrix Security hardening

setup_optimization() {net.ipv4.conf.default.rp_filter=1

    log_info "Applying system optimizations..."net.ipv4.conf.all.rp_filter=1

    net.ipv4.tcp_syncookies=1

    CORES=$(nproc)net.ipv4.conf.all.accept_redirects=0

    sed -i "s/worker_processes auto;/worker_processes $CORES;/" /etc/nginx/nginx.conf 2>/dev/null || truenet.ipv4.conf.default.accept_redirects=0

    net.ipv4.conf.all.send_redirects=0

    if ! grep -q "# Nginx optimization" /etc/security/limits.conf; thennet.ipv4.conf.default.send_redirects=0

        cat >> /etc/security/limits.conf << 'EOF'net.ipv4.conf.all.accept_source_route=0

net.ipv4.conf.default.accept_source_route=0

# Nginx optimizationnet.ipv4.conf.all.log_martians=1

www-data soft nofile 65535EOF

www-data hard nofile 65535        sysctl -p 2>/dev/null || true

deploy soft nofile 65535    fi

deploy hard nofile 65535    

EOF    log_success "Security hardening applied."

    fi}

    

    if ! grep -q "worker_rlimit_nofile" /etc/nginx/nginx.conf; then# =============================================================================

        sed -i '/worker_processes/a worker_rlimit_nofile 65535;' /etc/nginx/nginx.conf# System Optimization

    fi# =============================================================================

    setup_optimization() {

    log_success "System optimizations applied."    log_info "Applying system optimizations..."

}    

    # Optimize nginx worker processes

# =============================================================================    CORES=$(nproc)

# Create Deploy Script    sed -i "s/worker_processes auto;/worker_processes $CORES;/" /etc/nginx/nginx.conf 2>/dev/null || true

# =============================================================================    

setup_deploy_script() {    # Increase file descriptors limit

    log_info "Creating deployment script..."    if ! grep -q "# Nginx optimization" /etc/security/limits.conf; then

            cat >> /etc/security/limits.conf << 'EOF'

    cat > /home/$DEPLOY_USER/deploy.sh << 'DEPLOY_SCRIPT'

#!/bin/bash# Nginx optimization

set -ewww-data soft nofile 65535

www-data hard nofile 65535

ARCHIVE="$1"deploy soft nofile 65535

TARGET_DIR="$2"deploy hard nofile 65535

EOF

if [[ -z "$ARCHIVE" || -z "$TARGET_DIR" ]]; then    fi

    echo "Usage: $0 <archive_path> <target_dir>"    

    exit 1    # Optimize nginx for high performance

fi    if ! grep -q "worker_rlimit_nofile" /etc/nginx/nginx.conf; then

        sed -i '/worker_processes/a worker_rlimit_nofile 65535;' /etc/nginx/nginx.conf

if [[ ! -f "$ARCHIVE" ]]; then    fi

    echo "Error: Archive not found: $ARCHIVE"    

    exit 1    log_success "System optimizations applied."

fi}



echo "🚀 Deploying $ARCHIVE -> $TARGET_DIR"# =============================================================================

# Print Summary

mkdir -p "$TARGET_DIR"# =============================================================================

mkdir -p "/var/backups/www"print_summary() {

    # Get server IP

# Backup current deployment    SERVER_IP=$(curl -s --connect-timeout 5 ifconfig.me 2>/dev/null || curl -s --connect-timeout 5 icanhazip.com 2>/dev/null || echo 'YOUR_SERVER_IP')

if [[ -d "$TARGET_DIR" && "$(ls -A $TARGET_DIR 2>/dev/null)" ]]; then    

    BACKUP_NAME="$(basename $TARGET_DIR)-$(date +%Y%m%d_%H%M%S).tar.gz"    echo ""

    tar -czf "/var/backups/www/$BACKUP_NAME" -C "$TARGET_DIR" . 2>/dev/null || true    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"

    ls -t "/var/backups/www/$(basename $TARGET_DIR)-"* 2>/dev/null | tail -n +4 | xargs -r rm -f    echo -e "${GREEN}              TikMatrix VPS Setup Complete!                    ${NC}"

fi    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"

    echo ""

rm -rf "$TARGET_DIR"/*    echo -e "${YELLOW}Configuration Summary:${NC}"

tar -xzf "$ARCHIVE" -C "$TARGET_DIR"    echo "  Domain:          $DOMAIN"

sudo chown -R www-data:www-data "$TARGET_DIR"    echo "  Web Root:        $WEB_ROOT"

sudo chmod -R 755 "$TARGET_DIR"    echo "  Nginx Config:    $NGINX_CONF"

rm -f "$ARCHIVE"    echo "  Deploy User:     $DEPLOY_USER"

    echo "  SSH Port:        $SSH_PORT"

echo "✅ Deployment completed!"    echo "  Server IP:       $SERVER_IP"

DEPLOY_SCRIPT    echo ""

        echo -e "${YELLOW}GitHub Actions Secrets Configuration:${NC}"

    chmod +x /home/$DEPLOY_USER/deploy.sh    echo "  Add these secrets to your GitHub repository:"

    chown $DEPLOY_USER:$DEPLOY_USER /home/$DEPLOY_USER/deploy.sh    echo ""

    mkdir -p /var/backups/www    echo "  SERVER_HOST      = $SERVER_IP"

    chown $DEPLOY_USER:$DEPLOY_USER /var/backups/www    echo "  SERVER_USER      = $DEPLOY_USER"

        echo "  SERVER_PORT      = $SSH_PORT"

    log_success "Deployment script created."    echo "  SSH_PRIVATE_KEY  = (paste your private key content)"

}    echo ""

    if [[ -z "$GITHUB_PUBKEY" ]]; then

# =============================================================================        echo -e "${YELLOW}⚠️  GitHub Deploy Key Not Set${NC}"

# Show Server Info        echo "  To add later, run:"

# =============================================================================        echo "  echo 'YOUR_PUBLIC_KEY' >> /home/$DEPLOY_USER/.ssh/authorized_keys"

show_server_info() {        echo ""

    SERVER_IP=$(curl -s --connect-timeout 5 ifconfig.me 2>/dev/null || curl -s --connect-timeout 5 icanhazip.com 2>/dev/null || echo 'N/A')    fi

        echo -e "${YELLOW}Useful Commands:${NC}"

    echo ""    echo "  Check Nginx:      systemctl status nginx"

    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"    echo "  Test Config:      nginx -t"

    echo -e "${GREEN}                    Server Information                         ${NC}"    echo "  Reload Nginx:     systemctl reload nginx"

    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"    echo "  View Logs:        tail -f /var/log/nginx/${DOMAIN}.access.log"

    echo ""    echo "  Check Firewall:   ufw status"

    echo -e "${YELLOW}Server Details:${NC}"    echo "  Check Fail2Ban:   fail2ban-client status"

    echo "  IP Address:      $SERVER_IP"    echo ""

    echo "  Deploy User:     $DEPLOY_USER"    echo -e "${YELLOW}Deploy Script:${NC}"

    echo "  SSH Port:        $SSH_PORT"    echo "  /home/$DEPLOY_USER/deploy.sh <archive> <target_dir>"

    echo ""    echo ""

        echo "  Setup log: $LOG_FILE"

    list_sites    echo ""

        echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"

    echo -e "${YELLOW}GitHub Actions Configuration:${NC}"}

    echo "  Add this secret to your GitHub repository:"

    echo ""# =============================================================================

    echo "  SSH_PRIVATE_KEY  = (your Ed25519 private key)"# Main Execution

    echo ""# =============================================================================

    echo -e "${YELLOW}deploy-config.json server entry:${NC}"main() {

    echo "  {"    print_banner

    echo "    \"id\": \"server-name\","    

    echo "    \"host\": \"$SERVER_IP\","    # Pre-flight checks

    echo "    \"port\": $SSH_PORT,"    check_root

    echo "    \"user\": \"$DEPLOY_USER\""    check_os

    echo "  }"    

    echo ""    # Create log file

    echo -e "${YELLOW}Useful Commands:${NC}"    touch "$LOG_FILE"

    echo "  Check Nginx:      systemctl status nginx"    chmod 644 "$LOG_FILE"

    echo "  Test Config:      nginx -t"    

    echo "  Reload Nginx:     systemctl reload nginx"    # Interactive configuration

    echo "  Check Firewall:   ufw status"    interactive_config

    echo "  Check Fail2Ban:   fail2ban-client status"    

    echo ""    log_info "Starting TikMatrix VPS setup..."

    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"    

}    # Execute setup steps

    setup_system

# =============================================================================    setup_deploy_user

# Interactive Initial Config    setup_firewall

# =============================================================================    setup_fail2ban

interactive_init_config() {    setup_nginx

    echo ""    setup_optimization

    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"    setup_security

    echo -e "${CYAN}                    Initial Configuration                       ${NC}"    setup_ssl

    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"    setup_deploy_script

    echo ""    

        # Final nginx restart

    # SSH Port    systemctl restart nginx

    read -p "SSH port [default: 22]: " input_port    

    SSH_PORT="${input_port:-22}"    # Print summary

        print_summary

    # GitHub Deploy Key}

    add_github_key

    # Run main function

    # First sitemain "$@"

    echo ""
    read -p "Add first site now? (y/n) [default: y]: " add_first
    add_first="${add_first:-y}"
    
    if [[ "$add_first" =~ ^[Yy]$ ]]; then
        if select_site; then
            FIRST_SITE_DOMAIN="$DOMAIN"
        fi
    fi
    
    # Confirmation
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}                    Configuration Summary                       ${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo "  Deploy User:     $DEPLOY_USER"
    echo "  SSH Port:        $SSH_PORT"
    if [[ -n "$GITHUB_PUBKEY" ]]; then
        echo "  GitHub Key:      Provided"
    else
        echo "  GitHub Key:      Not provided"
    fi
    if [[ -n "$FIRST_SITE_DOMAIN" ]]; then
        echo "  First Site:      $FIRST_SITE_DOMAIN"
    fi
    echo ""
    
    read -p "Proceed with these settings? (y/n): " confirm
    if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
        log_info "Setup cancelled."
        exit 0
    fi
}

# =============================================================================
# Run Initial Setup
# =============================================================================
run_init() {
    interactive_init_config
    
    log_info "Starting initial server setup..."
    
    setup_system
    setup_deploy_user
    setup_firewall
    setup_fail2ban
    setup_nginx_base
    setup_optimization
    setup_security
    setup_deploy_script
    
    # Add first site if selected
    if [[ -n "$FIRST_SITE_DOMAIN" ]]; then
        DOMAIN="$FIRST_SITE_DOMAIN"
        WWW_DOMAIN="www.$DOMAIN"
        WEB_ROOT="/var/www.$DOMAIN"
        NGINX_CONF="/etc/nginx/conf.d/www.$DOMAIN.conf"
        
        add_site_nginx
        
        echo ""
        read -p "Setup SSL for $DOMAIN now? (y/n) [default: n]: " setup_ssl_now
        if [[ "$setup_ssl_now" =~ ^[Yy]$ ]]; then
            setup_site_ssl
        fi
    fi
    
    # Save state
    save_state
    
    # Final restart
    systemctl restart nginx
    
    show_server_info
}

# =============================================================================
# Run Add Site
# =============================================================================
run_add_site() {
    if select_site; then
        add_site_nginx
        
        echo ""
        read -p "Setup SSL for $DOMAIN now? (y/n) [default: n]: " setup_ssl_now
        if [[ "$setup_ssl_now" =~ ^[Yy]$ ]]; then
            setup_site_ssl
        fi
        
        log_success "Site $DOMAIN has been added!"
        echo ""
        echo "  Web root: $WEB_ROOT"
        echo "  Nginx config: $NGINX_CONF"
        echo ""
    fi
}

# =============================================================================
# Run SSL Setup
# =============================================================================
run_setup_ssl() {
    echo ""
    echo -e "${YELLOW}Select site to setup SSL:${NC}"
    
    local sites=()
    local i=1
    for conf in /etc/nginx/conf.d/www.*.conf; do
        if [[ -f "$conf" ]]; then
            local domain=$(basename "$conf" .conf | sed 's/^www\.//')
            sites+=("$domain")
            echo "  $i) $domain"
            ((i++))
        fi
    done
    
    if [[ ${#sites[@]} -eq 0 ]]; then
        log_error "No sites configured yet."
        return
    fi
    
    echo ""
    read -p "Enter choice [1-$((i-1))]: " site_num
    
    if [[ "$site_num" -ge 1 && "$site_num" -lt "$i" ]]; then
        DOMAIN="${sites[$((site_num-1))]}"
        WWW_DOMAIN="www.$DOMAIN"
        WEB_ROOT="/var/www.$DOMAIN"
        NGINX_CONF="/etc/nginx/conf.d/www.$DOMAIN.conf"
        
        setup_site_ssl
    else
        log_error "Invalid choice."
    fi
}

# =============================================================================
# Main
# =============================================================================
main() {
    print_banner
    check_root
    check_os
    
    # Create log file
    touch "$LOG_FILE"
    chmod 644 "$LOG_FILE"
    
    # Select mode
    select_mode
    
    case $SCRIPT_MODE in
        init)
            run_init
            ;;
        add-site)
            run_add_site
            ;;
        setup-ssl)
            run_setup_ssl
            ;;
        add-key)
            add_github_key
            ;;
        show-info)
            show_server_info
            ;;
    esac
}

main "$@"
