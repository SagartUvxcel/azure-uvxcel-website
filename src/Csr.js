import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import logo1 from "./images/smartrr.png";
import logo2 from "./images/bestol.png";
import logo3 from "./images/uttr.jpg";
import logo4 from "./images/Reonomy.jpg";
import logo5 from "./images/datagridzlogo2-1.png";
import logo6 from "./images/nortek.png";

const Csr = () => {
    return (
        <div classNameName="container ">
            {/* <div classNameName="row pb-5">
                <h1 classNameName='text-center'>Corporate Social Responsibility Company Policy</h1>
            </div> */}
            {/* <div classNameName="row">

                <h2 classNameName='py-2'>What is corporate social responsibility?</h2>
                <p>Our Corporate Social Responsibility (CSR) company policy outlines our efforts to give back to the world as it gives to us.</p>

                <h2 classNameName='py-2'>Policy brief & purpose</h2>
                <p>Our Corporate Social Responsibility (CSR) company policy refers to our responsibility toward our environment. Our company's existence is not lonely. It's part of a bigger system of people, values, other organizations and nature. The social responsibility of a business is  to give back to the world just as it gives to us.</p>


                <h2 classNameName='py-2'>Policy elements</h2>
                <p>We want to be a responsible business that meets the highest standards of ethics and professionalism.</p>
                <p>Our company's social responsibility falls under two categories: <b>compliance</b> and <b>proactiveness</b>.</p>

                <div classNameName="col-md-12 py-4">
                    <h3>1. Compliance</h3>
                    <div classNameName="row p-4">
                        <div classNameName="col-md-6 ">
                            <h4>Legality</h4>
                            <ul>
                                <li>Respect the law</li>
                                <li>Honor its internal policies</li>
                                <li>Ensure that all its business operations are legitimate</li>
                                <li>Keep every partnership and collaboration open and transparent</li>
                            </ul>
                        </div>
                        <div classNameName="col-md-6">
                            <h4>Business ethics</h4>
                            <ul>
                                <li>Safety and fair dealing</li>
                                <li>Respect toward the consumer</li>
                                <li>Anti-bribery and anti-corruption practices</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div classNameName="col-md-12 py-4">
                    <h3>2. Proactiveness</h3>
                    <div classNameName="row p-4">
                        <div classNameName="col-md-6 ">
                            <h4>Donations and aid</h4>
                            <ul>
                                <li>Advance the arts, education and community events.
                                </li>
                                <li>Alleviate those in need.</li>
                            </ul>
                        </div>
                        <div classNameName="col-md-6">
                            <h4>Volunteering</h4>
                            <p>Our company will encourage its employees to volunteer. They can volunteer through programs organized internally or externally. Our company may sponsor volunteering events from other organizations.</p>
                        </div>
                        <div classNameName="col-md-6 ">
                            <h4>Preserving the environment</h4>
                            <ul>
                                <li>Recycling</li>
                                <li>Conserving energy</li>
                                <li>Organizing reforestation excursions</li>
                                <li>Using environmentally-friendly technologies</li>
                            </ul>
                        </div>
                        <div classNameName="col-md-6 ">
                            <h4>Supporting the communityt</h4>
                            <p>Our company may initiate and support community investment and educational programs. For example, it may begin partnerships with vendors for constructing public buildings. It can provide support to nonprofit organizations or movements to promote cultural and economic development of global and local communities.</p>
                        </div>
                        <div classNameName="col-md-6 ">
                            <h4>Learning</h4>
                            <p>We will actively invest in R&D. We will be open to suggestions and listen carefully to ideas. Our company will try to continuously improve the way it operates.</p>
                        </div>
                    </div>
                </div>

            </div> */}

            <h1>hello</h1>

            {/* <div classNameName="row align-items-center h-100">
                <div classNameName="container rounded">
                    <div classNameName="slider">
                        <div classNameName="logos">
                            <div classNameName="card">
                                <img src={logo1} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo2} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo3} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo4} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo5} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo6} alt="..." />
                            </div>

                        </div>
                        <div classNameName="logos">
                            <div classNameName="card">
                                <img src={logo1} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo2} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo3} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo4} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo5} alt="..." />
                            </div>
                            <div classNameName="card">
                                <img src={logo6} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            <section className="slide-option">
                <div id="infinite" className="highway-slider">
                    <div className="container highway-barrier">
                        <ul className="highway-lane">
                            <li className="highway-car"> <img src={logo1} alt="..." /></li>
                            <li className="highway-car"> <img src={logo2} alt="..." /></li>
                            <li className="highway-car"> <img src={logo3} alt="..." /></li>
                            <li className="highway-car"> <img src={logo4} alt="..." /></li>
                            <li className="highway-car"> <img src={logo5} alt="..." /></li>
                            <li className="highway-car"> <img src={logo6} alt="..." /></li>

                            <li className="highway-car"> <img src={logo1} alt="..." /></li>
                            <li className="highway-car"> <img src={logo2} alt="..." /></li>
                            <li className="highway-car"> <img src={logo3} alt="..." /></li>
                            <li className="highway-car"> <img src={logo4} alt="..." /></li>
                            <li className="highway-car"> <img src={logo5} alt="..." /></li>
                            <li className="highway-car"> <img src={logo6} alt="..." /></li>

                        </ul>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default Csr
