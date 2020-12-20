function welcome () {
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

welcome();

let howMany = function () {
  let count = prompt("How many cars do you want?");

  while(count === "" || isNaN(count)) {
    count = prompt("Please enter the number of cars you want!!");
  }

  return count;
}

let showCars = function() {
  let total = howMany();
  let result = "";

  for(let i = 0; i < total; i++) {
    result = result + '<p>car number #' + i + " " + car + '</p>'
  }
}
}

howMany();
showCars();
