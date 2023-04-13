// Gumtree Price Scraper (determines statistics of prices for listings on webpage)

// Get an array of elements with class "user-ad-price-new-design__price"
var price = document.getElementsByClassName("user-ad-price-new-design__price");

// Initialize an array to store the cleaned prices
var prices = [];

// Loop through each element in the price array
for(let i=0; i < price.length; i++){
	// Get the inner text of the current element
	n = price[i].innerText;
	
	// Remove the "$" sign and commas from the string
	n = n.replace("$","").replace(",","");
	
	// Convert the cleaned string to a float
	n = parseFloat(n);
	
	// Add the converted number to the prices array
	prices.push(n);
}

// Calculate the average price
let mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;

// Calculate the deviation of each price from the mean
let deviation = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;

// Calculate the standard deviation
let standardDeviation = Math.sqrt(deviation);

// Log the average and standard deviation to the console
console.log("Average: " + mean);
console.log("Stdev: " + standardDeviation);
