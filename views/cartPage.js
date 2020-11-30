function myTag(products)
{
    let cnt= 1;
    let cart = JSON.parse(localStorage.getItem('cart'));
    let str1 = `<table class="table table-hover">
    <thead>
    <tr>
      <th>#</th>
      <th></th>
      <th>Pizza</th>
      <th>Price for one</th>
      <th>Count</th>
      <th>Summary Price</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < cart.countitems.length; i++) {
        
        
    
    products.map(function(product)
        { 
        if(product.productName == cart.items[i])
        {
            str1+=
            `<tr>
            <th scope="row">${cnt}</th>
            
              <td style='width:20%;'>
              <a  class="text-dark stretched-link" style="text-decoration:none;" href='#products/${product.url}'> 
              
               <img src="${product.images}" class=' col' style=" height:20%;" alt=""></td>
               <td>
               <a  class="text-dark stretched-link" style="text-decoration:none;" href='#products/${product.url}'> 
                <div class='col'>${product.productName}</div></a>
                </td>
               <td> <div class='col'>${product.price}</div></td>
               <td> <div class='col'>${cart.countitems[i]}</div></td>
               <td> <div class='col'>${product.price*cart.countitems[i]}$</div>
               </a>   
            
            </tr>
            `;
            cnt++;
        }
        });
    }

    /*
  
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  
 */
    str1+=`
    <td style='width:20%;'>
    
     </td>
     <td>
      <div class='col'></div></a>
      </td>
     <td> <div class='col'></div></td>
     <td> <div class='col'></div></td>
     <td> <div class='col'></div>
     </td>
     <td>${cart.totalprice}$</td>
       </tbody> </table>
    <div class="container p-4 text-white text-center bg-dark rounded" style='width:40%;'>
    To Buy it you have to enter gaps
    <form>
        <div class="form-group">
            <label for="formInput1">First Name</label>
            <input type="text" class="form-control" id="formInput1" placeholder="Andrey">
        </div>
        <div class="form-group">
            <label for="formInput2">Second Name</label>
            <input type="text" class="form-control" id="formInput2" placeholder="Honchar">
        </div>
        <div class="form-group">
            <label for="formInput3">Phone</label>
            <input type="text" onblur='validPhone()' class="form-control" id="formInput3" placeholder="+380999999999">
        </div>
        <div class="form-group">
            <label for="formInput4">Email</label>
            <input type="text" onblur='validMail()' class="form-control" id="formInput4" placeholder="andreyhonchar@email.com">
        </div>
        <div class="form-group">
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">Credit</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">Cash</label>
            </div>
        </div>
        <div class="form-group">
            <label for="formInput4">Address</label>
            <input type="text"  class="form-control" id="formInput5" placeholder="st. Centr, flat 12">
        </div>
        <div class="form-group">
        <label for="formInput4">Date</label>
        <input type="text"  class="form-control" id="formInput5" placeholder="Day"><br>
        <input type="text"  class="form-control" id="formInput6" placeholder="Hour"><br>
        <input type="text"  class="form-control" id="formInput7" placeholder="Minutes">

    </div>
        <button type="submit" onclick="validPost()" class="btn">Order</button>
    </form>
    </div>
    `;
return str1;

}
const view = (products) =>myTag(products);
export default view;
/*"url": "european",
      "productName": "European",
      "productDescription": "About Pizza ",
      "price": 225.35,
      "images": "./Pizza/Meat/European.png",
      "weight": 220,
      "relatedProductIds": [
        2,
        3,
        4
      ],
      "spicy": false,
      "categoryId": 2,
      "rec": true 
      var cart = 
           {totalprice:0,
            items:[],
            countitems:[]
            }*/