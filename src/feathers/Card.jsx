function Card() {
  const imgUrl = "./src/image/402588acee067cc258d8c1bed33b65c717a8ea83_1699112037.jpg";
  const option = {};
  return (
    <div className="shadow-2xl rounded-2xl flex-col p-2">
      <img src={imgUrl} alt="image" className="size-20" />
      <h3>boAt Airdopes 131</h3>
      <h3>₹ 1,099</h3>
      <button style={{ backgroundColor: "rgb(148, 29, 2)" }}>Add to Cart</button>
    </div>
  );
}
export default Card;
