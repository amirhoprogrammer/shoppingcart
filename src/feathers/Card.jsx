import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function Card(props) {
  const dispatch = useDispatch();
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id} className="flex flex-col w-72 m-2 shadow-2xl p-2 rounded-xl">
      <div className="flex justify-center items-center my-2">
        <img src={item.src} alt="image" className="size-20 grid place-items-center rounded-2xl" />
      </div>
      <h3 className="text-center py-2">{item.name}</h3>
      <h3 className="text-center py-2">{item.cost} تومان</h3>
      <button
        className="rounded-2xl py-2"
        style={{ backgroundColor: "rgb(148, 29, 2)" }}
        onClick={() => {
          console.log("Item being dispatched:", item);
          dispatch(addToCart(item));
        }}
      >
        Add to cart
      </button>
    </li>
  ));
  return (
    <div className="flex flex-wrap justify-center gap-1 p-4">
      <ol className="flex flex-wrap list-none">{listItems}</ol>
    </div>
  );
}
export default Card;
