# Structure Bootstrap

A TypeScript-based Node.js project template with a well-organized structure and modern development tools.

## 🚀 Features

- TypeScript support with strict type checking
- ESLint v9 with flat config for code linting
- Prettier for code formatting
- Path aliases for clean imports
- Modular project structure
- Source map support for debugging

## 📁 Project Structure

```
src/
├── adapters/           # External service adapters
├── combined-services/  # Cross-model service orchestration
├── config/             # Configuration files
├── constants/          # Application constants
├── controllers/        # Request handlers
├── contracts/          # Type definitions and interfaces
├── interceptors/       # External API / integration interceptors
├── loaders/            # Application bootstrapping
├── locales/            # i18n translation files
├── middlewares/        # Express middlewares
├── models/             # Data models
├── processes/          # Cron jobs and background processes
├── routes/             # API routes
├── schemas/            # Validation schemas
├── services/           # Business logic
├── swagger/            # OpenAPI definitions and paths
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── views/              # View templates
```

## 🛠️ Development Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Development Scripts**
   - `npm run dev` - Start development server with hot reload
   - `npm run build` - Compile TypeScript and resolve path aliases
   - `npm run start` - Run compiled application
   - `npm run lint` - Check for linting issues
   - `npm run lint:fix` - Automatically fix linting issues
   - `npm run format` - Format code using Prettier

## 🔧 Configuration

### TypeScript

- Strict type checking enabled
- ES2022 features supported
- Path aliases configured for clean imports
- Source maps enabled for debugging

### ESLint

- Flat config format (ESLint v9)
- TypeScript-aware linting
- Prettier integration
- Custom rules for TypeScript

### Prettier

- Single quotes
- 100 character line width
- 2 spaces indentation
- Trailing commas in objects and arrays

## 📝 Path Aliases

The project uses path aliases for cleaner imports:

- `@adapters` → `src/adapters`
- `@combinedServices` → `src/combined-services`
- `@config` → `src/config`
- `@constants` → `src/constants`
- `@controllers` → `src/controllers`
- `@contracts` → `src/contracts`
- `@interceptors` → `src/interceptors`
- `@loaders` → `src/loaders`
- `@middlewares` → `src/middlewares`
- `@models` → `src/models`
- `@processes` → `src/processes`
- `@routes` → `src/routes`
- `@schema` → `src/schemas`
- `@services` → `src/services`
- `@utils` → `src/utils`
- `@types` → `src/types`

## 🔍 TypeScript Configuration

- Strict mode enabled
- ES2022 features
- Node.js types included
- Source maps for debugging
- Path aliases for clean imports
- CommonJS module system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
