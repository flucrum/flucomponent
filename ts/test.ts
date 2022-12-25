import * as componentModule from "./component";

export class TestComponent extends componentModule.Component
{
    public template: string = `
    <h1>Hello!</h1>
    `
}

componentModule.createComponent(new TestComponent(), "body").append();