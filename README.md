*This repository is a mirror of the [component](http://component.io) module [eldargab/json-stable-stringify](http://github.com/eldargab/json-stable-stringify). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/eldargab-json-stable-stringify`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# json-stable-stringify

deterministic version of `JSON.stringify()` so you can get a consistent hash
from stringified results.


# example

``` js
var stringify = require('json-stable-stringify');
var obj = { c: 8, b: [{z:6,y:5,x:4},7], a: 3 };
console.log(stringify(obj));
```

output:

```
{"a":3,"b":[{"x":4,"y":5,"z":6},7],"c":8}
```

# install

via component:

```
component install eldargab/json-stable-stringify
```

# license

MIT
