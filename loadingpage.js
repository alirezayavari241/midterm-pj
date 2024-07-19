import { router , routes } from "./main"
export function loadingpage(){
  document.querySelector('#body').style.backgroundColor='white';
  body.classList.add('h-screen')
    document.querySelector('#main').innerHTML=`
      <div class="flex justify-center align-middle">
        <div class="flex justify-center my-80 gap-1" id="infos">
          <div class="h-8 w-8 " ><img src="./assets/logo.png" id="logos"></div>
          <h1 class="text-6xl text-black my-2" id="title">Shoea</h1>
       </div>
      </div>
      <div class='flex justify-center align-middle' id="loadersection">
        <div class="loader"></div> 
       </div>
`
function chabgepage(){
  if (localStorage.getItem("visited")){
    router.navigate(routes.login)
  }
  else{
  router.navigate(routes.welcome)
}}
  setTimeout(chabgepage,5000)



}