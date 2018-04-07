
import 'normalize.css';
import '../../common/layout.scss';
import '../../common/fonts.scss'
import './vue.test.scss'
import './vueapp.js';

function moveSlide(classList, direction, prop, speed) {
    var items = $(classList + '> .slider__list-item');
    var item = items.filter('.slide__list-item--active');


    var toItem, isNext = 1;
    if (direction == 'next') {
        toItem =  item.next();
        if (!toItem.length) toItem = items.eq(0);
    } else {
        toItem = item.prev(); 
        isNext = -1;
        if (!toItem.length) toItem = items.last();
    }

    var obj={}
    obj[prop] = 100 * isNext + '%';
    item.animate(
        obj,
        speed,
        function() {
            item.removeClass('slide__list-item--active').css(prop, -100 * isNext + '%');
        }
    )     

    obj[prop] = 0;
    toItem.animate(
        obj,
        speed,
        function() {
            toItem.addClass('slide__list-item--active');
        }
    )
}

function sliderRoutine(){
    var up = $('.controls__arrow-up');
    up.on('click', e => {
        moveSlide('.about-work__list', 'next', 'top', 0);
    })

    var down = $('.controls__arrow-down');
    down.on('click', e => {
        moveSlide('.about-work__list', 'next', 'top', 0);
    })
    
}

sliderRoutine();