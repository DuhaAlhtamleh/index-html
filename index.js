var user = prompt("What is your name?");
if(user !== ""){
    alert("Hi " + user)
    confirm("Please press a button")
}else{
    alert("Please enter your name");
    user = prompt("What is your name?");
    alert("Hi " + user)
    confirm("Please press a button")
}
