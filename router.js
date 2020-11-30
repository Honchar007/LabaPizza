

class Router {
    getCurrentState() {
        let str = ''+window.location.hash.split('#')[1];
console.log(window.location.hash.split('#')[1]);
console.log(str.indexOf('products/'));
console.log(window.location.hash.split('#')[1]);
        let viewName = '';
        let endpointName = '';
        switch (window.location.hash.split('#')[1]) {
            case 'products':
                viewName = 'productsPage';
                endpointName = 'products';
                break;
            case 'home':
                viewName = 'mainPage';
                endpointName = 'products';
                break;
            case 'products/cheezepizza':
                viewName = 'cheezePage';
                endpointName = 'products';
                break;
            case 'products/meatpizza':
                viewName = 'meatPage';
                endpointName = 'products';
                break;
            case 'products/brandpizza':
                viewName = 'brandPage';
                endpointName = 'products';
                break;
            case 'cart':
                viewName = 'cartPage';
                endpointName='products';
                break;
            default:
                if(str.indexOf('products/')!=-1)
                {
                    console.log("ON");
                    viewName = 'currentPage';
                    endpointName='products';
                }
                else{
                    console.log("OFF");
                    console.log(str);
                    
                    viewName = 'mainPage';
                endpointName = 'products';
                }
                break;
        }

        return {
            viewName,
            endpointName
        };
    }
}

export default Router;
