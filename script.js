fetch('https://my-json-server.typicode.com/honchar007/test-json/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
        console.log(data);
        console.log(typeof(data));
        var keys = data.keys();
        
  });
