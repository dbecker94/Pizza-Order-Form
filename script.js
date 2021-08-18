/*
Hands on 7-5
Name:Daniel Becker
Date: 10/6/2020
*/

"use strict";
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
var foodInfo = {}
var foodSummary = document.getElementById("order");
function processDeliveryInfo() {
	var prop;
	//document.write("entered processDeliveryInfo");
    delivInfo.name =  document.getElementById("nameinput").value;
	delivInfo.addr = document.getElementById("addrinput").value;
	delivInfo.city = document.getElementById("cityinput").value;
	delivInfo.email = document.getElementById("emailinput").value;
	delivInfo.phone = document.getElementById("phoneinput").value;
	for(prop in delivInfo) {
     delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
	}
	document.getElementById("deliverTo").style.display = "block"
	//document.write("End of ProcessDeliveryInfo");
}
function processFood() {
	var prop;
	var crustOpt = document.getElementsByName("crust");
	var toppings = 0;
	var toppingBoxes = document.getElementsByName("toppings");
	var instr = document.getElementById("instructions");
	
	if(crustOpt[0].checked) {
		foodInfo.crust = crustOpt[0].value;
	}
	else {
           foodInfo.crust = crustOpt[1].value;
	}		
	foodInfo.size = document.getElementById("size").value;
    for( var count = 0; count < toppingBoxes.length; count++) {
        if(toppingBoxes[count].checked) {
			toppings++;
			foodInfo["topping" + toppings] = toppingBoxes[count].value; // 
		}
		
	}	
    if(instr.value != "") {
       foodInfo.instructions = instr.value; 
	}		
	foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p";
	foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
	foodSummary.innerHTML += "<p><span>Topping</span>: " + "</p>";
	foodSummary.innerHTML += "<ul>";
	for(var i=1;i < 6; i++) {
		if(foodInfo["topping" + i]) {
			foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
		}
	}
	foodSummary.innerHTML += "</ul>";
	foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
	document.getElementById("order").style.display = "block";
}
function previewOrder() {
    //document.getElementById("deliverTo").style.display = "block";
	processDeliveryInfo();
	processFood();
	document.getElementsByTagName("section")[0].style.display = "block";
}
function createEventListener() {
	var previewButton = document.getElementById("previewBtn");
	if(previewButton.addEventListener) {
	   previewButton.addEventListener("click",previewOrder, false);
		}
		else if (previewButton.attachEvent) {
			previewButton.attachEvent("onload",previewOrder);
		}
		
}
if(window.addEventListener) {
	window.addEventListener("load",createEventListener,false);
}
else if(window.attachEvent) {
	window.attachEvent("onload",createEventListener);
}