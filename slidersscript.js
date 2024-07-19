   export function sliderscript(){
    const btn=document.getElementById('nextbtn')
 
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
        btn.innerText='Get Started'
        btn.onclick=function move(){
        
            router.navigate(routes.login)
          
        }
      }
      else{
        const btn=document.getElementById('nextbtn')
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