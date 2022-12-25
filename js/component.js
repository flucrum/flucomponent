"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = exports.ComponentConstructor = exports.Component = void 0;
var Component = /** @class */ (function () {
    function Component() {
        this.css = '';
        this.onInit = function () { };
        this.onChange = function () { };
        this.template = '';
        this.state = {};
    }
    return Component;
}());
exports.Component = Component;
var ComponentConstructor = /** @class */ (function () {
    function ComponentConstructor(el, component, nodes) {
        var _this = this;
        this.append = function () {
            _this.nodes.forEach(function (i) {
                i.append(_this.el);
                _this.el.outerHTML = _this.component.template.trim();
            });
        };
        this.prepend = function () {
            _this.nodes.forEach(function (i) {
                i.prepend(_this.el);
                _this.el.outerHTML = _this.component.template.trim();
            });
        };
        this.before = function () {
            _this.nodes.forEach(function (i) {
                i.before(_this.el);
                _this.el.outerHTML = _this.component.template.trim();
            });
        };
        this.after = function () {
            _this.nodes.forEach(function (i) {
                i.after(_this.el);
                _this.el.outerHTML = _this.component.template.trim();
            });
        };
        this.replaceWith = function () {
            _this.nodes.forEach(function (i) {
                i.replaceWith(_this.el);
                _this.el.outerHTML = _this.component.template.trim();
            });
        };
        this.el = el;
        this.component = component;
        this.nodes = nodes;
    }
    return ComponentConstructor;
}());
exports.ComponentConstructor = ComponentConstructor;
function createComponent(component, targetQuerySelector) {
    var el = document.createElement('div');
    var selected = document.querySelectorAll(targetQuerySelector);
    return new ComponentConstructor(el, component, selected);
}
exports.createComponent = createComponent;
