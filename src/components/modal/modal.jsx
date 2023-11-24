import {useState} from 'react';
import ReactDOM from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modal')
const Modal = ({children, title}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true)

    const hideOverlay = () => {
        setIsOverlayVisible(false)
    }

    return ReactDOM.createPortal (
        <ModalOverlay isVisible={isOverlayVisible} onHide={hideOverlay}>
            <div className={styles.modalBlock}>
                <div className={`${styles.header} mt-10 ml-10 mr-10`}>
                    {title && (
                        <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>
                    )}
                    <CloseIcon type="primary" onClick={hideOverlay} />
                </div>
                {children}
            </div>
        </ModalOverlay>,
        modalRoot
    )
}

export default Modal