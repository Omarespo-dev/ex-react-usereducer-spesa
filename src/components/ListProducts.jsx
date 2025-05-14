import { useState } from "react";

export default function ListProducts() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  // 📌 Milestone 2: Aggiungere prodotti al carrello

  //     Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
  const [addedProducts, setAddedProducts] = useState([])


  //funzione per aggiungere al carrello
  function addToCart(product) {
    // Trova il prodotto nel carrello
    const productInCart = addedProducts.find(item => item.name === product.name);

    if (!productInCart) {
      // Se non è nel carrello, lo aggiungi con quantity = 1
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    } else {
      updateProductQuantity(product)
    }

  }

  // Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:

  // Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.

  function updateProductQuantity(product) {
    const mappo = addedProducts.map(item => {
      if (item.name === product.name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    //aggiorno lo stato con il nuovo array
    setAddedProducts(mappo);
  }

  console.log(addedProducts)



  return (
    <div>
      <h2>ListProducts</h2>
      <section>
        <ul>
          {products.map((prod, index) => (
            <li key={index} style={{ padding: "10px" }}>
              {prod.name} - {prod.price}€
              <button style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => addToCart(prod)}>Aggiungi al carrello</button>
            </li>

          ))}
        </ul>
      </section>

      <section>
        <h2>Carrello</h2>
        <ul>
          {addedProducts.map((prod, index) => (
            <li key={index}>
              {prod.name} - {prod.price}€ x {prod.quantity}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
