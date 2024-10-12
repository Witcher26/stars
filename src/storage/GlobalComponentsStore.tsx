import {makeObservable, observable} from 'mobx';

class GlobalComponentsStore {
     private _register: string[] = [];
    private _components: Record<string, any> = {};

    constructor() {
        makeObservable(this, {
            // @ts-ignore
            _register: observable,
        })
        this._register = [];
        this._components = {};
    }

    register(globalComponents: { key: string; component: unknown }[]): void {
        this._register = globalComponents.map(({key}) => key);
        this._components = globalComponents.reduce((o, {key, component}) => ({
            ...o,
            [key]: component
        }), {});
    }

    getComponent(key: string, required: boolean): any {
        if (!this._register.includes(key) && required) {
            throw new Error(`Глобальный компонент ${key} не зарегистрирован`);
        }

        return this._components[key];
    }
}

export default GlobalComponentsStore;