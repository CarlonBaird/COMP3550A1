//Form Validation
/* Author : Carlon R. Baird*/

function validate()
{
	var fname = document.forms["form"]["fname"].value;
	var sname = document.forms["form"]["sname"].value;
	var dob = document.forms["form"]["dob"].value;
	var region = document.forms["form"]["region"].value;
	var country = document.forms["form"]["country"].value;
	var email = document.forms["form"]["email"].value;


	var validEmail = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
	var validString = /[A-Z][a-z]/;
	var validDate = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
	var valid = true;

	if(!isValid(validString,fname))
	{
		alert("First Name has the wrong format! It must start with a capital letter followed by common letters!");
		valid = false;
		event.preventDefault();
	}


	if(!isValid(validString,sname))
	{	
		alert("Surname has the wrong format! It must start with a capital letter followed by common letters!");
		valid = false;
		event.preventDefault();
	}

	if(dob==null)
	{
		alert("Please enter your birthday");
		valid = false;
		event.preventDefault();
	}

	if(!isValid(validDate,dob))
	{
		alert("Date has the wrong format! It must have the format: dd-mm-yyyy");
		valid = false;
		event.preventDefault();
	}

	if(country=="")
	{
		alert("Select your country!");
		valid = false;
		event.preventDefault();
	}

	if(!isValid(validString,region))
	{
		alert("Region has the wrong format! It must start with a capital letter followed by common letters!");
		valid = false;
		event.preventDefault();	
	}

	if(!isValid(validEmail,email))
	{
		alert("Invalid email address!");
		valid = false;
		event.preventDefault();
	}

	if(valid==true)
	{
		printGreeting(fname,sname);
		event.preventDefault();
		redirect("index.html");	
	}

	
}


function isValid(a,b)
{
	return a.test(b);
}

function redirect(page)
{
	window.location = page;
}

function printGreeting(fname,sname)
{
	alert("Your application was successful!");
	alert("Welcome "+fname+" "+sname+" to our organisation!");
}



