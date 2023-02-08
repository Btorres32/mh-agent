import React from "react";

function Footer(){
    return (
        <footer>
            <div className="row">
            <div className="col span-1-of-2">
                <ul className="footer-nav">
                <li className="footer-nav-a"><a  href="#about">About Us</a></li>
                <li className="footer-nav-a"><a  href="#">Blog</a></li>
                <li className="footer-nav-a"><a  href="#">iOS App</a></li>
                <li className="footer-nav-a"><a  href="#">Andriod App</a></li>
                </ul>
            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">
                <li className="footer-social-a"><a href="#" aria-label="blank">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                <li className="footer-social-a"><a href="#" aria-label="blank">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                <li className="footer-social-a"><a href="#" aria-label="blank">
                    <ion-icon name="logo-googleplus"></ion-icon>
                    </a></li>
                <li className="footer-social-a"><a href="#" aria-label="blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>
            </div>
            </div>
            <div className="row">
            <p>Copyright &copy; 2020 by IVRAS, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer