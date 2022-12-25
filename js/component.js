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
