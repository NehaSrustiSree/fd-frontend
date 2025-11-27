import React from "react";
import "../styles/Home.css";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Apples",
    price: "₹120/kg",
    category: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=640&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Bananas",
    price: "₹60/dozen",
    category: "Seasonal",
    image:
      "https://www.bing.com/th/id/OIP.O8lKDwWSZP_Cfm8eeyw3wAHaFu?w=269&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 3,
    name: "Tomatoes",
    price: "₹40/kg",
    category: "Seasonal",
    image:
      "https://www.bing.com/th/id/OIP.HcFdIAP4zeO1zdEQTc3KdwHaHa?w=236&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 4,
    name: "Heritage Milk",
    price: "₹55/litre",
    category: "Dairy",
    image:
      "https://th.bing.com/th/id/OIP.yH1ETDJ7slFvuvLZmvZrJgHaHn?w=191&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 5,
    name: "Amul Tetra pack",
    price: "₹55/litre",
    category: "Dairy",
    image:
      "https://th.bing.com/th/id/OIP.5f-KZVlHQdgcE-4kDYkpPgHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 6,
    name: "Visakha Dairy",
    price: "₹55/litre",
    category: "Dairy",
    image:
      "https://th.bing.com/th/id/OIP.0fQ-EHi3q1MLIMxYT_pqvAHaE7?w=245&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 7,
    name: "Pink Dragon Fruit",
    price: "₹250/kg",
    category: "Exotic",
    image:
      "https://www.fourscoreliving.com/wp-content/uploads/2023/08/dragon-fruit.jpg",
  },
  {
    id: 8,
    name: "Dragon Fruit",
    price: "₹250/kg",
    category: "Exotic",
    image:
      "https://img.freepik.com/premium-photo/dragon-fruit-white-bowl-table_431161-41436.jpg",
  },
  {
    id: 9,
    name: "Avocado",
    price: "₹180/pc",
    category: "Exotic",
    image:
      "https://www.dole.com/sites/default/files/styles/2048w1536h-webp-80/public/media/avocados-cut-web.png.webp?itok=Gnmhygvr-vZ1pXB2v-_uprR-lu",
  },
  {
    id: 10,
    name: "Blue berries",
    price: "₹100/pc",
    category: "Exotic",
    image:
      "https://th.bing.com/th/id/OIP.18AGrL78Ts0m9cw705irngHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

function Home() {
  const { addToCart, increment, decrement, getItemQuantity } = useCart();
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return (
    <div className="home-container">
      <h2>Available Groceries</h2>
      {categories.map((cat) => (
        <section key={cat} className="category-section">
          <h3 className="category-title">{cat}</h3>
          <div className="product-grid">
            {products
              .filter((p) => p.category === cat)
              .map((item) => {
                const qty = getItemQuantity(item.id);
                const priceNum = parseFloat(
                  String(item.price)
                    .replace(/[^0-9.]/g, "")
                    .replace(/\.+/g, ".")
                );
                return (
                  <div key={item.id} className="product-card">
                    <img
                      className="product-image"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                    <div className="product-info">
                      <h3 className="product-name">{item.name}</h3>
                      <p className="product-price">{item.price}</p>
                    </div>
                    {qty === 0 ? (
                      <button
                        className="add-to-cart-btn"
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            priceLabel: item.price,
                            priceNumber: priceNum,
                          })
                        }
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="qty-controls">
                        <button className="qty-btn" onClick={() => decrement(item.id)}>-</button>
                        <span className="qty-value">{qty}</span>
                        <button className="qty-btn" onClick={() => increment(item.id)}>+</button>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
