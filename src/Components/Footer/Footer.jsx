import React from "react";
import "../Footer/Footer.css"

// Creating a footer with links
const Footer=() => {
    return(
        <div className="footer">
            <div className="footer section__padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h4 className="footer-links-headig"> For Business</h4>
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
                    <div className="footer-links-div">
                        <h4 className="footer-links-headig">  Partners</h4>
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
                    <div className="footer-links-div">
                        <h4 className="footer-links-headig"> Company</h4>
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
                    <div className="footer-links-div">
                        <h4 className="footer-links"> Social Media</h4>
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

                <hr className="footer-divider"></hr>

                <div className="footer-below">
                    <div className="footer-copyright">
                        <p className="copyright-info">
                            © {new Date().getFullYear()} ABC Company. All rights reserved.

                        </p>
                    </div>
                    <div className="footer-below-links">
                        <a href="#"><div><p className="legal-links">Terms and Conditions</p></div></a>
                        <a href="#"><div><p className="legal-links">Privacy</p></div></a>
                        <a href="#"><div><p className="legal-links">Security</p></div></a>


                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer