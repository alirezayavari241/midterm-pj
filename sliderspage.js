import { router , routes } from "./main"
const body=document.querySelector('#body')
body.classList.add('bg-white');
body.style.backgroundImage=''
const main = document.querySelector('#main')
export function sliderspage(){
    main.innerHTML=``
    main.innerHTML=`
      <div class="slideshow-container">
        <div class="mySlides fade">
          <img src="./assets/slider1.jpg" id="image" >
          <div class="text">We provide high quality 
            products just for you
            </div>
        </div>
        <div class="mySlides fade">
          <img src="./assets/slider2.jpg" id="image">
          <div class="text">Your satisfaction is our 
            number one periority
            </div>
        </div>
        <div class="mySlides fade">
          <img src="./assets/slider3.jpg" id="image">
            <div class="text">Let's fulfill your fashion 
              needs with shoearight 
              now!
              </div>
        </div>  
        </div>
        <br>
        
        <div style="text-align:center" id="dots">
          <span class="dot" onclick="currentSlide(1)"></span> 
          <span class="dot" onclick="currentSlide(2)"></span> 
          <span class="dot" onclick="currentSlide(3)"></span> 
        </div>
        <button id="nextbtn" onclick="plusSlides(1)">Next</button>
        `

        function sliderscript(){
          const btn=document.querySelector('#nextbtn')
        
          let slideIndex = 1;
          showSlides(slideIndex);
        
          function plusSlides(n) {
            showSlides(slideIndex += n);
          }
        
          function currentSlide(n) {
            showSlides(slideIndex = n);
          }
        
          function showSlides(n) {
            if(n==3){
              localStorage.setItem('visited', true)
              btn.innerText='Get Started'
              btn.onclick=function move(){
        
                  router.navigate(routes.login)
                
              }
            }
            else{
              btn.innerText='Next'
              btn.onclick=function(){plusSlides(1);}
            }
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
          }
        }
        sliderscript()
}

