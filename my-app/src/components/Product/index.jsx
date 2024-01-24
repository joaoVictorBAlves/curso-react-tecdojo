import { useNavigate } from "react-router-dom";
import Style from "./Product.module.css";

const Product = ({ id, imgPath, name, price, qtd }) => {
  const isOutOfStock = qtd == 0;
  const navigate = useNavigate();

  function handleSeeMore() {
    navigate("/product/" + id);
  }

  return (
    <div className={`${Style.Produto} ${isOutOfStock ? Style.outOfStock : ""}`}>
      <img src={imgPath} alt={name} />
      <span>{name}</span>
      <span>{price}</span>
      <span>last {qtd} units</span>
      {isOutOfStock ? (
        <span className={Style.outOfStockText}>Out of Stock</span>
      ) : (
        <button className={Style.buyButton} onClick={handleSeeMore}>
          See more
        </button>
      )}
    </div>
  );
};

export default Product;
