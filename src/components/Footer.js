import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div class="footer-section">
            <div class="container">
                <div class="footer-cta py-5">
                    <div class="row">


                        <div class="col-sm-6 col-xl-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="cta-text">
                                    <h4>Find us</h4>
                                    <span>St Francis Institute of Technology, Borivali West, Mumbai 400060</span>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-6 col-xl-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-phone"></i>
                                <div class="cta-text">
                                    <h4>For Queries</h4>
                                    <span>+91 9637261594</span>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-6 col-xl-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-envelope-open"></i>
                                <div class="cta-text">
                                    <h4>Mail us</h4>
                                    <span>uniexsfit@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>


                <div class="footer-content py-5">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="footer-widget">
                                <div class="footer-heading">
                                    <h3>Check our other products</h3>
                                </div>
                                <ul>
                                    <li>
                                        <a href="https://powercal.000webhostapp.com/">PowerCal</a>
                                        <a href="/">Link3</a>
                                        <a href="/">Link2</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved <a href="/">UniEx</a></p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
