export default {
    mounted<T extends HTMLElement>(el: T) {
        el.focus();
    },
    name: 'focus'
}