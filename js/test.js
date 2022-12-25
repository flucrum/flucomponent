"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentModule = require("./component");
var blueprint = {
    name: "HelloHeader",
    template: "<h1>Hello!</h1>",
    onInit: function (el) { return console.log(el); },
};
var nest = {
    selector: 'body',
    position: 'append',
    document: document,
};
var components = componentModule.createComponents(blueprint, nest);
