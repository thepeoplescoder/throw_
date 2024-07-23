# throw_

A package that provides a single function:
```ts
function throw_(thing: any): never
```

If `thing` **is a function**, `throw thing()` is executed,
otherwise `throw thing` is executed.

That's it.

## How To build

Run this in a terminal window:
```shell
npm run build
```

## Usage

Using ES6 modules:
```js
import { throw_ } from "throw_";
```

Using CommonJS:
```js
const { throw_ } = require("throw_");
```

Afterwards, you can do things along the lines of this:
```js
expression = isErrorCondition
  ? throw_(anErrorObjectOrAFunctionThatReturnsSomethingThrowable)
  : intendedValueOfExpression;
```