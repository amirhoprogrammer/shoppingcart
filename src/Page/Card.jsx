function Card() {
  const imgUrl = "../image/prod1.png";
  return (
    <div className="shadow-2xl rounded-2xl flex-col">
      <img src={imgUrl} alt="" />
      <h3>boAt Airdopes 131</h3>
      <h3>₹ 1,099</h3>
      <button style={{ backgroundColor: "rgb(148, 29, 2)" }}>Add to Cart</button>
    </div>
  );
}
export default Card;
