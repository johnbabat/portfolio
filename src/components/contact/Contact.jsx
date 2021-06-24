import { useState } from 'react';

import { ReactComponent as Approve } from '../../assests/svgs/approve.svg';

import './Contact.scss';

function Contact({ toggleMode }) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }

    const [hide, setHide] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();

        for (let param in values) {
            formData.append(param, values[param]);
            values[param] = ''
        }

        fetch("https://getform.io/f/5cc564ea-611e-4578-a1ff-e7225361f4a0",
        {
            method: "POST",
            body: formData,
        })
        .then()
        .catch(error => console.log(error))
    
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
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            placeholder='Name'
                            name='name'
                            value={values.name}
                            onChange={onChange}
                            required
                        />
                        <input 
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={values.email}
                            onChange={onChange}
                            required
                        />
                        <textarea 
                            placeholder='Message'
                            name='message'
                            value={values.message}
                            onChange={onChange}
                            required
                        />

                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
            <div className={`thank-you${hide ? ' hide' : ''}`}>
                <span>Thanks for your message. I will reach out shortly <Approve style = {{width: '20px', height: '20px'}} /></span>
            </div>
        </div>
    )
}

export default Contact
