
import 'normalize.css';
import '../../common/layout.scss';
import '../../common/fonts.scss'
import '../common/footer.scss';
import './map.scss'
import './aboutme.scss'
import './hero.scss';


function initMap(){
//    console.log('initMap');
    var coordinates = {lat: 55.744063, lng: 37.618737};
    
    var map = new google.maps.Map(document.querySelector('.google-map'), {
        center: coordinates,
        zoom: 14
    });
}

window.initMap = initMap();

function parallax(obj, speed) {
    var scrolled = - window.pageYOffset || document.documentElement.scrollTop;
    var translateY = scrolled / speed + "px";
    obj.css('transform', 'translate3d(0, ' + translateY + ', 0');
}

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    var hero = $('.hero_bg');
    parallax(hero, 60);

    var sectionTitle = $('.hero__title-block');
    parallax(sectionTitle, 5);    
    
    var user = $('.user__block');
    parallax(user, 3);

    var skills = document.querySelectorAll('.skill');
    skills.forEach((item, i)  => {
        var svgTop = item.getBoundingClientRect().top;        
        if (scrolled - svgTop > 0 && !item.attributes.flag) {
            item.attributes.flag = 1;
//            console.log(item.attributes.procent.value);
            var procent = item.attributes.procent.value;
            var skill = item.querySelector('.circle__procent');
            skill.style.strokeDashoffset = 314 - 283 / 100 * procent;
        }              
    });
}

