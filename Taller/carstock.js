const save = document.getElementById("go");
const carssources = [];

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
  
save.addEventListener("click", function() {
     
   const brand = document.getElementById("brand").value;
   const model = document.getElementById("model").value;
   const part = document.getElementById("part").value;
   const subpart = document.getElementById("subpart").value;
   const price = document.getElementById("price").value;
   var stocked ;
 
  
   
        const carsobj = { id:makeid(4), carbrand: brand, carmodel: model, agedoc: part, generodoc: subpart, especialidaddoc: price };
        carssources.push(carsobj) 
        console.log(carssources);
        localStorage.setItem("cars",JSON.stringify(carssources));
        document.getElementById("show").innerHTML = carsobj.carbrand + " " + carsobj.carmodel;
        stocked = stocked  + 1;   
 
     

   
  });
 