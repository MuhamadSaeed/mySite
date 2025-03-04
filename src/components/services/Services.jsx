import React, {  useEffect, useState } from 'react';
import "./services.css";

function Services() {
    let [openedBox, setOpenedBox] = useState("none");
    // let Data = {
    //     numOne: [h1= "Responsive Web", h2= "Development",
    //             h3= "Modern & Responsive Web Development",
    //             p1="Building fully responsive websites that work seamlessly on all devices.",
    //             p2="Optimizing performance for faster loading times and better user engagement.",
    //             p3="Ensuring cross-browser compatibility for a consistent experience.",
    //             p4="Utilizing the latest technologies such as HTML, CSS, JavaScript, React.js.",
    //             p5="Enhancing user experience (UX/UI) with clean and user-friendly interfaces.",
    //         ],
    //     numTwo: [h1= "Dynamic Web", h2= "Apps",
    //             h3= "Interactive & Dynamic Web Apps",
    //             p1="Developing dynamic and interactive web applications using React.js.",
    //             p2="Integrating APIs to fetch and display real-time data.",
    //             p3="Adding advanced features like dark/light mode, smooth animations, and dynamic UI components.",
    //             p4="Building scalable and maintainable code for long-term flexibility.",
    //             p5="Implementing state management solutions like Redux or Context API for efficient data handling.",
    //         ],
    //     numThree: [h1= "UI/UX", h2= "Implementation",
    //             h3= "UI/UX Implementation",
    //             p1="Transforming designs (Figma, Adobe XD) into clean, efficient code.",
    //             p2="Enhancing user interaction with smooth transitions and modern layouts.",
    //             p3="Ensuring a seamless and consistent user experience across all devices and browsers.",
    //             p4="Applying best accessibility practices to make websites inclusive for all users.",
    //             p5="Creating visually appealing and modern UI components with optimized design patterns.",
    //         ]
    // }

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
                    <h1>Responsive Web <br /> Development</h1>
                    <a >view more <i className="fa-solid fa-arrow-right"></i></a>
                    {openedBox === "box1" && (
                        <div className="over">
                            <div className="moreDetails">
                                <i className="fa-solid fa-x" onClick={(e) => {
                                    e.stopPropagation(); 
                                    setOpenedBox("none");
                                    console.log("Closed:", openedBox); 
                                }}></i>
                                <h1>Modern & Responsive Web Development</h1>
                                <p><i className="fa-solid fa-check-double"></i> Building fully responsive websites that work seamlessly on all devices.</p>
                                <p><i className="fa-solid fa-check-double"></i> Optimizing performance for faster loading times and better user engagement.</p>
                                <p><i className="fa-solid fa-check-double"></i> Ensuring cross-browser compatibility for a consistent experience.</p>
                                <p><i className="fa-solid fa-check-double"></i> Utilizing the latest technologies such as HTML, CSS, JavaScript, React.js.</p>
                                <p><i className="fa-solid fa-check-double"></i> Enhancing user experience (UX/UI) with clean and user-friendly interfaces.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="service" onClick={() => setOpenedBox("box2")}>
                    <i className="fa-solid fa-code"></i>
                    <h1>Dynamic Web <br /> Apps</h1>
                    <a >view more <i className="fa-solid fa-arrow-right"></i></a>
                    {openedBox === "box2" && (
                        <div className="over">
                            <div className="moreDetails">
                                <i className="fa-solid fa-x" onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenedBox("none");
                                    console.log("Closed:", openedBox);
                                }}></i>
                                <h1>Interactive & Dynamic Web Apps</h1>
                                <p><i className="fa-solid fa-check-double"></i> Developing dynamic and interactive web applications using React.js.</p>
                                <p><i className="fa-solid fa-check-double"></i> Integrating APIs to fetch and display real-time data.</p>
                                <p><i className="fa-solid fa-check-double"></i> Adding advanced features like dark/light mode, smooth animations, and dynamic UI components.</p>
                                <p><i className="fa-solid fa-check-double"></i> Building scalable and maintainable code for long-term flexibility.</p>
                                <p><i className="fa-solid fa-check-double"></i> Implementing state management solutions like Redux or Context API for efficient data handling.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="service" onClick={() => setOpenedBox("box3")}>
                    <i className="fa-solid fa-palette"></i>
                    <h1>UI/UX <br /> Implementation</h1>
                    <a>view more <i className="fa-solid fa-arrow-right"></i></a>
                    {openedBox === "box3" && (
                        <div className="over">
                            <div className="moreDetails">
                                <i className="fa-solid fa-x" onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenedBox("none");
                                    console.log("Closed:", openedBox);
                                }}></i>
                                <h1>UI/UX Implementation</h1>
                                <p><i className="fa-solid fa-check-double"></i> Transforming designs (Figma, Adobe XD) into clean, efficient code.</p>
                                <p><i className="fa-solid fa-check-double"></i> Enhancing user interaction with smooth transitions and modern layouts.</p>
                                <p><i className="fa-solid fa-check-double"></i> Ensuring a seamless and consistent user experience across all devices and browsers.</p>
                                <p><i className="fa-solid fa-check-double"></i> Applying best accessibility practices to make websites inclusive for all users.</p>
                                <p><i className="fa-solid fa-check-double"></i> Creating visually appealing and modern UI components with optimized design patterns.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;
