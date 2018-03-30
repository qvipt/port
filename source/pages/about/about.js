
import 'normalize.css';
import '../../common/layout.scss';
import '../../common/fonts.scss'
import '../common/footer.scss';
import './map.scss'
import './aboutme.scss'
import './hero.scss';

window.initMap = function(){
//    console.log('initMap');
    var coordinates = {lat: 55.744063, lng: 37.618737},
    
    map = new google.maps.Map(document.querySelector('.google-map'), {
        center: coordinates
    });
}