# Object.polyfill

Add property to object if not already set

## polyfill(object, name, value, force = false)

Set the property name /value on object is not already existing. Use force to override the property no matter what.

```javascript
var polyfill = require('object/polyfill');
var foo = {};
var bar = {name: 'bar'};

polyfill(foo, 'name', 'foo');
polyfill(bar, 'name', 'boo');

foo.name; 'foo'
bar.name; 'bar'
```

## When object is Array.prototype or String.prototype

Calling polyfill on Array.prototype or String.prototype will define non-enumerable property by default.

```javascript
require('object/polyfill')(Array.prototype, 'last', function(){
	return this[this.length - 1];
});
Object.keys([]); // []
```

## When object is 'global'

Calling polyfill with object == 'global' will add property to the window object in browser environment, else to the global object in node environment.

```javascript
require('object/polyfill')('global', 'Iterator', function(){
	throw new Error('unimplemented Iterator');
});

// set window.Iterator in browser or global.Iterator in node
```