import Vue from 'vue/dist/vue.js';

Vue.component('widget-about', {
    template: '#widget-about-left',
    props: ['info']
});

const app = new Vue({
    data: {
        sitesInfo: [
            ['САЙТ ШКОЛЫ ОНЛАЙН ОБРАЗОВАНИЕ','HTML, CSS3, JAVASCRIPT', './img/work-1.png'],
            ['САЙТ 2','HTML, CSS3, JAVASCRIPT', './img/work-2.png'],
            ['САЙТ 3','NODE, CSS3, JAVASCRIPT', './img/work-3.png'],
            ['САЙТ 4','PYTON, CSS3, JAVASCRIPT', './img/work-4.png'],

          ]         
    }
});

app.$mount('#app');