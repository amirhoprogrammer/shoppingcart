import "./Header.css";
import { useSelector } from "react-redux";
function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div
      className="flex justify-between width=device-width, initial-scale=1.0 text-amber-50"
      style={{ backgroundColor: "rgb(148, 29, 2)" }}
    >
      <h3 className="p-4">Redux Shopping Cart</h3>
      <button className="p-4 relative">
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
          <span className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
}
export default Header;
