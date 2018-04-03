
import 'normalize.css';
import '../../common/layout.scss';
import '../../common/fonts.scss'
import './welcome.scss'
import './welcome__flip.scss'
import '../about/hero.scss';
import '../common/footer.scss';
import '../about/aboutme.scss';

$('.auth-button').on('click', e =>  {
   e.preventDefault;
   $('.flip__card').toggleClass('flipped');
})



