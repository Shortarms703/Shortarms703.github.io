	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
		vegetables: true,
		fruits: false,
		dairy: false,
		meats: false,
		seafood: false,
		deserts: false
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		vegetables: false,
		fruits: false,
		dairy: true,
		meats: false,
		seafood: false,
		deserts: false
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		vegetables: false,
		fruits: false,
		dairy: false,
		meats: true,
		seafood: true,
		deserts: false
	},
		{
		name: "Carrot",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.00,
		vegetables: true,
		fruits: false,
		dairy: false,
		meats: false,
		seafood: false,
		deserts: false
	},
		{
		name: "Organic Blueberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.00,
		vegetables: false,
		fruits: true,
		dairy: false,
		meats: false,
		seafood: false,
		deserts: false
	},
		{
		name: "Blueberries",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 6.00,
		vegetables: false,
		fruits: true,
		dairy: false,
		meats: false,
		seafood: false,
		deserts: false
	},
		{
		name: "Gluten Free Cake",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 8.00,
		vegetables: false,
		fruits: false,
		dairy: false,
		meats: false,
		seafood: false,
		deserts: true,
	},
		{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.00,
		vegetables: false,
		fruits: false,
		dairy: false,
		meats: true,
		seafood: false,
		deserts: false
	},
		{
		name: "Apple Pie",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.00,
		vegetables: false,
		fruits: false,
		dairy: false,
		meats: false,
		seafood: false,
		deserts: true
	},
		{
		name: "Organic Gluten Free Cookies",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00,
		vegetables: false,
		fruits: false,
		dairy: false,
		meats: false,
		seafood: false,
		deserts: true,
	}
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vegetarian, glutenFree, organic, nonOrganic, vegetables, fruits, dairy, meats, seafood, deserts) {
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
		if ((vegetables) && (prods[i].vegetables !== true)){
			food_is_ok = false;
		}
		if ((fruits) && (prods[i].fruits !== true)){
			food_is_ok = false;
		}
		if ((dairy) && (prods[i].dairy !== true)){
			food_is_ok = false;
		}
		if ((meats) && (prods[i].meats !== true)){
			food_is_ok = false;
		}
		if ((seafood) && (prods[i].seafood !== true)){
			food_is_ok = false;
		}
		if ((deserts) && (prods[i].deserts !== true)){
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
