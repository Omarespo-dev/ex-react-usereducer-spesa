import { useState } from "react";

export default function ListProducts() {
  // ARR ESEMPIO
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
    // cerca un prodotto nel carrello che abbia lo stesso nome del prodotto da aggiungere
    const productInCart = addedProducts.find(item => item.name === product.name);

    // Se non è nel carrello, lo aggiungi con quantity = 1
    if (!productInCart) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    } else {
      updateProductQuantity(product)
    }

  }




  // Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
  // Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.

  function updateProductQuantity(product) {

    //mappo per nuovo arr con il valore quantity +1
    const mappo = addedProducts.map(pro => {
      if (pro.name === product.name) {
        return { ...pro, quantity: pro.quantity + 1 }
      }

      return pro
    })

    setAddedProducts(mappo)
  }



  //Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
  // Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.

  function removeFromCart(product) {
    //Filtro creando un nuovo arr
    const filtroRimuovoProdotto = addedProducts.filter(prod => {
      return prod.name !== product.name

    })

    setAddedProducts(filtroRimuovoProdotto)
  }

  console.log(addedProducts)



  // Sotto alla lista del carrello, mostra il totale da pagare:
  // Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.

  //Calcolo il totale 
  const totale = addedProducts.map(pro => {
    return pro.price * pro.quantity
    
  })

  
  // Sommo tutti i risultati (TOTALE TORNA UN ARR QUINDI UTILIZZERO IL REDUCE PER LA SOMMA)
  //DOVE 0 E IL VALORE INIZIALE DELL ACCUMOLATORE E INITIALVALUE IL PRIMO ELEMENTO DELL ARR
  const somma  = totale.reduce((acc,InitialValue) => {
    return acc + InitialValue
  }, 0)

  console.log(somma.toFixed(2));
  




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
              <button style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => removeFromCart(prod)}>Rimuovi dal carrello</button>
            </li>
          ))}
        </ul>
        
        <h2>Totale da pagare:{somma.toFixed(2)} €</h2>
      </section>
    </div>
  )
}







