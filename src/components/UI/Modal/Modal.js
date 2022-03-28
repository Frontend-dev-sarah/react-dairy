import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../Card/Card';
import styles from './Modal.module.css';



const ModalContent = ({ title, message, onClick }) => {
    return (
        <div className={styles['modal-container']}>
            <Card className={styles['modal-front-container']}>
                <h3 className={styles['modal-text']}>{title}</h3>
                <hr />
                <p className={styles['modal-message']}>{message}</p>
                <button className={styles['modal-button']} onClick={onClick}>Ok</button>
            </Card>
        </div>
    )
}

export const Modal = ({ title, message, onClick }) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<ModalContent title={title} message={message} onClick={onClick} />, document.getElementById('portal-modal'))}
    </React.Fragment>
}