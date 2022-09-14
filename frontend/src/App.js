import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contacts from './pages/Contacts';
import Error from './pages/Error';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/item/:id" element={<ItemPage/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
  );
}

export default App;
