import { Route, Routes } from 'react-router-dom';





import Cabinet from './pages/Сabinet';
import Basket from './pages/Basket';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import Contacts from './pages/Contacts';
import Error from './pages/Error';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/product/*' element={<Product />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/cabinet' element={<Cabinet />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Header>
      <Footer/>
    </>
  );
}

export default App;
