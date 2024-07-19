import { router , routes } from "./main.js";
const main = document.querySelector('#main')
window.checkauth=checkauth
function checkauth(){
  if(localStorage.getItem('auth'!==true)){
    router.navigate(routes.login)}
}
export function shippingpage(){
    main.innerHTML=`<div class='bg-white h-screen'>
  <div id="pagetitle" class="flex mt-6 ml-2  gap-x-4" >
        <button class="mt-1" onclick='back()'><img src="./assets/blackarrow.png" width="30px" height="30px"></button>
        <p class="text-3xl text-black">Profile</p>
      </div>
      <div class='flex align-middle justify-center mt-6 flex-col text-center content-center'>
      <img src='./assets/profilepic.jpg' class='h-48 w-48 rounded-full justify-center ml-28'>
      <p class='text-black text-3xl border-b-2'>Alireza Yavari</p>
      </div>
      <div id="adresses" class="w-5/6 felx justify-center align-middle ml-10">
          <div id="adress" class="bg-white w-full rounded-3xl flex flex-row  p-3 h-28 align-middle mt-5 space-y-3">
          <div id="locicon" class="mt-3">
            <img src="./assets/security.png" class=" rounded-full border-gray-400 border-4" height="5px" width="55px">
          </div>
          <div id="adresstext" class="ml-2">
            <div id="adresstitle" class="flex flex-row">
              <p class="text-black text-xl">Security</p>
            </div>
            <p class="mt-1 text-sm">Change your informations</p>
          </div>
          <p class="text-3xl p-3 ml-12 "> >> </p>
        </div>
          <div id="adress" class="bg-white w-full rounded-3xl flex flex-row  p-3 h-28 align-middle mt-5 space-y-3">
          <div id="locicon" class="mt-3">
            <img src="./assets/contact.png" class=" rounded-full border-gray-400 border-4" height="5px" width="55px">
          </div>
          <div id="adresstext" class="ml-2">
            <div id="adresstitle" class="flex flex-row">
              <p class="text-black text-xl">faq</p>
            </div>
            <p class="mt-1 text-sm">Call us</p>
          </div>
          <p class="text-3xl p-3 ml-36 "> >> </p>
        </div>
      </div>
      <div id="bottommenu" class="flex flex-row  fixed border-t  w-80 justify-around align-middle mb-2 py-6 bg-white ml-10">
        <button class="rounded-full bg-black text-red-600 w-5/6 py-4">Logout</button>
      </div> 
      </div>
    <div id="menu" class="flex gap-x-8 align-middle justify-center border-t h-fit py-3 fixed bottom-0 bg-white w-full">
      <div id="home" class="align-middle flex flex-col text-center">
        <button class="material-symbols-outlined" onclick='back(home)'>home</button>
        <p >Home</p>
      </div>
      <button id="cart0" class="align-middle flex flex-col text-center" onclick='back(cart)'>
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
      <button id="profile" onclick='goprofile(profile)' class="align-middle flex flex-col text-center">
        <span class="material-symbols-outlined">person</span>
        <p class="text-black border-b-2 border-black">Profile</p>
      </button>
    </div>
    `
    function back(){
      if('home'){
      router.navigate(routes.home)
      }
      else if('cart'){
        router.navigate(routes.cart)
      }
    
    }
    window.back = back;

}
