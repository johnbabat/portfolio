import './PortfolioList.scss';

function PortfolioList({title, selected, setSelected, toggleMode}) {

    return (
        <li className={`portfolio-list${selected ? ' active' : ''}${toggleMode ? ' dark' : ''}`} onClick={()=>setSelected(title)} >
            {title}
        </li>
    )
}

export default PortfolioList
