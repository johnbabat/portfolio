import './Topbar.scss'
import { ReactComponent as Phone} from '../../assests/svgs/phone.svg'
import { ReactComponent as Mail} from '../../assests/svgs/mail.svg'
import { ReactComponent as Moon} from '../../assests/svgs/moon.svg'


function Topbar({ menuOpen, setMenuOpen, toggleMode, setToggleMode }) {
    return (
        <div className={`topbar${menuOpen ? ' active': ''}${toggleMode ? ' dark': ''}`}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>jB.</a>
                    <div className="itemContainer">
                        <a href='tel:+2348181162839'>
                            <Phone/>
                            <span>+234 815 905 7826</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href='mailto:johnbabatola@gmail.com'>
                            <Mail style={{width: '30px', height: '30px'}} />
                            <span>hello@johnbabatola.com</span>
                        </a>
                    </div>                    
                </div>
                <div className='right'>
                    <div className='darkMode' onClick={() => setToggleMode(!toggleMode)} >< Moon /></div>
                    <div onClick={() => setMenuOpen(!menuOpen)} className='hamburger'>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
