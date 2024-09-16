import React, { useState } from 'react';
import aboutImage from '../Images/1673268863348.jpg'; // Corrected path

function About() {
    const [activeTab, setActiveTab] = useState('skills'); // State to manage active tab

    // Function to handle tab switching
    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={aboutImage} alt="About" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>
                            Hello, I'm Eranda Sathsara Abewardhana, a passionate and driven developer currently pursuing
                            a BSc Honors degree in Artificial Intelligence at the University of Moratuwa. With over a year
                            of hands-on experience as a mobile app developer at a leading software company, I've honed my
                            skills in creating innovative solutions for the digital world.

                            My journey into the realm of technology began with a fascination for hardware, which led me
                            to embark on challenging hardware projects, as I've mentioned in our previous conversations.
                            This journey has equipped me with a holistic perspective on technology, from the foundational
                            hardware to the cutting-edge software that drives it.

                            As a mobile app developer, I've had the privilege of crafting user-friendly and impactful
                            applications that have made a difference in people's lives. My expertise extends beyond
                            mobile apps to web development, where I've designed and developed websites that seamlessly blend
                            aesthetics and functionality.

                            My pursuit of knowledge in the field of Artificial Intelligence is a testament to my
                            commitment to staying at the forefront of technological advancements. I believe that AI has the
                            potential to reshape industries and improve our daily lives, and I'm excited to be part of this
                            transformative journey.

                            In addition to my technical skills, I'm a proactive team player who thrives in collaborative
                            environments. I enjoy tackling complex challenges and finding elegant solutions that deliver
                            exceptional user experiences.

                            When I'm not coding or immersed in AI research, you can find me exploring new technologies,
                            tinkering with hardware projects, or sharing my knowledge with fellow enthusiasts.

                            I'm excited about the future of technology and how it can create positive change, and I'm
                            always eager to take on new opportunities and challenges. Feel free to explore my portfolio to see
                            some of the exciting projects I've been a part of.

                            Let's connect and collaborate on projects that push the boundaries of what technology can
                            achieve.
                        </p>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => openTab('skills')}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => openTab('experience')}
                            >
                                Experience
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => openTab('education')}
                            >
                                Education
                            </p>
                        </div>
                        {/* Conditionally render tab contents */}
                        <div className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li>
                                    <span>Mobile App Development</span><br />
                                    Proficient in developing mobile apps using Pure Android and Flutter.
                                </li>
                                <br />
                                <li>
                                    <span>Web Development</span> <br />
                                    Experienced in web development using HTML, CSS, and JavaScript.<br />
                                    Backend development expertise in Django.
                                </li>
                                <br />
                                <li>
                                    <span>Machine Learning Projects</span>
                                    <br />
                                    Developed a robotic arm on a robotic vehicle to assist disabled individuals in
                                    retrieving objects like bottles.
                                    <br />
                                    Implemented object recognition technology to identify items requested by users.
                                    <br />
                                    Created a mobile application for users to communicate with the robotic system.
                                    <br />
                                    Led a team of developers and engineers in the design and execution of the project.
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-content ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li>
                                    <span>Mobile App Developer</span>
                                    <br />
                                    Evision Micro Systems
                                    <br />
                                    2020/01/18 - 2021/02/28
                                    <br /><br />
                                    Developed mobile applications using Pure Android and Flutter, delivering
                                    user-friendly and impactful solutions.
                                    <br />
                                    Collaborated with cross-functional teams to design and implement features that
                                    improved user experiences.
                                    <br /><br />
                                </li>
                                <li>
                                    <span>Web Developer</span>
                                    <br />
                                    Rotaract Club University of Moratuwa
                                    <br />
                                    Indiretto Project
                                    <br />
                                    Designed and developed websites using HTML, CSS, and JavaScript, focusing on both
                                    aesthetics and functionality.
                                    <br />
                                    Utilized Django for backend development, enhancing the overall performance and
                                    user interactivity of web applications.
                                    <br /><br />
                                </li>
                                <li>
                                    <span>Machine Learning Projects</span>
                                    <br />
                                    Developed a robotic arm on a robotic vehicle to assist disabled individuals in
                                    retrieving objects for 1st year hardware project.
                                    <br />
                                    Implemented object recognition technology to identify items requested by users.
                                    <br />
                                    Created a mobile application for users to communicate with the robotic system.
                                    <br />
                                    Led a team of developers and engineers in the design and execution of the project.
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-content ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li>
                                    <span>BSc Honors in Artificial Intelligence</span>
                                    <br />
                                    University of Moratuwa
                                    <br />
                                    2021 - Present
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
