import styles from './styles.module.scss'
import Walletmanager from '../../components/wallet-manager/wallet-manager.jsx'
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';

function Home() {
    return (
      <div className={styles.home}>
        <Navbar></Navbar>
        <Walletmanager />
        <Footer/>
      </div>
    );
  }
  
  export default Home;