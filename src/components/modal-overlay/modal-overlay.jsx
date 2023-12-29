import { useEffect } from 'react'
import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

const ModalOverlay = ({ children, isVisible, onHide }) => {
    const overlayClassName = `${isVisible ? styles.visible : styles.hidden}`
    const overlayClickHandler = (e) => {
        if (e.target === e.currentTarget ) {
            onHide()
        }
    }
    const escClickHandler = (e) => {
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
        <div className={`${styles.overlay} ${overlayClassName}`} onClick={overlayClickHandler}>
            {children}
        </div>
    )
}
// ModalOverlay.propTypes = {
//     children: PropTypes.node.isRequired,
//     isVisible: PropTypes.bool.isRequired,
//     onHide: PropTypes.func.isRequired
// }
export default ModalOverlay