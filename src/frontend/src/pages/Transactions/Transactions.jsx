import styles from './styles.module.scss'
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import Transaction from '../../components/transactions/transactions.jsx';

function Transactions() {
    return (
      <div className={styles.home}>
        <Navbar></Navbar>
        <Transaction></Transaction>
        <Footer/>
      </div>
    );
  }
  
  export default Transactions;