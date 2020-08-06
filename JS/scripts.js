function getConfirmation() {

var retVal = confirm("Do you want to continue ?");
if( retVal == true ) {
  let backele=document.getElementById("#meals")
//    document.write ("User wants to continue!");
  return backele;

} else {
  document.write ("User does not want to continue!");
  return false;
}
}
function Deliver(){
let chargesP=confirm("Do you want to continue?")
if(chargesP==true){
let deliveryPrices=window.prompt("enter the place to be delivered", 500);
alert('your order will be delivered to your location at shifting fee  of 500')
return deliveryPrices;
}
else{
  alert("No item to be delivered")
}
}



var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
this.name = name;
this.size = size;
this.crust = crust;
this.topping = topping;
this.total = total;
}
$(document).ready(function(){
$("button.proceed").click(function(event){
//  let pname = $(".name option:selected").val();
let psize = $("#size option:selected").val();
let pcrust = $("#crust option:selected").val();
let ptopping = [];
$.each($("input[name='toppings']:checked"), function(){            
  ptopping.push($(this).val());
});
console.log(ptopping.join(", "));



switch(psize){
case "0":
  price =0;
break;
case "large":
    price = 1500;
    console.log(price);
  break;
  case "medium":
    price = 100;
    console.log("The price is "+price);
  break;
  case "small":
    price = 800;
    console.log(price);
  default:
    console.log("error"); 
}
switch(pcrust){
  case "0":
    crust_price = 0;
  break;
  case "Crispy":
    crust_price = 150;
  break;
  case "Stuffed":
    crust_price = 100;
  break;
  case "Gluten-free":
    crust_price = 200;
  break;
  default:
    console.log("No price"); 
}
let topping_value = ptopping.length*50;
console.log("toppins value" + topping_value);

if((psize == "0") && (pcrust == "0")){
  console.log("nothing selected");
  $("button.proceed").show();
  $("#info").show();
  $("div.choice").hide();
  alert("Hungry peep please select pizza size and crust"); 
}
// else{
//   $("button.proceed").hide();
//   $("#info").hide();
//   $("div.choice").slideDown(1000);
// }

total = price + crust_price + topping_value;
console.log(total);
let checkoutTotal =0;
checkoutTotal = checkoutTotal + total;


$("#checkout").click(function(){ 
  //  $("button#checkout").hide();
  //  $("button.addPizza").hide();
  //  $("button.deliver").slideDown(1000);
  //  $("#addedprice").slideDown(1000);
    console.log("Your total bills is sh. "+checkoutTotal);
    $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
  });
});
})   


//business logic
"use strict";
let pizzaPricesIDs = [];
let pizzaCards = [];
let addToBasketBtns = [];
let viewBasket = [];
let addToBasket = [];
let msubs = [];
let pCrust = '';
let pTopping = '';
let pSize = '';
let i = 0;
let crustPrice = {
onSmallSize: {
  Crispy: [150, 200, 320, 550, 200, 400, 390, 390],
  Stuffed: [160, 240, 370, 570, 240, 400, 410, 450],
  GlutterFree: [170, 230, 370, 570, 204, 440, 410, 440]
},
onMediumSize: {
  Crispy: [170, 270, 380, 650, 250, 470, 490, 450],
  Stuffed: [180, 280, 410, 650, 260, 470, 490, 450],
  GlutterFree: [170, 270, 380, 650, 250, 470, 490, 450]
},
onLargeSize: {
  Crispy: [190, 290, 410, 750, 300, 480, 490, 490],
  Stuffed: [190, 290, 410, 750, 300, 480, 490, 510],
  GlutterFree: [190, 290, 410, 750, 300, 480, 490, 520]
}
};


let toppingPrice = {
onSmallSize: {
  Pepperoni: [150, 200, 320, 550, 200, 400, 390, 390],
  Onion: [160, 240, 370, 570, 240, 400, 410, 450],
  Bacon: [170, 230, 370, 570, 204, 440, 410, 440]
},
onMediumSize: {
  Pepperoni: [170, 270, 380, 650, 250, 470, 490, 450],
  Onion: [180, 280, 410, 650, 260, 470, 490, 450],
  Bacon: [170, 270, 380, 650, 250, 470, 490, 450]
},
onLargeSize: {
  Pepperoni: [190, 290, 410, 750, 300, 480, 490, 490],
  Onion: [190, 290, 410, 750, 300, 480, 490, 510],
  Bacon: [200, 300, 420, 770, 320, 490, 500, 530]
}
};
let sizePrice = {
smallSize: [730, 1200, 1320, 950, 1000, 1700, 1390, 1790],
mediumSize: [900, 1300, 1720, 1250, 1400, 2200, 1690, 2090],
largeSize: [1700, 2400, 2320, 1950, 1700, 2800, 2390, 2790]
}


