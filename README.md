[![Inline docs](http://inch-ci.org/github/mvilrokx/modal-factory.svg?branch=master)](http://inch-ci.org/github/mvilrokx/modal-factory)
[![Build Status](https://travis-ci.org/mvilrokx/modal-factory.svg?branch=master)](https://travis-ci.org/mvilrokx/modal-factory)
[![npm version](https://badge.fury.io/js/modal-factory.svg)](https://badge.fury.io/js/modal-factory)
[![Dependency Status](https://www.versioneye.com/user/projects/58d4a098cef500003fd3c3a5/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/58d4a098cef500003fd3c3a5)
[![NSP Status](https://nodesecurity.io/orgs/me/projects/cca1e821-3e10-4c89-bcd8-546c6d328b65/badge)](https://nodesecurity.io/orgs/me/projects/cca1e821-3e10-4c89-bcd8-546c6d328b65)
[![Code Climate](https://codeclimate.com/github/mvilrokx/modal-factory/badges/gpa.svg)](https://codeclimate.com/github/mvilrokx/modal-factory)
[![dependencies Status](https://david-dm.org/mvilrokx/modal-factory/status.svg)](https://david-dm.org/mvilrokx/modal-factory)
[![devDependencies Status](https://david-dm.org/mvilrokx/modal-factory/dev-status.svg)](https://david-dm.org/mvilrokx/modal-factory?type=dev)


# Modal Factory
Zero-dependency, pure JavaScript, modal dialogs.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
node 7.x

### Installing
Clone this repository:

    $ git clone https://github.com/mvilrokx/modal-factory.git

(or download the zip file and unzip)

Install all the devDependencies (remember, there are no runtime dependencies!).  First ```cd``` into the project root folder and from there run:

    $ npm install

Finally, you can (re)build the library locally, recreate the documentation and run all the tests by issueing the following command:

    $ npm run prod

You should now be able to open the ```example.html``` page in the root folder and see a modal window in action. (I recommend you use [browsersync](https://www.browsersync.io/) for testing but it should work by just opening the file in your browser as well.)

> Note that ```example.html``` is using [Basscss](http://basscss.com/) to style the buttons on the modal.

## Running the tests

    $ npm run test

## Development
If you want to (re)develop parts of the library yourself, you can easily re-build as you develop by using:

    $ npm run watch

This will watch for changes and re-build the library as you code away

## API Documentation
The API Documentation can be found in the ```docs``` directory.

If you want to (re)write parts of the API's documentation yourself, you can easily re-build by using:

    $ npm run doc

This will re-build the API documentation (in the ```docs``` directory).

## Deployment
For usage in your projects, just install the npm module in your project and require it in your code:

    $ npm install modal-factory

Then in your code, e.g. ```index.js```

```JavaScipt
import modal from 'modal-factory'
```

Run your favorite bundler and add index.js in your html, just before the ```body``` tag. You can then start writting JavaScript to instanciate modals from the factory. (see ```example.html``` for an example)

## Built With
* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript
* [ESLint](http://eslint.org/) - Pluggable JavaScript linter (with Airbnb Base config)
* [Tape](https://github.com/substack/tape) - tap-producing test harness for node and browsers (with [faucet](https://github.com/substack/faucet))
* [JSdoc](http://usejsdoc.org/) - an API documentation generator for JavaScript
* [PostCSS](http://postcss.org/) - Transforming styles with JS plugins (with [cssnext](http://cssnext.io/))
* [Webpack](https://webpack.js.org/) - Bundler

## Authors
* Mark Vilrokx - Initial work - [Oracle](https://oracle.com)
