// import ....
import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';
const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();
window.onload = funcRef;
window.onhashchange = funcRef;

function funcRef() {

    funcUpdateCart();
    const { viewName, endpointName } = router.getCurrentState();

    let view;
    import (`./views/${viewName}.js`)
    .then((viewModule) => {
            view = viewModule.default;
            return client.getData(endpointName);
        })
        .then((data) => {
            templateProcessor.loader();
            setTimeout(function() {
                templateProcessor.render(view(data))
            }, 2000);
        });
}

function funcUpdateCart() {
    if (localStorage.length > 0) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        var e = document.getElementById("count");
        e.innerText = cart.allcount + " шт.";
        e = document.getElementById("totalPrice");
        e.innerText = cart.totalprice;

    }
}