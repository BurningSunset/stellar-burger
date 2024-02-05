import { FC } from 'react'
import styles from './feed-board.module.css'
import { TOrderItem, useSelector } from '../../utils/types'


const FeedBoard: FC = () => {
    const { response } = useSelector((state) => state.ws)
    const data = JSON.parse(response)
    
    const maxVisibleOrders = 15

    let doneOrders: number[] = []
    let otherOrders: number[] = []

    if (data) doneOrders = data.orders.filter((item: TOrderItem) => item.status === 'done').slice(0, maxVisibleOrders).map((item: TOrderItem) => item.number)
    if (data) otherOrders = data.orders.filter((item: TOrderItem) => item.status !== 'done').slice(0, maxVisibleOrders).map((item: TOrderItem) => item.number)
    
    return (
<section className={`${styles.boardContainer} ml-15 mt-15`}>
  {data ? (
    <div>
      {data.orders && data.orders.length > 0 && (
        <div className={`${styles.orderStatusContainer}`}>
          <div className={`${styles.orderStatus} mr-9`}>
            <h2 className="text text_type_main-medium pb-6">Готовы:</h2>
            <div className={`${styles.orderList}`}>
              {doneOrders.map((item: number, index: number) => (
                <p key={index} className={`${styles.itemDone} text text_type_digits-default mb-2`}>{item}</p>
              ))}
            </div>
          </div>
          <div className={`${styles.orderStatus}`}>
            <h2 className="text text_type_main-medium pb-6">В работе:</h2>
            <div className={`${styles.orderList}`}>
                {otherOrders.map((item: number, index: number) => (
                            <p key={index} className="text text_type_digits-default mb-2">
                                {item} </p>
                )
                )}
            </div>
          </div>
        </div>
      )}
        <div>
          <div className={`${styles.total}`}>
            <h2 className="text text_type_main-medium mt-15">Выполнено за всё время:</h2>
            <p className={`text text_type_digits-large ${styles.totalOrders}`}>{data.total}</p>
          </div>
          <div className={`${styles.total}`}>
            <h2 className="text text_type_main-medium mt-15">Выполнено за сегодня:</h2>
            <p className={`text text_type_digits-large ${styles.totalOrders}`}>{data.totalToday}</p>
          </div>
        </div>
    </div>
  ) : (
    <p>Пока что здесь пусто</p>
  )}
</section>



    )
}

export default FeedBoard