let counter = 1;
let str1 = '';


function myTag(products) {
    let cnt = 0;
    str1 = '';
    products.map(function(product) {
        if (product.categoryId == 1) {
            if (counter == 1) {

                str1 += "<div class='row mt-3'>";
            }
            counter++;
            str1 += `
            <div class="col text-center" style="">
                <div class="card" style="width: 20rem;">
                <a href="#products/${product.url}" class="bg-danger" style="text-decoration:none;color:black;">
                  <img src="${product.images}"style="height:20rem;" class="card-img-top">
                    <div class="card-body" style="width: 20rem;">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">
                            Price:<span id="price${cnt}"> ${product.price}</span><br>
                            Weight: ${product.weight}
                        </p>
                        <a id="pizza${cnt}" onclick="addToCartGlobal(${cnt})" class="stretched-link btn btn-danger text-white " style="height:100%;weight:100%;">Добавить в корзину</a>
                    </div>
                </a>
                </div>
            </div>`;
            if (counter == 4) {
                str1 += "</div>";
                counter = 1;
            }
        }
        cnt++;

    });
    return str1;
}
const view = (products) =>
    `<div class="container-fluid" id="products">
<div class="text-center font-weight-bold bg-warning">CHEEZE PIZZA</div></br>
    ${myTag(products)}   
</div>
`;
export default view;