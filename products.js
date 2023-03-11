function addProducts(){
    // alert("worked")
    var productImage=document.getElementById("image").value;
    var productName=document.getElementById("name").value;
    var productPrice=document.getElementById("price").value;

    var product={image:productImage,name:productName, price:productPrice};

    var products=JSON.parse(localStorage.getItem("products")) || [];
    console.log(products,"products")

    products.push(product);

    localStorage.setItem("products",JSON.stringify(products));

    for(var i=0; i<products.length;i++){
       console.log(products[i]);
    }

    var showProducts=[];

    for(var i=0; i<products.length;i++){
        showProducts+=`<div><img src="${products[i].image}"/><br/><h1>${products[i].name}</h1><p>${products[i].price}</p></div>`
     }
    divFromHtml.innerHTML=showProducts;

}