import React from 'react'
import { BsCart4 } from "react-icons/gi"

const CartWidget = ({qty = 0}) => {
    return (
        <div className="cartwidget-container">
            <BsCart4 className= "cartwidget-container__IconoCarrito "/>
            <span className="cartwidget-container__ qty">{ qty } </span>
        </div>
    )
}

export default CartWidget;