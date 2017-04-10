# Webpack library Biolerplate

Webpack babel based boilerplate for producing libraries (Input: ES6, Output: universal library)

## Features

* Webpack 2.
* ES6 as a source.
* Exports in a [umd]

## Process

```
	ES6 source files
            |
            |
   (webpack + babel)
            |
            |
            |
        umd format
```

Result:

```
library
  |
  |__ src
  |    |__ index.js (es6)
  |
  |__ lib
       |__ library.js (es5)

```

## How to use

1. Create your library project `npm init`
2. `npm install git+http://github.com/StateTree/webpack-library-boilerplate.git`
	1. This will create src, lib, test, docs directory
	2. Creates babel and webpack config
	3. Updates your package.json properties `devDependencies` and `scripts`
	4. Removes itself from your node_modules project

3. Open `webpack.config.js` file and change the value of `libraryName` variable

## Scripts Provided by this

* `npm run prebuild` - Removes the lib folder
* `npm run build` - produces production version of your library under the `lib` folder
* `npm run postbuild` - buildconfig inside scripts is used to execute copy operation

## To-do
1. Test Framework
2. Doc support
3. Release Version Incrementer Support

