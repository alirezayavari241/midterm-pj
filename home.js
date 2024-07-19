import { router , routes } from "./main.js";
import axios, {isCancel, AxiosError} from 'axios';
const body = document.querySelector('#body')
window.checkauth=checkauth
function checkauth(){
  if(localStorage.getItem('auth'!==true)){
    router.navigate(routes.login)}
}
export let targetbrand =1
const main = document.querySelector('#main')
export async function handleButtonClick(buttonId) {
  targetbrand=buttonId
  router.navigate(routes.product)
  // fetchproductinfos(buttonId);
}
export function gotopage(x){
  console.log(x);
  if(x=='profile'){
  router.navigate(routes.profile)}
  else if(x=='home'){
  router.navigate(routes.home)}
  else if(x=='cart'){
  router.navigate(routes.cart)}
  }
export function homeapage(){
    main.innerHTML=`
    <!-- Top Info Section -->
    <div id="topinfos" class="flex gap-x-5 mt-2 bg-white px-8">
      <!-- Profile Info -->
      <div id="profile" class="flex flex-row">
        <div id="profilepic"><img src="./assets/profilepic.jpg" alt="profile" class="rounded-full w-16 h-16"></div>
        <div id="topinfostext" class="ml-2">
          <p>Good Morning</p>
          <p class="text-black text-xl">Alireza Yavari</p>
        </div>
      </div>
      <!-- Top Icons -->
      <div id="topicons" class="flex ml-24">
        <div id="bell" class="flex flex-row">
          <span class="material-symbols-outlined">notifications</span>
        </div>
        <span class="material-symbols-outlined" id='wishlist'>favorite</span>
      </div>
    </div>
    <!-- Search Bar -->
    <div id="searchbar" class="flex mt-5 flex-col">
      <div class="flex px-2">
        <input type="text" id="search" placeholder="Search" class="w-96 rounded-xl py-2 px-8 bg-gray-100 border-none outline-none">
        <div id="searchicon" class="absolute mt-2 ml-1">
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
      <div id="searchresult" class="flex mt-2 ">
        <div class=" absolute flex-col space-y-1 block w-96 rounded-xl bg-white mt-1 text-left z-auto max-h-52 overflow-scroll" id="searchresultlist">
        </div>
      </div>
    </div>
    <!-- Logo Section -->
    <div id="logosection" class="mt-6 bg-white w-fit">
      <button class="rounded-full p-2 flex flex-col gap-y-1" onclick="brandpagehandler('adidas')">
        <img src="./assets/adidas.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">Adidas</span>
      </button>
      <button class="rounded-full p-2 flex flex-col gap-y-1" onclick="brandpagehandler('nike')">
        <img src="./assets/shoeslogo/nike.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">Nike</span>
      </button>
      <button class="rounded-full p-2 flex flex-col gap-y-1" onclick="brandpagehandler('converse')" >
        <img src="./assets/shoeslogo/convers.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">Convers</span>
      </button>
      <button class="rounded-full p-2 flex flex-col gap-y-1" onclick="brandpagehandler('newbalance')">
        <img src="./assets/shoeslogo/newba.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">Newba</span>
      </button>
      <button class="rounded-full p-2 flex flex-col gap-y-1" onclick="brandpagehandler('reebok')" >
        <img src="./assets/shoeslogo/reebok.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">Reebok</span>
      </button>
      <button class="rounded-full p-2 flex flex-col gap-y-1" onclick="brandpagehandler('asics')" >
        <img src="./assets/shoeslogo/asics.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">Asics</span>
      </button>
      <button class="rounded-full p-2 flex flex-col gap-y-1" onclick="brandpagehandler('puma')" >
        <img src="./assets/shoeslogo/puma.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">Puma</span>
      </button>
      <button class="rounded-full p-2 flex flex-col gap-y-1" >
        <img src="./assets/shoeslogo/more.png" class="rounded-full" height="70px" width="70px">
        <span class="align-middle flex justify-center text-black">More</span>
      </button>

    </div>
    <!-- Most Popular Section -->
    <div id="mostpopular" class="flex flex-col mt-5 bg-white">
      <div class="flex gap-x-48 align-middle justify-around">
        <button onclick='sortproducts()' class="text-black text-base">Most Popular</button>
        <button class="text-black text-base">See All</button>
      </div>
      <div id="textslider" class="flex mt-2 gap-x-2 overflow-y-scroll w-96 ml-4 scroll-smooth">
        <button  class="brand-button bg-gray-800 flex rounded-3xl border-gray-800 border-2 text-white px-6 py-2" onclick="brandhandler('all')" id="all">
          <p>All</p>
        </button>
        <button  class="brand-button bg-white flex rounded-3xl border-gray-800 border-2 text-black px-6 py-2" onclick="brandhandler('nike')" id='nike' >
          <p>Nike</p>
        </button>
        <button class="brand-button bg-white flex rounded-3xl border-gray-800 border-2 text-black px-6 py-2" onclick="brandhandler('adidas')" id="adidas">
          <p>Adidas</p>
        </button>
        <button class="brand-button bg-white flex rounded-3xl border-gray-800 border-2 text-black px-6 py-2" onclick="brandhandler('Puma')" id="puma">
          <p>Puma</p>
        </button>
        <button  class="brand-button bg-white flex rounded-3xl border-gray-800 border-2 text-black px-6 py-2" onclick="brandhandler('Newbalance')" id="newbalance">
          <p>Newbalance</p>
        </button>
        <button class="brand-button bg-white flex rounded-3xl border-gray-800 border-2 text-black px-6 py-2" onclick="brandhandler('converse')" id="converse">
          <p>Convers</p>
        </button>
        <button  class="brand-button bg-white flex rounded-3xl border-gray-800 border-2 text-black px-6 py-2" onclick="brandhandler('reebok')" id="reebok">
          <p>Reebok</p>
        </button>
        <button  class="brand-button bg-white flex rounded-3xl border-gray-800 border-2 text-black px-6 py-2" onclick="brandhandler('asics')" id="asics">
          <p>Asics</p>
        </button>
      </div>
    </div>
    <!-- Products List -->
    <div id="productslist" class="mb-20"></div>
    <!-- Menu -->
    <div id="menu" class="flex gap-x-8 align-middle justify-center border-t h-fit py-3 fixed bottom-0 bg-white w-full">
      <div id="home" class="align-middle flex flex-col text-center" onclick="gotopage('home')">
        <button class="material-symbols-outlined">home</button>
        <p class="text-black border-b-2 border-black">Home</p>
      </div>
      <button id="cart0" class="align-middle flex flex-col text-center" onclick="gotopage('cart')">
        <span class="material-symbols-outlined">shopping_bag</span>
        <p>Cart</p>
      </button>
      <button id="orders" class="align-middle flex flex-col text-center" onclick="gotopage('')">
        <span class="material-symbols-outlined">shopping_cart</span>
        <p>Orders</p>
      </button>
      <button id="wallet" class="align-middle flex flex-col text-center" onclick="gotopage('')">
        <span class="material-symbols-outlined">account_balance_wallet</span>
        <p>Wallet</p>
      </button>
      <button id="profile" class="align-middle flex flex-col text-center" onclick="gotopage('profile')">
        <span class="material-symbols-outlined">person</span>
        <p>Profile</p>
      </button>
    </div>
    `

document.getElementById('wishlist').addEventListener('click',()=>{
  router.navigate(routes.wishlist)


})
const productslist = document.getElementById('productslist');
const BASE_URL = 'http://localhost:3000/products';
const search = document.querySelector('#search')
async function fetchproducts() {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();  
  renderproducts(data);
  search.value=''
}

async function fetchbrand(name) {
  if (name=='all'){
    const response = await axios.get(`${BASE_URL}`);
    renderproducts(response.data);

  }
  else{
  const response = await axios.get(`${BASE_URL}/?brand=${name}`);
  renderproducts(response.data);}
}

function fetchall(){
  fetchproducts()
}

function renderproducts(items) {
  productslist.innerHTML = '';
  items.forEach((item) => {
    const product = document.createElement('button');
    product.setAttribute('id', `${item.id}`);
    product.onclick = () => handleButtonClick(item.id);
    const productimg = document.createElement('div');
    const productimgurl = document.createElement('img');
    const productinfo = document.createElement('div');
    const producttitle = document.createElement("span");
    const productprice = document.createElement('span');
    product.classList.add('py-2', 'flex', 'flex-col','mb-4','w-44','bg-white');
    productimg.setAttribute('id', 'productimage');
    productimg.classList.add('bg-gray-100', 'p-4','h-48' ,'rounded-2xl');
    productimgurl.setAttribute('src', `${item.imgUrl}`);
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
    productslist.appendChild(product);
  });
}

fetchproducts();








function brandhandler(brandid) {
    fetchbrand(brandid.toLowerCase());
    highlightButton(brandid)
}


function highlightButton(brandid) {
  document.querySelectorAll('.brand-button').forEach(button => {
    button.classList.remove('text-white');
    button.classList.add('text-black');
    button.classList.remove('bg-gray-800');
    button.classList.add('bg-white');
  });
  console.log(brandid);
  document.getElementById(brandid.toLowerCase()).classList.remove('text-black');
  document.getElementById(brandid.toLowerCase()).classList.add('text-white');
  document.getElementById(brandid.toLowerCase()).classList.remove('bg-white');
  document.getElementById(brandid.toLowerCase()).classList.add('bg-gray-800');
}

window.brandhandler = brandhandler;
window.gotopage = gotopage;
let timeoutId;
const showInputValue = () => {
  resultsDiv.innerHTML = ''
  if(search.value.trim().length >0){
    resultsDiv.innerHTML = ''
  findSimilarObjects(search.value.trim())}

};

search.addEventListener('input', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(showInputValue, 500);
});

