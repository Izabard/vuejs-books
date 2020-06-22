require('./bootstrap');

window.Vue = require('vue');

Vue.component('main-component', require('./components/MainComponent.vue').default);
Vue.component('categories-component', require('./components/categories/CategoriesComponent.vue').default);
Vue.component('books-component', require('./components/books/BooksComponent.vue').default);

const app = new Vue({
    el: '#app',
});
