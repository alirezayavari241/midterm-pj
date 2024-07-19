import axios, {isCancel, AxiosError} from 'axios';
import { router , routes } from "./main.js";
window.checkauth=checkauth
function checkauth(){
  if(localStorage.getItem('auth'!==true)){
    router.navigate(routes.login)}
}
const main=document.querySelector('#main')
let totalprice
export function cartrender(){
    main.innerHTML=`<div class='bg-white h-screen overflow-hidden'>
        <div id="pagetitle" class="flex gap-x-4 fixed w-full bg-white h-20" >
          <button class="mt-1" onclick='back()'><img src="./assets/blackarrow.png" width="30px" height="30px"></button>
          <p class="text-3xl text-black mt-4">My Cart</p>
        </div>
        <div id="items" class="w-96 felx justify-center align-middle overflow-scroll h-screen mt-16">

          </div>
        </div>
        <div id="bottommenu" class="flex flex-row  fixed border-t w-screen space-x-12 align-middle bottom-16 py-6 bg-white">
          <div id='totalprice' class='felx flex-col ml-5'>
            <p class='text-lg text-black'>Total price</p>
            <p class='text-3xl text-black' id='tpnm'></p>
          </div>
          <button class="rounded-full bg-black text-white  py-4 w-64 mr-4 ">Checkout -></button>
        </div> 
        </div>
      <div id="menu" class="flex gap-x-8 align-middle justify-center border-t h-fit py-3 fixed bottom-0 bg-white w-full">
        <div id="home" class="align-middle flex flex-col text-center">
          <button class="material-symbols-outlined" onclick='back(home)'>home</button>
          <p >Home</p>
        </div>
        <button id="cart0" class="align-middle flex flex-col text-center" onclick='back(cart)'>
          <span class="material-symbols-outlined">shopping_bag</span>
          <p class="text-black border-b-2 border-black">Cart</p>
        </button>
        <button id="orders" class="align-middle flex flex-col text-center">
          <span class="material-symbols-outlined">shopping_cart</span>
          <p>Orders</p>
        </button>
        <button id="wallet" class="align-middle flex flex-col text-center">
          <span class="material-symbols-outlined">account_balance_wallet</span>
          <p>Wallet</p>
        </button>
        <button id="profile" onclick='back(profile)' class="align-middle flex flex-col text-center">
          <span class="material-symbols-outlined">person</span>
          <p >Profile</p>
        </button>
      </div>
      `
      let carturl ='http://localhost:3000/cart'
      const items=document.querySelector('#items')
      rendercart()
  async function rendercart(){
      const response = await axios.get('http://localhost:3000/cart');
      const datas = response.data;   
      createlist(datas) 
      totalpricehndlr(datas)    

    }
    const createlist=(results)=>{
        items.innerHTML=''
        results.forEach(result => {
            const product = document.createElement('div')
            product.classList.add('bg-gray-100' ,'w-full' ,'rounded-3xl', 'flex' ,'flex-row' , 'p-3', 'h-36' ,'align-middle','mt-5')
            product.innerHTML=`
                            <div id="productimg" class="mt-2">
                    <img src="${result.imgUrl}" class=" rounded-3xl border-gray-400 border-4" height="100px" width="100px">
                </div>
                <div id="productinfos" class="ml-2">
                 <div id="subinfos" class="flex flex-col">
                     <div id='titleanddelet' class='flex flex-row space-x-28'>
                       <p class="text-black text-xl">${result.name}</p>
                       <button><img src='./assets/deleteicon.png' height='30px' width='30px'></button>
                     </div>
                       <div id='shoesinfo' class='flex flex-row space-x-2 mt-2'>
                            <div id='shoecolor' class='flex flex-row space-x-2'>
                                <div id='color' class='bg-${result.scolor}-700 h-5 w-5 rounded-full mt-1'></div>
                                <p class='text-black'>${result.scolor}</p>
                                </div>
                            <p>|<p>
                            <div><p class='text-black'>Size = ${result.ssize}</p></div>
                          </div>
                    <div id='pricehandler' class='flex flex-row mt-2 space-x-24'>
                     <p class='text-black text-2xl mt-2'>$${result.price}</p>
                         <div id="counter" class=" bg-gray-200 text-2xl text-black rounded-2xl py-2 w-24 space-x-3">
                            <button class="ml-3" >-</button>
                            <span id='quantitynm' class='text-black'>${result.quantity}</span>
                            <button class="mr-2">+</button>
                               </div>
                         </div>
             </div>
            `
            items.appendChild(product)       
            
        });
    }
    const totalnumber = document.getElementById('tpnm')
    const totalpricehndlr=(items)=>{
        totalnumber.textConten=''
        // console.log(items.length);
        items.forEach(item=>{
            totalnumber.textContent = item.quantity *item.price
        })
    }
    

      function back(){
        if('home'){
        router.navigate(routes.home)}
        else if('profile'){
            router.navigate(routes.profile)
        }
        else if('cart'){
            router.navigate(routes.cart)
        }
      
      }
      window.back = back;






}