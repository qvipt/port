
import 'normalize.css';
import 'jquery';
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
    console.log(scrolled + 'px');
    if (scrolled > 450) {
        var a = $('.skill');
        console.log(a);
    }

}