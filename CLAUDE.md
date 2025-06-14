# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development Tasks
- `npm run dev` - Start development server with Turbopack enabled
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

### TypeScript and Linting
- Always run `npm run lint` after making changes to ensure code quality
- TypeScript strict mode is enabled - maintain type safety

## Project Architecture

### Modular Component Structure
This project follows a modular architecture pattern where components are organized by feature modules:

```
modules/
├── {feature}/
│   ├── layouts/          # Layout components for the feature
│   └── ui/
│       └── components/   # UI components with SCSS modules
```

### Next.js App Router Implementation
- Uses App Router with route groups: `app/(home)/` for layout organization
- Nested layouts: Root layout → Home layout → Page components
- Korean language support (`lang="ko"` in root layout)

### Component Patterns
- Export components using named exports: `export const ComponentName`
- Each component has a corresponding `.module.scss` file for styling
- Import SCSS modules as `styles` and use `styles.className` pattern
- Use TypeScript interfaces for component props

### Path Aliases
- `@/*` maps to the root directory (configured in tsconfig.json)
- Import from modules using relative paths within the same feature

## Styling Architecture

### SCSS Modules
- Each component has its own `.module.scss` file
- Import as `import styles from "./component.module.scss"`
- Use CSS class names with `styles.className` syntax
- Global styles are in `app/globals.css` with normalize.css import

### Styling Conventions
- Use kebab-case for CSS class names in SCSS files
- Use camelCase for accessing styles in TypeScript: `styles.headerContainer`

## Korean Language Support
- HTML lang attribute is set to "ko" in the root layout
- Navigation and content are in Korean
- Maintain Korean language consistency when adding new content

## Technology Stack
- **Next.js 15.3.3** with App Router
- **React 19.0.0** with TypeScript
- **SCSS/Sass** for styling with CSS modules
- **Turbopack** for fast development builds
- **ESLint** with Next.js configuration

## Development Workflow
1. Use `npm run dev` to start development server
2. Make changes following the modular component structure
3. Run `npm run lint` to check code quality
4. Test changes in the browser at `http://localhost:3000`
5. Build with `npm run build` to verify production readiness