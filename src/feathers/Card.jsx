function Card() {
  const imgUrl = "../image/prod1.png";
  const option = {};
  return (
    <div className="shadow-2xl rounded-2xl flex-col p-2">
      <img src={imgUrl} alt="" />
      <h3>boAt Airdopes 131</h3>
      <h3>₹ 1,099</h3>
      <button style={{ backgroundColor: "rgb(148, 29, 2)" }}>Add to Cart</button>
    </div>
  );
}
export default Card;
