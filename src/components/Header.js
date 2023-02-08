import React from "react"

function Header(){
    return (
        <header >
            <nav className="sticky">
                <div className="row nav-container">
                    <a href="#ivras" className="nav-a"><img src="./img/IVRAS-LogoP.png" alt="IVRAS logo" className="logo"
                        title="What is IVRAS? Click" /></a>
                    <ul className="clearfix">
                    <li className="buy"><a className="link"  href="#">Buy A Home</a></li>
                    <li className="sell"><a  className="link" href="#">Sell A Home</a></li>
                    <li className="contact"><a  className="link" href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
            <div className="ivras-text-box">
                <h1 className="ivras-text-box-item">Specializing in <br /> Manufactured Homes</h1>
                <div className="ivras-container">
                    <a className="btn btn-about ivras-btn" href="#about">About Us</a>
                    <a id="lang" className="btn btn-lang ivras-btn" href="spanish.html" title="Pagina en Español">Español</a>
                    <a className="btn btn-signup ivras-btn" href="#">Register</a>
                </div>
            </div>
        </header>
    )
}

export default Header