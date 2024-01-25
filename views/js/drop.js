 //Rice
 function riceDrop() {
    if(document.getElementById("riceDiv").style.display=="block"){
      document.getElementById("riceDiv").style.display = "none";
      document.getElementById("riceDrop").innerHTML = "  &#9660;";
  
      }else{
      document.getElementById("riceDiv").style.display = "block";
      document.getElementById("ingredientsDiv").style.display = "none";
      document.getElementById("dhalDiv").style.display = "none";
      document.getElementById("oilDiv").style.display = "none";
      document.getElementById("spicesDiv").style.display = "none";
      document.getElementById("dryfruitsDiv").style.display = "none";
      document.getElementById("riceDrop").innerHTML = "  &#9650;";
      }
    }
    //Ing
    function ingredientsDrop() {
    if(document.getElementById("ingredientsDiv").style.display=="block"){
      document.getElementById("ingredientsDiv").style.display = "none";
      document.getElementById("ingredientsDrop").innerHTML = "  &#9660;";
  
      }else{
      document.getElementById("ingredientsDiv").style.display = "block";
      document.getElementById("riceDiv").style.display = "none";
      document.getElementById("dhalDiv").style.display = "none";
      document.getElementById("oilDiv").style.display = "none";
      document.getElementById("spicesDiv").style.display = "none";
      document.getElementById("dryfruitsDiv").style.display = "none";
      document.getElementById("ingredientsDrop").innerHTML = "  &#9650;";
      }
    }
    //dhal
    function dhalDrop() {
    if(document.getElementById("dhalDiv").style.display=="block"){
      document.getElementById("dhalDiv").style.display = "none";
      document.getElementById("dhalDrop").innerHTML = "  &#9660;";
  
      }else{
      document.getElementById("dhalDiv").style.display = "block";
      document.getElementById("riceDiv").style.display = "none";
      document.getElementById("ingredientsDiv").style.display = "none";
      document.getElementById("oilDiv").style.display = "none";
      document.getElementById("spicesDiv").style.display = "none";
      document.getElementById("dryfruitsDiv").style.display = "none";
      document.getElementById("dhalDrop").innerHTML = "  &#9650;";
      }
    }
    //oil
    function oilDrop() {
    if(document.getElementById("oilDiv").style.display=="block"){
      document.getElementById("oilDiv").style.display = "none";
      document.getElementById("oilDrop").innerHTML = "  &#9660;";
  
      }else{
      document.getElementById("oilDiv").style.display = "block";
      document.getElementById("riceDiv").style.display = "none";
      document.getElementById("ingredientsDiv").style.display = "none";
      document.getElementById("dhalDiv").style.display = "none";
      document.getElementById("spicesDiv").style.display = "none";
      document.getElementById("dryfruitsDiv").style.display = "none";
      document.getElementById("oilDrop").innerHTML = "  &#9650;";
      }
    }
    //spices
    function spicesDrop() {
    if(document.getElementById("spicesDiv").style.display=="block"){
      document.getElementById("spicesDiv").style.display = "none";
      document.getElementById("spicesDrop").innerHTML = "  &#9660;";
  
      }else{
      document.getElementById("spicesDiv").style.display = "block";
      document.getElementById("riceDiv").style.display = "none";
      document.getElementById("ingredientsDiv").style.display = "none";
      document.getElementById("dhalDiv").style.display = "none";
      document.getElementById("oilDiv").style.display = "none";
      document.getElementById("dryfruitsDiv").style.display = "none";
      document.getElementById("spicesDrop").innerHTML = "  &#9650;";
      }
    }
    //dryfruits
    function dryfruitsDrop() {
    if(document.getElementById("dryfruitsDiv").style.display=="block"){
      document.getElementById("dryfruitsDiv").style.display = "none";
      document.getElementById("dryfruitsDrop").innerHTML = "  &#9660;";
  
      }else{
      document.getElementById("dryfruitsDiv").style.display = "block";
      document.getElementById("riceDiv").style.display = "none";
      document.getElementById("ingredientsDiv").style.display = "none";
      document.getElementById("dhalDiv").style.display = "none";
      document.getElementById("oilDiv").style.display = "none";
      document.getElementById("spicesDiv").style.display = "none";
      document.getElementById("dryfruitsDrop").innerHTML = "  &#9650;";
      }
    }