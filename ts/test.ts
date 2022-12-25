import * as componentModule from "./component";

const blueprint: componentModule.ComponentBlueprint = {
    name: "HelloHeader",
    template: `<h1>Hello!</h1>`,
    onInit: (el: HTMLElement) => console.log(el),
}

const nest: componentModule.NestingPoint = {
    selector: 'body',
    position: 'append',
    document: document,
}

const components = componentModule.createComponents(blueprint, nest);