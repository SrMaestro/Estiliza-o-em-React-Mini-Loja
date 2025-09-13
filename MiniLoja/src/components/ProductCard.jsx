import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img 
          src={product.image} 
          alt={product.name}
          className={styles.image}
        />
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        
        <div className={styles.cardFooter}>
          <span className={styles.productPrice}>R$ {product.price}</span>
          <button className={styles.addToCartBtn}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}