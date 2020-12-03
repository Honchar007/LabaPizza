function create(sales) {
    let str1 = '';
    let headlines = readTextFile(`./${sales[0].titles}`).split('TYT');
    let maintext = readTextFile(`./${sales[0].maintext}`).split('TYT');
    let images = readTextFile(`./${sales[0].images}`).split('TYT');


    for (let i = 0; i < headlines.length; i++) {

        str1 += `<div class='container-fluid mb-5'> 
                <h3><p class="mb-0">${headlines[i]}</p></h3>
                <img class="img-fluid" src='${images[i]}' alt=''><br>
                ${maintext[i]}
                </div>`;
    }
    return str1;
}
const view = (sales) =>
    `<div class="container-fluid">
    <div class="text-center font-weight-bold bg-danger mt-4">Sales and Deals</div></br>
      ${create(sales)}
    </div>
   `;

function readTextFile(file) {
    let str2 = '';
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                str2 = allText;
            }
        }
    }

    rawFile.send(null);
    return str2;
}


export default view;