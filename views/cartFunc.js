let chartproducts=[];
export function addTochart(product)
{
    chartproducts.push(product);
    document.getElementById("count").innerText+=1;
}
export let order = {
    count: 0
  };