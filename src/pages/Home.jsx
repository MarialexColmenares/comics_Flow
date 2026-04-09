import Fondo from "../assets/fondo.jpeg";

function Home() {
  return (
    <>
      <section id="center">
        <div>
          <img src={Fondo} className="base" width="100%" height="100%" alt="" />
        </div>
        <div>
          <h1>Comics flow</h1>
        </div>
      </section>
    </>
  );
}

export default Home;
