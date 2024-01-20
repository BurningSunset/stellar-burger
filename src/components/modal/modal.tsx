import ReactDOM from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode,
    title: string,
    onHide: () => void
}

const Modal: FC<Props> = ({children, title, onHide}) => {
    const modalRoot = document.getElementById('modal')

    if (!modalRoot) {
        return null
    }
    return ReactDOM.createPortal (
        <ModalOverlay onHide={onHide}>
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
export default Modal