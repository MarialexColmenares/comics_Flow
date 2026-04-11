import Fondo from "../assets/fondo.jpeg";
import CardComic from "../components/cardComic";
import AbrirComic from "../components/AbrirComic";
import portada from "../assets/supergril2026_Character6/portada.jpg";

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
          <h3>terror</h3>
          <div style={containerComics}>
            <CardComic
              title={"nightwing"}
              imagen={
                "https://marmota.me/wp-content/uploads/WP-manga/data/manga_6297af0a4882b/163c5026eb9cb38bd07b203774902312/Nightwing-135-(2026)-(Digital)-(Pyrate-DCP)-0001.jpg"
              }
            />
            <CardComic
              title={"Absolute Wonder Woman"}
              imagen={
                "https://marmota.me/wp-content/uploads/WP-manga/data/manga_672818fb203f4/e65a26d08ecee94cdb1d8be50a282b8f/Absolute-Wonder-Woman-2026-Annual-001-(2026)-(Digital)-(Pyrate-DCP)-0001.jpg"
              }
            />
            <CardComic
              title={"Ultimate Endgame #1"}
              imagen={
                "https://marmota.me/wp-content/uploads/WP-manga/data/manga_69b8b825d1454/aa5e8193591717452ad849e6ab3323b6/Ultimate-Endgame-001-(2026)-(Digital)-(Shan-Empire)-00001.jpg"
              }
            />
            <CardComic
              title={" Superman "}
              imagen={
                "https://marmota.me/wp-content/uploads/WP-manga/data/manga_64304a99b9387/01519453d8a612c05de468f7acd69923/Superman-035-(2026)-(Digital)-(Pyrate-DCP)-0001.jpg"
              }
            />

            <AbrirComic />
          </div>
          <h3>chicas</h3>
          <div style={containerComics}>
            <CardComic title={"Supergril 2026"} imagen={portada} />
            <CardComic
              title={"batman"}
              imagen={
                "https://marmota.me/wp-content/uploads/WP-manga/data/manga_682bee1d1dafb/1b6cbe285322e9f83f5ceeebbce954e7/Supergirl-007-(2026)---0001.jpg"
              }
            />
            <CardComic
              title={"Hellboy in love"}
              imagen={
                "https://marmota.me/wp-content/uploads/WP-manga/data/manga_69d8670fda56b/412a8a7a1bf4c2c2b073b610cf32deda/Hellboy-in-Love-001.jpg"
              }
            />
            <CardComic
              title={"Absolute Superman"}
              imagen={
                "https://marmota.me/wp-content/uploads/WP-manga/data/manga_67367bba6e6c2/fa9579bc9b3e63daed5f1200eb9aaadc/Absolute-Superman-010-(2025)-(Digital)-(Shan-Empire)-00001.jpg"
              }
            />

            <AbrirComic />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
