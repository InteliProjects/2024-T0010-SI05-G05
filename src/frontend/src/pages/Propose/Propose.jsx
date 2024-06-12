import styles from './styles.module.scss'
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import Propose from '../../components/propose/propose.jsx';

function ProposePage() {
    return (
      <div className={styles.home}>
        <Navbar></Navbar>
        <Propose></Propose>
        <Footer/>
      </div>
    );
  }
  
  export default ProposePage;