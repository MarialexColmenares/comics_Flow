const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "180px",
  margin: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
};

const dataStyle = {
  width: "100%",
  color: "white",
  backgroundColor: "red",
  textAlign: "center",
  padding: "10px 0",
};

function CardComic({ imagen, title }) {
  return (
    <div style={cardStyle}>
      <img style={imageStyle} src={imagen} alt={title} />
      <div style={dataStyle}>
        <h2 style={{ margin: 0, fontSize: "20px" }}>{title}</h2>
      </div>
    </div>
  );
}

export default CardComic;
