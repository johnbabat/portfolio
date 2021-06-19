import './Menu.scss';

function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
            <ul onClick={()=> setMenuOpen(false)}>
                <li>
                    <a href='#intro'>Home</a>
                </li>
                <li>
                    <a href='#portfolio'>Porfolio</a>
                </li>
                <li>
                    <a href='#toolspack'>Tools Pack</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
