#!/bin/bash
set -e

echo "🚀 Setting up development environment..."

# Update system packages
sudo apt-get update -y

# Install Node.js 22 (required by Firebase functions)
echo "📦 Installing Node.js 22..."
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node.js installation
node --version
npm --version

# Install .NET 8.0 SDK
echo "📦 Installing .NET 8.0 SDK..."
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
sudo apt-get update -y
sudo apt-get install -y dotnet-sdk-8.0

# Verify .NET installation
dotnet --version

# Install Firebase CLI globally
echo "📦 Installing Firebase CLI..."
npm install -g firebase-tools

# Install TypeScript and tsx globally for script execution
echo "📦 Installing global TypeScript tools..."
npm install -g typescript tsx

# Navigate to workspace and install main dependencies
cd /mnt/persist/workspace
echo "📦 Installing main project dependencies..."
npm install

# Install dependencies for Firebase functions
if [ -d "functions" ]; then
    echo "📦 Installing Firebase functions dependencies..."
    cd functions
    npm install
    cd ..
fi

# Install dependencies for my-functions-menno if it exists
if [ -d "my-functions-menno" ]; then
    echo "📦 Installing my-functions-menno dependencies..."
    cd my-functions-menno
    npm install
    cd ..
fi

# Install dependencies for my-portfolio-menno if it exists
if [ -d "my-portfolio-menno" ]; then
    echo "📦 Installing my-portfolio-menno dependencies..."
    cd my-portfolio-menno
    npm install
    cd ..
fi

# Install dependencies for requirements-gathering-agent if it exists
if [ -d "requirements-gathering-agent" ]; then
    echo "📦 Installing requirements-gathering-agent dependencies..."
    cd requirements-gathering-agent
    npm install
    cd ..
fi

# Restore .NET packages for API projects
echo "📦 Restoring .NET packages..."
if [ -d "api" ]; then
    cd api
    dotnet restore
    cd ..
fi

# Add tools to PATH in user profile
echo "🔧 Configuring PATH..."
echo 'export PATH="$PATH:/usr/local/bin"' >> $HOME/.profile
echo 'export DOTNET_ROOT=/usr/share/dotnet' >> $HOME/.profile
echo 'export PATH="$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools"' >> $HOME/.profile

# Source the profile to make tools available immediately
source $HOME/.profile

echo "✅ Development environment setup complete!"
echo "📋 Installed tools:"
echo "   - Node.js $(node --version)"
echo "   - npm $(npm --version)"
echo "   - .NET $(dotnet --version)"
echo "   - Firebase CLI $(firebase --version)"
echo "   - TypeScript $(tsc --version)"