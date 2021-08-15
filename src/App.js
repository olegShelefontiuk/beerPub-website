import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import { foodData} from "./components/Sidebar/Food/data";
import Feature from './components/Feature';
import Footer from './components/Footer';
import Beer from "./components/Sidebar/Beer/Beer";
import Food from "./components/Sidebar/Food/Food";

function App() {
  return (
    <Router>
        <Route path="/beer"> <Beer   data={productData}/> </Route>
        <Route path="/food"> <Food   data={foodData}/> </Route>
        <GlobalStyle />
        {/*<Route path="/beer" component={Beer} data={productData}/>*/}
      <Hero />
      {/*<Products heading='Choose your favorite' data={productData} />*/}
      {/*<Feature />*/}
      {/*<Products heading='Sweet Treats for You' data={productDataTwo} />*/}
      <Footer />
    </Router>
  );
}

export default App;
