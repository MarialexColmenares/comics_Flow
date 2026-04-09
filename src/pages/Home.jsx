import Fondo from "../assets/fondo.jpeg";
import CardComic from "../components/cardComic";

const containerComics = {
  display: "flex", // Alinea los hijos en horizontal
  flexWrap: "wrap", // Si no caben en una fila, saltan a la siguiente
  justifyContent: "flex-start", // Los alinea al lado izquierdo
  padding: "20px",
};

function Home() {
  return (
    <>
      <section id="center">
        <div>
          <img src={Fondo} className="base" width="100%" height="100%" alt="" />
        </div>
        <div>
          <h1>Comics flow</h1>
          <div style={containerComics}>
            <CardComic />
            <CardComic />
            <CardComic />
            <CardComic />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
