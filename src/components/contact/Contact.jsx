import { useState } from 'react';

import { ReactComponent as Approve } from '../../assests/svgs/approve.svg';

import './Contact.scss';

function Contact({ toggleMode }) {

    const [hide, setHide] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setHide(false)

        setTimeout(() => {
            setHide(true)
        }, 5000);
    }

    return (
        <div className={`contact${toggleMode ? ' dark' : '' }`} id='contact'>
            <div className="left">
                <img src='assets/images/contact.png' alt=''/>
            </div>
            <div className="right">
                <div className="contact-form">
                    <h2>Contact</h2>
                    <form onSubmit={handleSubmit} >
                        <input type='text' placeholder='Name' required />
                        <input type='email' placeholder='Email' required />
                        <textarea placeholder='Message' required/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
            <div className={`thank-you${hide ? ' hide' : ''}`}>
                <span>Thank you for your message. I will reach out shortly <Approve style = {{width: '20px', height: '20px'}} /></span>
            </div>
        </div>
    )
}

export default Contact
