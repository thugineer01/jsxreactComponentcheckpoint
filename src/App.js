import React from "react";
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import { Card } from "react-bootstrap"
import product from "./components/product";
import "./App.css"



function App() {
    
  return (
    <div>
   
        <Card>
           <Card.Body style={{margin: 0}}>
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
            <Image  image={product.image} />
           </Card.Body>
        </Card>


        
    </div>
  );
}

export default App;
