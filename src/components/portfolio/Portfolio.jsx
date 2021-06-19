import { useEffect, useState } from 'react';

import PortfolioList from '../portfolioList/PortfolioList';
import { featuredPortfolio, webPortfolio, codingPortfolio, MLPortfolio } from '../../data';

import './Portfolio.scss';

function Portfolio({ toggleMode }) {

    const [selected, setSelected] = useState('Featured')
    const [data, setData] = useState([])

    const portfolioItems = ['Featured', 'Web Apps', 'ML and Data Science Notebooks', 'Data Structures And Algos']

    useEffect(() => {
        switch (selected) {
            case 'Featured':
                setData(featuredPortfolio)
                break;
            case 'Web Apps':
                setData(webPortfolio)
                break;
            case 'ML and Data Science Notebooks':
                setData(MLPortfolio)
                break;
            case 'Data Structures And Algos':
                setData(codingPortfolio)
            break;
            default:
                setData(featuredPortfolio)
                break;
        }
    }, [selected])

    return (
        <div className={`portfolio${toggleMode ? ' dark': ''}`} id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {
                    portfolioItems.map(item => (
                        <PortfolioList title={item} key={item} selected={selected === item} setSelected={setSelected} toggleMode={toggleMode} />
                    ))
                }
            </ul>
            <div className='container'>

                {
                    data.map(item => (
                        <div key={item.id} className="item">
                            <img
                                src={item.img}
                                alt=''
                            />
                            <div>
                                <h3>{item.title}</h3>
                                <div>
                                    <a href={item.github} target="_blank" rel="noopener noreferrer" ><h4>Github</h4></a>
                                    { item.site && <a href={item.site} target="_blank" rel="noopener noreferrer" ><h4>Live Site</h4></a>}
                                </div>
                            </div>
                        </div>
                    ))
                }               

            </div>
        </div>
    )
}

export default Portfolio
