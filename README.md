# clcolorize
Simple library for command line coloring.

## Install

```bash
npm i clcolorize
```


# API

+ **[clcolorize](#clcolorize)** - Provides a collection of color methods and a function to enable or disable colors.
+ **[clc](#clc)** - A utility to apply multiple color styles to a string.

# Usage

## clcolorize
#### `clcolorize: Colors & { createColors: (enabled?: boolean) => Colors }`

> The clcolorize object contains various methods for coloring strings, based on the Colors interface. You can also create a custom instance with the createColors method, enabling or disabling coloring as needed.

```ts
import { clcolorize } from 'clcolorize';

const { red, bold } = clcolorize;

console.log(red('This text will be red!'));
console.log(bold('This text will be bold!'));

// Disable colors
const noColors = clcolorize.createColors(false);
console.log(noColors.red('This will not be colored!'));
```

## clc
### `clc(string: string, style: (keyof Omit<Colors, 'isColorSupported'>)[]): string`

> The clc function allows you to apply multiple color styles to a string in one go. You can pass an array of styles from the Colors interface to format the string.

```ts
import { clc } from 'clcolorize';

const styledText = clc('This will be red and bold', ['red', 'bold']);
console.log(styledText);
```