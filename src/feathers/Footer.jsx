import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      className="flex flex-col text-amber-50 text-center py-2"
      style={{ backgroundColor: "rgb(148, 29, 2)" }}
    >
      <h3 className="py-2">
        <a href="https://github.com/amirhoprogrammer/shoppingcart">
          https://github.com/amirhoprogrammer/shoppingcart
        </a>
      </h3>
      <h3 className="py-2">Built by | Amirhossein Aminnegareshi</h3>
    </div>
  );
}
export default Footer;
