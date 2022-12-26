"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentModule = require("./component");
var blueprint = {
    name: "HelloHeader",
    template: "<h1>Hello!</h1>",
    css: "\n    body {color: #777;}\n    ",
    onInit: function (el) { return console.log(el); },
};
var nest = {
    selector: 'body',
    position: 'append',
    document: document,
};
componentModule.declareComponent(blueprint, document);
var components = componentModule.createComponents(blueprint, nest);
