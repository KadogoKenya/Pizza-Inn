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
   let pname = $(".name option:selected").val();
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
          crust_price = 200;
        break;
        case "Stuffed":
          crust_price = 250;
        break;
        case "Gluten-free":
          crust_price = 180;
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
      else{
        $("button.proceed").hide();
        $("#info").hide();
        $("div.choice").slideDown(1000);
      }
  
      total = price + crust_price + topping_value;
      console.log(total);
      let checkoutTotal =0;
      checkoutTotal = checkoutTotal + total;


      $("button#checkout").click(function(){ 
         $("button#checkout").hide();
         $("button.addPizza").hide();
         $("button.deliver").slideDown(1000);
         $("#addedprice").slideDown(1000);
         console.log("Your total bills is sh. "+checkoutTotal);
         $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
       });
      });
   })   