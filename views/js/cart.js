 // -----------------for-Shopping-cart-------------
 $(document).ready(function() {
 
  $.getJSON('json/Data.json', function(data) {
    //console.log(data);
    
    var content = '<tbody>';
    var resData=data.ProductList;
    let listItems = sessionStorage.getItem("ItemList");
    const split_string = listItems.split(",");
    for (k=0; k<split_string.length; k++) {
         for(i=0; i<resData.length; i++){
          if(split_string[k]==resData[i].Id){
            content += '<tr><td><div class="product-img"><div class="img-prdct"><img src="';
             content += resData[i].ImgUrl;
             content +='"/></div></div></td><td><p>';
             content +=resData[i].Products;
             content +='</p></br><p>';
             content +=resData[i].Products_Desc;
             content +='</p></td><td><div class="button-container"><select class="qty" name="qty" id="qty" onchange="update_amounts()">'
             for(j=0; j<resData[i].Quantity.length; j++){
             content += '<option value="'+resData[i].Quantity[j]+'">'+resData[i].Quantity[j]+' '+resData[i].Weight+'</option>';
             }
             content += '</select></div></td><td><input type="text" value="';
             content +=resData[i].Price;
             content +='" class="price form-control" disabled></td><td align="right">₹ <span id="amount" class="amount">';
             content +=resData[i].Price;
             content +='</span></td></tr>';
            }
            }
         }
         content +='</tbody> <tfoot><tr><td colspan="4"></td><td align="right"><strong>TOTAL  :  ₹ <span id="total" ;="" class="total">0</span></strong></td></tr></tfoot>';

         $('#myTable').append(content);
         update_amounts();
 });
 update_amounts();
  $('.qty, .price').on('keyup keypress blur change', function(e) {
    update_amounts();
  });
});

function update_amounts() {
  var sum = 0.0;
  $('#myTable > tbody  > tr').each(function() {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val();
    var amount = qty * price;
    sum += amount;
    $(this).find('.amount').text('' + amount);
  });
  $('.total').text(sum);
}
//-----------------------
var select = $('.qty');
var selectButton = select.click(function() {
  update_amounts();
});
