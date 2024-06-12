import styles from './styles.module.scss'
import Product from '../../components/product/product.jsx'

function Products() {
    return (
      <div className={styles.home}>
        <Product />
      </div>
    );
  }
  
  export default Products;