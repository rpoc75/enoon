# Contributing to SWIFT — Astro SaaS Theme

Thank you for taking the time to contribute! 🎉

## Ways to Contribute

- Report bugs via a [bug report issue](.github/ISSUE_TEMPLATE/bug_report.yml)
- Request features via a [feature request issue](.github/ISSUE_TEMPLATE/feature_request.yml)
- Submit pull requests for fixes or improvements

## Running the Project Locally

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
git clone https://github.com/rpoc75/enoon.git
cd enoon
npm install
npm run dev
```

The dev server will be available at [http://localhost:4321](http://localhost:4321).

### Build

```bash
npm run build
npm run preview
```

## Code Style

- Use **TypeScript** for all new logic.
- Follow existing component patterns in `src/`.
- Use **Tailwind CSS** utility classes for styling — avoid custom CSS where Tailwind covers the use case.
- Keep components small and focused; prefer composition over large monolithic components.
- Run the project and verify your changes render correctly before submitting.

## Pull Request Process

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feat/my-feature
   ```
2. Make your changes and commit with a clear, descriptive message.
3. Push your branch and open a Pull Request against `main`.
4. Fill in the PR template fully.
5. A maintainer will review your PR as soon as possible.

## Commit Message Convention

Use concise, imperative-mood commit messages, e.g.:

```
fix: close unclosed code fence in README
feat: add dark-mode toggle component
docs: update installation instructions
```

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.