let UserChoice = function (size, crust, topping) {
this.size = size;
this.crust = crust;
this.topping = topping;

}
//user interface logic
$(document).ready(function () {
$('#pizza01').mouseenter(function () {
  $('#btnpizza01').show('slow');
  $('.badge01').show('slow');

}).mouseleave(function () {
  $('#btnpizza01').hide('slow');
  $('.badge01').hide('slow');

});
$('#pizza02').mouseenter(function () {
  $('#btnpizza02').show('slow');
  $('.badge02').show('slow');

}).mouseleave(function () {
  $('#btnpizza02').hide('slow');
  $('.badge02').hide('slow');

});
$('#pizza03').mouseenter(function () {

  $('#btnpizza03').show('slow');
  $('.badge03').show('slow');

}).mouseleave(function () {

  $('#btnpizza03').hide('slow');
  $('.badge03').hide('slow');

});
$('#pizza04').mouseenter(function () {

  $('#btnpizza04').show('slow');
  $('.badge04').show('slow');

}).mouseleave(function () {

  $('#btnpizza04').hide('slow');
  $('.badge04').hide('slow');

});
$('#pizza05').mouseenter(function () {

  $('#btnpizza05').show('slow');
  $('.badge05').show('slow');

}).mouseleave(function () {

  $('#btnpizza05').hide('slow');
  $('.badge05').hide('slow');

});
$('#pizza06').mouseenter(function () {
  $('#btnpizza06').show('slow');
  $('.badge06').show('slow');

}).mouseleave(function () {
  $('#btnpizza06').hide('slow');
  $('.badge06').hide('slow');

});
$('#pizza07').mouseenter(function () {

  $('#btnpizza07').show('slow');
  $('.badge07').show('slow');

}).mouseleave(function () {

  $('#btnpizza07').hide('slow');
  $('.badge07').hide('slow');

});
$('#pizza08').mouseenter(function () {
  $('#btnpizza08').show('slow');
  $('.badge08').show('slow');
}).mouseleave(function () {
  $('#btnpizza08').hide('slow');
  $('.badge08').hide('slow');

});

$("h5.card-title").find("span.pprice").each(function () {

  pizzaPricesIDs.push(this.id);
});

$(".pizzas").find(".card").each(function () {

  pizzaCards.push(this.id);
});



for (let j = 0; j < pizzaCards.length; j++) {
  $('#' + pizzaCards[j]).mouseenter(function () {
      if ($('#' + pizzaCards[j] + ':hover').length > 0) {
          $('#' + pizzaCards[j]).find('#pizza-size').change(function () {
              pSize = $(this).val();
              for (i = 0; i < pizzaPricesIDs.length; i++) {
                  switch (pSize) {
                      case 'Small':
                          $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]);
                          $('#' + pizzaCards[j]).find('#pizza-crust').change(function () {
                              pCrust = $(this).val();
                              for (i = 0; i < pizzaPricesIDs.length; i++) {
                                  switch (pCrust) {
                                      case 'Crispy':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.smallSize[i] +
                                                  crustPrice.onSmallSize.Crispy[i]);
                                          break;
                                      case 'Stuffed':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.smallSize[i] +
                                                  crustPrice.onSmallSize.Stuffed[i]);
                                          break;
                                      case 'GlutterFree':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.smallSize[i] +
                                                  crustPrice.onSmallSize.GlutterFree[i]);
                                          break;
                                      default:
                                          // $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]+crustPrice.onSmallSize.Crispy[i]);
                                          break;
                                  }
                              }

                          });
                          $('#' + pizzaCards[j]).find('#pizza-topping').change(function () {
                              pTopping = $(this).val();
                              for (i = 0; i < pizzaPricesIDs.length; i++) {
                                  switch (pTopping) {
                                      case 'Pepperoni':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.smallSize[i] +
                                                  crustPrice.onSmallSize.Crispy[i] +
                                                  toppingPrice.onSmallSize.Pepperoni[i]);
                                          break;
                                      case 'Onion':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.smallSize[i] +
                                                  crustPrice.onSmallSize.Stuffed[i] +
                                                  toppingPrice.onSmallSize.Onion[i]);
                                          break;
                                      case 'Bacon':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.smallSize[i] +
                                                  crustPrice.onSmallSize.GlutterFree[i] +
                                                  toppingPrice.onSmallSize.Bacon[i]);
                                          break;
                                      default:
                                          // $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]+crustPrice.onSmallSize.Crispy[i]);
                                          break;
                                  }
                              }
                          });
                          break;
                      case 'Medium':
                          $('#' + pizzaPricesIDs[i]).text(sizePrice.mediumSize[i]);
                          $('#' + pizzaCards[j]).find('#pizza-crust').change(function () {
                              pCrust = $(this).val();
                              for (i = 0; i < pizzaPricesIDs.length; i++) {
                                  switch (pCrust) {
                                      case 'Crispy':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.mediumSize[i] +
                                                  crustPrice.onMediumSize.Crispy[i]);
                                          break;
                                      case 'Stuffed':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.mediumSize[i] +
                                                  crustPrice.onMediumSize.Stuffed[i]);
                                          break;
                                      case 'GlutterFree':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.mediumSize[i] +
                                                  crustPrice.onMediumSize.GlutterFree[i]);
                                          break;
                                      default:
                                          // $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]+crustPrice.onSmallSize.Crispy[i]);
                                          break;
                                  }
                              }

                          });
                          $('#' + pizzaCards[j]).find('#pizza-topping').change(function () {
                              pTopping = $(this).val();
                              for (i = 0; i < pizzaPricesIDs.length; i++) {
                                  switch (pTopping) {
                                      case 'Pepperoni':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.mediumSize[i] +
                                                  crustPrice.onMediumSize.Crispy[i] +
                                                  toppingPrice.onMediumSize.Pepperoni[i]);
                                          break;
                                      case 'Onion':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.mediumSize[i] +
                                                  crustPrice.onMediumSize.Stuffed[i] +
                                                  toppingPrice.onMediumSize.Onion[i]);
                                          break;
                                      case 'Bacon':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.mediumSize[i] +
                                                  crustPrice.onMediumSize.GlutterFree[i] +
                                                  toppingPrice.onMediumSize.Bacon[i]);
                                          break;
                                      default:
                                          // $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]+crustPrice.onSmallSize.Crispy[i]);
                                          break;
                                  }
                              }
                          });
                          break;
                      case 'Large':
                          $('#' + pizzaPricesIDs[i]).text(sizePrice.largeSize[i]);
                          $('#' + pizzaCards[j]).find('#pizza-crust').change(function () {
                              pCrust = $(this).val();
                              for (i = 0; i < pizzaPricesIDs.length; i++) {
                                  switch (pCrust) {
                                      case 'Crispy':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.largeSize[i] +
                                                  crustPrice.onLargeSize.Crispy[i]);
                                          break;
                                      case 'Stuffed':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.largeSize[i] +
                                                  crustPrice.onLargeSize.Stuffed[i]);
                                          break;
                                      case 'GlutterFree':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.largeSize[i] +
                                                  crustPrice.onLargeSize.GlutterFree[i]);
                                          break;
                                      default:
                                          // $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]+crustPrice.onSmallSize.Crispy[i]);
                                          break;
                                  }
                              }

                          });
                          $('#' + pizzaCards[j]).find('#pizza-topping').change(function () {
                              pTopping = $(this).val();
                              for (i = 0; i < pizzaPricesIDs.length; i++) {
                                  switch (pTopping) {
                                      case 'Pepperoni':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.largeSize[i] +
                                                  crustPrice.onLargeSize.Crispy[i] +
                                                  toppingPrice.onLargeSize.Pepperoni[i]);
                                          break;
                                      case 'Onion':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.largeSize[i] +
                                                  crustPrice.onLargeSize.Stuffed[i] +
                                                  toppingPrice.onLargeSize.Onion[i]);
                                          break;
                                      case 'Bacon':
                                          $('#' + pizzaPricesIDs[i])
                                              .text(sizePrice.largeSize[i] +
                                                  crustPrice.onLargeSize.GlutterFree[i] +
                                                  toppingPrice.onLargeSize.Bacon[i]);
                                          break;
                                      default:
                                          // $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]+crustPrice.onSmallSize.Crispy[i]);
                                          break;
                                  }
                              }
                          });

                          break;
                      default:
                          $('#' + pizzaPricesIDs[i]).text(sizePrice.smallSize[i]);
                          break;
                  }
              }

          });
      }

  });
}
$('input[name="choice"]').change(function () {
  if ($(this).is(':checked') && $(this).val() == 'yes') {
      $('#deliveryModal').modal('show');

      $('#deliver-order').click(function () {
          let deliveryLocation = $('#location-text').val();
          // alert(deliveryLocation)
          $('#note-text').text(deliveryLocation);
          $('.deliveyChoice').hide('slow');
          $('#note').show('slow');
          $('#ifDelivered').show('slow');
          $('#dev').show('slow')
      });
  } else {
      $('.deliveyChoice').hide('slow');
      // $('#ifDelivered').show('slow');
  }
});
$('#backspace').click(function () {
  $('#pizza_pricing').show(2500);
  $('#pizza_basket').hide(2500);

});
$('#checkout').click(function(){
  $('#pizza_basket').hide("slow")
  $('.method').show("slow");
})

