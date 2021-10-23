let cappuccinoPrice = parseFloat(1.95).toFixed(2);
let espressoPrice = parseFloat(3.45).toFixed(2);
let cappuccinoOrder = "$" + cappuccinoPrice + " - Cappuccino - Delicious Cappuccino!";
let espressoOrder = "$" + espressoPrice + " - Espresso - Delicious espresso. Wanna try it?";
let orderString = "";
let espressoCount = 0;
let cappuccinoCount = 0;

function orderCappuccino() 
{
	orderString += "\n" + cappuccinoOrder;
	cappuccinoCount++;
	$("order").innerHTML = orderString;
}

function orderEspresso() 
{
	orderString += "\n" + espressoOrder;
	espressoCount++;
	$("order").innerHTML = orderString;
}

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	

	// for click event add item to order and update total
	$("place_order").addEventListener("click", function() 
	{
		let orderTotal = (cappuccinoPrice * cappuccinoCount) + (espressoPrice * espressoCount);
		$("total").innerHTML = "Total: $" + parseFloat(orderTotal).toFixed(2);
	});

	// display order and total
	$("clear_order").addEventListener("click", function() 
	{
		cappuccinoCount = 0;
		espressoCount = 0;
		orderString = "";

		$("order").innerHTML = "<br>";
		$("total").innerHTML = "";
	});
		
}; // end onload