import { useState } from 'react'
import './ToolsPack.scss'

export default function ToolsPack({ toggleMode }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: 1,
            icon: '/assets/images/mobile.png',
            title: 'Back-End Development Tools',
            desc: ['Javascript', 'GraphQL', 'Python', 'Flask', 'Node', 'MongoDB', 'PostgreSQL'],
            images: [
                'assets/images/javascript.png',
                'assets/images/graphql.png',
                'assets/images/python.png',
                'assets/images/flask.png',
                'assets/images/node.png',
                'assets/images/mongodb.png',
                'assets/images/postgresql.png',]
        },
        {
            id: 1,
            icon: '/assets/images/frontend.png',
            title: 'Front-End Development Tools',
            desc: ['React', 'Sass', 'CSS', 'jquery'],
            images: ['assets/images/react.png', 'assets/images/sass.png', 'assets/images/css.png', 'assets/images/jquery.png']
        },
        {
            id: 1,
            icon: '/assets/images/ml.png',
            title: 'Data Science / ML Tools',
            desc: ['TensorFlow', 'Pandas', 'Numpy', 'Sickit-Learn'],
            images: ['assets/images/tensorflow.png', 'assets/images/pandas.png', 'assets/images/numpy.png', 'assets/images/sickit-learn.png']
        }
    ];

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1: 0)
    }

    return (
        <div className={`toolspack${toggleMode ? ' dark' : ''}`} id='toolspack'>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                { data.map(item => (
                    <div key={item.title} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="left-container">
                                    <div className="img-container">
                                        <img 
                                            src={item.icon}
                                            alt="" 
                                        />
                                    </div>
                                    <h2>{item.title}</h2>
                                    {item.desc.map(tool => (
                                        <p key={tool} >{tool}</p>
                                    ))}                                    
                                </div>
                            </div>
                            <div className="right">
                                {item.images.map(img => (
                                    <div key={img} className="item">
                                        <img
                                            src={img}
                                            alt=''
                                        />
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                    )
                )}
            </div>
            <img src='assets/images/arrow.png' className='arrow left' alt='' onClick={() => handleClick('left')} />
            <img src='assets/images/arrow.png' className='arrow right' alt='' onClick={() => handleClick()} />
        </div>
    )
}
