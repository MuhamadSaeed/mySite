import React, {  useEffect, useState } from 'react';
import "./services.css";

function Services() {
    let [openedBox, setOpenedBox] = useState("none");
 

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.className === "over" ) {
                setOpenedBox("none")
            }
        };
    
        document.addEventListener("click", handleClick);
    
        return () => {
            document.removeEventListener("click", handleClick); 
        };
    }, []);

    return (
        <section className="services">
            <h1 className="servicesHeading">Services</h1>
            <p className="paraServices">What I Offer</p>
            <div className="boxs">
                <div className="service" onClick={() => setOpenedBox("box1")}>
                    <i className="fa-solid fa-head-side-virus"></i>
                    <h1>Front-End Web  <br /> Development</h1>
                    <a >view more <i className="fa-solid fa-arrow-right"></i></a>
                    {openedBox === "box1" && (
                        <div className="over">
                            <div className="moreDetails">
                                <i className="fa-solid fa-x" onClick={(e) => {
                                    e.stopPropagation(); 
                                    setOpenedBox("none");
                                    console.log("Closed:", openedBox); 
                                }}></i>
                                <h1>Front-End Web Development</h1>
                                <p><i className="fa-solid fa-check-double"></i> I turn your design (Figma, Adobe XD, or even a sketch) into a real website.</p>
                                <p><i className="fa-solid fa-check-double"></i> I build websites that look good and work well on phones, tablets, and computers.</p>
                                <p><i className="fa-solid fa-check-double"></i> I focus on fast loading and smooth user experience to keep visitors engaged.</p>
                                <p><i className="fa-solid fa-check-double"></i> I test my work on different browsers to make sure everything works properly.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="service" onClick={() => setOpenedBox("box2")}>
                    <i className="fa-solid fa-code"></i>
                    <h1>Building Functional Websites<br /> from A to Z</h1>
                    <a >view more <i className="fa-solid fa-arrow-right"></i></a>
                    {openedBox === "box2" && (
                        <div className="over">
                            <div className="moreDetails">
                                <i className="fa-solid fa-x" onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenedBox("none");
                                    console.log("Closed:", openedBox);
                                }}></i>
                               <h1>Building Functional Websites from A to Z</h1>
                                <p><i className="fa-solid fa-check-double"></i> I create websites that actually serve a purpose, not just good looking pages.</p>
                                <p><i className="fa-solid fa-check-double"></i> I can build e-commerce pages, landing pages, blogs, dashboards, and more.</p>
                                <p><i className="fa-solid fa-check-double"></i> I add real features like login systems, search bars, product filters, forms. etc</p>
                                <p><i className="fa-solid fa-check-double"></i> I care about organizing the project from the start to make it easy to grow later.</p>
                                <p><i className="fa-solid fa-check-double"></i> Whether it’s static or dynamic, I build with clear goals and useful results.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="service" onClick={() => setOpenedBox("box3")}>
                    <i className="fa-solid fa-palette"></i>
                    <h1>Improving and Updating <br /> Existing Websites</h1>
                    <a>view more <i className="fa-solid fa-arrow-right"></i></a>
                    {openedBox === "box3" && (
                        <div className="over">
                            <div className="moreDetails">
                                <i className="fa-solid fa-x" onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenedBox("none");
                                    console.log("Closed:", openedBox);
                                }}></i>
                               <h1>Improving and Updating Existing Websites</h1>
                                <p><i className="fa-solid fa-check-double"></i> I can fix layout or design issues in your current website.</p>
                                <p><i className="fa-solid fa-check-double"></i> I make your site more mobile friendly and easier to use.</p>
                                <p><i className="fa-solid fa-check-double"></i> I can add missing parts or sections you need.</p>
                                <p><i className="fa-solid fa-check-double"></i> I improve loading speed and clean up the code to make future edits easier.</p>
                                <p><i className="fa-solid fa-check-double"></i> I also connect your site to tools like WhatsApp, Google Maps, or custom forms. etc</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;
