var mainForm = document.getElementById("form")

{/* <input type="text" id="input-name" name="username" placeholder="Enter the username"/><br/> */}
            // <input type="text" id="input-password" name="password" placeholder="Enter the Password"/>
   var inputName = document.getElementById("input-name")         
var inputPassword = document.getElementById("input-password")

mainForm.addEventListener('submit',(e)=>{
    e.preventDefault();
// console.log(inputName.value)
// console.log(inputPassword.value)
if(inputName.value==="kiran" && inputPassword.value==="hiran"){
    alert("Hey Kiran")
    localStorage.setItem("isLoggedIn", true)
    window.location.href="../productPage/product.html"
    
}else{
    alert("You are not a Kiran")
    return
}
})