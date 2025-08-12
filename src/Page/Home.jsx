import Header from "../feathers/Header";
import Footer from "../feathers/footer";
import Cards from "./Cards";
function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}
export default Home;
