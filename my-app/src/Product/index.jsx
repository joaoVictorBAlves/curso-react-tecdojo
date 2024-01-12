import Style from "./Product.module.css";

const Product = ({ imgPath, name, price, qtd }) => {
  const isOutOfStock = qtd === 0;

  return (
    <div className={`${Style.Produto} ${isOutOfStock ? Style.outOfStock : ""}`}>
      <img src={imgPath} alt={name} />
      <span>{name}</span>
      <span>{price}</span>
      {isOutOfStock ? (
        <span className={Style.outOfStockText}>Out of Stock</span>
      ) : (
        <button className={Style.buyButton}>Buy</button>
      )}
    </div>
  );
};

export default Product;
