import Vue from "vue/dist/vue.esm"
import Hello from "./hello.vue"
import bButton from 'bootstrap-vue/es/components/button/button'
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';

Vue.component('b-form-radio-group', bFormRadioGroup);
Vue.component('b-form-input', bFormInput);
Vue.component('b-button', bButton);

var app = new Vue({
    el: "#app",
    components:{
        Hello
    },
    template: "<Hello></Hello>"
});