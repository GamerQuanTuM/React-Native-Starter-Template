# React Native Starter Template

This is a starter template for React Native projects with TypeScript support.

## Features
- Expo SDK 49
- TypeScript support
- Pre-configured navigation
- Basic folder structure
- Common utilities and hooks

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo/react-native-starter.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
.
├── android/            # Android native code
├── app/                # Main application code
│   ├── (tabs)/         # Tab navigation screens
│   ├── _layout.tsx     # Root layout
│   └── settings.tsx    # Settings screen
├── assets/             # Static assets
│   ├── fonts/          # Custom fonts
│   └── images/         # App images
├── components/         # Reusable components
├── constants/          # Constants and configurations
├── hooks/              # Custom React hooks
├── scripts/            # Utility scripts
```

## Dependencies

### Main Packages
- @react-navigation/native
- @react-navigation/native-stack
- expo
- expo-status-bar
- react
- react-native
- react-native-safe-area-context
- react-native-screens

### Dev Dependencies
- @babel/core
- @types/react
- @types/react-native
- typescript
- eslint
- prettier

## Running the Project

1. Start the Metro bundler:
```bash
npm start
```

2. Run on Android:
```bash
npm run android
```

3. Run on iOS:
```bash
npm run ios
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
