import { router , routes } from "./main"
export function welcomepage(){
 document.querySelector('#main').innerHTML=`
   <div id="frame" class="flex justify-start">
   <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-600/20"></div>
          <div id="textsection">
            <div id="texts">
              <p>Welcome to <span class="wave">👋</span></p>
              <h1>Shoea</h1>
              <div class="mt-0 flex flex-col">
                <h3>The best sneakers & shoes e-commerse app</h3></br><h3> of 
                  the century for your fashion needs!</h3>
              </div>
            </div>
          </div>
      </div>
 `   
 document.querySelector('body').style.backgroundImage='url("./assets/welcomebg.jpg")'
 function changer(){

    router.navigate(routes.sliders)


}
setTimeout(changer,5000)
}


  