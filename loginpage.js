import { router , routes } from "./main"
import axios, {isCancel, AxiosError} from 'axios';
const main=document.querySelector('#main')
main.classList.remove('h-full')

export function loginpage(){
    main.innerHTML=`
    <div class='h-screen'>
        <div id="arrowbackicon" class="absolute mt-2 -ml-12">
          <span class="material-symbols-outlined">
            arrow_back
            </span>
        </div>
        <div id="logo" class="flex justify-center align-middle mt-28">
          <img src="./assets/logo.png"/>
        </div>
        <div class="text-center mt-20 text-black text-4xl flex">
          <span class='grid' id='title'>Login to Your Account</span>
        </div>
        <div id="inputs_section" class="flex align-middle justify-center flex-col gap-y-7 mt-10 ">
            <div id="emailsection" class="flex flex-col">
              <input type="email" id='mailinput' placeholder="Email" class=" flex rounded h-10 w-full bg-gray-100 px-7 border-none focus:outline-none">
                <div id="emailicon" class="absolute mt-2 ml-1">
                  <span class="material-symbols-outlined">
                    mail
                    </span>
                </div>
                <span id='mailerror' class='text-red-600 hidden '></span>   
            </div>
            <div id="passwordsection" class="flex flex-col">
              <input id='passinput' type="password" placeholder="Password" class="flex rounded h-10 w-full bg-gray-100 px-7 border-none focus:outline-none">
                <div  class="absolute mt-2 ml-1">
                  <span class="material-symbols-outlined" >
                    lock
                    </span>
                </div>
                <button id="showonpass" class="absolute mt-2 ml-80">
                  <span class="material-symbols-outlined" id='passicon'>
                    visibility
                    </span>
                </button>
                <span id='passerror' class='text-red-600 hidden'></span>
                
            </div>
        </div>
        <div id="gosigup" class="flex justify-center align-middle ">
          <button id='noaccount'class="bg-black opacity-50 text-white rounded-3xl px-2 py-2 mt-10">Don't have an account?</button>
        </div>
        <div id="rememberme" class="flex justify-center align-middle gap-1 outline-none">
          <input type="checkbox" class="flex mt-1.5">
          <p class="text-black">Remember me</p>
        </div>
        <div class='flex justify-center align-middle mt-48'><button id="singinbtn" class="bg-black text-white rounded-3xl text-center text-xl mt-2 py-2 p-1 w-96">Sign in</button></div>
      </div>
    `
    const btn= document.getElementById('showonpass')
const icon = document.getElementById('passicon')
const passinput = document.getElementById('passinput')
const mailinput = document.getElementById('mailinput')
const singinbtn = document.getElementById('singinbtn')
const passerror = document.getElementById('passerror')
const mailerror = document.getElementById('mailerror')

const BASE_URL='http://localhost:3000/users'
let datas
let mode = "login"
pagemode()
function pagemode(){
  if(mode === 'login'){
    document.getElementById('singinbtn').innerText='Sign up'
    document.getElementById('title').innerText='Create Your Account'
    document.getElementById('noaccount').innerText='Have an account?'
    mode = "signup"
  }
 else if(mode === "signup"){
  document.getElementById('singinbtn').innerText='Sign in'
  document.getElementById('title').innerText='Login to Your Account'
  document.getElementById('noaccount').innerText=`Don't Have an account?`
  mode = "login"
 }

}

document.getElementById('noaccount').addEventListener('click', ()=>{
  if(mode === 'login'){
    document.getElementById('singinbtn').innerText='Sign up'
    document.getElementById('title').innerText='Create Your Account'
    document.getElementById('noaccount').innerText='Have an account?'
    mode = "signup"
  }
 else if(mode === "signup"){
  document.getElementById('singinbtn').innerText='Sign in'
  document.getElementById('title').innerText='Login to Your Account'
  document.getElementById('noaccount').innerText=`Don't Have an account?`
  mode = "login"
 }

})
const users={
  "email": "",
  "password": ""
}




let flag = 0
btn.addEventListener("click", ()=>{
    if(flag==0){
    icon.innerText=`visibility_off`
    passinput.type='text'
    flag=1
    }
    else if(flag==1){
        icon.innerText=`visibility`
        passinput.type='password'
        flag=0
    }
})

singinbtn.addEventListener('click',()=>{
  users.email=mailinput.value
  users.password=passinput.value
  console.log(users);
    btnstatus()
})
function btnstatus(){
    if( passinput.value =='' && mailinput.value ==''){
        mailerror.innerText=`*Please enter your Email`
        mailerror.classList.remove('hidden')
        passerror.innerText=`*Please enter your Password`
        passerror.classList.remove('hidden')
    }
    else if (passinput.value ==''){
        passerror.innerText=`*Please enter your Password`
        passerror.classList.remove('hidden')
        mailerror.classList.add('hidden')

    }
    else if(mailinput.value==''){
        mailerror.innerText=`*Please enter your Email`
        mailerror.classList.remove('hidden')
        passerror.classList.add('hidden')
    }
    else{
        passerror.classList.add('hidden')
        mailerror.classList.add('hidden')

    }
    if (passinput.value !=='' && mailinput.value !==''){
        checkuser()
    }
}
let loginurl ='http://localhost:3000/login'
let regurl = 'http://localhost:3000/register'

async function checkuser(){
  if(mode=='login'){
    try{
      const response = await axios.post(loginurl, users)
      console.log(response.data);

      if(response.status==200){
        router.navigate(routes.home)
        localStorage.setItem('auth',true)
    }
    

    }
    catch(e){
      passerror.innerText=(e.response.data);
      passerror.classList.remove('hidden')
    }
}
  else if(mode=='signup'){
    try{
    const response = await axios.post(regurl, users)
    if(response.status==201){
      passerror.innerText=`Succsusfully!`;
      passerror.classList.remove('hidden')      
      mode='login'
      document.getElementById('singinbtn').innerText='Sign in'
      document.getElementById('title').innerText='Login to Your Account'
      document.getElementById('noaccount').innerText=`Don't Have an account?`
    }}
    catch(e){
      passerror.innerText=(e.response.data);
      passerror.classList.remove('hidden')
    }

  }
    
}


console.log(localStorage.getItem("visited"));





// let flag = 0
// btn.addEventListener("click", ()=>{
//     if(flag==0){
//     icon.innerText=`visibility_off`
//     passinput.type='text'
//     flag=1
//     }
//     else if(flag==1){
//         icon.innerText=`visibility`
//         passinput.type='password'
//         flag=0
//     }
// })

// singinbtn.addEventListener('click',()=>{
//     fetchuser()
//     btnstatus()
// })
// function btnstatus(){
//     if( passinput.value =='' && mailinput.value ==''){
//         mailerror.innerText=`*Please enter your Email`
//         mailerror.classList.remove('hidden')
//         passerror.innerText=`*Please enter your Password`
//         passerror.classList.remove('hidden')
//     }
//     else if (passinput.value ==''){
//         passerror.innerText=`*Please enter your Password`
//         passerror.classList.remove('hidden')
//         mailerror.classList.add('hidden')

//     }
//     else if(mailinput.value==''){
//         mailerror.innerText=`*Please enter your Email`
//         mailerror.classList.remove('hidden')
//         passerror.classList.add('hidden')
//     }
//     else{
//         passerror.classList.add('hidden')
//         mailerror.classList.add('hidden')

//     }
//     if (passinput.value !=='' && mailinput.value !==''){
//         console.log(data.id);
//         checkuser(data.password,data.email)
//     }
// }

// function checkuser(x,y){
//     if (passinput.value === x && mailinput.value ===y){
//         console.log("object");
//         router.navigate(routes.home)

//     }

// }

}