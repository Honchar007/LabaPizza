let counter = 0;
const view = (products) => `
<div class="container" id="products">
Reccomended Pizza
    <div class="row" id="prod-row-1">
    ${products.map(function(product){if(product.rec==true&& counter<3){ 
        counter++;
        console.log(counter);
        let str = `
        <div class="col"> 
            <img class="col" src="${product.images}" alt=""> 
            ${product.productName}
        </div>`;
        return str;}}).join('')}
    </div>
    <div class="container-fluid bg-danger mb-3 mt-3">TOP RATING</div> 
    <div class="row" id="prod-row-2">
    
    ${products.map(function(product){if(product.productName=='Julietta'|| product.productName=='Gavaian'){ 
        counter++;
        console.log(counter);
        let str = `
        <div class="col"> 
            <img class="col" src="${product.images}" alt=""> 
            ${product.productName}
        </div>`;
        return str;}}).join('')}
    </div>
</div>
`;
export default view;