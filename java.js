let counter=0;
function cart(){
  counter++;
  document.querySelector(".count").innerHTML=counter; 
}
/**toggler
 * let btn =document.querySelector(".navbar-toggler");
let collaps=document.getElementById("main")
btn.addEventListener("click",function(){
   
   collaps.classList.toggle("show")
})

//////slider*/




var myIndex=0;
function slider(){
    var i;
    var numOfImages=document.getElementsByClassName("myslides");
    for(i=0; i< numOfImages.length; i++){
        numOfImages[i].style.display="none";
    }
    myIndex++;
    if(myIndex>numOfImages.length){myIndex=1}
    numOfImages[myIndex-1].style.display="block";
    setTimeout(slider, 3000)
    
}
slider();

let list=document.querySelectorAll(".list");
let card=document.querySelectorAll(".card");
for(let i=0;i<list.length;i++){
  list[i].addEventListener("click",function(){
    for(let j=0;j<list.length;j++){
      list[j].classList.remove('active');
    }
     this.classList.add("active");
     let dataFliter=this.getAttribute('data-filter');
     for(let k=0;k<card.length;k++){
      card[k].classList.remove('active');
      card[k].classList.add('hide');



      if(card[k].getAttribute('data-item')==dataFliter || dataFliter=="all"){
        
        card[k].classList.remove('hide');
        card[k].classList.add('active');
      }
     }

  })
}

/******scroll********/
let span=document.querySelector(".up");
window.onscroll=function(){
  console.log(this.scrollY)
  if(this.scrollY>=1000){
     span.classList.add("show");
  }
  else{
    span.classList.remove("show");

  }
};
span.onclick=function(){
   window.scrollTo({
    top:0,
    behavior:"smooth",

   });
};


/*****form*/
var form=document.getElementById("form")
var input1=document.getElementById("input1");
var error = document.querySelector(".errorm");
var emaill=document.getElementById("email");
var errorm=document.querySelector(".errmail");
var pas=document.getElementById("pasw");
var errp=document.querySelector(".errpws");
form.addEventListener("submit",function(e){
  
  if (input1.value.length<=3) {
      input1.style.border = "2px solid red";
      error.style.display="block";
      e.preventDefault();
  } else {
      input1.style.border = "2px solid green";
      error.style.display="none";
  }
  ////////////////email
  
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(emaill.value.match(validRegex)){
      emaill.style.border = "2px solid green";
      errorm.style.display="none";
     
  }else{
    emaill.style.border = "2px solid red";
    errorm.style.display="block";
    e.preventDefault();
  }

  ////////////////password
  
  if (pas.value.length=11) {
      pas.style.border = "2px solid red";
      errp.style.display="block";
      e.preventDefault();
  } else {
      pas.style.border = "2px solid green";
      errp.style.display="none";
  }

})



