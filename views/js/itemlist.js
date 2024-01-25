$(document).ready(function() {
 
    $.getJSON('json/Data.json', function(data) {
      console.log(data);
      var resData=data.ProductList;
      var content = ' <div id="oecell11" class="OECell"><p><b>அரிசி வகைகள்</b></p><p><b>Types of rice</b><i id="riceDrop" onclick="riceDrop()">  &#9650;</i></p><div id="riceDiv" class="riceDiv" style="display: block;">';
           for(i=0; i<resData.length; i++){
		   if(resData[i].Type=='Rice'){
			 content += '<input type="checkbox" value="'+ resData[i].Id+'"><label>'+ resData[i].Products+'</label><br><label > '+ resData[i].Products_Desc+'</label><br> <br>';
		   }}
              content += '</div></div><div id="oecell12" class="OECell"> <p><b>தேவையான பொருட்கள்</b></p><p><b>Ingredients</b><i id="ingredientsDrop" onclick="ingredientsDrop()">  &#9650;</i></p><div id="ingredientsDiv" class="ingredientsDiv" style="display: block;"> ';
			  
              for(i=0; i<resData.length; i++){
                if(resData[i].Type=='Ingredients'){
                content += '<input type="checkbox" value="'+ resData[i].Id+'"><label>'+ resData[i].Products+'</label><br><label > '+ resData[i].Products_Desc+'</label><br> <br>';
                }}
                       content += '</div></div><div id="oecell13" class="OECell"><p><b>பருப்பு வகைகள்</b></p><p><b>Dhal Types</b><i id="dhalDrop" onclick="dhalDrop()">  &#9650;</i></p><div id="dhalDiv" class="dhalDiv" style="display: block;">';
                for(i=0; i<resData.length; i++){
                    if(resData[i].Type=='Dhal'){
                        content += '<input type="checkbox" value="'+ resData[i].Id+'"><label>'+ resData[i].Products+'</label><br><label > '+ resData[i].Products_Desc+'</label><br> <br>';
                        }}
                               content += '</div></div><div id="oecell14" class="OECell"><p><b>எண்ணெய் வகைகள்</b></p><p><b>Oil types</b><i id="oilDrop" onclick="oilDrop()">  &#9650;</i></p><div id="oilDiv" class="oilDiv" style="display: block;">';
                for(i=0; i<resData.length; i++){
                    if(resData[i].Type=='Oil'){
                     content += '<input type="checkbox" value="'+ resData[i].Id+'"><label>'+ resData[i].Products+'</label><br><label > '+ resData[i].Products_Desc+'</label><br> <br>';
                      }}
                      content += '</div></div><div id="oecell15" class="OECell"><p><b>மசாலா</b></p><p><b>Spices and other grocery</b><i id="spicesDrop" onclick="spicesDrop()">  &#9650;</i></p><div id="spicesDiv" class="spicesDiv" style="display: block;">';
                for(i=0; i<resData.length; i++){
                  if(resData[i].Type=='Spices'){
                    content += '<input type="checkbox" value="'+ resData[i].Id+'"><label>'+ resData[i].Products+'</label><br><label > '+ resData[i].Products_Desc+'</label><br> <br>';
                    }}
                    content += '</div></div><div id="oecell16" class="OECell"><p><b>உலர் பழங்கள்</b></p><p><b>Dry fruits</b><i id="dryfruitsDrop" onclick="dryfruitsDrop()">  &#9650;</i></p><div id="dryfruitsDiv" class="dryfruitsDiv" style="display: block;">';
              for(i=0; i<resData.length; i++){
                if(resData[i].Type=='DryFruits'){
                  content += '<input type="checkbox" value="'+ resData[i].Id+'"><label>'+ resData[i].Products+'</label><br><label > '+ resData[i].Products_Desc+'</label><br> <br>';
                  }}
                  content += '</div></div><div id="oecell17" class="OECell"><p><b>உலர் பழங்கள்</b></p><p><b>Dry fruits</b><i id="riceDrop" onclick="riceDrop()">  &#9650;</i></p><div id="riceDiv" class="riceDiv" style="display: block;"></div></div>';
                                                      
           $('#oepanel').append(content);
   });
  });