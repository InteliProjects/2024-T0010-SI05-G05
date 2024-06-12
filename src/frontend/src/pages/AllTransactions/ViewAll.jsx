import AllTransactions from '../../components/allTransactions/allTransactions';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

function ViewAll() {
    return (
      <div>
        <Navbar></Navbar>
        <AllTransactions></AllTransactions>
        <Footer></Footer>
      </div>
    );
  }
  
  export default ViewAll;