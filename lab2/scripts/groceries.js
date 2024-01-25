	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
		{
		name: "Carrot",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.00
	},
		{
		name: "Organic Blueberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.00
	},
		{
		name: "Blueberries",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 6.00
	},
		{
		name: "Gluten Free Pasta",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 8.00
	},
		{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.00
	},
		{
		name: "Apple Pie",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.00
	},
		{
		name: "Organic Gluten Free Bread",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00
	}
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vegetarian, glutenFree, organic, nonOrganic) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		var food_is_ok = true;
		if ((vegetarian) && (prods[i].vegetarian !== true)){
			food_is_ok = false;
		}
		if ((glutenFree) && (prods[i].glutenFree !== true)){
			food_is_ok = false;
		}
		if ((organic) && (prods[i].organic !== true)){
			food_is_ok = false;
		}
		if ((nonOrganic) && (prods[i].organic !== false)){
			food_is_ok = false;
		}
		if (food_is_ok){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice + "$";
}
