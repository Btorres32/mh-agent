import React from "react"

function Form(){
    return (
    <section className="section-form-bg">
        <section className="section-form"> 
            <div className="row section-format">
                <h2 className="section-header">We're happy to hear from you</h2>
            </div>
            <div className="row">
                <form action="#" method="post" className="contact-form" >
                    <div className="row form-container">
                        <div className="col span-1-of-3">
                            <label className="form-label" for="name">Name</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input className="form-space" type="text" name="name" id="name" placeholder="Your Name" required />
                        </div>
                        
                        <div className="row form-container">
                            <div className="col span-1-of-3">
                                <label className="form-label" for="email">Email</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input className="form-space" type="email" name="email" id="email" placeholder="yourname@email.com" required />
                            </div>
                        </div>
                        <div className="row form-container">
                            <div className="col span-1-of-3">
                                <label className="form-label" for="phone">Phone</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input className="form-space" type="number" name="phone" id="phone" placeholder="(***)***-****" />
                            </div>
                        </div>
                        <div className="row form-container">
                            <div className="col span-1-of-3">
                                <label className="form-label" for="password">Password</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input className="form-space" type="password" name="password" id="password" placeholder="Password" required />
                            </div>
                        </div>
                        <div className="row form-container">
                            <div className="col span-1-of-3">
                                <label className="form-label" for="confirmPassword">Confirm Password</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input className="form-space" type="password" name="confirmPassword" id="confirmPassword" placeholder="Password" required />
                            </div>
                        </div>

                    
                        <div className="row form-container">
                            <div className="col span-1-of-3">
                                <label  className="form-label"for="find-us">What is your License type?</label>
                            </div>
                        </div>

                        <div className="col wheel form-container span-2-of-3">
                            <select className="form-space" name="find-us" id="find-us">
                            <option value="sample-name" selected>Sample option</option>
                            <option value="sample-name">sample option</option>
                            <option value="sample-name">sample option</option>
                            <option value="sample-name">sample option</option>
                            <option value="sample-name">sample option</option>
                            <option value="sample-name">sample option</option>
                            </select>
                        </div>

                        <div className="row form-container">
                            <div className="col span-1-of-3">
                                <label  className="form-label"for="find-us">How did you hear about us?</label>
                            </div>
                        </div>

                        <div className="col wheel form-container span-2-of-3">
                            <select className="form-space" name="find-us" id="find-us">
                            <option value="ad" selected>Advertisement</option>
                            <option value="search">Search Engine</option>
                            <option value="friends">Friends</option>
                            <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="row form-container">
                        <div className="col span-1-of-3">
                            <label  className="form-label"for="news">Join our Newsletter?</label>
                        </div>
                        <div className="col check-box span-2-of-3">
                            <input type="checkbox" name="news" id="news" checked /> <label  className="form-label"for="news">Please subscribe me.</label>
                        </div>
                    </div>
                    {/* <div className="row form-container">
                        <div className="col span-1-of-3">
                            <label  className="form-label"for="msg">How may we serve you?</label>
                        </div>
                        <div className="col span-2-of-3">
                            <textarea className="form-space" name="msg" id="msg" placeholder="Type your message."></textarea>
                        </div>
                    </div> */}
                    <div className="col form-btn-container span-2-of-3">
                        <input id="submit" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </section>
    </section>
  )}

  export default Form