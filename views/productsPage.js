let counter = 1;
let cnt =1;
let curcat='';
let str1 ='';
function OpenIt(product)
{

}
function myTag(products) {
    for (let index = 1; index <=3; index++) {
        switch(index)
            {
                case 1:curcat = 'CHEEZE';
                str1+=`<div class="container-fluid text-left mt-5"><div class='category'>${curcat}</div>`;
                break;
                case 2:curcat = 'MEAT';
                str1+=`<div class="container text-left mt-5"><div class='category'>${curcat}</div>`;
                break;
                case 3:curcat = 'BRAND';
                str1+=`<div class="container text-left mt-5"><div class='category'>${curcat}</div>`;
                break;
                default: curcat ='';
                break;
            }
    products.map(function(product){ 
        if(product.categoryId==index)
        {
            if(counter==1)
            {
                
            str1+="<div class='row mt-3'>";
            }
            console.log(counter);
            counter++;
            str1 += `
            <div class="col text-center" style="">
                <div class="card" style="width: 20rem;">
                <a href="#products/${product.url}" class="bg-danger" style="text-decoration:none;color:black;">
                  <img src="${product.images}"style="height:20rem;" class="card-img-top">
                    <div class="card-body" style="width: 20rem;">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">
                            Price: ${product.price}<br>
                            Weight: ${product.weight}
                        </p>
                        <a id="pizza${cnt++}" onclick="openIt(product)" class="stretched-link btn btn-danger text-white " style="height:100%;weight:100%;">Добавить в корзину</a>
                    </div>
                </a>
                </div>
            </div>`;
            if(counter==4)
            {
                str1+= "</div>";
                counter=1;
            }
        }
        return '';});
        str1+="</div>";
    }
    return str1;
  }
const view = (products) =>
`<div class="container-fluid" id="products">
<div class="text-center font-weight-bold">ALL PIZZAS</div></br>
    ${myTag(products)}   
</div>
`;
export default view;

