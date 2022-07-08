import React from 'react';
import './App.css';

// Components
import NavBar from './component/NavBar';
import FooterBar from './component/FooterBar';

// Screens
import HomeScreen from './screen/HomeScreen';
import ProductsScreen from './screen/ProductScreen';
import NoScreen from './screen/NoScreen';
import SingleProductScreen from './screen/SingleProductScreen';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";


const ProductIdWrapper = () => {
  const { productId } = useParams();
  return <SingleProductScreen productId={productId} />;
};

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar />

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/products/:productId" element={<ProductIdWrapper />} />
            <Route path="*" element={<NoScreen />} />
          </Routes>
        </BrowserRouter>

        <FooterBar />
      </div>
    );
  }
}

export default App;