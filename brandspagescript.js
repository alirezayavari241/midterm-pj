import axios, {isCancel, AxiosError} from 'axios';
import { router , routes } from "./main.js";
import { handleButtonClick } from './home.js';
const main=document.querySelector('#main')
window.checkauth=checkauth
function checkauth(){
  if(localStorage.getItem('auth'!==true)){
    router.navigate(routes.login)}
}
const target = localStorage.getItem('target')
export function renderbrandsproduct(){
        main.innerHTML=`
        <div id='' class='flex flex-row'>
        <button onclick='back()' class='text-3xl -ml-44 mt-4'> << </button>
        <p id='pagetitle' class='text-black text-4xl flex ml-4 mt-4'></p>
        </div>
        <div id='productsbybrand' class='mt-4 h-screen overflow-x-scroll mb-16'>

        </div>
            <div id="menu" class="flex gap-x-8 align-middle justify-center border-t h-fit py-3 fixed bottom-0 bg-white w-full">
      <div id="home" class="align-middle flex flex-col text-center">
        <button class="material-symbols-outlined">home</button>
        <p class="text-black border-b-2 border-black">Home</p>
      </div>
      <button id="cart0" class="align-middle flex flex-col text-center">
        <span class="material-symbols-outlined">shopping_bag</span>
        <p>Cart</p>
      </button>
      <button id="orders" class="align-middle flex flex-col text-center">
        <span class="material-symbols-outlined">shopping_cart</span>
        <p>Orders</p>
      </button>
      <button id="wallet" class="align-middle flex flex-col text-center">
        <span class="material-symbols-outlined">account_balance_wallet</span>
        <p>Wallet</p>
      </button>
      <button id="profile" class="align-middle flex flex-col text-center">
        <span class="material-symbols-outlined">person</span>
        <p>Profile</p>
      </button>
    </div>
        `

const productsbybrand = document.getElementById('productsbybrand');
const BASE_URL = 'http://localhost:3000/products';
const search = document.querySelector('#productsbybrand')

 async function brandpagehanld(){
    const response = await axios.get(`${BASE_URL}/?brand=${localStorage.getItem('target')}`);
    renderproducts(response.data);
    console.log(localStorage.getItem('target'));
}
window.brandpagehanld = brandpagehanld;

function renderproducts(items) {
    productsbybrand.innerHTML=''
    items.forEach((item) => {
      document.querySelector('#pagetitle').innerText=`${item.brand}`
      const product = document.createElement('button');
      product.setAttribute('id', `${item.id}`);
      product.onclick = () => handleButtonClick(item.id);
      const productimg = document.createElement('div');
      const productimgurl = document.createElement('img');
      const productinfo = document.createElement('div');
      const producttitle = document.createElement("span");
      const productprice = document.createElement('span');
      product.classList.add('py-2', 'flex', 'flex-col','mb-4','w-44');
      productimg.setAttribute('id', 'productimage');
      productimg.classList.add('bg-gray-100', 'p-4','h-48' ,'rounded-2xl');
      productimgurl.setAttribute('src', `${item.imgUrl}`);
      productimgurl.style.mixBlendMode="multiply"
      productimgurl.setAttribute('width', '150px');
      productimgurl.setAttribute('height', '50px');
      productimgurl.classList.add('bg-transparent','rounded-2xl');
      productinfo.classList.add('flex', 'flex-col', 'ml-2', 'text-black','text-left');
      productinfo.setAttribute('id', 'productinfos');
      producttitle.innerText = `${item.name}`;
      productprice.innerText = `$${item.price}`;
      productimg.appendChild(productimgurl);
      product.appendChild(productimg);
      productinfo.appendChild(producttitle);
      productinfo.appendChild(productprice);
      product.appendChild(productinfo);
      productsbybrand.appendChild(product);
    });
  }
  brandpagehanld()
  window.addEventListener('unload', () => {
    localStorage.removeItem('target')
  ;})

function back(){
  router.navigate(routes.home)

}
window.back = back;

}



