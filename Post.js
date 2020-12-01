async function Order() 
{
    

      let cart = localStorage.getItem('cart');
      var userid = document.getElementById("formInput1").value;
      var new_order = '0000'+Math.random()*100;
      var pizzas = cart.items;
      var counts = cart.countitems;

     // console.log("Input Data: " + userid + " " + new_title + " " + new_body);

     const url = 'https://my-json-server.typicode.com/honchar007/test-json/orders';
     const data = { username: userid, order : new_order,whatpizza:pizzas,howmuch:counts };
     
     try {
        const orderId =  (await fetch(url, {
         method: 'POST', // или 'PUT'
         body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
         
       }).then((response) => response.json())
       .catch(e => console.log(e))).id;
       console.log(orderId);
       window.location.hash = window.location.hash.split('#')[0]+"#"+orderId;
           
     } catch (error) {
       console.error('Ошибка:', error);
     }
}