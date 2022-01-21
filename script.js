let submit = document.getElementById("submit")
submit.addEventListener("click",form)
function form(event){
  event.preventDefault();

  let fname=document.querySelector("#fname").value;
  let lname=document.querySelector("#lname").value;
  let address=document.querySelector("#address").value;
  let address2=document.querySelector("#address2").value;
  let pin=document.querySelector("#pin").value;

  let gender=""
  let male=document.getElementById("male");
  let female=document.getElementById("female");
  let others=document.getElementById("others");

  if(male.checked == true){
    gender=male.value
  }
  else if(female.checked == true){
    gender=female.value
  }
  else if(others.checked == true){
    gender=others.value
  }
  else{
    gender=" ";
  }

  let food=document.getElementsByName("food");
  let foodList=[];
  for (i = 0; i < food.length; i++) {
    if (food[i].checked) {
        foodList.push(food[i].value)
    }
}
if (foodList.length >= 2) {
    food = foodList.join(", ")
    console.log(food);
}
else {
    result = alert("select any 2 food")
    food = "";
}

let state=document.querySelector("#state").value;
let country=document.querySelector("#country").value;
let tbody=document.querySelector("#tbody");

if (fname == "" || lname == "" || address == "" || address2 == "" || gender == " " || pin == "" || food == "" || state == "" || country == "") {
  alert("Enter all the fields")
}
else {
  tbody.innerHTML += `
<tr>
<td>${fname}</td>
<td>${lname}</td>
<td>${address} ${address2}</td>
<td>${pin}</td>
<td>${gender}</td>
<td>${food}</td>
<td>${state}</td>
<td>${country}</td>
</tr>
`
}
}
    