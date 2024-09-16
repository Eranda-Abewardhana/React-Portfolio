import React from 'react';

function Modal({ videoSrc, description, title, onClose }) {
    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
                {videoSrc && (
                    <video width="100%" height="50vh" controls>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
}

export default Modal;
