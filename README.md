# angular.throttle

> This extension enables throttling for AngularJS. This is useful to tear down fast iterative events, like `window.resize`.

## Installation

```shell
bower install angular-throttle
```

```html
<script type="bower_components/angular-throttle/src/angular.throttle.js"></script>
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

You can use some options:

```js
angular.throttle(fn, delay, {
	leading: false,
	trailing: false
})
```

`options.leading` If leading is true the function will be invoked at the startup. Otherwise not. Default **true**.

`options.trailing` When trailing is set to false the function will not be invoked the end of the operation. Default **true**

The extension was inspired by UnderscoreJS so you are able to use the same options.

## License

Do what you want.