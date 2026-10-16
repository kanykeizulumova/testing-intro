function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, item, qnty) {

  if (qnty === 0 || qnty > item.stock) {
    throw new RangeError;
  }
  const existing = cart.find((prod) => prod.id === item.id)
  if (existing) {
    existing.quantity += qnty;
  } else {
    cart.push({ ...item, quantity: qnty })
  }

  return cart
}

function changeQuantity(cart, id, qnty) {
  const existing = cart.find((prod) => prod.id === id);

  if (qnty === 0 || qnty > existing.stock) {
    throw new RangeError;
  }
  if (!existing) {
    return;
  } else {
    existing.quantity = qnty;
  }
  return cart;
}

function removeFromCart(cart, id) {
  return cart.filter(item => item.id !== id);
}

function calculateCartSubtotal(cart) {
  let total = cart.reduce((acc, { price, quantity }) => {
    return acc + (price * quantity);
  }, 0)
  return total
}
function calculateOrderTotal(cart, promo) {

}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
