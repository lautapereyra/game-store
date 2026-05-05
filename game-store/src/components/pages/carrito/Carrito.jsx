import "./carrito.css";

function Carrito({ cart = [], deleteGame, clearCart }) {

  const total = cart.reduce((acc, game) => acc + game.price, 0);

  const handleDelete = (index) => {
    deleteGame(index);
  };


  return (
    <div className="cart-container">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <h3>El carrito está vacío</h3>
      ) : (
        <>
          {cart.map((game, index) => (
            <div key={index} className="cart-item">
              <img src={game.image} alt={game.title} />

              <div className="cart-item-info">
                <h4>{game.title}</h4>
                <p>${game.price}</p>
              </div>

              <button className="btn-remove" onClick={() => handleDelete(index)}>
                Eliminar
              </button>
            </div>
          ))}

          <h3 className="cart-total">Total: ${total}</h3>

          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Carrito;