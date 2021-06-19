import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import BackgroundAnimation from '../backGroundAnimation/BackGroundAnimation';
import { ReactComponent as Down } from '../../assests/svgs/down.svg';


import './Intro.scss';

function Intro( {toggleMode } ) {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 40,
            strings: ['a Software Engineer.', 'a Full-Stack Web Developer.', 'an AI / NLP Engineer.', 'a Data Scientist.']
        })
    }, [])

    return (
        <div className={`intro${toggleMode ? ' dark' : ''}`} id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src='assets/images/me.jpg' alt='' />
                </div>
            </div>
            <div className="right">
                <div className='bg-animation'>
                    < BackgroundAnimation/>
                </div>
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>John Babatola</h1>
                    <h3>I'm <span ref={textRef} ></span></h3>
                    <div className='socials'>
                        <a href='https:///www.instagram.com/don_jon__' target="_blank" rel="noopener noreferrer" ><InstagramIcon/></a>
                        <a href='https://www.linkedin.com/in/john-babatola-59201614b/' target="_blank" rel="noopener noreferrer" ><LinkedInIcon/></a>
                        <a href='https:///www.github.com/johnbabat' target="_blank" rel="noopener noreferrer" ><GitHubIcon/></a>
                        <a href='https:///www.twitter.com/johnbabatola' target="_blank" rel="noopener noreferrer" ><TwitterIcon/></a>
                    </div>
                    <h4>More about me.... </h4>
                    <ul>
                        <li>A Software Engineer with experience in building full stack web applications</li>
                        <li>A Machine Learning Engineer and Data Scientist with extensive NLP experience</li>
                        <li>A graduate of Electrical and Electronics Engineering (B.Sc)</li>
                        <li>I have a very good grasp of data structures and algorithms. Coding challenges are my thing</li>
                        <li>Always learning something new, that's my favorite thing to do :)</li>
                    </ul>
                </div>
                <a className='bottomLink' href='#portfolio'>
                    < Down/>
                </a>
                <a className='attribution bottomLink' style={{fontSize: '9px'}} href='https://pngtree.com/so/stage-decoration'>
                    stage decoration png from pngtree.com
                </a>
            </div>
        </div>
    )
}

export default Intro
