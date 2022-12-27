import * as uuidModule from "uuid";

//=== Types ===

export type ComponentBlueprint = {
    name: string,
    css?: string,
    onInit?: Function,
    onChange?: Function,
    template?: string,
    state?: object,
};

type ComponentBlueprintStandartized = {
    name: string,
    css: string,
    onInit: Function,
    onChange: Function,
    template: string,
    state: object,
};

export type NestPositionVariant 
    = 'append' 
    | 'prepend' 
    | 'before'
    | 'after'
    | 'replaceWith';

export type NestingPoint = {
    selector: string,
    position: NestPositionVariant,
    document: Document,
};

//=== Functions ===

/**
 * Standartize optional properties of Component Blueprint, 
 * for simplify next work
 */
function standartizeComponentBlueprint(
    component: ComponentBlueprint
): ComponentBlueprintStandartized {
    return {
        name: component.name,
        css: (component.css && typeof component.css === 'string') 
            ? component.css 
            : '',
        onInit: (component.onInit && typeof component.onInit === 'function') 
            ? component.onInit 
            : (() => {}),
        onChange: (component.onChange && typeof component.onChange === 'function') 
            ? component.onChange 
            : (() => {}),
        template: (component.template && typeof component.template === 'string') 
            ? component.template 
            : '',
        state: (component.state && typeof component.state === 'object') 
            ? component.state
            : {},
    };
}

/**
 * Initializing Blueprinted Component Type on the web page
 */
export function declareComponent(
    component: ComponentBlueprint, 
    document: Document
): void {
    const head = document.getElementsByTagName('head')[0];
    let style = head.getElementsByTagName('style')[0];
    if(!style){
        style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        head.appendChild(style);
    }
    style.innerHTML = style.innerHTML + "\n" + component.css.trim();
}

/**
 * Creating Component on the page into specififyed Nesting Point
 */
export function createComponents(
    component: ComponentBlueprint, 
    nestingPoint: NestingPoint
): Array<HTMLElement> {
    const componentStandaetized = standartizeComponentBlueprint(component);
    const selected = nestingPoint
        .document
        .querySelectorAll(nestingPoint.selector);
    let results: Array<HTMLElement> = [];
    let el: HTMLElement;
    selected.forEach(s => {
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
        };
        el.outerHTML = component.template;
        el.id = uuidModule.v4();
        el.setAttribute('component-name', component.name);
        component.onInit(el);
        results.push(el);
    });
    return results;
}