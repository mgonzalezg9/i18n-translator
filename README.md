# I18n Translator

- [I18n Translator](#i18n-translator)
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Usage](#usage)
  - [Test Generation](#test-generation)
  - [Debugging](#debugging)

## Introduction

I18n Translator is a tool for translating your application into different languages. It is connected to my [i18n repository](https://github.com/mgonzalezg9/TranslatorScraper). However you can use the translation service you prefer, simply change `src/api/service.ts` calls to fit the Backend specifications.

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Axios](https://axios-http.com/es/docs/intro)

## Usage

Create a `.env` file with a content like the following:

```env
TRANSLATOR_URL = YOUR_TRANSLATOR_API_URL
TO = YOUR_TARGET_LANGUAGE
FROM = YOUR_SOURCE_LANGUAGE
INPUT_FILE = YOUR_INPUT_FILE
OUTPUT_FILE = YOUR_OUTPUT_FILE
MAX_QUERIES_PER_LEVEL = MAXIMUM_NO_OF_QUERIES
```

Feel free of running the app using `npm start`.

## Test Generation

You can generate a test file using the `npm run generate:test` command. Be sure of having the following keys added to your environment variables:

```
TEST_FILE = THE_LOCATION_WHERE_YOUR_TEST_FILE_WILL_BE_PLACED
TEST_KEYS = NO_OF_JSON_TEST_KEYS
TEST_TEXT = YOUR_TEST_TO_TRANSLATE_TESTING
```

## Debugging

VS Code debugging is available through `.vscode/launch.json` file. This file requires ts-node to be either installed locally or globally with the module linked to this project. In order to link ts-node, you can run `npm link ts-node`.
