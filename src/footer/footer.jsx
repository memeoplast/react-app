import React from "react";
import "./footer.css"

// Creating a footer with links
const Footer=() => {
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4> For Business</h4>
                        <a href="#">
                            <p>Employer</p>
                        </a>
                        <a href="#">
                            <p>Benefits</p>
                        </a>
                        <a href="#">
                            <p>Retreats</p>
                        </a>
                        <a href="#">
                            <p>Rewards</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4> Partners</h4>
                        <a href="#">
                            <p>Google</p>
                        </a>
                        <a href="#">
                            <p>Microsoft</p>
                        </a>
                        <a href="#">
                            <p>Klarna</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4> Company</h4>
                        <a href="#">
                            <p>Team</p>
                        </a>
                        <a href="#">
                            <p>Jobs</p>
                        </a>
                        <a href="#">
                            <p>About Us</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4> Social Media</h4>
                        <a href="#">
                            <p>Facebook</p>
                        </a>
                        <a href="#">
                            <p>Discord</p>
                        </a>
                        <a href="#">
                            <p>Twitter</p>
                        </a>
                        <a href="#">
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            ©{new Date().getFullYear} ABC Company. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="#"><div><p>Terms and Conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>


                    </div>
                </div>
            </div>
        </div>

    )
}


export default Footer