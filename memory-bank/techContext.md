# Technical Context

## Development Stack
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Tailwind CSS for styling

## Project Structure

### Core Directories
- `src/`: Source code
  - `components/`: Reusable React components
    - `layout/`: Layout components
    - `sections/`: Page section components
  - `pages/`: Page components
  - `assets/`: Static assets
    - `images/`: Image files
      - `team/`: Team member photos
      - `logos/`: Brand and company logos
      - `icons/`: Custom icon assets
    - `fonts/`: Custom font files
    - `styles/`: Global styles and utilities
  - `types/`: TypeScript type definitions

### Key Files
- `index.html`: Entry point
- `src/main.tsx`: React entry point
- `src/App.tsx`: Root component
- `src/routes.tsx`: Route definitions
- `tailwind.config.js`: Tailwind configuration
- `postcss.config.cjs`: PostCSS configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies

## Dependencies

### Core
- react
- react-dom
- react-router-dom
- typescript

### Development
- @types/react
- @types/react-dom
- @types/react-router-dom
- @vitejs/plugin-react
- tailwindcss
- autoprefixer
- postcss
- @tailwindcss/aspect-ratio

## Configuration

### TypeScript
- Strict mode enabled
- ES modules
- React JSX transform
- Path aliases configured

### Tailwind CSS
- Custom color palette
- Custom font families
- Extended theme configuration
- Aspect ratio plugin
- Custom component classes

### PostCSS
- Tailwind CSS processing
- Autoprefixer for cross-browser compatibility

## Development Environment
- Node.js v22.14.0
- npm package manager
- VS Code editor recommended
- Development server: http://localhost:5177

## Build Process
- Development: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Deployment
- Static site output
- Prepared for Amazon S3 hosting
- GitHub for source control

## Best Practices
- Mobile-first responsive design
- Component-based architecture
- TypeScript for type safety
- Utility-first CSS with Tailwind
- Semantic HTML structure
- Accessibility considerations

## Future Technical Considerations
- Form submission handling
- API integration
- Analytics implementation
- Performance optimization
- Testing setup
- CI/CD pipeline
- SEO optimization
