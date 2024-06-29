var productName= document.getElementById('name')
var productPrice= document.getElementById('price')
var productCategory=document.getElementById('cat')
var productDescription=document.getElementById('desc')
var addBtn= document.getElementById("addBtn")
var updateBtn= document.getElementById("updateBtn")
var searchBar = document.getElementById('searchBar')
var productContainer=[]
if(localStorage.getItem('product')!=null){
    productContainer=JSON.parse(localStorage.getItem('product'))
    displayData()
}

addBtn.addEventListener('click', function(){
    var productData={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDescription.value
    }
    productContainer.push(productData)
    localStorage.setItem('product', JSON.stringify(productContainer))
    displayData()
    clearData()
})
function displayData(){
    var x =``
    for (var index = 0; index < productContainer.length; index++){
        x +=`<tr>
        <th scope="row">
            <p id="nameId">
                ${index + 1}</p><input type="text" class="form-control d-none "  id="nameUpdate">
        </th>
        <th scope="row">
            <p id="nameProduct">
                ${productContainer[index].name}</p><input type="text" class="form-control d-none " id="nameUpdate">
        </th>
        <td>
            <p id='priceProduct'>${productContainer[index].price}</p><input type="text" class="form-control d-none "
                id="priceUpdate">
        </td>
        <td>
            <p id='catProduct'>${productContainer[index].category}</p><input type="text" class="form-control d-none "
                id="catUpdate">
        </td>
        <td>
            <p id='descProduct'>${productContainer[index].description}</p><input type="text" class="form-control d-none "
                id="descUpdate">
        </td>
        <td><button class="btn btn-outline-danger" onclick="deleteData(${index})">Delete</button></td>
        <td><button class="btn btn-outline-warning" id='updatebttn'onclick='updateData(${index})'>Update</button>
            <button class="btn btn-outline-success px-3 show" id='savebtn'>Save</button>
        </td>
           </tr>`
    }
    document.getElementById('info').innerHTML=x
}
function deleteData(index){
    productContainer.splice(index,1)
    localStorage.setItem('product', JSON.stringify(productContainer))
    displayData()
}
function clearData(){
    productName.value=``
    productCategory.value=``
    productDescription.value=``
    productPrice.value=``
}



var x;
function updateData(id){
    x=id
    productName.value=productContainer[id].name
    productPrice.value=productContainer[id].price
    productCategory.value=productContainer[id].category
    productDescription.value=productContainer[id].description
    
    updateBtn.classList.remove("show")
    addBtn.classList.add("show")
}

updateBtn.addEventListener('click', function(){
    productContainer[x].name = productName.value
    productContainer[x].price = productPrice.value
    productContainer[x].category = productCategory.value
    productContainer[x].description = productDescription.value


    localStorage.setItem("product" ,JSON.stringify(productContainer))
    updateBtn.classList.add("show")
    addBtn.classList.remove("show")
displayData()
clearData()
})




searchBar.addEventListener('input', function(){
    var x=``
    
    for (var index = 0; index < productContainer.length; index++) {
        if (productContainer[index].name[0].toLowerCase().includes(searchBar.value.toLowerCase()) && productContainer[index].name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            x +=`<tr>
            <th scope="row">
                <p id="nameId">
                    ${index + 1}</p><input type="text" class="form-control d-none "  id="nameUpdate">
            </th>
            <th scope="row">
                <p id="nameProduct">
                    ${productContainer[index].name}</p><input type="text" class="form-control d-none " id="nameUpdate">
            </th>
            <td>
                <p id='priceProduct'>${productContainer[index].price}</p><input type="text" class="form-control d-none "
                    id="priceUpdate">
            </td>
            <td>
                <p id='catProduct'>${productContainer[index].category}</p><input type="text" class="form-control d-none "
                    id="catUpdate">
            </td>
            <td>
                <p id='descProduct'>${productContainer[index].description}</p><input type="text" class="form-control d-none "
                    id="descUpdate">
            </td>
            <td><button class="btn btn-outline-danger" onclick="deleteData(${index})">Delete</button></td>
            <td><button class="btn btn-outline-warning" id='updatebttn'onclick='updateData(${index})'>Update</button>
                <button class="btn btn-outline-success px-3 show" id='savebtn'>Save</button>
            </td>
               </tr>`
        }
        
        
    }
    document.getElementById('info').innerHTML = x
})















