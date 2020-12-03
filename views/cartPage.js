function myTag(products) {
    if (document.getElementById('count').innerText != '0 шт.') {
        let cnt = 1;
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
            if (products[cart.items[i]]) {
                str1 +=
                    `<tr>
            <th scope="row">${cnt}</th>
            
              <td style='width:20%;'>
              <a  class="text-dark stretched-link" style="text-decoration:none;" href='#products/${products[cart.items[i]].url}'> 
              
               <img src="${products[cart.items[i]].images}" class=' col' style=" height:20%;" alt=""></td>
               <td>
               <a  class="text-dark stretched-link" style="text-decoration:none;" href='#products/${products[cart.items[i]].url}'> 
                <div class='col'>${products[cart.items[i]].productName}</div></a>
                </td>
               <td> <div class='col'>${products[cart.items[i]].price}</div></td>
               <td> <div class='col'>${cart.countitems[i]}</div></td>
               <td> <div class='col'>${products[cart.items[i]].price*cart.countitems[i]}$</div>
               </a>   
            
            </tr>
            `;
                cnt++;
            }

        }
        str1 += `
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
    } else {
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
  <tbody><td>Empty cart</td>`;
        return str1;
    }
}
const view = (products) => myTag(products);
export default view;