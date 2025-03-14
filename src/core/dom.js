class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' ?
            document.querySelector(selector) : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }
    text(content) {
        if (typeof content === 'string') {
            this.$el.textContent = content
            return this
        }
        if (this.$el.tagName === 'input') {
            return this.$el.value.trim()
        }
        return this.$el.textContent.trim()
    }
    clear() {
        this.html('')
        return this
    }
    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        this.$el.append(node)
    }
    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }
    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }
    closest(selector) {
        return $(this.$el.closest(selector))
    }
    getCoords() {
        return this.$el.getBoundingClientRect()
    }
    get data() {
        return this.$el.dataset
    }
    find(selector) {
        return $(this.$el.querySelector(selector))
    }
    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }
    css(styles = {}) {
        Object.keys(styles).forEach(key => {
            this.$el.style[key] = styles[key]
        })
    }
    addClass(className) {
        this.$el.classList.add(className)
    }
    removeClass(className) {
        this.$el.classList.remove(className)
    }
    id(parse) {
        if (parse) {
            const id = this.id().split(':')
            return {
                row: +id[0],
                col: +id[1]
            }
        }
        return this.data.id
    }
    focus() {
        this.$el.focus()
        return this
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
