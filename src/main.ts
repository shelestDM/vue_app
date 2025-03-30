import App from './App.vue'
import './index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import directives from './directives';

const app = createApp(App);

directives.forEach(directive => {
    if (directive.name) {
        app.directive(directive.name, directive);
    }
})

app
    .use(createPinia())
    .mount('#app')