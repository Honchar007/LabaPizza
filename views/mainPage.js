let counter = 0;
const view = (products) => `
<div class="container" id="products">
<div class='mb-4 mt-3 bg-warning'> Reccomended Pizza </div>
<br>
    <div class="row"  id="prod-row-1">
    ${Mytag(products)}
    </div>
    <div class="container-fluid bg-danger mb-3 mt-3">TOP RATING</div> 
    <div class="row" id="prod-row-2">
    
    ${products.map(function(product){if(product.productName=='Julietta'|| product.productName=='Gavaian'){ 
        let str = `
        <div class="col text-center text-dark"> 
        <a href='#products/${product.url}' class='top-rated text-dark' style='text-decoration:none;'>
            <img class="col" class="a-img-main" src="${product.images}" alt=""> 
            ${product.productName}
        </a>
        </div>`;
        return str;}}).join('')}
    </div>
</div>
`;
function Mytag(products)
{
    counter =0;
       let str1 ='';
    products.forEach(product => 
       {if(product.rec==true&& counter<3){ 
        counter++;
         str1 += `
        <div class="col text-center text-dark "> 
            <a href='#products/${product.url}' class=' top-rated text-dark' style='text-decoration:none;'>
            <img class="col" src="${product.images}" alt=""> 
            <div>${product.productName}</div>
            </a>
        </div>`;
        }});
        return str1;

}
export default view;