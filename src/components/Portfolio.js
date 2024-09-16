import React, { useState } from 'react';
import portfolioImage1 from '../Images/WhatsApp Image 2023-09-05 at 17.16.22.jpg';
import portfolioImage2 from '../Images/Screenshot 2023-09-05 173120.jpg';
import portfolioImage3 from '../Images/FB_IMG_1692357391476.jpg';
import CustomModal from './CustomModal'; // Import the Modal component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
    // State to manage the modal
    const [modalData, setModalData] = useState({ isOpen: false, videoSrc: '', description: '', title: '' });

    // Function to handle opening the modal
    const openModal = (videoSrc, description, title) => {
        setModalData({ isOpen: true, videoSrc, description, title });
    };

    // Function to close the modal
    const closeModal = () => {
        setModalData({ isOpen: false, videoSrc: '', description: '', title: '' });
    };

    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={portfolioImage1} className="portrait" alt="Suwa Kakulu Medical App" />
                        <div className="layer">
                            <h3>Suwa Kakulu Medical App</h3>
                            <p>Develop for Rotaract Club</p>
                            <button
                                className="icon-button"
                                onClick={() => openModal(
                                    'Data/WhatsApp Video 2023-09-07 at 16.42.29.mp4', // Make sure the path is correct
                                    `<b>Overview:</b><br>I developed a medical app for the Rotaract Club at the University of Moratuwa, featuring a content carousel and seamless YouTube video integration.<br><br>
                                    <b>Key Features:</b><br>
                                    - Content Carousel: Designed an intuitive horizontal content carousel for easy navigation.<br>
                                    - YouTube Integration: Integrated educational YouTube videos for a dynamic learning experience.<br>
                                    - Medical Education: Provided a comprehensive resource for medical information and wellness content.<br>
                                    - User-Friendly Design: Ensured accessibility and user-friendliness.<br>
                                    - Technology: Built with React Native for optimal performance.<br><br>
                                    <b>Impact:</b><br>
                                    The app promotes health awareness and education, benefiting students, faculty, and the community.<br><br>
                                    <b>Technologies Used:</b><br>
                                    - React Native<br>
                                    - YouTube API Integration<br>
                                    - JavaScript<br>
                                    - HTML/CSS<br>
                                    - UI/UX Design<br><br>
                                    <b>Conclusion:</b><br>
                                    This project demonstrates my skills in mobile app development and my commitment to healthcare education. Feel free to reach out for more details.`,
                                    'Suwa Kakulu Medical App - Health Education and YouTube Integration'
                                )}
                            >
                                <FontAwesomeIcon icon={faLink} />
                            </button>
                        </div>
                    </div>

                    {/* Other work items */}
                    <div className="work">
                        <img src={portfolioImage2} className="landscape" alt="Indiretto Project Puzzle Game" />
                        <div className="layer">
                            <h3>Indiretto Project Puzzle Game</h3>
                            <p>Develop for Rotaract Club</p>
                            <button
                                className="icon-button"
                                onClick={() => openModal(
                                    'Data/Post - Feed.mp4',
                                    `<strong>Description:</strong><br>
                                I developed an engaging web puzzle game as part of the Indiretto project for the Rotaract Club. The game features a built-in time counter and updates the team's time in real-time on Firebase once the game time expires. Additionally, users can easily access instructions through a dedicated button. This project was implemented using HTML, CSS, and JavaScript, showcasing my skills in web development and real-time database integration.<br><br>
                                <strong>Key Features:</strong><br>
                                - Real-time Time Counter<br>
                                - Firebase Integration for Team Time Updates<br>
                                - Instructional Button for Easy Gameplay<br>
                                - Utilized HTML, CSS, and JavaScript<br><br>
                                <strong>Conclusion:</strong><br>
                                This web puzzle game demonstrates my proficiency in web development and real-time database integration. It serves as an engaging and interactive addition to the Indiretto project, showcasing my commitment to creative solutions and teamwork. Feel free to explore this exciting project further.`,
                                                    'Indiretto Puzzle Game for Rotaract Club'
                                )}
                            >
                                <FontAwesomeIcon icon={faLink} />
                            </button>
                        </div>
                    </div>
                    <div className="work">
                        <img src={portfolioImage3} className="landscape" alt="You-Fira Project" />
                        <div className="layer">
                            <h3>You-Fira Project by Using TensorFlow Lite</h3>
                            <p>1st Year Hardware Project</p>
                            <button
                                className="icon-button"
                                onClick={() => openModal(
                                    'Data/WhatsApp Video 2023-09-07 at 16.43.44.mp4',
                                    `<strong>Project:</strong> Autonomous Robotic Assistance Vehicle with Object Recognition and Retrieval System<br><br>
                                    <strong>Description:</strong><br>
                                    During my first year of studies, I collaborated with a dedicated team of four members to create an innovative Autonomous Robotic Assistance Vehicle. This unique project aimed to assist disabled individuals by providing them with a reliable and intuitive solution for requesting and retrieving objects they needed, such as a bottle.<br><br>
                                    <strong>Key Features:</strong><br>
                                    - Object Recognition: We implemented advanced computer vision techniques using OpenCV to enable the vehicle to recognize and identify objects based on user requests.<br>
                                    - Robotic Arm: Our project incorporated a sophisticated robotic arm that could grip and manipulate objects with precision.<br>
                                    - Voice Command App: To facilitate user interaction, we developed a voice command application that allowed users to request specific items verbally.<br>
                                    - PID Balancing: We utilized PID (Proportional-Integral-Derivative) control for balancing the robotic vehicle, ensuring smooth and stable movement.<br>
                                    - TensorFlow Lite: Machine learning models were deployed using TensorFlow Lite to enhance object recognition accuracy.<br>
                                    - PCB Design: We designed custom PCBs (Printed Circuit Boards) to control various components and ensure efficient communication within the system.<br>
                                    - ROS Knowledge: We gained valuable experience with ROS (Robot Operating System) to enhance our understanding of robotics and control systems.<br><br>
                                    <strong>Mechanism:</strong><br>
                                    - When a user requested an object via the voice command app, the vehicle used computer vision to locate and identify the requested item.<br>
                                    - The robotic arm, equipped with precision grippers, was deployed to pick up the object securely.<br>
                                    - The vehicle autonomously navigated to the user, delivering the requested item effectively and safely.<br><br>
                                    <strong>Impact:</strong><br>
                                    Our Autonomous Robotic Assistance Vehicle represents a significant step forward in assistive technology. It empowers individuals with disabilities by providing them with greater independence and accessibility to everyday objects.<br><br>
                                    <strong>Technologies Used:</strong><br>
                                    - Computer Vision (OpenCV)<br>
                                    - TensorFlow Lite<br>
                                    - Voice Command Integration<br>
                                    - PID Control<br>
                                    - PCB Design<br>
                                    - Robot Operating System (ROS)<br><br>
                                    <strong>Conclusion:</strong><br>
                                    This project demonstrates our team's dedication to creating practical and innovative solutions in the field of robotics and assistive technology. We honed our skills in hardware development, control systems, and computer vision while making a positive impact on the lives of disabled individuals. Our commitment to innovation and problem-solving is evident in this remarkable project.`,
                                    'Autonomous Robotic Assistance Vehicle with Object Recognition and Retrieval System'
                                )}
                            >
                                <FontAwesomeIcon icon={faLink} />
                            </button>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See more</a>
            </div>
            {/* Include Modal Component */}
            {modalData.isOpen &&
                <CustomModal
                    open={modalData.isOpen}
                    onClose={closeModal}
                    title={modalData.title}
                    description={modalData.description}
                    videoSrc={modalData.videoSrc}
                />
            }
        </div>
    );
}

export default Portfolio;
