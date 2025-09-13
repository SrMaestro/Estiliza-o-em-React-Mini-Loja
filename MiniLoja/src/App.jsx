import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import "./styles/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      description: "Celular com câmera de alta resolução e bateria de longa duração",
      price: "1.299,90",
      image: "/images/smartphone.jpg"
    },
    {
      id: 2,
      name: "Notebook ABC",
      description: "Notebook com 8GB RAM, SSD 256GB e processador Intel i5",
      price: "2.499,90",
      image: "/images/notebook.jpg"
    },
    {
      id: 3,
      name: "Fone de Ouvido",
      description: "Fone Bluetooth com cancelamento de ruído ativo",
      price: "399,90",
      image: "/images/headphone.jpg"
    },
    {
      id: 4,
      name: "Smartwatch Pro",
      description: "Relógio inteligente com monitoramento de saúde",
      price: "599,90",
      image: "/images/smartwatch.jpg"
    },
    {
      id: 5,
      name: "Tablet Ultra",
      description: "Tablet com tela de 10 polegadas e 128GB de armazenamento",
      price: "899,90",
      image: "/images/tablet.jpg"
    },
    {
      id: 6,
      name: "Câmera Digital",
      description: "Câmera DSLR com lente 18-55mm",
      price: "1.799,90",
      image: "/images/camera.jpg"
    },
    {
      id: 7,
      name: "Console Game",
      description: "Console de última geração com controle wireless",
      price: "2.199,90",
      image: "/images/console.jpg"
    },
    {
      id: 8,
      name: "Mouse Gamer",
      description: "Mouse óptico com RGB e 6 botões programáveis",
      price: "199,90",
      image: "/images/mouse.jpg"
    },
    {
      id: 9,
      name: "Teclado Mecânico",
      description: "Teclado mecânico com switches azuis e iluminação RGB",
      price: "349,90",
      image: "/images/keyboard.jpg"
    }
  ];

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main className="mainContent">
          <div className="productsGrid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;