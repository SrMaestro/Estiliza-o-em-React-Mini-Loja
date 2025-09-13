import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}