import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/useProductDataContext";
import { Product } from "../../interfaces";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, isLoading } = useContext(ProductContext);
  const [cartItemIds, setCartItemIds] = useState<number[]>([]);

  useEffect(() => {
    const tempCartItemIds = [1, 2, 3];
    localStorage.setItem("cartItemIds", JSON.stringify(tempCartItemIds));
    const storedIds = localStorage.getItem("cartItemIds");
    setCartItemIds(storedIds ? (JSON.parse(storedIds) as number[]) : []);
  }, []);

  const removeFromCart = (itemId: number) => {
    const updatedItemIds = cartItemIds.filter((id) => id !== itemId);
    localStorage.setItem("cartItemIds", JSON.stringify(updatedItemIds));
    setCartItemIds(updatedItemIds);
  };

  const calculateTotalPrice = () => {
    if (!data) {
      return 0;
    }
    const selectedItems = data.filter((item: Product) => cartItemIds.includes(item.id));
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <div className="page-container">
        <div className="cart-page">
          <div className="cart-page-header">
            <h1>Your Cart</h1>
            <button className="btn-order">Continue shopping</button>
          </div>
          <div className="order-list">
            <div className="order-list-heading">
              <span>Product</span>
              <span>Price</span>
            </div>
            {isLoading ? (
              <div className="loading">Loading...</div>
            ) : (
              <>
                {cartItemIds.length === 0 ? (
                  <div className="cart-empty">
                    <h1>Your cart is empty</h1>
                  </div>
                ) : (
                  <>
                    {data &&
                      data
                        .filter((item: Product) => cartItemIds.includes(item.id))
                        .map((item) => (
                          <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                              <img src={item.images[0]} alt={item.title} />
                            </div>
                            <div className="cart-item-name">
                              <p>{item.title}</p>
                              <div>
                                <button
                                  className="btn-cart-remove"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                            <p className="cart-item-price">
                              &euro;&nbsp;{item.price}
                            </p>
                          </div>
                        ))}
                    <div className="order-list-footer">
                      <span>Subtotal</span>
                      <span>&euro;&nbsp;{calculateTotalPrice()}</span>
                    </div>
                    <div className="checkout">
                      <p>
                        * Shipping costs not included. Proceed to checkout to
                        calculate shipping costs.
                      </p>
                      <Link to={"/checkout"}>
                      <button className="btn-order btn-order-full width-100">
                        Checkout
                      </button>
                      </Link>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
