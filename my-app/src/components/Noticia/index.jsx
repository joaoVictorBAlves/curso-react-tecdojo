import React from "react";

const Noticia = ({ titulo, subtitulo, data }) => {
  return (
    <div className="noticia">
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
      <p>Data: {data}</p>
    </div>
  );
};

export default Noticia;
