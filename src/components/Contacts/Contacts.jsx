import React, { useState } from 'react'
import './Contacts.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Contacts = () => {

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....")
        const formData = new FormData(event.target)

        formData.append("access_key", "3121ecc5-de81-43fb-81ae-8ededce49214")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        if (data.success) {
            setResult("Message Submitted Successfully")
            event.target.reset()
        } else {
            console.log("Error", data)
            setResult(data.message)
        }
    }

    return (
        <div className='contacts'>
            <div className="contacts-col">
                <h3>
                    Send us a message
                    <img src={msg_icon} alt="message icon" />
                </h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below. your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="mail icon" />contact@university.com</li>
                    <li><img src={phone_icon} alt="phone icon" />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="location icon" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United State</li>
                </ul>
            </div>
            <div className="contacts-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your name</label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name='phone' id='name' placeholder='Enter your mobile number' required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" id="message" rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="white arrow" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contacts
