var property = require('@dmail/property');

var complement = property.complement;
var complementProperty = property.complementProperty;
var complete = property.complete;
var completeProperty = property.completeProperty;

var rootScope = typeof window == 'undefined' ? global : window;
var polyfill = function(object, name, value, force){
	if( object === 'global' ){
		object = rootScope;
	}

	if( arguments.length === 2 ){
		if( object === Array.prototype || object ==  String.prototype ){
			complement(object, name);
		}
		else{
			complete(object, name);
		}
	}
	else{
		name = typeof name == 'symbol' ? name.toString() : String(name);
		
		if( object === Array.prototype || object == String.prototype ){
			complementProperty(object, name, value, force);
		}
		else{
			completeProperty(object, name, value, force);
		}
	}
};

module.exports = polyfill;