import Style from "./Cover.module.css"

const Cover = ({ imgPath }) => {
  return (
    <div
      className={Style.Cover}
      style={{
        backgroundImage: `url(${imgPath})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Cover;
