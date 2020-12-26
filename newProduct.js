fetch("https://5ee249468b27f300160948f0.mockapi.io/PracticeArena")
.then(response=>{
    return response.json()
})
.then(data=>{
    // console.log(data)
   
        localStorage.setItem("fetchedData",JSON.stringify(data))
         checkCondition(data)
})
.catch(err=>{
    console.log("error")
})


var select={
    expired:false,
    outofstock:false
}


function checkCondition(response){
var lowStock=document.getElementById("low-stock");

    console.log(lowStock.checked)
    console.log(select)

    var updatedArr=[]

    if(select.outofstock===true){
        for(var i=0;i<response.length;i++){
            if(response[i].stock<100){
                updatedArr.push(response[i])
                
            }
        }
        localStorage.setItem("updatedData",JSON.stringify(updatedArr))
        var fil=JSON.parse(localStorage.getItem("updatedData"))
        console.log(fil)
        for(var j=0;j<fil.length;j++){
        res(fil[j])
        }
    }else{
        for(k=0;k<response.length;k++){
        res(response[k])
        }
    }


}



function res(data){

var tableRow=document.createElement("tr");
tableRow.id="table-row";

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
data5.innerText=data.unitPrice

tableRow.appendChild(data5)

var data6=document.createElement("td");
data6.classList.add("stock");
data6.innerText=data.stock

tableRow.appendChild(data6)

var table=document.getElementById("table")

table.appendChild(tableRow)

console.log(table)
return table

}

