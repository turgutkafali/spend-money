import React from 'react'
import BasketItem from '../basketItem/BasketItem'
import './Basket.css'

function Basket({ basket, products, total, resetBasket }) {
    return (
        <>
            <div className='basket-container container'>
                <h3>Alışveriş Detayları</h3>
                <ul>
                    {basket.map(item => (
                        <BasketItem key={item.id} product={products.find(p => p.id === item.id)} item={item} />
                    ))}
                </ul>

                <div className='total'>
                    Toplam: ${total}
                </div>
                {total > 0 && (
                    <button className='basket-reset-btn' onClick={resetBasket}>Sepeti sıfırla</button>
                )}
            </div>

        </>
    )
}

export default Basket