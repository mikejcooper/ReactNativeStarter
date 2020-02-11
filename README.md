# React Native Template

![React Native version](https://img.shields.io/badge/react--native-0.61.5-blue.svg)

## Getting Started

## First commit test

### React Native

#### Step 1

Before attempting to run the project, first work through the Getting Started [Guide](https://facebook.github.io/react-native/docs/getting-started) on React Native website.

- Select the **_React Native CLI Quickstart_**

#### Step 2

Install dependencies (check node version - see below):

1. \$ npm install
2. \$ react-native link
3. \$ cd ios/ && pod install && cd ../

#### Step 3

Run the project:

##### iOS

1. Open: ios/ReactNativeStarter.xcworkspace
2. Select target simulator (or real) device
3. Run/Build project

##### Android

1. react-native run-android

### Node

Always make sure you have the correct version of node installed.

- Check node version: - _\$ node -v_
- Control node versions across different projects use [NVM](https://github.com/nvm-sh/nvm). - _\$ nvm use_  
   - _.nvmrc_ file declares the project node version

## Project Overview

### File Structure

- **\_\_tests\_\_/** - Test Folder
- **.vscode/** - Visual code studio settings (custom)
- **android/** - Android project
- **ios/** - iOS project
- **node_modules/** - Contains third party node modules
- **src/** - Main project directory
- **.buckconfig** - Default config file
- **.env** - Environment variables e.g. auth tokens, API urls
- **.flowconfig** - Default config file
- **.gitattributes** - Git config file
- **.gitignore** - Git ignore file
- **.java-version** - Required java version
- **.nvmrc** - Used by nvm to switch node version
- **.prettierrc** - Prettier config file (Syntax formatting)
- **app.json** - App name file
- **babel.config.js** - Babel (Javascript compiler) config file
- **metro.config.js** - Default config
- **package.json** - npm package file which holds project matedata.
- **react-native.config.js** - Default config
- **tsconfig.js** - Typescript config file
- **tslint.js** - Typescript linter config file

### Source directory - /src

Use [REDUX-Saga](https://www.youtube.com/watch?v=eUMbH6X_Adc) data flow.

- **actions/**
- **api/**
- **assets/**
- **components/**
- **config/**
- **reducers/**
- **sagas/**
- **screens/**

### Navigation - /src/config/routes/Router.tsx

Use wix/react-native-navigation for navigation.

The navigation stacks can be changed/added to in _/src/config/routes/Router.tsx_.

## Coding Guidelines

- Use [Smart and Dumb components](https://www.youtube.com/watch?v=m2q3Dyr6To4) structure.

## Visual Code Studio

Use VSCode with the following **Extensions**:

- Prettier
- TSLint
- Code Spell Checker
