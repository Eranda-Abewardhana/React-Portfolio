import * as React from 'react';
import { styled, css } from '@mui/system';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';

function CustomModal({ open, onClose, title, description, videoSrc }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <ModalContent>
                    <ModalHeader>
                        <h2 id="transition-modal-title" className="modal-title">{title}</h2>
                        <span className="close" onClick={onClose}>&times;</span>
                    </ModalHeader>
                    <ModalBody>
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                        {videoSrc && (
                            <StyledVideo controls>
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </StyledVideo>
                        )}
                    </ModalBody>
                </ModalContent>
            </Fade>
        </Modal>
    );
}

// Modal Content Wrapper
const ModalContent = styled('div')`
    font-family: 'IBM Plex Sans', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%; /* Make modal width responsive */
    max-width: 700px; /* Maximum width */
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    outline: none;
    max-height: 90vh; /* Maximum height for the modal */
    overflow-y: auto; /* Scroll if content overflows */
`;

// Modal Header Styling
const ModalHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background-color: #007fff; /* Header background color */
    color: #fff; /* Header text color */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    .modal-title {
        margin: 0;
        font-size: 1.5rem;
    }

    .close {
        cursor: pointer;
        font-size: 1.5rem;
        color: #fff; /* Close button color */
        transition: color 0.3s ease;
    }

    .close:hover {
        color: #ffcccc; /* Hover color for close button */
    }
`;

// Modal Body Styling
const ModalBody = styled('div')`
    padding: 24px;
    color: #333; /* Body text color */

    .modal-description {
        line-height: 1.5rem;
        font-weight: 400;
        margin: 0 0 16px;
        color: #555; /* Description text color */
    }
`;

// Video Styling
const StyledVideo = styled('video')`
    width: 100%; /* Make video take full width of its container */
    max-width: 650px; /* Maximum width */
    height: auto;
    margin-top: 16px; /* Add some margin above the video */
    border-radius: 8px; /* Optional: Add rounded corners to video */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Optional: Add shadow to video */
`;

export default CustomModal;
