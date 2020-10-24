var findbrand = document.getElementById("brand")
var buscar = document.getElementById("go");
buscar.addEventListener("click", function() {
  document.getElementById("element").innerHTML = "";
  var storedcar = JSON.parse(localStorage.getItem("cars"));
  var brand = document.getElementById("brand").value;
  var model = document.getElementById("model").value;
  var part = document.getElementById("part").value;

  
for (var index = 0; index < storedcar.length; index++) {
 if (brand === storedcar[index].namedoctor) { 
  document.getElementById("model").innerHTML = "<option>" + storedcar[index].carmodel + "</model>" ;
 }
  
  }

  
}
  
);
