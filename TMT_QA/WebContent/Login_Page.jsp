<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link type="text/css" rel="stylesheet" href="Login_HomePage.css"/>
<script type="text/javascript" src="Login_HomePage.js"></script>
<title>TMT</title>
</head>
<body class="login">

<div class="Container">

<div class="login_form">

<form action="home.html">

<div class="form-title">

<span class="form-title"> Welcome to Team Management Tool </span><br>
<span class="form-subtitle"> Please login to Access. </span>

</div>

<br>

  <input name="username" onfocus="myFunction()" onblur="myFunction1()" maxlength="100"  type="text" id="Uname" class="LoginField" 	size="2" value="Username">

  <br></br>
  
  <input maxlength="40" onfocus="myFunction2()" onblur="myFunction3()"  type="text" id="Paswd" class="LoginField"  value="Password">
  <br><br>
  
  <input id="loginButton" onclick="loginUP()" type="button" value="LOGIN">

</form>

</div>

</div>
</body>
</html>