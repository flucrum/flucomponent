import * as componentModule from "./component";

const blueprint: componentModule.ComponentBlueprint = {
    name: "HelloHeader",
    template: `<h1>Hello!</h1>`,
    css: `
    body {color: #777;}
    `,
    onInit: (el: HTMLElement) => console.log(el),
}

const nest: componentModule.NestingPoint = {
    selector: 'body',
    position: 'append',
}

componentModule.declareComponent(blueprint);
const components = componentModule.createComponents(blueprint, nest);