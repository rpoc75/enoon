#!/bin/bash

# -----------------------------------------
# SWIFT Theme Release Script
# Automates version bump + packaging
# -----------------------------------------

set -e

echo "-----------------------------------------"
echo " SWIFT Theme Release Script"
echo "-----------------------------------------"

# 1. Bump version (patch, minor, or major)
if [ -z "$1" ]; then
  echo "Error: No version bump type provided."
  echo "Usage: ./release.sh patch|minor|major"
  exit 1
fi

echo "Bumping version ($1)..."
npm version "$1"

# 2. Clean previous build artifacts
echo "Cleaning old ZIP files..."
rm -f ../swift-*.zip

# 3. Install fresh dependencies (optional but recommended)
echo "Installing fresh dependencies..."
npm install --silent

# 4. Run a clean build
echo "Building project..."
npm run build

# 5. Package final ZIP
VERSION=$(node -p "require('./package.json').version")
ZIP_NAME="swift-v$VERSION.zip"

echo "Packaging $ZIP_NAME..."

cd ..
zip -r "$ZIP_NAME" swift \
  -x "swift/node_modules/*" \
  -x "swift/.git/*" \
  -x "swift/.vercel/*" \
  -x "swift/.astro/*" \
  -x "swift/.vite/*" \
  -x "swift/release.sh" \
  -x "swift/.DS_Store"

echo "-----------------------------------------"
echo " Release complete!"
echo " Version: $VERSION"
echo " File created: $ZIP_NAME"
echo "-----------------------------------------"
