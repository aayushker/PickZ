let availableKeywords = [
    // 'Iphone',
    // 'Samsung',
    // 'Oppo',
    // 'Vivo',
    // 'Xiaomi',
    // 'Huawei',
    // 'Realme',
    // 'Oneplus',
    // 'Nokia',
    // 'Motorola',
    // 'HP',
    // 'Dell',
    // 'Acer',
    // 'Asus',
    // 'Lenovo',
    // 'Sony',
    // 'JBL',
    // 'Bose',
    // 'Beats',
    // 'Apple',
    // 'Google',
    // 'LG',
    // 'HTC',
    // 'Blackberry',
    // 'Mobile',
    'Phone',
    'Tablet',
    'Laptop',
    'Audio',
    'Home',
    'About',
    'Lineup',
    'Pricing',
    'FAQ',
    'Team',
    'Contact',
    'Terms and Conditions',
    'Privacy Policy'
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
        resultsBox.innerHTML = '';
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

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let input = inputBox.value;
    if (input.length) {
        // Define your logic for determining the URL based on the keyword
        let url = determineUrl(input);
        window.location.href = url;
    }
});

function determineUrl(keyword) {
    keyword = keyword.toLowerCase();
    if (keyword === "privacy policy") {
        // If the keyword is "privacy", redirect to the privacy policy page in the subdirectory
        return "/assets/supplements/privacypolicy.html";
    } 
    else if (keyword === "terms and conditions") {
        // If the keyword is "terms", redirect to the terms and conditions page in the subdirectory
        return "/assets/supplements/t&c.html";
    }
    else {
        // Otherwise, redirect to the mobile page with the keyword as a hash
        return "/index.html#" + encodeURIComponent(keyword);
    }
}

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
        resultsBox.innerHTML = '';
    } else {
        resultsBox.style.display = ""; // Show the resultsBox when there's input
    }
}

// Hide the resultsBox when the user clicks outside of it
document.addEventListener("click", function(event) {
    if (event.target !== inputBox) {
        resultsBox.style.display = "none";
    }
});

// Hide the resultsBox when the user clicks on the search button
searchButton.addEventListener("click", function(event) {
    resultsBox.style.display = "none";
});

// Hide the resultsBox when the user presses the Enter key
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        resultsBox.style.display = "none";
    }
});

// Hide the resultsBox when the user clicks on a result
resultsBox.addEventListener("click", function(event) {
    resultsBox.style.display = "none";
});

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length ) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }

    if(result.length === 0){
        resultsBox.innerHTML = '';
        resultsBox.style.display = "none"; // Hide the resultsBox when there's no match
    } else {
        display(result);
        resultsBox.style.display = ""; // Show the resultsBox when there's a match
    }
}

searchButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let input = inputBox.value;
    let result = [];
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    if (result.length === 0) {
        // Display a "not found" message if there are no matches
        alert("Sorry, the said product is not found.");
    } else {
        // Redirect to the specific page if there are matches
        let url = determineUrl(input);
        window.location.href = url;
    }
});
