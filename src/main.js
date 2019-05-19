import Vue from 'vue';
import App from './App.vue';
import VueColorPickerBoard from 'vue-color-picker-board';
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
