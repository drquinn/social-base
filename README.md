Social Base App
========

Social Base is a sample application base for a social media page.

This was developed using AngularJS using a component style similar to React. Everything is a component.

## Installing

Be sure you have the following dependencies installed:
```
npm install -g node karma-cli gulp karma webpack
```

Then just clone or fork this repo to get started.

```shell
$ git clone https://github.com/drquinn/social-base
$ cd social-base
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to Run

Run `gulp` to have `webpack` compile the ES6 into an ES5 bundle.js file. It will then start up a web server and serve the social page.

```shell
$ gulp                          
```

### How to Test

Unit tests will run using Karma. `npm test` will run `karma start`. Tests will run on any files that match `*.spec.js`.
Mocha is being used as the testing library and Chai is used as the assertion library.

```shell
$ npm test
```

This project is based on NG6-starter:
https://github.com/angular-class/NG6-starter
