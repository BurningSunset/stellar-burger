import {useState} from 'react';
import ReactDOM from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('modal')
const Modal = ({children, title, isOverlayVisible, onHide}) => {

    return ReactDOM.createPortal (
        <ModalOverlay isVisible={isOverlayVisible} onHide={onHide}>
            <div className={styles.modalBlock}>
                <div className={`${styles.header} mt-10 ml-10 mr-10`}>
                    {title && (
                        <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>
                    )}
                    <CloseIcon type="primary" onClick={onHide} />
                </div>
                {children}
            </div>
        </ModalOverlay>,
        modalRoot
    )
}
Modal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    isOverlayVisible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
}
export default Modal