import Vue from 'vue' 
import EventBus from '../../event-bus';

Vue.component('categories-component', {
    methods: {
        emitMethod () {
            EventBus.$emit('EVENT_NAME', payload);
        } 
    }
});