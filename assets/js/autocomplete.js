let availableKeywords = [
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
const searchButton = document.getElementById("searchButton");

let currentSelection = -1;
let keyHoldInterval = null;

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

function determineUrl(keyword) {
    keyword = keyword.toLowerCase();
    if (keyword === "privacy policy") {
        return "/assets/supplements/privacypolicy.html";
    } else if (keyword === "terms and conditions") {
        return "/assets/supplements/t&c.html";
    } else if (keyword === "lineup") {
        return "/index.html#features";
    } else {
        return "/index.html#" + encodeURIComponent(keyword);
    }
}

inputBox.onkeyup = function (event) {
    const { keyCode } = event;
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    if(result.length === 0){
        resultsBox.innerHTML = '';
        resultsBox.style.display = "none";
    } else {
        display(result);
        resultsBox.style.display = "";
    }

    const results = document.querySelectorAll(".result-box li");

    if (keyCode === 38) { // Up arrow
        event.preventDefault();
        if (currentSelection > 0) {
            currentSelection--;
        }
    } else if (keyCode === 40) { // Down arrow
        event.preventDefault();
        if (currentSelection < results.length - 1) {
            currentSelection++;
        }
    } else if (keyCode === 13) { // Enter key
        event.preventDefault();
        if (currentSelection > -1) {
            let selectedKeyword = results[currentSelection].textContent;
            inputBox.value = selectedKeyword;
            resultsBox.style.display = "none";
            let url = determineUrl(selectedKeyword);
            window.location.href = url;
        }
    } else {
        // Reset the currentSelection to the first entry when the input changes
        currentSelection = -1;
    }

    // Highlight the selected result
    results.forEach((li, index) => {
        if (index === currentSelection) {
            li.style.backgroundColor = "#f0f5ff";
            li.scrollIntoView({ block: "nearest" });
        } else {
            li.style.backgroundColor = "";
        }
    });

    // Start an interval to move the selection up or down while the key is held down
    if (keyCode === 38 || keyCode === 40) {
        clearInterval(keyHoldInterval);
        keyHoldInterval = setInterval(() => {
            if (keyCode === 38 && currentSelection > 0) {
                currentSelection--;
            } else if (keyCode === 40 && currentSelection < results.length - 1) {
                currentSelection++;
            }

            // Highlight the selected result and scroll it into view
            results.forEach((li, index) => {
                if (index === currentSelection) {
                    li.style.backgroundColor = "#f0f5ff";
                    li.scrollIntoView({ block: "nearest" });
                } else {
                    li.style.backgroundColor = "";
                }
            });
        }, 2); // Change the interval duration to adjust the speed of the selection movement
    }
}

inputBox.addEventListener("keyup", function(event) {
    // Clear the interval when the key is released
    clearInterval(keyHoldInterval);
});

searchButton.addEventListener("click", function(event) {
    event.preventDefault();

    let input = inputBox.value;
    let result = [];
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    if (result.length === 0) {
        alert("Sorry, the said product is not found.");
    } else {
        let url = determineUrl(input);
        window.location.href = url;
    }

    resultsBox.style.display = "none";
});

// Hide the resultsBox when the user clicks outside of it
document.addEventListener("click", function(event) {
    if (event.target !== inputBox) {
        resultsBox.style.display = "none";
    }
});