## Contributing Guidelines
Thank you for your interest in contributing to Menno's Portfolio! Contributions are welcome and appreciated. To ensure a smooth collaboration, please follow these guidelines:

## How to Contribute

⚠️ **Important**: This repository uses **branch protection** on the `master` branch. All changes must be submitted via pull requests.

### Development Workflow

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine.
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-portfolio-menno.git
   cd my-portfolio-menno
   ```

3. **Create a Feature Branch**: Always create a new branch for your changes.
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Changes**: Implement your changes, ensuring they align with the project's style and goals.

5. **Test Your Changes**: Run the test suite to ensure nothing is broken.
   ```bash
   npm test                    # Run all tests
   npm run test:coverage       # Run tests with coverage
   npm run lint               # Check code style
   npm run build              # Verify build works
   ```

6. **Commit and Push**: Use clear commit messages and push to your feature branch.
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**: Open a pull request against the `master` branch with:
   - Clear description of changes
   - Reference to any related issues
   - Screenshots if UI changes are involved

### Branch Protection Rules

The `master` branch is protected with the following rules:
- ✅ **Pull requests required** - No direct pushes allowed
- ✅ **Status checks required** - All CI checks must pass
- ✅ **Review required** - At least 1 approval needed
- ✅ **Up-to-date branches** - Must be current with master

### Status Checks

Your pull request must pass these automated checks:
- **test** - Jest test suite (88 comprehensive tests)
- **lint** - ESLint code style validation  
- **build** - Next.js build verification
- **auto-requirements-test** - Auto-requirements script validation

## Code of Conduct
Please adhere to the Code of Conduct to maintain a respectful and inclusive environment for everyone.

## Reporting Issues
If you encounter any bugs or have suggestions for improvement, please:

Check the Issues section to see if it has already been reported.

If not, create a new issue with a detailed description.

## Style Guide
Follow the coding conventions used in the project.

Use clear and concise commit messages.

Include comments where necessary to explain complex code.

## Feedback
We value your feedback! Feel free to share your thoughts or ask questions in the Discussions section.
