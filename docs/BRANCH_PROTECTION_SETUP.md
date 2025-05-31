# Branch Protection Setup Guide

## Overview
This document outlines the branch protection configuration for the `my-portfolio-menno` repository to enforce a pull request workflow and maintain code quality.

## Current Repository Status
- **Repository**: `mdresch/my-portfolio-menno`
- **Primary Branch**: `master`
- **Current Protection**: None configured
- **Test Suite**: 88 comprehensive tests available for validation

## Recommended Branch Protection Rules

### 1. Core Protection Settings
- **Require pull request reviews before merging**: ✅ Enabled
  - Required approving reviews: 1
  - Dismiss stale pull request approvals when new commits are pushed: ✅ Enabled
  - Require review from code owners: ✅ Enabled (if CODEOWNERS file exists)

### 2. Status Check Requirements
- **Require status checks to pass before merging**: ✅ Enabled
  - Require branches to be up to date before merging: ✅ Enabled
  - **Recommended Status Checks**:
    - `test` (Jest test suite - 88 tests)
    - `lint` (ESLint validation)
    - `build` (Next.js build verification)

### 3. Additional Restrictions
- **Restrict pushes that create files**: ❌ Disabled (for flexibility)
- **Require signed commits**: ⚠️  Optional (recommended for production)
- **Require linear history**: ⚠️  Optional (prevents merge commits)
- **Allow force pushes**: ❌ Disabled
- **Allow deletions**: ❌ Disabled

### 4. Administrative Settings
- **Include administrators**: ✅ Enabled (even admins follow the rules)
- **Allow force pushes**: ❌ Disabled
- **Allow deletions**: ❌ Disabled

## Implementation Steps

### Step 1: Navigate to Repository Settings
1. Go to https://github.com/mdresch/my-portfolio-menno
2. Click on **Settings** tab
3. In the left sidebar, click **Branches**

### Step 2: Add Branch Protection Rule
1. Click **Add rule** button
2. In "Branch name pattern" field, enter: `master`
3. Configure the following settings:

#### Require a pull request before merging
- ✅ Check "Require a pull request before merging"
- Set "Required number of approvals before merging" to: `1`
- ✅ Check "Dismiss stale pull request approvals when new commits are pushed"
- ✅ Check "Require review from code owners" (if you have a CODEOWNERS file)

#### Require status checks to pass before merging
- ✅ Check "Require status checks to pass before merging"
- ✅ Check "Require branches to be up to date before merging"
- Add status checks (these will be available once CI/CD is set up):
  - `test`
  - `lint` 
  - `build`

#### Other restrictions
- ✅ Check "Restrict pushes that create files"
- ✅ Check "Include administrators"
- ❌ Leave "Allow force pushes" unchecked
- ❌ Leave "Allow deletions" unchecked

### Step 3: Save Protection Rule
Click **Create** to apply the branch protection rules.

## Setting Up Required Status Checks

To enable the recommended status checks, you'll need a GitHub Actions workflow. Here's a sample configuration:

### .github/workflows/ci.yml
```yaml
name: CI
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm test
      - run: npm run lint
      - run: npm run build
```

## Verification Steps

### 1. Test Direct Push Prevention
Try to push directly to master (this should fail):
```bash
# Make a small change
echo "# Test" >> test-file.md
git add test-file.md
git commit -m "Test direct push"
git push origin master
```
Expected result: Push should be rejected with an error message.

### 2. Test Pull Request Workflow
```bash
# Create a feature branch
git checkout -b feature/test-branch-protection
echo "# Branch protection test" >> test-file.md
git add test-file.md
git commit -m "Test PR workflow"
git push origin feature/test-branch-protection

# Create pull request via GitHub CLI or web interface
gh pr create --title "Test: Branch Protection" --body "Testing the new branch protection rules"
```

### 3. Verify Protection Status
```bash
# Check protection status via GitHub CLI
gh api repos/mdresch/my-portfolio-menno/branches/master/protection
```

## Benefits of This Configuration

1. **Code Quality**: All changes go through review process
2. **Stability**: Automated tests must pass before merging
3. **Collaboration**: Encourages proper Git workflow and code review
4. **History**: Maintains clean, traceable commit history
5. **Security**: Prevents accidental or malicious direct commits to master

## Troubleshooting

### Common Issues
1. **Status checks not appearing**: Ensure GitHub Actions workflow has run at least once
2. **Administrator bypass**: Remember that some settings may allow administrators to bypass rules
3. **CODEOWNERS not working**: Ensure the file is in the correct location (`.github/CODEOWNERS`)

### Emergency Override
In case of emergency, administrators can temporarily disable branch protection:
1. Go to Settings > Branches
2. Edit the protection rule
3. Uncheck relevant restrictions
4. **Remember to re-enable after emergency is resolved**

## Related Documentation
- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Repository CONTRIBUTING.md](./CONTRIBUTING.md) (if exists)
