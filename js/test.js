"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blueprint = void 0;
var componentModule = require("./component");
exports.blueprint = {
    name: "HelloHeader",
    template: "<h1>Hello!</h1>",
    css: "\n    body {color: #777;}\n    ",
    onInit: function (el) { return console.log(el); },
};
var nest = {
    selector: 'body',
    position: 'append',
};
componentModule.declareComponent(exports.blueprint);
var components = componentModule.createComponents(exports.blueprint, nest);
