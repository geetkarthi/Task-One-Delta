var calorie;
var x = 0;
var array1 = Array();
var array2 = Array();
var array3 = Array();
var array4 = Array();
var totcal = 0;
calorie = 0;
var water2 = 0;
var water3 = 0;

function showcalorie(){
  alert("clicked");
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var gender = document.getElementById("gender").value;
  getcalorievalue(weight, height, age, gender);

  var bmisc = document.getElementsByClassName('bmisc')[0];
  bmisc.innerHTML = "The daily calorie requirement is" + " " + getcalorievalue(weight, height, age, gender);

}

function getcalorievalue(weight, height, age, gender){
if(gender=="male")
calorie=10*Number(weight) + 6.25*100*Number(height) - 5*Number(age) + 5;
if(gender=="female")
calorie=10*Number(weight) + 6.25*100*Number(height) - 5*Number(age) - 161;
return calorie;

}


function add_element_to_array()
{
 array1[x] = document.getElementById("text1").value;
 array2[x] = document.getElementById("text2").value;
 array3[x] = document.getElementById("text3").value;
 array4[x] = document.getElementById("text4").value;

 totcal += 4*Number(array3[x]) + Number(array4[x]) + 9*Number(array2[x]);
 x++;

 if(totcal>calorie)
 alert("You consumed more than you should have today");

 else if(totcal<calorie)
 alert("You can probably eat more");

 document.getElementById("text1").value = "";
 document.getElementById("text2").value = "";
 document.getElementById("text3").value = "";
 document.getElementById("text4").value = "";

}

function display_array()
{
   var e = "<hr/>";

   for (var y=0; y<array1.length; y++)
   {
     e += "Today you consumed" + " " + array1[y] + "<br/>";
  }
   document.getElementById("Result").innerHTML = e;
}

function show_water()
{
  var weight1 = document.getElementById("weight1").value;
  var workout = document.getElementById("workout").value;
  water_to_be_consumed(weight1, workout);

  var watersc = document.getElementsByClassName('watersc')[0];
  watersc.innerHTML = "The daily water requirement is" + " " + water_to_be_consumed(weight1, workout);

}

function water_to_be_consumed(weight1, workout)
{
  water2 = Number(weight1)/30 + Number(workout)*0.7;
  return water2;
}

function show_water_drunk()
{
  var water = document.getElementById("water").value;
  var hour = document.getElementById("Hour").value;
  var minute = document.getElementById("Minute").value;
  water_to_be_drunk(hour, minute);

  if(water<water3&&hour<23&&hour>6)
  alert("OOPS!! You should probably drink more");

  else if(water>water3&&hour<23&&hour>6)
  alert("Good job! You are sufficiently hydrated");

}

function water_to_be_drunk(hour, minute)
{
  if(hour>=23)
  alert("You should have slept by now");
  else if(hour<=6)
  alert("You should not be awake now");
  else
    water3 = water2/(17*3600) * ([Number(hour) - 6]*3600 + Number(minute)*60);
  return water3;
}
var u=0,i=0;
var img= [];
var text=[];
var time=3000;
img[1]='images/pizza two.jpg';
img[0]='images/salad two.jpg';
img[2]='images/drinking-water.jpg';
img[3]='images/sleep.jpg';
text[0]="Eat a balanced and correct diet to stay healthy and live long";
text[1]="Try not to exceed your daily calorie intake as this may cause health issues in future ";
text[2]="Drink a lot of water but even limit that based on your weight";
text[3]="Sleep atleast 7 hours per day to reduce mental strain";
function changeimg()
{
  document.querySelector(".slide").src=img[u];
    document.querySelector(".sli").innerHTML=text[u];
  if(u<img.length-1)
  {
    u++;
  }
  else{
    u=0;
  }
  setTimeout(changeimg, time);
}
window.onload= changeimg();
