
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import CssGlobalPage from "./pages/CssGlobalPage";
import StyledComponentsPage from "./pages/styledComponentsPage";


import "./styles/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import smartphoneImg from "./assets/fone.png";

function App() {
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      description: "Celular com câmera de alta resolução e bateria de longa duração",
      price: "1.299,90",
      image: smartphoneImg
    },
    {
      id: 2,
      name: "Notebook ABC",
      description: "Notebook com 8GB RAM, SSD 256GB e processador Intel i5",
      price: "2.499,90",
      image: smartphoneImg
    },
    {
      id: 3,
      name: "Fone de Ouvido",
      description: "Fone Bluetooth com cancelamento de ruído ativo",
      price: "399,90",
      image: smartphoneImg
    },
    {
      id: 4,
      name: "Smartwatch Pro",
      description: "Relógio inteligente com monitoramento de saúde",
      price: "599,90",
      image: smartphoneImg
    },
    {
      id: 5,
      name: "Tablet Ultra",
      description: "Tablet com tela de 10 polegadas e 128GB de armazenamento",
      price: "899,90",
      image: smartphoneImg
    },
    {
      id: 6,
      name: "Câmera Digital",
      description: "Câmera DSLR com lente 18-55mm",
      price: "1.799,90",
      image: smartphoneImg
    }
  ];

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <main className="mainContent">
                <div className="productsGrid">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </main>
            } 
          />
          <Route path="/cssGlobal" element={<CssGlobalPage />} />
         <Route path="/styled-components" element={< StyledComponentsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

