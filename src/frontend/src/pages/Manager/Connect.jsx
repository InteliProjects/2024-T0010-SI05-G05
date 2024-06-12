import styles from './styles.module.scss'
import ConnectWallet from '../../components/connect-wallet/connect-wallet.jsx'
import Footer from '../../components/footer/footer.jsx';

function Home() {
    return (
      <div className={styles.home}>
        <ConnectWallet />
        <Footer></Footer>
      </div>
    );
  }
  
  export default Home;