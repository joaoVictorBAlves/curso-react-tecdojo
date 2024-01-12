import React from "react";

const Noticia = ({ imgPath, titulo, subtitulo, data }) => {
  return (
    <div className="noticia">
      <div className="imagem">
        <img src={imgPath} alt={titulo} />
      </div>
      <div className="informacoes">
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>Data: {data}</p>
      </div>
    </div>
  );
};

export default Noticia;
