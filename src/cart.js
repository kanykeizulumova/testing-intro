function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, item, qnty) {
  if (qnty <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }
  const existing = cart.find((prod) => prod.id === item.id);
  const currentQuantity = existing ? existing.quantity : 0;

  if (currentQuantity + qnty > item.stock) {
    throw new RangeError('Превышен остаток на складе');
  }

  if (existing) {
    existing.quantity += qnty;
  } else {
    cart.push({ ...item, quantity: qnty })
  }

  return cart
}
function changeQuantity(cart, id, qnty) {
  const existing = cart.find((prod) => prod.id === id);

  if (!existing) {
    return cart;
  }

  if (qnty <= 0 || qnty > existing.stock) {
    throw new RangeError();
  }

  existing.quantity = qnty;
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
  let totalCart = {};
  let subtotal = calculateCartSubtotal(cart);
  let discount = 0;
  let delivery = 0;

  if (promo === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  } else {
    discount = 0;
  }
  if (subtotal === 0 || subtotal >= 50000) {
    delivery = 0;
  } else {
    delivery = 30000;
  }

  let total = subtotal - discount + delivery;

  totalCart = {
    subtotal: subtotal,
    discount: discount,
    delivery: delivery,
    total: total
  };
  return totalCart

}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
