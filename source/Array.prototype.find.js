Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(c,e){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),f=b.length>>>0;if("function"!==typeof c)throw new TypeError("predicate must be a function");for(var a=0;a<f;){var d=b[a];if(c.call(e,d,a,b))return d;a++}},configurable:!0,writable:!0});