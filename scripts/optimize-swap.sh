#!/bin/bash

# Increase system swap to help with memory-intensive builds
# This script temporarily increases swap space for the build process

# Check if running as root
if [ "$(id -u)" -ne 0 ]; then
    echo "This script needs to be run as root. Attempting with sudo..."
    exec sudo "$0" "$@"
    exit $?
fi

# Configuration
SWAP_FILE="/swapfile"
SWAP_SIZE="4G"

# Create a backup of current memory stats
echo "Current memory status:"
free -h
echo "------------------------"

# Check if swap file already exists
if [ -f "$SWAP_FILE" ]; then
    echo "Swap file already exists. Removing old swap file..."
    swapoff "$SWAP_FILE"
    rm "$SWAP_FILE"
fi

# Create new swap file
echo "Creating $SWAP_SIZE swap file..."
fallocate -l "$SWAP_SIZE" "$SWAP_FILE"
chmod 600 "$SWAP_FILE"
mkswap "$SWAP_FILE"
swapon "$SWAP_FILE"

# Show new memory stats
echo "------------------------"
echo "New memory status with added swap:"
free -h

echo "------------------------"
echo "Swap has been increased. You can now run your build process."
echo "After build completion, run optimize-swap.sh --cleanup to remove the temporary swap."
