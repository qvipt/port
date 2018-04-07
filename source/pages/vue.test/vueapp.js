import Vue from 'vue/dist/vue.js';

Vue.component('item',{
    template: '#itemInfo',
    props: ['info', 'index']
});

Vue.component('widget-about', {
    template: '#widget',
    props: ['title', 'info']
});

const app = new Vue({
    data: {
        title: 'Мои работы',
        sitesInfo: [
            ['САЙТ ШКОЛЫ ОНЛАЙН ОБРАЗОВАНИЕ','HTML, CSS3, JAVASCRIPT'],
            ['САЙТ 2','HTML, CSS3, JAVASCRIPT'],
            ['САЙТ 3','NODE, CSS3, JAVASCRIPT'],
            ['САЙТ 4','PYTON, CSS3, JAVASCRIPT'],

          ]         
    }
});

app.$mount('#app');