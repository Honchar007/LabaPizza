// import ....
import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';




const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();


window.onload = funcRef;
window.onhashchange = funcRef;
function funcRef(){
    funcLoader();
    funcUpdateCart();
    const { viewName, endpointName } = router.getCurrentState();

    let view;
    import(`./views/${viewName}.js`)
        .then((viewModule) =>  {
            view = viewModule.default;
            return client.getData(endpointName);
        })
        .then((data) => {
            templateProcessor.render(view(data));
        });
        
}
function funcLoader()
{
        document.body.classList.add('loaded-hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded-hiding');
        }, 2000);
}
function funcUpdateCart()
{
    if(localStorage.length>0)
    {
        let cart = JSON.parse(localStorage.getItem('cart'));
        var e = document.getElementById("count");
          e.innerText= cart.allcount+" шт.";
          e = document.getElementById("totalPrice");
          e.innerText=cart.totalprice;

    }
}