import Style from "./textblock.module.css";

const TextBlock = ({ titulo, paragrafo }) => {
  return (
    <div>
      <h1 className={Style.Titulo}>{titulo}</h1>
      <p>{paragrafo}</p>
    </div>
  );
};

export default TextBlock;
