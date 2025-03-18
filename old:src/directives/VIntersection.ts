import type { DirectiveBinding } from "vue";

export default {
    mounted<T extends HTMLElement>(el: T, binding: DirectiveBinding) {
        const options = {
            rootMargin: '0px',
            threshold: 1.0,
        }
        let isInitialized = false
        const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]): void => {
            if (!isInitialized) {
                isInitialized = true
                return
            }
            if (entries[0].isIntersecting) {
                binding.value();
            }
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(el)
    },
    name: 'intersection'
}