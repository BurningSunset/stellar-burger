import { useEffect } from 'react'
import styles from './modal-overlay.module.css'

const ModalOverlay = ({ children, isVisible, onHide }) => {
    const overlayClassName = `${isVisible ? styles.visible : styles.hidden}`
    const overlayClickHandler = (e) => {
        if (e.target === e.currentTarget) {
            onHide()
        }
    }
    const EscClickHandler = (e) => {
        if (e.key === 'Escape') {
            onHide()
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', EscClickHandler)
        return () => 
            document.removeEventListener('keydown', EscClickHandler)
    },[])
    return (
        <div className={`${styles.overlay} ${overlayClassName}`} onClick={overlayClickHandler}>
            {children}
        </div>
    )
}
export default ModalOverlay