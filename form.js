/*****form*/
var form=document.getElementById("form")
var input1=document.getElementById("input1");
var error = document.querySelector(".errorm");
var emaill=document.getElementById("email");
var errorm=document.querySelector(".errmail");
var pas=document.getElementById("pasw");
var errp=document.querySelector(".errpws");
form.addEventListener("submit",function(e){
  
  if (input1.value.length<=3 || typeof(input1.value!="string")) {
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
