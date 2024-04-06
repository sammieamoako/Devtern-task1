var x =document.getElementById ("submit")
var y =document.getElementById ("linkb")
var z =document.getElementById ("sign-in")
var a =document.getElementById ("sign-up")
var c = document.getElementById ("link")


c.addEventListener("click",function(event){
    a.style.display = "flex";
    z.style.display = "none";

})

y.addEventListener("click",function(event){
    a.style.display = "none";
    z.style.display = "flex";
})


function redirectToAnotherPage()     {
    window.location.href = "index.html";
    return false; 
  }