search.addEventListener('focus', () => {

});

search.addEventListener('blur', () => {

  clearTimeout(timeoutId);
});

async function findSimilarObjects(query) {
  
    const response = await axios.get('http://localhost:3000/products');
    const datas = response.data;
    const searchKey = 'name';
    const searchValue = query.toLowerCase();
    const similaritems = datas.filter(shoes => 
      shoes[searchKey].toLowerCase().includes(searchValue)
    );
  displayResults(similaritems)
}
const resultsDiv = document.querySelector('#searchresultlist')
resultsDiv.classList.add('bg-white')
const displayResults = (results) => {  
  resultsDiv.innerHTML = '';
  if(search.value.length>0){
    results.forEach(result => {
      const resultsection = document.createElement('div')
      resultsection.classList.add('flex','flex-row')
      const div = document.createElement('button');
      const img = document.createElement('img')
      img.setAttribute('src',result.imgUrl)
      img.classList.add('flex','h-16','w-12','bg-white'
      )
      div.appendChild(img)
      div.classList.add('text-left','p-2','ml-4','bg-gray-100','flex','flex-row','w-full','rounded-2xl' )
      const divlink = document.createElement('a')
      divlink.textContent = result.name;
      divlink.classList.add('text-black','mt-6')
      div.addEventListener('click', () => {
        targetbrand=result.id
        router.navigate(routes.product)

        
      });
      div.appendChild(divlink);
      resultsection.appendChild(div);
      resultsDiv.appendChild(resultsection);
    })
  }
  if(search.value.trim().length===0 && search.value.length===0){
  }

  if (results.length === 0) {
    const notfound = document.createElement('p');
    notfound.innerText='Not found!'
    notfound.classList.add('text-left','p-2','ml-4','mt-2','bg-gray-100' )

    resultsDiv.appendChild(notfound)

    return;
  };
};

const sortproducts = async (query) => {
  try {
    const responses = await axios.get('http://localhost:3000/products', {
      params: {
        q: query,
        _sort: 'rate',
        _order: 'asc'
      }
    });
    console.log(responses.data);
    renderproducts(responses.data)
    sortproductslist(responses.data.reverse())

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
window.sortproducts = sortproducts;


const sortproductslist = (results) => {  
    results.forEach(result => {
      
  })
};

function brandpagehandler(ids) {

  localStorage.setItem('target',`${ids}`)
  router.navigate(routes.brand)

}

window.brandpagehandler = brandpagehandler;




}




