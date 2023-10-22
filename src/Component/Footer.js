import React from 'react'
import '../Styles/Footer.css'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="top">
                    <div className="tops">
                        <h1>Trippy</h1>
                        <p>Choose Your Destination</p>
                    </div>
                    <div className="">
                        <a href="/">
                            <i className='fa-brands fa-facebook-square'></i>
                        </a>
                        <a href="/">
                            <i className='fa-brands fa-whatsapp-square'></i>
                        </a>
                        <a href="/">
                            <i className='fa-brands fa-twitter-square'></i>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="project">
                        <h4>Project</h4>
                        <a href="/">Changelog</a>
                        <a href="/">Status</a>
                        <a href="/">License</a>
                        <a href="/">All versions</a>
                    </div>
                    <div className="community">
                        <h4>Community</h4>
                        <a href="/">Github</a>
                        <a href="/">Issues</a>
                        <a href="/">Project</a>
                        <a href="/">Twitter</a>
                    </div>
                    <div className="help">
                        <h4>Help</h4>
                        <a href="/">Support</a>
                        <a href="/">Troubleshooting</a>
                        <a href="/">Contact Us</a>
                    </div>
                    <div className="others">
                        <h4>Others</h4>
                        <a href="/">Terms of service</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">License</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer