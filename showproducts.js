window.onload = function () {
    // alert("Window loaded!")

    var products = JSON.parse(localStorage.getItem("products"));

    var divFromHtml = document.getElementById("screen");

    var array = [];

    for (var i = 0; i < products.length; i++) {
        array += `<div><img src="${products[i].image}" alt='proImage'/><h1>${products[i].name}</h1><p>&#x20b9;${products[i].price}</p><button onclick='addToCart(${JSON.stringify(products[i])})'>Add to cart</button></div>`
    }
    divFromHtml.innerHTML = array;
}


function addToCart(pro){
    var product = JSON.stringify(pro);
    var dataFromLS=JSON.parse(localStorage.getItem("userData"));
    var currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser){
        var allUsers=[];
        for(var i=0;i<dataFromLS.length;i++){
            if(dataFromLS[i].email===currentUser["curent-user-email"]){
                var newObj=dataFromLS[i];
                newObj["cartProducts"]=newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj)
            } else{
                allUsers.push(dataFromLS[i])
            }


        }
        localStorage.setItem("userData", JSON.stringify(allUsers));
        alert("Product added to cart!")
    }else{
        alert("login first to add product into cart!")
    }
}