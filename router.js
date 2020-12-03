class Router {
    getCurrentState() {
        let str = '' + window.location.hash.split('#')[1];
        let viewName = '';
        let endpointName = '';
        switch (window.location.hash.split('#')[1]) {
            case 'products':
                viewName = 'productsPage';
                endpointName = 'products';
                break;
            case 'sale':
                viewName = 'salesPage';
                endpointName = 'sales';
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
                endpointName = 'products';
                break;
            default:
                if (str.indexOf('products/') != -1) {

                    viewName = 'currentPage';
                    endpointName = 'products';
                } else {

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