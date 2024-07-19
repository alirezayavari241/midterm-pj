const btn= document.getElementById('showonpass')
const icon = document.getElementById('passicon')
const passinput = document.getElementById('passinput')
const mailinput = document.getElementById('mailinput')
const singinbtn = document.getElementById('singinbtn')
const passerror = document.getElementById('passerror')
const mailerror = document.getElementById('mailerror')
import { router , routes } from "./main.js";

const BASE_URL='http://localhost:3000/users'
let data

async function fetchuser() {
    const response = await axios.get('http://localhost:3000/products');
    const books = response.data;
  
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
    fetchuser()
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
        console.log(data.id);
        checkuser(data.password,data.email)
    }
}

function checkuser(x,y){
    if (passinput.value === x && mailinput.value ===y){
        console.log("object");
        router.navigate(routes.home)

    }

}