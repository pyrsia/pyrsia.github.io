#!/usr/bin/env bash
apt-get update
apt-get install -y wget gnupg
wget -q -O - https://repo.pyrsia.io/repos/Release.key |  gpg --dearmor  > pyrsia.gpg
install -o root -g root -m 644 pyrsia.gpg /etc/apt/trusted.gpg.d/
echo "deb https://repo.pyrsia.io/repos/nightly focal main" >> /etc/apt/sources.list
apt-get update
apt-get install -y pyrsia

