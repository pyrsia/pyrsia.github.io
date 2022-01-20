#!/bash
apt-get update
apt-get install -y wget gnupg
wget -qO - https://pyrsia.io/public.key | apt-key add -
echo "deb https://pyrsia.io/repo bionic main" >> /etc/apt/sources.list
apt-get update
apt-get install -y pyrsia
