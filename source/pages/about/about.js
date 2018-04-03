
import 'normalize.css';
import '../../common/layout.scss';
import '../../common/fonts.scss'
import '../common/footer.scss';
import './map.scss'
import './aboutme.scss'
import './hero.scss';


window.initMap = function(){
//    console.log('initMap');
    var coordinates = {lat: 55.744063, lng: 37.618737};
    
    var map = new google.maps.Map(document.querySelector('.google-map'), {
        center: coordinates,
        zoom: 14
    });
}

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
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

