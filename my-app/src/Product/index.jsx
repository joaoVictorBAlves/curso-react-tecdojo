import { useEffect, useState } from "react";
import Style from "./Product.module.css";

const Product = ({ imgPath, name, price, qtd }) => {
  const [quantity, setQuantity] = useState(qtd);
  const [isOutOfStock, setIsOutStock] = useState(qtd == 0);

  useEffect(() => {
    if (quantity == 0) {
      setIsOutStock(true);
    }
  }, [quantity]);

  return (
    <div className={`${Style.Produto} ${isOutOfStock ? Style.outOfStock : ""}`}>
      <img src={imgPath} alt={name} />
      <span>{name}</span>
      <span>{price}</span>
      <span>Last {quantity} units</span>
      {isOutOfStock ? (
        <span className={Style.outOfStockText}>Out of Stock</span>
      ) : (
        <button
          onClick={() => setQuantity(quantity - 1)}
          className={Style.buyButton}
        >
          Buy
        </button>
      )}
    </div>
  );
};

export default Product;
