import { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';
import { init } from 'ityped';

import './Land.scss';

function Land() {

    const textRef = useRef()
    const textRef2 = useRef()
    const textRef3 = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 150,
            backSpeed: 10,
            disableBackTyping: true,
            startDelay: 100,
            strings: ['Welcome to my cave']
        })

        init(textRef2.current, {
            showCursor: false,
            backDelay: 150,
            backSpeed: 10,
            disableBackTyping: true,
            startDelay: 2700,
            strings: ['Letting you in shortly']
        })

        init(textRef3.current, {
            showCursor: false,
            backDelay: 150,
            backSpeed: 10,
            typeSpeed: 450,
            disableBackTyping: true,
            startDelay: 4400,
            strings: ['....']
        })
    }, [])

    return (
        <div className='land' >
            <Particles
            params={{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    }
                }
            }}/>
            <div className='text'>
                <h1 style ={{color: 'white'}} className='h11'><span ref={textRef} ></span></h1>
                <h1 style ={{color: 'white'}} className='h22'><span ref={textRef2} ></span><span ref={textRef3} ></span><span style={{color: 'black'}}>.</span></h1>
            </div>
        </div>
    )
}

export default Land
