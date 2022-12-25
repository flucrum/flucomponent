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
