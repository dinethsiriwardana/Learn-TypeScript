
# TypeScript Course by freeCodeCamp.org

This repository contains the code and notes for the TypeScript Course by freeCodeCamp.org, which covers the following topics:

-   Installing TypeScript tools
-   TypeScript type definitions
-   Using interfaces in TypeScript
-   Understanding union and type aliases in TypeScript
-   Working with `any`, `never`, `void`, and `unknown` in TypeScript
-   Using TypeScript with the DOM
-   Creating classes in TypeScript
-   Understanding generics in TypeScript
-   Using enums in TypeScript

<i>`TypeScript` is a superset of `JavaScript `that adds features such as `type annotations, interfaces, classes`, and `modules` to JavaScript. It allows developers to write more maintainable and scalable code with fewer errors, making it popular for large-scale web applications. TypeScript code is transpiled into standard JavaScript, which means it can run on any modern browser or server-side environment that supports JavaScript. It's easy to learn if you're familiar with JavaScript and can greatly improve the quality and efficiency of your code.</i>

## Getting Started

To get started, you'll need to install the TypeScript tools on your machine.

```sh
npm install -g typescript
```

Create the tsconfig.json
```json
{
	"compilerOptions": 
		{
			"rootDir": "./src",
			"outDir": "./dist"
		}
}
```
Run
```sh
tsc main.ts
```

Watch `TS` file and compile realtime
```sh
tsc main.ts -w
```

## Code and Notes

In this repository, you'll find code examples and notes for each of the topics covered in the course. You can use these as a reference as you work through the material.

## Resources

Here are some additional resources you might find helpful as you continue to learn TypeScript:

-   [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
-   [TypeScript Playground](https://www.typescriptlang.org/play)

