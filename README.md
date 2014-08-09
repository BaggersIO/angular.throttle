# angular.throttle

> This extension enables throttling for AngularJS. This is useful to tear down fast iterative events, like `window.resize`.

## Installation

```shell
npm install && bower install && grunt build
```

## Usage

```js
// Declares a throttled function
// This function will be invoked by a minimum of 250 ms
var throttledResize = angular.throttle(function () {

    console.log('No browser drain at each event please.');

}, 250);

angular.element(window).on('resize', throttledResize);
```

## Options

The extension was inspired by UnderscoreJS so you are able to use the same options.