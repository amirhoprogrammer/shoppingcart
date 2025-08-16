import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const total = useSelector((state) => state.cart.total);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">سبد خرید{itemCount}</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">سبد خرید خالی است</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <img src={item.src} alt={item.name} className="w-16 h-16 mr-4" />
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                    <p>{item.cost} تومان</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))
                    }
                    className="w-16 p-1 border rounded"
                  />
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-4 text-red-500"
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <h3 className="text-xl font-bold">قیمت نهایی: {total} تومان</h3>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
