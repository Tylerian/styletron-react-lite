# styletron-react-lite
[![npm version](https://badge.fury.io/js/styletron-react-lite.svg)](https://badge.fury.io/js/styletron-react-lite)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/styletron-react-lite)](https://bundlephobia.com/result?p=styletron-react-lite)  

Lightweight `Styletron` bindings for `React`.  

`styletron-react-lite` is a thin react wrapper around Uber's `Styletron` library.

In contrast with it's full `styletron-react` counterpart which offers a full fledged styled component's like system,
this library only provides a React Context API and React Hooks along with Styletron Engine provider utilities to simplify it's use in  isomorphic environments.

## Installation

```bash
# installing the package from npm
npm install styletron-react-lite --save

# installing the package from yarn
yarn add styletron-react-lite
```

To use this library in a web browser or mobile app, you can use the pre-compiled UMD module located in /out dir.
You can also import the raw es6 code with a build system capable of loading NPM packages on the client. Some common choices include Browserify, Webpack, and Meteor 1.3+.

## Usage
Quick snippet:

RootComponent.js
```jsx
import {
  getStyletron,
  StyletronProvider
} from "styletron-react-lite";

import {
  Client
} from "styletron-engine-atomic";

const styletron = getStyletron();

function Root() {
  return (
    <StyletronProvider engine={styletron}>
      <YourComponentTree />
    </StyletronProvider>
  );
}
```

I recommend you to peak the source code to get a full understanding of this library, it's well written and should take you two mins to grasp the  concepts behind it.

---

## Contributing

Building locally:

```
npm install
npm run build
```

This project uses TypeScript for static typing and TSLint for linting. You can get both of these built into your editor with no configuration by opening this project in [Visual Studio Code](https://code.visualstudio.com/), an open source IDE which is available for free on all platforms.


## Maintainers
- You can be the first!

--------

**Jairo Tylera**  
*(c) 2019 - present*  
RELEASED UNDER THE **MIT** LICENSE  

