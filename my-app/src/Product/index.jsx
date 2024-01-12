import Style from "./Product.module.css";

const Product = ({ imgPath, name, price }) => {
  return (
    <div className={Style.Produto}>
      <img src={imgPath} />
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Product;
