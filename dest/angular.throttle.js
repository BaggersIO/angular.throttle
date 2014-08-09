'use strict';

/**
 * angular.throttle function
 * Big thanks to _.throttle which was mainly reused.
 */
(function (angular) {
	
	var throttle = function (func, wait, options) {

    options || (options = {});

    var context, args, result;
    var timeout = null;
    var previous = 0;

    var later = function() {
      previous = options.leading === false ? 0 : (new Date().getTime());
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };

    return function() {

      var now = (new Date().getTime());

      if (!previous && options.leading === false) {
        previous = now;
      } 

      var remaining = wait - (now - previous);

      context = this;
      args = arguments;

      if (remaining <= 0) {

        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {

        timeout = setTimeout(later, remaining);
      }

      return result;
    };

	};

	angular.extend(angular, {
		throttle: throttle
	})

} (angular));