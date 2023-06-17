# tunnelssh

Another SSH Tunnel Manager.

## Contributing

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
yarn
```

#### Compile and Hot-Reload for Development

```sh
yarn run dev
```

This runs concurrently, yarn run dev:web, yarn run dev:desktop, desktop waits for web startup and then starts the app.

#### Compile and Minify for Production

```sh
yarn run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn run test:unit
```

#### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
yarn run build

# Runs the end-to-end tests
yarn run test:e2e
# Runs the tests only on Chromium
yarn run test:e2e -- --project=chromium
# Runs the tests of a specific file
yarn run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
yarn run test:e2e -- --debug
```

#### Lint with [ESLint](https://eslint.org/)

```sh
yarn run lint
```
