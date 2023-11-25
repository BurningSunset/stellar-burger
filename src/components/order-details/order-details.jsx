import styles from './order-details.module.css'
import succesIcon from '../../images/graphics.svg'
import PropTypes from 'prop-types'

const OrderDetails = (props) => {
    return (
        <div className={styles.orderContainer}>
            <p className={`text text_type_digits-large mb-8 ${styles.orderNumber}`}>{props.id}</p>
            <p className={`text text_type_main-medium mb-15`}>индентификатор заказа</p>
            <img src={succesIcon} alt='Заказ принят в обработку' className={`${styles.orderSuccessSvg} mb-15`}></img>
            <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive mb-30`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

OrderDetails.propTypes = {
    id: PropTypes.string.isRequired
}

export default OrderDetails
