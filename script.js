window.onload=function(){
  var text1 = document.getElementById("text1");
var img1 = document.getElementById("img1");
var text2 = document.getElementById("text2");
var img2 = document.getElementById("img2");
var text3 = document.getElementById("text3");
var img3 = document.getElementById("img3");

var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var slideNum = 0;
var slides = [[text1, img1, page1], [text2, img2, page2], [text3, img3, page3]];

nextSlide = () =>{
  console.log("here")
  console.log(slideNum)
  slides[slideNum][0].classList.remove("in-text")
  slides[slideNum][1].classList.remove("in-img");
  slides[slideNum][0].className += " out-text";
  slides[slideNum][1].className += " out-img";
  setTimeout(()=>{
    let nextSlide = slideNum === slides.length - 1 ? 0 : slideNum + 1;
    slides[slideNum][2].style.display="none";
    slides[slideNum][0].classList.remove("out-text");
    slides[slideNum][1].classList.remove("out-img");
    slides[nextSlide][2].style.display="initial";
    slides[nextSlide][0].className += " in-text";
    slides[nextSlide][1].className += "in-img";
    slideNum = nextSlide;
  }, 1500)

}

var openProjects = document.getElementById("open-projects");
var allProjects = document.getElementById("all-projects");
var projectPage = false;

switchProjectPage = () =>{
  if( projectPage === false){
    projectPage = true;
    openProjectPage();
  }else{
    projectPage = false;
    closeProjectPage();
  }
}

openProjectPage = () =>{
  openProjects.className += " open-slider-text";
  allProjects.className += " open-slider";
  openProjects.classList.remove("close-slider-text");
  allProjects.classList.remove("close-slider");
}

closeProjectPage = () =>{
  openProjects.classList.remove("open-slider-text");
  allProjects.classList.remove("open-slider");
  allProjects.className += " close-slider";
  openProjects.className += " close-slider-text";
}

document.getElementById("next").addEventListener("click", nextSlide, false);
openProjects.addEventListener("click", switchProjectPage, false);
}
