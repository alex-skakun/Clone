(function (global) {

    'use strict';

    function cloneObject (original) {
        var copy = new (original.constructor || Object),
            properties = Object.getOwnPropertyNames(original);
        if (Array.isArray(properties)) {
            for (var i = 0, l = properties.length; i < l; i++) {
                var property = properties[i],
                    descriptor = Object.getOwnPropertyDescriptor(original, property);
                if (descriptor.hasOwnProperty('value')) {
                    descriptor.value = clone(descriptor.value);
                }
                Object.defineProperty(copy, property, descriptor);
            }
        }
        return copy;
    }

    function cloneArray (original) {
        var copy = [];
        for (var i = 0, l = original.length; i < l; i++) {
            copy.push(clone(original[i]));
        }
        return copy;
    }

    function cloneDate (original) {
        return new Date(original.getTime());
    }

    function clone (original) {
        if (Array.isArray(original)) {
            return cloneArray(original);
        } else if (typeof original === 'function') {
            return original;
        } else if (original instanceof Date) {
            return cloneDate(original);
        } else if (original instanceof Object) {
            return cloneObject(original);
        } else {
            return original;
        }
    }

    if (global) {
        global.cloneObject = clone;
    }

    if (module && typeof module === 'object') {
        module.exports = clone;
    }

    if (typeof define === 'function' && define.amd !== null) {
        define('cloneObject', [], function () {
            return clone;
        });
    }

}(new Function('return this')()));




