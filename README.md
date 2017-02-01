# sprintf-ext-strftime

> Date/time formatting extension for `sprintf-js` (via `strftime`)

## Overview

 It's the very experimental module to try the new feature that proposed to 
[sprintf-js](https://github.com/alexei/sprintf.js) by me.

 This feature allow to use an user defined type specifiers (any letter) and
bind such specifier with an user defined function. This function will be called
inside `sprintf` to format `sprintf` arguments according desired specification.
An additional formatting modifiers may be passed in the `sprintf` format string if need.

  You can use any existing formatting features of `sprintf` together with such user defined type specifiers
(width, precision, padding and aligning). They will be applied to result of user function.


## Getting Started

Install featured [sprintf-js](https://github.com/litmit/sprintf.js/tree/expandable):
```shell
npm install https://github.com/litmit/sprintf.js.git#expandable
```
Install [strftime](https://github.com/samsonjs/strftime):
```shell
npm install strftime
```
Install [this extension](https://github.com/litmit/sprintf-ext-strftime):
```shell
npm install sprintf-ext-strftime
```

Now you can code:
```js
var sprintf = require("sprintf-js").sprintf;
var strftime = require("strftime");
var sprintf_ext_strftime = require("sprintf-ext-strftime");
sprintf_ext_strftime.bind(sprintf,strftime); // binded to 'D' type specifier by default

var printf = function() { var o = sprintf.apply(sprintf, arguments); console.log(o); return o.length; };

var now = new Date(2016,11,22,0,33,44,555);

printf("Now [%[%B %d, %Y %H:%M:%S]D]", now);  // --> Now [December 22, 2016 00:33:44]
printf("Now %[%F %T]D", now);                 // --> Now 2016-12-22 00:33:44


// more over you can bind localized version of strftime to another type specifier
// and use it simultaneously
sprintf_ext_strftime.bind(sprintf,strftime.localizeByIdentifier('ru_RU'),"L");

printf("Сейчас [%1$[%B %d, %Y %H:%M:%S]L]/[%1$[%B %d, %Y %H:%M:%S]D]", now);
// --> Сейчас [Декабрь 22, 2016 00:33:44]/[December 22, 2016 00:33:44]
```

## See also

### Available extensions for [sprintf-js](https://github.com/litmit/sprintf.js/tree/expandable):
* [sprintf-ext-strftime](https://github.com/litmit/sprintf-ext-strftime) - Date/time formatting extension for `sprintf-js` (via `strftime`)
* [sprintf-ext-string](https://github.com/litmit/sprintf-ext-string) - String formatting extension for `sprintf-js`
