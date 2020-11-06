function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
   
    for (let index = 0; index < 20; index++) { 
    var hero = this.responseText.split(",")[index];
      if (index == 1) {
        var hero2 = hero.split(":")[1];
        document.getElementById("yourid").innerHTML = hero2;
      } else { if (index == 2) {
        var hero3 = hero.split(":")[1]
      document.getElementById("yourname").innerHTML = hero3; 
      } else { if (index == 9) {
        var hero4 = hero.split(":")[2]
      document.getElementById("yourrname").innerHTML = hero4; 
      } 
      }
    }
    
    }
    document.getElementById("yourimage").style.visibility = "visible";
      }
    };
    xhttp.open(
      "GET",
      "https://www.superheroapi.com/api.php/10225351221754467/70",
      true
    );
    xhttp.send();

    const xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
   
    for (let index = 0; index < 20; index++) { 
    var hero = this.responseText.split(",")[index];
      if (index == 1) {
        var hero2 = hero.split(":")[1];
        document.getElementById("yourid2").innerHTML = hero2;
      } else { if (index == 2) {
        var hero3 = hero.split(":")[1]
      document.getElementById("yourname2").innerHTML = hero3; 
      } else { if (index == 9) {
        var hero4 = hero.split(":")[2]
      document.getElementById("yourrname2").innerHTML = hero4; 
      
      }
      } 
      }
    }
    document.getElementById("yourimage2").style.visibility = "visible";
    }
    };
    xhttp2.open(
      "GET",
      "https://www.superheroapi.com/api.php/10225351221754467/38",
      true
    );
    xhttp2.send();
 
  
  const xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
 
  for (let index = 0; index < 20; index++) { 
  var hero = this.responseText.split(",")[index];
    if (index == 1) {
      var hero2 = hero.split(":")[1];
      document.getElementById("yourid3").innerHTML = hero2;
    } else { if (index == 2) {
      var hero3 = hero.split(":")[1]
    document.getElementById("yourname3").innerHTML = hero3; 
    } else { if (index == 9) {
      var hero4 = hero.split(":")[2]
    document.getElementById("yourrname3").innerHTML = hero4; 
    
    }
    } 
    }
  }
  document.getElementById("yourimage3").style.visibility = "visible";
  }
  };
  xhttp3.open(
    "GET",
    "https://www.superheroapi.com/api.php/10225351221754467/63",
    true
  );
  xhttp3.send();

  const xhttp4 = new XMLHttpRequest();
  xhttp4.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
 
  for (let index = 0; index < 20; index++) { 
  var hero = this.responseText.split(",")[index];
    if (index == 1) {
      var hero2 = hero.split(":")[1];
      document.getElementById("yourid4").innerHTML = hero2;
    } else { if (index == 2) {
      var hero3 = hero.split(":")[1]
    document.getElementById("yourname4").innerHTML = hero3; 
    } else { if (index == 9) {
      var hero4 = hero.split(":")[2]
    document.getElementById("yourrname4").innerHTML = hero4; 
    
    }
    } 
    }
  }
  document.getElementById("yourimage4").style.visibility = "visible";
  }
  };
  xhttp4.open(
    "GET",
    "https://www.superheroapi.com/api.php/10225351221754467/194",
    true
  );
  xhttp4.send();

  const xhttp5 = new XMLHttpRequest();
  xhttp5.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
 
  for (let index = 0; index < 20; index++) { 
  var hero = this.responseText.split(",")[index];
    if (index == 1) {
      var hero2 = hero.split(":")[1];
      document.getElementById("yourid5").innerHTML = hero2;
    } else { if (index == 2) {
      var hero3 = hero.split(":")[1]
    document.getElementById("yourname5").innerHTML = hero3; 
    } else { if (index == 9) {
      var hero4 = hero.split(":")[2]
    document.getElementById("yourrname5").innerHTML = hero4; 
    
    }
    } 
    }
  }
  document.getElementById("yourimage5").style.visibility = "visible";
  }
  };
  xhttp5.open(
    "GET",
    "https://www.superheroapi.com/api.php/10225351221754467/241",
    true
  );
  xhttp5.send();

  const xhttp6 = new XMLHttpRequest();
    xhttp6.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    for (let index = 0; index < 20; index++) { 
    var hero = this.responseText.split(",")[index];
      if (index == 1) {
        var hero2 = hero.split(":")[1];
        document.getElementById("yourid6").innerHTML = hero2;
      } else { if (index == 2) {
        var hero3 = hero.split(":")[1]
      document.getElementById("yourname6").innerHTML = hero3; 
      } else { if (index == 9) {
        var hero4 = hero.split(":")[2]
      document.getElementById("yourrname6").innerHTML = hero4; 
      } 
      }
    }
    
    }
    document.getElementById("yourimage6").style.visibility = "visible";
      }
    };
    xhttp6.open(
      "GET",
      "https://www.superheroapi.com/api.php/10225351221754467/265",
      true
    );
    xhttp6.send();

    const xhttp7 = new XMLHttpRequest();
    xhttp7.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
   
    for (let index = 0; index < 20; index++) { 
    var hero = this.responseText.split(",")[index];
      if (index == 1) {
        var hero2 = hero.split(":")[1];
        document.getElementById("yourid7").innerHTML = hero2;
      } else { if (index == 2) {
        var hero3 = hero.split(":")[1]
      document.getElementById("yourname7").innerHTML = hero3; 
      } else { if (index == 9) {
        var hero4 = hero.split(":")[2]
      document.getElementById("yourrname7").innerHTML = hero4; 
      
      }
      } 
      }
    }
    document.getElementById("yourimage7").style.visibility = "visible";
    }
    };
    xhttp7.open(
      "GET",
      "https://www.superheroapi.com/api.php/10225351221754467/306	",
      true
    );
    xhttp7.send();
 
  
  const xhttp8 = new XMLHttpRequest();
  xhttp8.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
 
  for (let index = 0; index < 20; index++) { 
  var hero = this.responseText.split(",")[index];
    if (index == 1) {
      var hero2 = hero.split(":")[1];
      document.getElementById("yourid8").innerHTML = hero2;
    } else { if (index == 2) {
      var hero3 = hero.split(":")[1]
    document.getElementById("yourname8").innerHTML = hero3; 
    } else { if (index == 9) {
      var hero4 = hero.split(":")[2]
    document.getElementById("yourrname8").innerHTML = hero4; 
    
    }
    } 
    }
  }
  document.getElementById("yourimage8").style.visibility = "visible";
  }
  };
  xhttp8.open(
    "GET",
    "https://www.superheroapi.com/api.php/10225351221754467/309	",
    true
  );
  xhttp8.send();

  const xhttp9 = new XMLHttpRequest();
  xhttp9.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
 
  for (let index = 0; index < 20; index++) { 
  var hero = this.responseText.split(",")[index];
    if (index == 1) {
      var hero2 = hero.split(":")[1];
      document.getElementById("yourid9").innerHTML = hero2;
    } else { if (index == 2) {
      var hero3 = hero.split(":")[1]
    document.getElementById("yourname9").innerHTML = hero3; 
    } else { if (index == 9) {
      var hero4 = hero.split(":")[2]
    document.getElementById("yourrname9").innerHTML = hero4; 
    
    }
    } 
    }
  }
  document.getElementById("yourimage9").style.visibility = "visible";
  }
  };
  xhttp9.open(
    "GET",
    "https://www.superheroapi.com/api.php/10225351221754467/367",
    true
  );
  xhttp9.send();

  const xhttp0 = new XMLHttpRequest();
  xhttp0.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
 
  for (let index = 0; index < 20; index++) { 
  var hero = this.responseText.split(",")[index];
    if (index == 1) {
      var hero2 = hero.split(":")[1];
      document.getElementById("yourid0").innerHTML = hero2;
    } else { if (index == 2) {
      var hero3 = hero.split(":")[1]
    document.getElementById("yourname0").innerHTML = hero3; 
    } else { if (index == 9) {
      var hero4 = hero.split(":")[2]
    document.getElementById("yourrname0").innerHTML = hero4; 
    
    }
    } 
    }
  }
  document.getElementById("yourimage0").style.visibility = "visible";
  }
  };
  xhttp0.open(
    "GET",
    "https://www.superheroapi.com/api.php/10225351221754467/542",
    true
  );
  xhttp0.send();
}
window.onload=function () {
    loadXMLDoc();
  };
  