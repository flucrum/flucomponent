(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponents = void 0;
function standartizeComponentBlueprint(component) {
    return {
        name: component.name,
        css: (component.css && typeof component.css === 'string') ? component.css : '',
        onInit: (component.onInit && typeof component.onInit === 'function')
            ? component.onInit
            : (function () { }),
        onChange: (component.onChange && typeof component.onChange === 'function')
            ? component.onChange
            : (function () { }),
        template: (component.template && typeof component.template === 'string')
            ? component.template
            : '',
        state: (component.state && typeof component.state === 'object')
            ? component.state
            : {},
    };
}
function createComponents(component, nestingPoint) {
    var componentStandaetized = standartizeComponentBlueprint(component);
    var selected = nestingPoint.document.querySelectorAll(nestingPoint.selector);
    var results = [];
    var el;
    selected.forEach(function (s) {
        el = nestingPoint.document.createElement(component.name);
        switch (nestingPoint.position) {
            case 'append':
                s.append(el);
            case 'prepend':
                s.prepend(el);
            case 'before':
                s.before(el);
            case 'after':
                s.after(el);
            case 'replaceWith':
                s.replaceWith(el);
        }
        ;
        el.outerHTML = component.template;
        results.push(el);
    });
    return results;
}
exports.createComponents = createComponents;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentModule = require("./component");
var blueprint = {
    name: "HelloHeader",
    template: "<h1>Hello!</h1>",
};
var nest = {
    selector: 'body',
    position: 'append',
    document: document,
};
var components = componentModule.createComponents(blueprint, nest);
console.log(components[0]);

},{"./component":1}]},{},[2]);
