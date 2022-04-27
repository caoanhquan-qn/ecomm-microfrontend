import faker from 'faker';

const mount = (el) => {
  // const randomNumber = Math.floor(Math.random() * 10);
  const randomNumber = faker.random.number();

  const cartText = `<div>You have ${randomNumber} items in your cart</div>`;
  el.innerHTML = cartText;
};
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) mount(el);
}

export { mount };
