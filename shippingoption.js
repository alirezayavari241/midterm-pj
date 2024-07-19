
import { router , routes } from "./main.js";

export function shippingoption(){
    document.querySelector("#main").innerHTML=`
          <div id="pagetitle" class="flex mt-6 -ml-20 gap-x-4" >
        <button class="mt-1"><img src="./assets/blackarrow.png" width="30px" height="30px"></button>
        <p class="text-3xl text-black">Choose Shipping</p>
      </div>
      <div id="adresses" class="w-5/6 felx justify-center align-middle">
        <div id="adress" class="bg-white w-full rounded-3xl flex flex-row  p-3 h-28 align-middle mt-16 space-y-3">
          <div id="locicon" class="mt-3">
            <img src="./assets/package-1.png" class="bg-black rounded-full p-2" height="50px" width="50px">
            </div>
            <div id="shippingtext" class="ml-2">
            <div id="adresstitle" class="flex flex-row">
              <p class="text-black text-xl">Economy</p>
            </div>
            <p class="mt-1">Dec 29-30</p>
           </div>
            <div id="checkcash" class="felx flex-row ml-24 py-2">
            <span class="text-2xl text-black mt-4 ">$10</span>
            <input type="radio" class="rounded-full outline-none border-double border-4 border-black p-3 " name="shippingcheck">
          </div> 
        </div>
        <div id="adress" class="bg-white w-full rounded-3xl flex flex-row  p-3 h-28 align-middle mt-5 space-y-3">
          <div id="locicon" class="mt-3">
            <img src="./assets/package_2.png" class="bg-black rounded-full p-2" height="50px" width="50px">
            </div>
            <div id="shippingtext" class="ml-2">
            <div id="adresstitle" class="flex flex-row">
              <p class="text-black text-xl">Regular</p>
            </div>
            <p class="mt-1">Dec 29-30</p>
           </div>
            <div id="checkcash" class="felx flex-row ml-24 py-2">
            <span class="text-2xl text-black mt-4 ">$15 </span>
            <input type="radio" class="rounded-full outline-none border-double border-4 border-black p-3 " name="shippingcheck">
            </div> 
        </div>
        <div id="adress" class="bg-white w-full rounded-3xl flex flex-row  p-3 h-28 align-middle mt-5 space-y-3">
          <div id="locicon" class="mt-3">
            <img src="./assets/package_3.png" class="bg-black rounded-full p-2" height="50px" width="50px">
            </div>
            <div id="shippingtext" class="ml-2">
            <div id="adresstitle" class="flex flex-row">
              <p class="text-black text-xl">Cargo</p>
            </div>
            <p class="mt-1">Dec 29-30</p>
           </div>
            <div id="checkcash" class="felx flex-row ml-24 py-2">
            <span class="text-2xl text-black mt-4 ">$20 </span>
            <input type="radio" class="rounded-full outline-none border-double border-4 border-black p-3 " name="shippingcheck">
          </div> 
        </div>
     </div> 
     <div id="applybtn" class="flex fixed bottom-0 bg- w-full bg-white justify-center py-3">
      <button class="text-white bg-black px-36 py-4 rounded-full mb-2 mt-2 text-xl">Apply</button>
     </div>
    `
}