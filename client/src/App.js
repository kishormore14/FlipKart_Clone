
import { Box } from '@mui/material';
import './App.css';

//Componunts
import Header from './Componunts/header/Header';
import Home from './Componunts/Home/Home';
import Dataprovider from './context/DataProvider';
import Cart from './Componunts/Cart/Cart';
//import XXXX from './XXXX';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from './Componunts/detail/DetailView';

function App() {
  return (
    <Dataprovider >
      <BrowserRouter>

        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />


          </Routes>
        </Box>

      </BrowserRouter>
    </Dataprovider>


  );
}

export default App;
