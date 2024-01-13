import { useEffect, useState } from "react";
import Style from "./Product.module.css";

const Product = ({ imgPath, name, price, qtd }) => {
  const [isOutOfStock, setIsOutOfStock] = useState(qtd == 0);
  const [quantity, setQuantity] = useState(qtd);

  useEffect(() => {
    if (quantity == 0) {
      setIsOutOfStock(true);
    }
  }, [quantity]);

  return (
    <div className={`${Style.Produto} ${isOutOfStock ? Style.outOfStock : ""}`}>
      <img src={imgPath} alt={name} />
      <span>{name}</span>
      <span>{price}</span>
      <span>last {quantity} units</span>
      {isOutOfStock ? (
        <span className={Style.outOfStockText}>Out of Stock</span>
      ) : (
        <button
          onClick={() => {
            setQuantity(quantity - 1);
          }}
          className={Style.buyButton}
        >
          Buy
        </button>
      )}
    </div>
  );
};

export default Product;
