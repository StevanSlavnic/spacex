# SpaceX Launches Project Documentation

## Overview

**SpaceX Launches** is a React-based web application designed to showcase SpaceX launch data. The project is built with modern tools and libraries to ensure robust functionality, maintainability, and developer productivity.

---

## Project Details

### General Information

- **Name**: SpaceX Launches
- **Version**: 1.0.0
- **Description**: A React project utilizing React Router, Tanstack React Query, TypeScript, Jest, React Testing Library, and Prettier for efficient development and testing workflows.
- **Main Entry**: `src/main.tsx`

---

## Key Features

- **Routing**: Managed using React Router for seamless navigation.
- **State Management**: Data fetching and caching are handled by Tanstack React Query.
- **Type Safety**: Fully typed with TypeScript for enhanced code reliability.
- **Testing**: Includes unit and integration tests using Jest and React Testing Library.
- **Code Style**: Enforced by ESLint and Prettier for consistent formatting and linting.

---

## Scripts

The following scripts are available for development, testing, and production:

### Development

- `start`: Starts the development server using Vite.

### Build

- `build`: Compiles the project for production using Vite.
- `preview`: Previews the production build locally.

### Testing

- `test`: Runs all tests using Jest.
- `test:watch`: Runs tests in watch mode.
- `test:coverage`: Generates a test coverage report.

### Linting and Formatting

- `lint`: Lints TypeScript and JSX files using ESLint.
- `format`: Formats code files using Prettier.

---

## Prerequisites

Ensure the following are installed on your system:

- Node.js (v16 or later recommended)
- npm or yarn package manager

---

## Installation

1.  Clone the repository:

    ```bash
    git clone
    ```

2.  Navigate to the project directory:

    ```bash
    cd spacex-launches
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

---

## Usage

### Start Development Server

Run the following command to start the local development server:

```bash
npm start
```

### Build for Production

Build the project for production by running:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Deploy on Netlify

Read

https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

### Run Tests

Execute all tests with:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate a coverage report:

```bash
npm run test:coverage
```

### Lint and Format Code

Lint the codebase:

```bash
npm run lint
```

Format code files:

```bash
npm run format
```

---

## Directory Structure

```bash
spacex-launches/
├── src/
│   ├── components/   # React components
│   ├── constants/    # Constant values
│   ├── containers/   # Container components
│   ├── context/      # Context API implementation
│   ├── features/     # Feature-specific modules
│   ├── mocks/        # Mock data for testing
│   ├── pages/        # Page components
│   ├── services/     # API services
│   ├── types/        # TypeScript types
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app component
│   ├── ErrorBoundry.ts # Error boundary component
│   ├── global.css    # Global styles
│   └── main.tsx      # Main entry point
├── .gitignore        # Git ignore rules
├── index.html        # HTML entry point
├── jest.config.js    # Jest configuration
├── jest.setup.ts     # Jest setup file
├── netifly.toml      # Netifly config
├── package-lock.json # Dependency lock file
├── package.json      # Project configuration
├── postcss.config.js # Postcss config
├── tailwind.config.js # Tailwind config
├── tailwind.config.js # TS config
└── vite.config.ts    # Vite configuration
```

---

## Contribution

Contributions are welcome! Please adhere to the following:

1.  Fork the repository.
2.  Create a new feature branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3.  Commit your changes:

    ```bash
    git commit -m "Add your message here"
    ```

4.  Push to your branch and create a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or feedback, please reach out to the maintainer.
