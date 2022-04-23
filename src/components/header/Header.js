import React from 'react'
import {moneyFormat} from '../../helpers'
import './Header.css'

function Header({ money, total }) {
    return (
        <>
            <>
                {total > 0 && money - total !== 0 && (
                    <div className='header'> harcayacak <span>$ {moneyFormat(money - total)}</span>paranız kaldı !</div>
                )}
                {total === 0 && (
                    <div className='header'>Harcamak için <span>$ {moneyFormat(money)}</span>  paranız var !</div>
                )}
                {money- total === 0 && (
                    <div className='header'>paran bitti parasız insan boş insandır</div>
                )}
                
            </>
        </>
    )
}

export default Header