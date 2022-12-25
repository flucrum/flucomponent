(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestComponent = void 0;
var componentModule = require("./component");
var TestComponent = /** @class */ (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.template = "\n    <h1>Hello!</h1>\n    ";
        return _this;
    }
    return TestComponent;
}(componentModule.Component));
exports.TestComponent = TestComponent;
componentModule.createComponent(new TestComponent(), "body").append();

},{"./component":1}]},{},[2]);
