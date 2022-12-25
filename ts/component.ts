import * as uuidModule from "uuid";

export class Component
{
    public css: string = '';

    public onInit: Function = () => {};

    public onChange: Function = () => {};

    public template: string = '';

    public state: object = {};
}

export class ComponentConstructor
{
    el: HTMLElement;
    nodes: NodeListOf<Element>;
    component: Component;

    constructor(el: HTMLElement, component: Component, nodes: NodeListOf<Element>) {
        this.el = el;
        this.component = component;
        this.nodes = nodes;
    }

    append: Function = () => {
        this.nodes.forEach(i => {
            i.append(this.el);
            this.el.outerHTML = this.component.template.trim();
        });
    }

    prepend: Function = () => {
        this.nodes.forEach(i => {
            i.prepend(this.el);
            this.el.outerHTML = this.component.template.trim();
        });
    }

    before: Function = () => {
        this.nodes.forEach(i => {
            i.before(this.el);
            this.el.outerHTML = this.component.template.trim();
        });
    }

    after: Function = () => {
        this.nodes.forEach(i => {
            i.after(this.el);
            this.el.outerHTML = this.component.template.trim();
        });
    }

    replaceWith: Function = () => {
        this.nodes.forEach(i => {
            i.replaceWith(this.el);
            this.el.outerHTML = this.component.template.trim();
        });
    }
}

export function createComponent(component: Component, targetQuerySelector: string): ComponentConstructor
{
    let el = document.createElement('div');
    const selected = document.querySelectorAll(targetQuerySelector);
    return new ComponentConstructor(el, component, selected);
}