var loginStatus = localStorage.getItem('isLoggedIn')
if(loginStatus === 'true'){

let countpara=document.getElementById('num');
let count=0;      
 

  var toLogout = document.getElementById("anc-tag")
  toLogout.addEventListener("click",()=>{
      localStorage.setItem("isLoggedIn", false)
  })

/////////////////////////// target name

let loginStatus = localStorage.getItem("isLoggedIn")
console.log(loginStatus)

let products;
if(loginStatus){
   
  console.log("you are inside the conditon")
        


 var toTable = document.getElementById("table")
 
 fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
 .then(response=>{
 
     return response.json()
 })
 .then(data=>{
     products=data;
   for(let i=0;i<data.length;i++){
    let tableRow = cards(data[i])
   toTable.appendChild(tableRow)
   }
    
 })
 .catch(err=>{
     console.log("error")
 })
 
 
 console.log(products)
 // select Objects
 var select={
     expiryDate:true,
     stock:true
 }


var checkedBoxes =  document.getElementById("checked-boxes")
checkedBoxes.addEventListener('change',(e)=>{
    count=0;
console.log("clicked")
select[e.target.name]=e.target.checked;
for(let i=0;i<products.length;i++){
    
    if(select["expiryDate"]===true && select["stock"]===false){
    //   count=count-1;
        let currentDate = new Date();
        let expiryDate= new Date(products[i].expiryDate)
        // countpara.innerText=count;
        if(expiryDate>currentDate){
          
            let productRow=document.getElementById(products[i].id);
            productRow.style.display="none";
           
          
            // countpara.innerText=count;
           
        }
        else{
            count+=1;
            let productRow=document.getElementById(products[i].id);
            productRow.style.display="";
            countpara.innerText=count;
           
        }

    }
    else if(select["expiryDate"]===false && select["stock"]===true){
       
        if(products[i].stock>100){
            // count-=1;
            let productRow=document.getElementById(products[i].id);
            productRow.style.display="none";
           

        }
        else{
            count+=1;
            let productRow=document.getElementById(products[i].id);
            productRow.style.display="";
            countpara.innerText=count;
          
        }
    }
    else if(select["expiryDate"]===false && select["stock"]===false){
        count+=1;
        let productRow=document.getElementById(products[i].id);
        productRow.style.display="";
        countpara.innerText=count;
    }
    else if(select["expiryDate"]===true && select["stock"]===true){
        count+=1;
        let currentDate = new Date();
        let expiryDate= new Date(products[i].expiryDate)
        console.log(products[i].expiryDate)
        countpara.innerText=count;
        if(expiryDate>currentDate && products[i].stock>100){
            console.log("sdv")
            // count-=1;
            let productRow=document.getElementById(products[i].id);
            productRow.style.display="none";
            countpara.innerText=count;
        }
        else{
             count-=1;
            let productRow=document.getElementById(products[i].id);
            productRow.style.display="";
            countpara.innerText=count;
        }
       
    }
   
}


        })


        // cards(products)
}
else{
    window.location.assign="../LoginPage/LoginPage.html"
}













function cards(data){
    var tableRow=document.createElement("tr");
    tableRow.id=data.id;
    tableRow.classList.add("table-row")
    tableRow.style.borderBottom="4px solid #F6F7FB"
    
    var data1=document.createElement("td");
    data1.classList.add("id");
    data1.innerText=data.id
    
    tableRow.appendChild(data1)
    
    var data2=document.createElement("td");
    data2.classList.add("product-name");
    data2.innerText=data.medicineName
    
    tableRow.appendChild(data2)
    
    var data3=document.createElement("td");
    data3.classList.add("product-brand");
    data3.innerText=data.medicineBrand
    
    tableRow.appendChild(data3)
    
    var data4=document.createElement("td");
    data4.classList.add("expiry-date");
    data4.innerText=data.expiryDate
    
    tableRow.appendChild(data4)
    
    var data5=document.createElement("td");
    data5.classList.add("unit-price");
    data5.innerText="$"+data.unitPrice
    
    tableRow.appendChild(data5)
    
    var data6=document.createElement("td");
    data6.classList.add("stock");
    data6.innerText=data.stock
    
    tableRow.appendChild(data6)
    
    
 return tableRow;
    
}
}else{
    var mainP = document.getElementById("main-page")
    var logOut=document.getElementById("log-out")
    var kafenT = document.getElementById("anc")
    kafenT.addEventListener("click",()=>{
        //  alert("click")
            kafenT.href="../LoginPage/LoginPage.html"
        })
        logOut.style.visibility="hidden"
        mainP.style.display="none"
}
