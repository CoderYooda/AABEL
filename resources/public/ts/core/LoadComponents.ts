export class LoadComponents {
    constructor() {
        this.init();
    }

    // Для всех ДОМ блоков с дата атрибутом component создаем экземпляр класса
    init() {
        document
            .querySelectorAll('[data-component]')
            .forEach(async(component: any) => {
                const ComponentClass = await this.getClassComponent(component.dataset.component);
                if (ComponentClass) {
                    window[component.dataset.component] = new ComponentClass(component);
                }
            });
    }
    
    // загружаем конструктор класса из директории js/components
    // в отдельной дирректории с таким же названием или в корне
    // если таковых не нашлось выводим  ошибку
    async getClassComponent(component: any) {
        try {
            let loadedClassComponent = await this.loadClassComponent(`${ component }/${ component }.ts`)
            if (loadedClassComponent) {
                return this.getClassConstructor(loadedClassComponent);
            } else {
                loadedClassComponent = await this.loadClassComponent(`${ component }.ts`);
                if (loadedClassComponent) {
                    return this.getClassConstructor(loadedClassComponent);
                } else {
                    console.log('Ошибка: модуль компонента не найден');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    async loadClassComponent(componentPath: string) {
        try {
            const component = await import(`../components/${ componentPath }`);
            return component;
        } catch (error) {
            return false;
        }
    }
    
    // возвращаем конструктор класса если он есть
    getClassConstructor(res: { default: any; }) {
        return JSON.stringify(res.default) != '{}' ? res.default : null;
    }
}
