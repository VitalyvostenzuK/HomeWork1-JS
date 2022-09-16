'use strict';

const contEl = document.querySelector('.container');
const goodsELs = document.querySelector('.goods-list');

const btnElHead = document.querySelector('.head-btn');
btnElHead.addEventListener('click', () => {
  contEl.classList.remove('none');
  btnElHead.classList.add('none');
});

  const insertMurkup = (goods) => {
  return `<div class="goods-item">
    <img src="${goods.img}" alt="random foto">
    <div class="wrap-price"> 
      <h3 class="product-name">${goods.title}</h3>
      <p class="product-price">${goods.price}<span class="span-price">$</span></p>
      <button class="btn-add" type="button">Купить</button>
    </div>
  </div>`
};

const goods = [
  {id: 1, img: 'image/concreteMixer.jpg', title: 'Concrete Mixer', price: 370},
  {id: 2, img: 'image/lawnMower.jpg', title: 'Lawn Mower', price: 300},
  {id: 3, img: 'image/stepladder.jpg', title: 'Stepladder', price: 28},
  {id: 4, img: 'image/mixer.jpg', title: 'Mixer', price: 150},
  {id: 5, img: 'image/napkin.jpg', title: 'Napkin', price: 2},
];

const createMurkup = (products) => {
  let productsList = 
  products.map(product => insertMurkup(product));
  goodsELs.innerHTML = productsList.join('');
};

createMurkup(goods);



