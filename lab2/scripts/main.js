document.addEventListener("DOMContentLoaded", function () {
    // Get references to the checkboxes
    var vegetarianCheckbox = document.getElementById("vegetarian");
    var glutenFreeCheckbox = document.getElementById("glutenFree");
    var organicCheckbox = document.getElementById("organic");
    var nonOrganicCheckbox = document.getElementById("nonOrganic");

    // Add event listeners to the checkboxes
    vegetarianCheckbox.addEventListener("change", updateProductList);
    glutenFreeCheckbox.addEventListener("change", updateProductList);
    organicCheckbox.addEventListener("change", updateProductList);
    nonOrganicCheckbox.addEventListener("change", updateProductList);

    // Function to call when any of the checkboxes are clicked
    function updateProductList() {
        // Call the populateListProductChoices function with the selected checkboxes
        populateListProductChoices("displayProduct");
    }
});

populateListProductChoices("displayProduct");

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function populateListProductChoices(slct2) {
    var vegetarianCheckbox = document.getElementById("vegetarian");
    var glutenFreeCheckbox = document.getElementById("glutenFree");
    var organicCheckbox = document.getElementById("organic");
    var nonOrganicCheckbox = document.getElementById("nonOrganic");

    var s2 = document.getElementById(slct2);

    // s2 represents the <div> in the Client tab, which shows the checkbox options, so we first set it empty
    s2.innerHTML = "";

    // obtain a reduced list of products based on restrictions
    var vegetarian = vegetarianCheckbox.checked;
    var glutenFree = glutenFreeCheckbox.checked;
    var organic = organicCheckbox.checked;
    var nonOrganic = nonOrganicCheckbox.checked;
    var optionArray = restrictListProducts(products, vegetarian, glutenFree, organic, nonOrganic);

    // sort the products by price before displaying
    optionArray.sort(function (a, b) {
        return products.find(product => product.name === a).price - products.find(product => product.name === b).price;
    });

    // for each item in the sorted array, create a checkbox element
    for (let i = 0; i < optionArray.length; i++) {
        var productName = optionArray[i];
        var product = products.find(product => product.name === productName);

        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        // create a label for the checkbox and add in HTML DOM
        var label = document.createElement('label');
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName + " " + product.price + "$"));
        s2.appendChild(label);

        // create an image of the selected product and add in HTML DOM
        var image = document.createElement("img");
        image.src = "static/" + productName + ".jpg";
        image.alt = productName;
        image.width = 100;
        image.height = 100;
        s2.appendChild(image);

        // create a breakline node and add in HTML DOM
        s2.appendChild(document.createElement("br"));
    }
}

// function populateListProductChoices(slct2) {
//     var vegetarianCheckbox = document.getElementById("vegetarian");
//     var glutenFreeCheckbox = document.getElementById("glutenFree");
//     var organicCheckbox = document.getElementById("organic");
//     var nonOrganicCheckbox = document.getElementById("nonOrganic");
//
//     var s2 = document.getElementById(slct2);
//
//     // s2 represents the <div> in the Client tab, which shows the checkbox options, so we first set it empty
//     s2.innerHTML = "";
//
//     // obtain a reduced list of products based on restrictions
//     var vegetarian = vegetarianCheckbox.checked;
//     var glutenFree = glutenFreeCheckbox.checked;
//     var organic = organicCheckbox.checked;
//     var nonOrganic = nonOrganicCheckbox.checked;
//     var optionArray = restrictListProducts(products, vegetarian, glutenFree, organic, nonOrganic);
//
//     // for each item in the array, create a checkbox element, each containing information such as:
//     // <input type="checkbox" name="product" value="Bread">
//     // <label for="Bread">Bread/label><br>
//
//     // sort optionArray by price, convert to integer before doing minus
//     // optionArray.sort(function (a, b) {
//     //         products.find(function(product) {
//     //           return product.name === productNameToFind;
//     //         });
//     //
//     //     }
//     // );
//     // optionArray.forEach(function (item) {
//     //     console.log(products.find(function (product) {
//     //         return product.name === item
//     //     }
//     //     ));
//     // }
//     // );
//     for (i = 0; i < optionArray.length; i++) {
//         var productName = optionArray[i];
//
//         // create the checkbox and add in HTML DOM
//         var checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.name = "product";
//         checkbox.value = productName;
//         s2.appendChild(checkbox);
//
//         // create a label for the checkbox, and also add in HTML DOM
//         var label = document.createElement('label');
//         label.htmlFor = productName;
//         label.appendChild(document.createTextNode(productName + " " + products[i].price + "$"));
//         s2.appendChild(label);
//
//         // create an image of the selected product
//         var image = document.createElement("img");
//         image.src = "static/" + productName + ".jpg";
//         image.alt = productName;
//         image.width = 100;
//         image.height = 100;
//         s2.appendChild(image);
//
//
//         // create a breakline node and add in HTML DOM
//         s2.appendChild(document.createElement("br"));
//     }
// }


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}

