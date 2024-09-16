import React from 'react';

function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Abilities</h1>
                <div className="services-list">
                    <div>
                        <i className="fas fa-mobile-alt fa-3x"></i>
                        <br/><br/>
                        <h2>Mobile App Development</h2>
                        <p>Proficient in developing mobile apps using Pure
                            Android
                            and Flutter.</p>
                        <br/><br/>
                    </div>
                    <div>
                        <i className="fas fa-code fa-3x"></i>
                        <br/><br/>
                        <h2>Web Developer</h2>
                        <p>Designed and developed websites using HTML, CSS, and JavaScript, focusing on both
                            aesthetics and functionality.
                            <br/>
                            Utilized Django for backend development, enhancing the overall performance and
                            user interactivity of web applications.
                        </p>
                        <br/><br/>
                    </div>
                    <div>
                        <i className="fas fa-robot fa-3x"></i>
                        <br/><br/>
                        <h2> Machine Learning Model for Image Recognition</h2>
                        <p><br/><br/>
                            Developed and trained a machine learning model using Python and popular libraries like
                            TensorFlow and Keras.
                            <br/><br/>
                            Collected and preprocessed a large dataset of images for training and testing the model.
                            <br/><br/>
                            Implemented convolutional neural networks (CNNs) to achieve state-of-the-art accuracy in
                            image
                            recognition tasks.
                            <br/><br/>
                            Fine-tuned the model using transfer learning techniques and optimized hyperparameters for
                            better
                            performance.
                            <br/><br/>
                            Deployed the trained model to a web application using Flask, allowing users to upload and
                            classify images.
                        </p>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
