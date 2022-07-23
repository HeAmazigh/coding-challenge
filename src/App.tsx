import React from 'react';
import './App.css';
import { Card } from './components/card/card.component';
import { Products } from './components/products/products.component';

function App() {
  return (
    <div className="flex flex-col md:flex-row lg:p-20">
      <Products />
      <Card />
    </div>
  );
}

export default App;
