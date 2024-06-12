import styles from './styles.module.scss'
import Cotation from '../../components/cotation/cotation.jsx';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';

function ViewCotation() {
    return (
      <div className={styles.Cotation}>
        <Navbar></Navbar>
        <Cotation></Cotation>
        <Footer/>
      </div>
    );
  }
  
  export default ViewCotation;