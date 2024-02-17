import { FC, MouseEventHandler, ReactNode, useEffect } from 'react'
import styles from './modal-overlay.module.css'

type Props = {
    onHide: () => void;
    children: ReactNode
}

const ModalOverlay: FC<Props> = ({ children, onHide }) => {

    const overlayClickHandler: MouseEventHandler = (e) => {
        if (e.target === e.currentTarget ) {
            onHide()
        }
    }
    const escClickHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onHide && onHide()
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', escClickHandler)
        return () => 
            document.removeEventListener('keydown', escClickHandler)
    },[])
    return (
        <div data-modal='modal-overlay' className={styles.overlay} onClick={overlayClickHandler}>
            {children}
        </div>
    )
}

export default ModalOverlay