$('.payments').click(function(){
  alert("Your payments have been received.");
  $('#pizza_pricing').show(2500);
  $('#checkout').hide("slow")
  $('.method').hide("slow") 
})

$(".card-body").find("button.view-basket").each(function () {

  viewBasket.push(this.id);

});

viewBasket.forEach(function (viewBtn) {
  $('#' + viewBtn).click(function () {
      $('#pizza_basket').show(2500);
;
      $('#pizza_pricing').hide(2500);

  })
})
$(".card-body").find("button.pizzabtn").each(function () {

  addToBasket.push(this.id);

});
let newUserChoice = new UserChoice(pSize, pCrust, pTopping);



pizzaPricesIDs.forEach(function (pizzaPricesID) {
  addToBasket.forEach(function (addPizza, index) {
      function addRows() {
          $("#dev").before('<tr class="table-info">' +
              '<th scope="row">&#128717;</th>' +
              '<td>' + $("#pizza02name").text() + '</td>' +
              '<td>' + pSize + '</td>' +
              '<td>' + pCrust + '</td>' +
              '<td>' + pTopping + '</td>' +
              '<td>1  X</td>' +
              '<td class="sub" id="subTotal">' + $('#' + pizzaPricesID).text() + '</td>' +
              '</tr>');


              let grandTotal = 0;
              let deliveryCost = Number($('#delcost').text());
              $('.table-info').find('.sub').each(function () {
                  let stval = Number($(this).text());
                  grandTotal += isNaN(stval) ? 0 : stval + deliveryCost;

              });
              
              if($("#total").length == 0) {
              $("#dev").after(
                  '<tr id="total">' +
                  '<th scope="row">Grant Total Amount</th>' +
                  '<td>---</td>' +
                  '<td>---</td>' +
                  '<td>---</td>' +
                  '<td>---</td>' +
                  '<td>---</td>' +
                  '<td><strong><span id="pizzaTotalPrice">' + grandTotal.toFixed(2) + '</span></strong></td>' +
                  '</tr>'
              );
              $('#total').show();
          }else{
              $('#total').find("#pizzaTotalPrice").text(grandTotal.toFixed(2));
          
              $('#total').show();
          }
          
          

      }

      switch (index) {
          case 0:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza01price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza01alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza01alert').hide('slow');
                      });

                  }
              });
              break;
          case 1:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza02price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza02alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza02alert').hide('slow');
                      });


                  }


              });
              break;
          case 2:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza03price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza03alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza03alert').hide('slow');
                      });


                  }
              });

              break;
          case 3:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza04price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza04alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza04alert').hide('slow');
                      });


                  }
              });
              break;
          case 4:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza05price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza05alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza05alert').hide('slow');
                      });


                  }
              });
              break;
          case 5:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza06price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza06alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza06alert').hide('slow');
                      });


                  }
              });
              break;
          case 6:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza07price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza07alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza07alert').hide('slow');
                      });


                  }
              });
              break;
          case 7:
              $('#' + addPizza).click(function () {
                  if (pizzaPricesID !== 'pizza08price') {
                      return;
                  } else {
                      addRows();
                      $('#pizza08alert').show('slow');

                      $(".msucess-alert").delay(1500).slideUp('slow', function () {

                          $('#pizza08alert').hide('slow');
                      });


                  }
              });
              break;
          default:
              alert("Cant find price of that pizza")
              break
      }


  });

});

$('#contact_us').click(function(){
$('#contactModal').modal('show');
})

$('#send_message').click(function(){
alert("We have received your message "+$('#uname').val() +".  We will get back to you as soon as possible");
})




});
