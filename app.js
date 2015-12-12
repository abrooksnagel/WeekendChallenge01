var array = [];
var totalSalary = 0;


$(document).ready(function () {
	$('#employeeInfo').on('submit', function(event) {

//this removes the previous entry from the DOM for ease of viewing
		$("p").remove();
		$("h4").remove();

//this prevents the information from disappearing on submit
		event.preventDefault();

//this creates an empty object
		var values = {};

//this fills the object with input values?
 		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})

//this takes the value: employeeSalary, adds it to totalSalary and breaks down into monthly cost
		var salary = parseInt(values.employeeSalary);
		totalSalary += salary;
		var monthlyCost = totalSalary/12;
		console.log(totalSalary);
		console.log(monthlyCost);

//this removes the input values once we put them into the object
 		$('#employeeInfo').find('input[type=number]').val('');
		$('#employeeInfo').find('input[type=text]').val('');

//this calls the function appendDOM using values as the argument
		//console.log(values);
		appendDOM(values);


//this pushes the object values to the array
		array.push(values);
		//console.log(array);

//this is a previous attempt that may have worked with some tweaking that I want to keep for future experimentation
		//for (var i = 0; i < array.length; i++) {
		//	var currentSalary = parseInt(array[i].employeeSalary);
		//	totalSalary += currentSalary;
		//	console.log(totalSalary);
	    //}




function appendDOM(object) {
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();

	$el.append("<p>Employee Name: " + object.employeeName + "</p>");
	$el.append("<p>Employee ID: " + object.employeeID+ "</p>");
	$el.append("<p>Employee Job Title: " + object.employeeJobTitle + "</p>");
	$el.append("<p>Employee Salary (Yearly): $" + object.employeeSalary + "</p>");
	$el.append("<h4>Total Monthly Payroll Expenditures: $" + monthlyCost + "</h4>");
};

	});	
});








