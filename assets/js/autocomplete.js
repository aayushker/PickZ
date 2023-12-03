let availableKeywords = [
    'Iphone',
    'Samsung',
    'Oppo',
    'Vivo',
    'Xiaomi',
    'Huawei',
    'Realme',
    'Oneplus',
    'Nokia',
    'Motorola',
    'HP',
    'Dell',
    'Acer',
    'Asus',
    'Lenovo',
    'Sony',
    'JBL',
    'Bose',
    'Beats',
    'Apple',
    'Google',
    'LG',
    'HTC',
    'Blackberry',
    'Mobile',
    'Tablets',
    'Laptops',
    'Audio Products'
];


const resultsBox = document.querySelector(".result-box");
const inputBox = document.querySelector(".form-control");
inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length ) {
        result = availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(input.length === 0){
        resultsBox.innerHTML = ' ';
    }
}
function display(result){
        const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
        });

        resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";

    }

function selectInput(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    resultsBox.style.display = "none";
}

