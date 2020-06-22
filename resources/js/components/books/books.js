import Vue from 'vue'
import EventBus from '../../event-bus'

Vue.component('books-component', {
    mounted() {
        EventBus.$on('EVENT_NAME', function(payload) {
        })
    }
});