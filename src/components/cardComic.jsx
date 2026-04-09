const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "200px",
  margin: "10px", 
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden"
};

const imageStyle = {
  width: "100%",            // La imagen llena el ancho de la tarjeta
  height: "auto",
  display: "block",
};

const dataStyle = {
  width: "100%",            // El fondo rojo cubrirá todo el ancho
  color: "white",
  backgroundColor: "red",
  textAlign: "center",      // Centra el texto del título
  padding: "10px 0",        // Espaciado interno
};

function CardComic() {
  return (
    <div style={cardStyle}>
      <img
        style={imageStyle}
        src="https://www.superherodb.com/pictures2/portraits/10/100/1.jpg"
        alt="A-Bomb Character"
      />
      <div style={dataStyle}>
        <h2 style={{ margin: 0, fontSize: "20px" }}>A-Bomb</h2>
      </div>
    </div>
  );
}

export default CardComic;