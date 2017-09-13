function myFunction(){
	
var a= document.getElementById("Uname").value;

if(a=="Username"){
	document.getElementById("Uname").value=null;
}
}

function myFunction1(){
	
var a= document.getElementById("Uname").value;
if(a == "" ){
	document.getElementById("Uname").value="Username";
}
}

function myFunction2(){
var a= document.getElementById("Paswd").value;

if(a=="Password"){
	document.getElementById("Paswd").value=null;
}

var a= document.getElementById("Paswd").value;
if(a != "Password"){
document.getElementById("Paswd").type='Password'
}
}

function myFunction3(){
var a= document.getElementById("Paswd").value;
if(a == "" )
{
	document.getElementById("Paswd").value="Password";
	document.getElementById("Paswd").type='text';
}
}


function loginUP(){
	var Username1=document.getElementById("Uname").value;
	var Password1=document.getElementById("Paswd").value;
	
	if(Username1 != "Username" && Password1 != "Password")
	
	{
		document.write(" Please Vaildate this user ");
		
	}
	
	else if (Username1 == "Username")  {
		alert('Please Enter the Username');
	}
	else if(Password1 == "Password" && Username1 !="Username"){
		
		alert("Please Enter the password for user : "+Username1)
	}
}








