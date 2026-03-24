// select carousel track and auto buttton
const track = document.querySelector('.carousel-track');
const btnAuto = document.querySelector('.carousel-btn.auto');
 const cardWidth = 270;

 //Auto scroll button
 btnAuto.addEventListener('click',()=>{
  track.scrollBy({left:cardWidth,behavior: 'smooth'});
 });

// handle register button key
document.querySelector('.signup -container input[type="button"]').addEventListener('click',function(){
      alert("Redirecting to registration form....");
        window.location.href="register"
});
//handle form submission
document.getElementById("userform").addEventListener("submit",function(Event){
   Event.preventDefault();//prevent page refresh
   const username = document.getElementById("username").value.trim();
   const password = document.getElementById("password").value.trim();
   const confirmpassword = document.getElementById("confirmpassword").value.trim();

   //simple validation
   if(username =="" || password == "" || confirmPassword ==""){
    alert("please fill in both fields")
   }else if(password != confirmPassword){
    alert("passwords do not match")
   }else{
    alert("log in succesfull! welcome,:"+ username+"");
   }
  });

