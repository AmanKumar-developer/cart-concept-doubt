// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total</span> Rs {total}
              /-
              <p className="total-item">{cartList.length} Items in cart</p>
              <button className="checkout-button d-sm-none" type="button">
                Checkout
              </button>
              <button className="checkout-button d-sm-lg" type="button">
                Checkout
              </button>
            </h1>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
