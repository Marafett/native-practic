import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            ...options
        });
    }

    toHTML() {
        return `
            <input type="text" class="input" value="Новая таблица">
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>
        `
    }
}
