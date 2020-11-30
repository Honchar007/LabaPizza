let str1 = '';

function myTag(products)
{
    let tmpproduct;
    let arr = window.location.hash.split('/');
//console.log(window.location.hash.split('/'));
let curitem = arr[arr.length-1];
    str1='';
    products.map(function(product){ 
        if(product.url==curitem)
        {
            tmpproduct=product;
            str1 = `
            <div class="container" style="">
                <h2 class="row" id='prodname'>${product.productName}</h2>
                <div class="row">
                    <div style="border-radius: 100px 0 0 0; " class="col bg-dark">
                    <img src="${product.images}"style="border-radius:100px" class="">
                   
                    </div>
                    <div style="padding-top:20px;border-radius: 0 15px 0px 0px" class="col d-flex flex-column text-white bg-dark text-monoscape border-left-5">
                        <div class="p-2 ">${product.productName}</div>
                        <div class="p-2">Weight: ${product.weight}</div>
                        <div class="p-2">About pizza: ${product.productDescription}</div>
                        <div class="p-2" >Price:<span id="price"> ${product.price}</span> $</div>
                        <button type="button" id='zaka' onclick="AddTochart()" class="btn btn-danger btn-block">В корзину!</button>
                    </div>
                </div>
                <div class="row">
                `;
        }
    });
    let cnt = 1;
    console.log(tmpproduct);
    str1+=`<div class="d-flex flex-row bg-dark text-white" style="overflow-x: scroll; height:30%">`;
    
    products.forEach(prods => {
        if(tmpproduct.relatedProductIds.indexOf(cnt)!=-1)
        {
        str1+=`
        <div class="p-2 btn-outline-danger text-white" style="width:30%;height:10%">
            <a href="#products/${products[cnt].url}" class="text-white" style="text-decoration:none;">
                <img src="${products[cnt].images}"style="border-radius:10px ;width:100%; height:50%;" class=""><br>
                ${products[cnt].productName}
                </a><br>
                Price:<div id='price'> ${products[cnt].price}$</div>
        </div>`;
        }
        cnt++;
    });
    str1+=`</div></div>
    </div>
  `;
    //console.log(str1);
    return str1;
}
const view = (products) =>myTag(products);
export default view;

