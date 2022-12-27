"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponents = exports.declareComponent = void 0;
var uuidModule = require("uuid");
//=== Functions ===
/**
 * Standartize optional properties of Component Blueprint,
 * for simplify next work
 */
function standartizeComponentBlueprint(component) {
    return {
        name: component.name,
        css: (component.css && typeof component.css === 'string')
            ? component.css
            : '',
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
/**
 * Initializing Blueprinted Component Type on the web page
 */
function declareComponent(component, document) {
    var head = document.getElementsByTagName('head')[0];
    var style = head.getElementsByTagName('style')[0];
    if (!style) {
        style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        head.appendChild(style);
    }
    style.innerHTML = style.innerHTML + "\n" + component.css.trim();
}
exports.declareComponent = declareComponent;
/**
 * Nesting Component into Nesting Point specifyed place into document
 */
function nestComponentIntoDocument(s, nestingPoint, component, results) {
    var el = nestingPoint.document.createElement(component.name);
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
    el.id = uuidModule.v4();
    el.setAttribute('component-name', component.name);
    component.onInit(el);
    results.push(el);
}
/**
 * Creating Component on the page into specififyed Nesting Point
 */
function createComponents(component, nestingPoint) {
    var componentStandaetized = standartizeComponentBlueprint(component);
    var selected = nestingPoint
        .document
        .querySelectorAll(nestingPoint.selector);
    var results = [];
    var el;
    selected.forEach(function (s) { return nestComponentIntoDocument(s, nestingPoint, component, results); });
    return results;
}
exports.createComponents = createComponents;
