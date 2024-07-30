$(document).ready(function()
{
	var qtyRow1 = $("#qtyRow1").text();
	var qtyRow2 = $("#qtyRow2").text();
	var qtyRow3 = $("#qtyRow3").text();
	
	var totalRow1 = 0.00;
	var totalRow2 = 0.00;
	var totalRow3 = 0.00;
	
	var totalPrice = $("#totalRow4").text();
	
	const MIN_VALUE = 0;
	const COMBO_PRICE = 4000.00;
	const NON_COMBO_PRICE = 2500.00;
	
	// For row 1 pricing
	$("#plusRow1").click(function()
	{
		$("#qtyRow1").text(++qtyRow1);
		
		totalRow1 = (parseFloat(qtyRow1) * parseFloat(COMBO_PRICE)).toFixed(2);
		
		totalPrice = (parseFloat(totalRow1) + parseFloat(totalRow2) + parseFloat(totalRow3)).toFixed(2);
		
		$("#totalRow4").text(totalPrice);
	});
	
	$("#minusRow1").click(function()
	{
		if (qtyRow1 > MIN_VALUE)
		{
			$("#qtyRow1").text(--qtyRow1);
			
			totalRow1 = (parseFloat(qtyRow1) * parseFloat(COMBO_PRICE)).toFixed(2);
			
			totalPrice = (parseFloat(totalRow1) + parseFloat(totalRow2) + parseFloat(totalRow3)).toFixed(2);
			
			$("#totalRow4").text(totalPrice);
		}
	});
	
	
	
	
	// For row 2 pricing
	$("#plusRow2").click(function()
	{
		$("#qtyRow2").text(++qtyRow2);
		
		totalRow2 = (parseFloat(qtyRow2) * parseFloat(NON_COMBO_PRICE)).toFixed(2);
		
		totalPrice = (parseFloat(totalRow1) + parseFloat(totalRow2) + parseFloat(totalRow3)).toFixed(2);
		
		$("#totalRow4").text(totalPrice);
		
	});
	
	$("#minusRow2").click(function()
	{
		if (qtyRow2 > MIN_VALUE)
		{
			$("#qtyRow2").text(--qtyRow2);
			
			totalRow2 = (parseFloat(qtyRow2) * parseFloat(NON_COMBO_PRICE)).toFixed(2);
			
			totalPrice = (parseFloat(totalRow1) + parseFloat(totalRow2) + parseFloat(totalRow3)).toFixed(2);
			
			$("#totalRow4").text(totalPrice);
		}
	});
	
	
	
	
	// For row 3 pricing
	$("#plusRow3").click(function()
	{
		$("#qtyRow3").text(++qtyRow3);
		
		totalRow3 = (parseFloat(qtyRow3) * parseFloat(NON_COMBO_PRICE)).toFixed(2);
		
		totalPrice = (parseFloat(totalRow1) + parseFloat(totalRow2) + parseFloat(totalRow3)).toFixed(2);
		
		$("#totalRow4").text(totalPrice);
		
	});
	
	$("#minusRow3").click(function()
	{
		if (qtyRow3 > MIN_VALUE)
		{
			$("#qtyRow3").text(--qtyRow3);
		
			totalRow3 = (parseFloat(qtyRow3) * parseFloat(NON_COMBO_PRICE)).toFixed(2);
			
			totalPrice = (parseFloat(totalRow1) + parseFloat(totalRow2) + parseFloat(totalRow3)).toFixed(2);
		
			$("#totalRow4").text(totalPrice);
		}
	});	
});