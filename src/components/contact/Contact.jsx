import { useState } from 'react'
import './Contact.scss'

function Contact({ toggleMode }) {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div className={`contact${toggleMode ? ' dark' : '' }`} id='contact'>
            <div className="left">
                <img src='assets/images/contact.png' alt=''/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Email' />
                    <textarea placeholder='Message'/>
                    <button type='submit' >Send</button>
                    {message && <span>Thanks, I would get back ASAP!</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
