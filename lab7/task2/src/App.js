// src/App.js
import './App.css';
import GoodsCard from './components/GoodsCard'; // Імпортуємо наш компонент

import img1 from './assets/Chanel_Coco_Mademoiselle.jpg';
import img2 from './assets/Dior_Rouge_Dior_Lipstick 999.jpg';
import img3 from './assets/La_Mer_Creme_de_la_Mer_Moisturizing_Cream.jpg';
import img4 from './assets/Urban_Decay_Naked_Honey_Eyeshadow_Palette.jpg';
import img5 from './assets/Loreal_Paris_Voluminous_Lash_Paradise_Mascara copy.jpg';
import img6 from './assets/Yves_Saint_Laurent_Libre_Eau_de_Parfum.jpg';

function App() {
  // Масив даних (імітація бази даних)
  const beautyProducts = [
    {
      id: 1,
      name: "Chanel Coco Mademoiselle Eau de Parfum",
      price: 4500,
      image: img1
    },
    {
      id: 2,
      name: "Dior Rouge Dior Lipstick 999",
      price: 1200,
      image: img2
    },
    {
      id: 3,
      name: "La Mer Crème de la Mer Moisturizing Cream",
      price: 9800,
      image: img3
    },
    {
      id: 4,
      name: "Urban Decay Naked Honey Eyeshadow Palette",
      price: 2100,
      image: img4
    },
    {
      id: 5,
      name: "L'Oréal Paris Voluminous Lash Paradise Mascara",
      price: 850,
      image: img5
    },
    {
      id: 6,
      name: "Yves Saint Laurent Libre Eau de Parfum",
      price: 3200,
      image: img6
    }
  ];

  return (
    <div className="App">
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Beauty Gallery</h1>
      
      <div className="gallery">
        {beautyProducts.map((product) => (
          <GoodsCard 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;