// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, description }) => {
	if (!isOpen) return null;

	return (
		<div style={modalStyles}>
			<div style={modalContentStyles}>
				<span style={closeButtonStyles} onClick={onClose}>
					&times;
				</span>
				<img
					src={imageSrc}
					alt="Modal"
					style={{ width: '100%', height: 'auto' }}
				/>
				<p>{description}</p>
			</div>
		</div>
	);
};

// Basic inline styles for the modal
const modalStyles = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'fixed',
	zIndex: 1000,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const modalContentStyles = {
	backgroundColor: '#fff',
	padding: '20px',
	borderRadius: '8px',
	maxWidth: '500px',
	textAlign: 'center',
};

const closeButtonStyles = {
	position: 'absolute',
	top: '10px',
	right: '20px',
	fontSize: '24px',
	cursor: 'pointer',
};

export default Modal;
