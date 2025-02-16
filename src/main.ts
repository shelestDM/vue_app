import App from './App.vue'
import './index.css';
import { createApp } from 'vue';
import components from './components/UI/index';
import directives from './directives';
import { createPinia } from 'pinia'
import router from './router/router';

const app = createApp(App);

components.forEach(data => {
    if (data.name) {
        app.component(data.name, data)
    }
});

directives.forEach(directive => {
    if (directive.name) {
        app.directive(directive.name, directive);
    }
})

app
    .use(router)
    .use(createPinia())
    .mount('#app')