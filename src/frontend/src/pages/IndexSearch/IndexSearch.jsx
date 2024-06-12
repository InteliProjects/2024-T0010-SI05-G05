// import styles from './styles.module.scss'
import SearchIndex from '../../components/searchIndex/searchIndex';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

function IndexSearch() {
    return (
      <div>
        <Navbar></Navbar>
        <SearchIndex></SearchIndex>
        <Footer></Footer>
      </div>
    );
  }
  
  export default IndexSearch;