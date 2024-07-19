import axios, {isCancel, AxiosError} from 'axios';
import { router , routes } from "./main.js";
window.checkauth=checkauth
function checkauth(){
  if(localStorage.getItem('auth'!==true)){
    router.navigate(routes.login)}
}
const main=document.querySelector('#main')
let baseurl= 'http://localhost:3000/products'

import { targetbrand } from './home.js';
let wishlist

const response = await axios.get(`http://localhost:3000/wishlist`);
 wishlist = response.data;
let datas
export async function renderproducts(){
const response = await axios.get(`${baseurl}/${targetbrand}`);
 datas = response.data;
  console.log(targetbrand);
 main.innerHTML=`<div class='flex mb-40 flex-col'>
    <div id="image" class="flex flex-col">
  <div class="w-full h-80">
    <img src='${datas.imgUrl}' height="300px">
  </div>
  <div id="shoesinfos" class="flex mt-24 flex-col ml-6 border-b-2 py-4 w-96 gap-y-2">
    <div class="flex flex-row">
      <p class="text-3xl text-black">${datas.name}</p>
    </div>
    <div id="ratesol" class="flex-row flex gap-x-4  ">
      <p class="bg-gray-400 rounded-lg text-sm text-white h-fit p-2">716 sold</p>
      <span class="material-symbols-outlined">
        star_half
        </span>
          <p class="text-black">${datas.rate}</p>
          <p class="text-black">(1,762 reviews)</p>
          <button id='likeicon' class='mb-2' onclick='addtowishlist()'><img src='./assets/redadd.png' class='w-8 h-8'><button>

    </div>
  </div>
  </div>
  <div id="description" class="ml-7 flex  flex-col -mt-16">
  <p class="text-black text-lg ">Description</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing lorem some etxt for product.</p>
  </div>
  <div id="sizecolor" class="flex mt-4 ml-8 gap-x-32 flex-row">
  <div id="size">
    <p class="text-xl text-black ">Size</p>
    <div id="sizes" class="mt-2 flex felx-row gap-x-2">
      <button class="sizebtn bg-white border-gray-600 border-2 rounded-full text-xl w-9 h-9 text-gray-600"onclick="sizehandlr('41')" id='41'>41</button>
      <button class="sizebtn bg-white border-gray-600 border-2 rounded-full text-xl w-9 h-9 text-gray-600" onclick="sizehandlr('42')" id='42'">42</button>
      <button class="sizebtn bg-white border-gray-600 border-2 rounded-full text-xl w-9 h-9 text-gray-600" onclick="sizehandlr('43')" id='43'>43</button>
    </div>
  </div>
  <div id="colors" class="">
    <p class="text-xl text-black ">Color</p>
    <div id="colorchoose" class="flex felx-row gap-x-2 mt-2">
      <button class="colorbtn bg-black w-9 h-9 rounded-full" id='black' onclick="colorehandlr('black')" ></button>
      <button class="colorbtn bg-red-600 w-9 h-9  rounded-full "onclick="colorehandlr('red')" id='red'></button>
      <button class="colorbtn bg-blue-600 w-9 h-9 rounded-full " id='blue' onclick="colorehandlr('blue')"></button>
    </div>
  </div>
  </div>
  <div id="quantity" class="flex flex-row gap-x-2 mt-8 ml-8">
  <p class="text-black text-xl mt-2">Quantity</p>
    <div id="counter" class="ml-6 bg-gray-200 text-2xl py-2 px-6 text-black rounded-2xl space-x-4 ">
      <button class="" onclick='quantitymines()'>-</button>
      <span id='quantitynm' class='text-black'></span>
      <button class=""onclick='quantityadd()'>+</button>
    </div>
  </div>
  <div id="bottommenu" class="flex flex-row bottom-0 fixed border-t w-full justify-around align-middle mb-2 py-6 bg-white">
  <div id="totalprice" class="">
    <p class="text-black text-sm">Total price</p>
    <p class="text-black text-2xl" id='pricehandlr'>$</p>
  </div>
  <div id="addtocartbtn">
    <button class="text-xl bg-black text-white px-16 py-4 rounded-full" onclick='addtocart()'>
      <span class="material-symbols-outlined">
        shopping_bag
        </span>
        Add to cart
    </button>
  </div>
  </div>
    </div>`
    window.addtowishlist=addtowishlist
    window.sizehandlr = sizehandlr
    window.colorehandlr = colorehandlr
    window.addtocart = addtocart
  let carturl ='http://localhost:3000/cart'
  let choosedsize
  let choosedcolor
  let quantitynum =1
  const product = {
    id: datas.id,
    name: datas.name,
    price: datas.price,
    scolor:'',
    ssize:'',
    quantity:'',
    imgUrl: datas.imgUrl,
    brand: datas.brand
  }


  async function addtocart(){
    const response = await axios.post(carturl, product, {
      headers: {
        'Content-Type': 'application/json'}
  })
    }
  

  function colorehandlr(color){
    product.scolor=`${color}`
    document.querySelectorAll('.colorbtn').forEach(button => {
      button.innerHTML=''
    });
    document.getElementById(color.toLowerCase()).innerHTML='<img src="./assets/selected.png">'


  }
  let likestatus=false

  let wishlisturl='http://localhost:3000/wishlist'

 async function addtowishlist(){
    console.log("object");
    const likeicon= document.getElementById('likeicon')

    if(likestatus===false){
    likeicon.classList.add('added')
    likeicon.innerHTML=''
    likeicon.innerHTML=`<img src='./assets/redadded.png' class='w-8 h-8'>`
    likestatus=true
    const response = await axios.post(wishlisturl, datas, {
      headers: {
        'Content-Type': 'application/json'}
  })

  }
  else if(likestatus===true){
    likeicon.innerHTML=''
    likeicon.classList.remove('added')
    likeicon.innerHTML=`<img src='./assets/redadd.png' class='w-8 h-8'>`
    likestatus=false
    const response = await axios.delete(`${wishlisturl}/${datas.id}`)
    }

  }

  function sizehandlr(size){
    highlightButton(size)

  }

  function highlightButton(brandid) {
    product.ssize=`${brandid}`
    document.querySelectorAll('.sizebtn').forEach(button => {
      button.classList.remove('bg-black');
      button.classList.add('bg-white');
      button.classList.remove('border-black');
      button.classList.add('border-gray-600');
      button.classList.remove('text-white');
      button.classList.add('text-gray-600')
    });
    document.getElementById(brandid.toLowerCase()).classList.add('text-white');
    document.getElementById(brandid.toLowerCase()).classList.remove('text-gray-600');
    document.getElementById(brandid.toLowerCase()).classList.remove('bg-white');
    document.getElementById(brandid.toLowerCase()).classList.add('bg-black');
  }


  const quantity= document.querySelector('#quantity')
  const quantitynm = document.querySelector('#quantitynm')
  quantitynm.innerHTML=`${quantitynum}`
  function quantityadd(){
    quantitynum+=1
    quantitynm.innerHTML=`${quantitynum}`
    totalprice()
    product.quantity=quantitynum

  }
  function quantitymines(){
    if(quantitynum!=1){
      quantitynum-=1
    }
      quantitynm.innerHTML=`${quantitynum}`
      totalprice()
      product.quantity=quantitynum


  }
  window.quantityadd = quantityadd;
  window.quantitymines = quantitymines;

  const totalpricenumber=document.querySelector('#pricehandlr')
  function totalprice(){
    totalpricenumber.innerHTML=`$${Number(datas.price)*quantitynum}`
  }
  totalprice()

  


}
