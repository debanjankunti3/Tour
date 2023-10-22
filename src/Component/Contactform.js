import React from 'react'
import '../Styles/Contactform.css'
function Contactform() {
    return (
        <div className="form-container">
            <h1>Send A Hi TO US</h1>
            <form action="">
                <div className="">
                    <label htmlFor="name">Name:</label>
                    <input type="name" placeholder='Enter your name' />
                </div>
                <div className="">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="">
                    <label htmlFor="password">Password:</label>
                    <input type="password" />
                </div>
                <div className="">
                    <label htmlFor="male">Men</label>
                    <input type="radio" id='male' value="male" name='gender' />
                </div>
                <div className="">
                    <label htmlFor="female">Female</label>
                    <input type="radio" id='female' name='gender' value="female" />
                </div>
                <div className="">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="" placeholder='Enter your message' cols="10" rows="10"></textarea>
                </div>
                <div className="">
                    <button type='submit' id='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contactform