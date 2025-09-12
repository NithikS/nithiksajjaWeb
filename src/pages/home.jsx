import React from 'react'
import webBannerD from "../assets/websiteBannerD.png"
import webBannerM from "../assets/websiteBannerM.png"
import { Link } from 'react-router-dom'

const Home = () => { 
  return (
    <>
        <section className="pt-3 bannerBg">
            <img src={webBannerD} className="d-none d-md-block" alt="Nithik Sajja Banner" height="50%" width="100%"></img>
            <img src={webBannerM} className="d-block d-md-none" alt="Nithik Sajja Banner" height="50%" width="100%"></img>

        </section>
        <section className="pt-5">
            <div className="container homeDiv">
                <div className="row">
                    <div className="col-lg-4">
                        <i className="bi bi-link-45deg iconClass darkBlueText"></i>
                        <h2><b>Links</b></h2>
                        <p>Social platforms <br /> YouTube, GitHub, and More</p>
                        <p><Link className="btn darkBlueBg iconBlue" to="/links" role="button">View details &raquo;</Link></p>
                    </div>
                    <div className="col-lg-4">
                        <i className="bi bi-laptop iconClass darkGreenText"></i>
                        <h2><b>Projects</b></h2>
                        <p>Projects That I Have Created <br /> That Are Open to View</p>
                        <p><Link className="btn darkGreenBg iconGreen" to="/projects" role="button">View details &raquo;</Link></p>
                    </div>
                    <div className="col-lg-4">
                        <i className="bi bi-envelope iconClass darkBlueText"></i>
                        <h2><b>Contact Me</b></h2>
                        <p>Contact Me With <br />Questions, Inqueries, or Feedback</p>
                        <p><Link className="btn darkBlueBg iconBlue" to="/contact" role="button">View details &raquo;</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home