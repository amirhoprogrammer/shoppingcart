import { useState } from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    document.body.classList.toggle("cart-open");
  };
  return (
    <div
      className="flex justify-between items-center w-full text-amber-50"
      style={{ backgroundColor: "rgb(148, 29, 2)" }}
    >
      <h3 className="p-4">Redux Shopping Cart</h3>
      <button className="p-4 relative" onClick={toggleCart}>
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="24"
          viewBox="0 0 19 24"
          fill="none"
        >
          <path d="M1.75 6.75H17.25V21.75H1.75V6.75Z" stroke="#eeeeee" strokeWidth="1.5"></path>
          <path
            d="M13 10.5V5.5C13 2.83333 11.4444 1.5 9.5 1.5C7.55556 1.5 6 2.83333 6 5.5L6 10.5"
            stroke="#eeeeee"
            strokeWidth="1.5"
          ></path>
        </svg>
        {itemCount > 0 && (
          <span
            className="absolute top-1 right-1 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs"
            style={{ backgroundColor: "rgb(148, 29, 2)" }}
          >
            {itemCount}
          </span>
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-120 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <div className="p-0">
          <div
            className="flex justify-between items-center mb-4 rounded-bl-2xl"
            style={{ backgroundColor: "rgb(148, 29, 2)" }}
          >
            <h2 className="text-xl font-bold p-4">سبد خرید ({itemCount})</h2>
            <button onClick={toggleCart} className="text-2xl mx-4">
              &times;
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-center">سبد خرید خالی است</p>
          ) : (
            <div>
              <ul className="divide-y divide-gray-200 p-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-0 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={item.src} alt={item.name} className="w-12 h-12 mr-2" />
                      <div>
                        <h3 className="text-sm text-center p-2">{item.name}</h3>
                        <p className="text-xs text-center p-1">{item.cost} تومان</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantity({ id: item.id, quantity: parseInt(e.target.value) })
                          )
                        }
                        className="w-16 p-1 border rounded-2xl"
                      />
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="ml-4 text-red-500"
                      >
                        &times;
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right px-2">
                <h3 className="text-lg font-bold">قیمت نهایی: {total} تومان</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
//width=device-width, initial-scale=1.0
