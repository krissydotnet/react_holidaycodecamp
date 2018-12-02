import React from 'react';

const CloseButton = (props) => {
    return (
        <span className="close-btn" onClick={props.closeWindow}><i className="fas fa-times"></i></span>
    )
}

export default CloseButton;