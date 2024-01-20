import styles from './order-details.module.css'
import succesIcon from '../../images/graphics.svg'
import { useSelector } from 'react-redux'
import { TOrder } from '../../utils/types'

const OrderDetails = () => {
    // @ts-ignore
    const { order }: { order: TOrder } = useSelector((state) => state.createOrder)
    return (
        <div className={styles.orderContainer}>
            {order ? 
            <>
                <p className={`text text_type_digits-large mb-8 ${styles.orderNumber}`}>{order.order.number}</p>
                <p className={`text text_type_main-medium mb-15`}>индентификатор заказа</p>
                <img src={succesIcon} alt='Заказ принят в обработку' className={`${styles.orderSuccessSvg} mb-15`}></img>
                <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
                <p className={`text text_type_main-default text_color_inactive mb-30`}>Дождитесь готовности на орбитальной станции</p>
            </>
         : <div className={styles.loader}></div>}
        </div>
    )
}

export default OrderDetails
